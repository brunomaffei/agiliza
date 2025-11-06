/**
 * Calcula a distância entre duas coordenadas geográficas usando a fórmula de Haversine
 * @param lat1 Latitude do ponto 1
 * @param lon1 Longitude do ponto 1
 * @param lat2 Latitude do ponto 2
 * @param lon2 Longitude do ponto 2
 * @returns Distância em quilômetros
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Raio da Terra em km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.round(distance);
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Busca as coordenadas de uma cidade brasileira usando a API do Nominatim (OpenStreetMap)
 * @param cityName Nome da cidade
 * @param state Sigla do estado
 * @returns Coordenadas ou null se não encontrado
 */
export async function getCityCoordinates(
  cityName: string,
  state: string
): Promise<{ lat: number; lon: number } | null> {
  try {
    const query = encodeURIComponent(`${cityName}, ${state}, Brasil`);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`,
      {
        headers: {
          'User-Agent': 'Agiliza-Frete-App',
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      };
    }

    return null;
  } catch (error) {
    console.error('Erro ao buscar coordenadas:', error);
    return null;
  }
}

/**
 * Calcula a distância entre duas cidades brasileiras
 * @param city1 Nome da primeira cidade
 * @param state1 Sigla do primeiro estado
 * @param city2 Nome da segunda cidade
 * @param state2 Sigla do segundo estado
 * @returns Distância em km ou null se erro
 */
export async function calculateCityDistance(
  city1: string,
  state1: string,
  city2: string,
  state2: string
): Promise<number | null> {
  try {
    const [coords1, coords2] = await Promise.all([
      getCityCoordinates(city1, state1),
      getCityCoordinates(city2, state2),
    ]);

    if (!coords1 || !coords2) {
      return null;
    }

    return calculateDistance(coords1.lat, coords1.lon, coords2.lat, coords2.lon);
  } catch (error) {
    console.error('Erro ao calcular distância:', error);
    return null;
  }
}
