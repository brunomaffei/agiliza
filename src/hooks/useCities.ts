import { useState, useEffect } from 'react';

export interface City {
  id: number;
  nome: string;
  microrregiao: {
    id: number;
    nome: string;
    mesorregiao: {
      id: number;
      nome: string;
      UF: {
        id: number;
        sigla: string;
        nome: string;
        regiao: {
          id: number;
          sigla: string;
          nome: string;
        };
      };
    };
  };
}

export const useCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios');
        if (!response.ok) {
          throw new Error('Erro ao buscar cidades');
        }
        const data: City[] = await response.json();
        setCities(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const searchCities = (inputValue: string) => {
    if (!inputValue) return [];

    return cities
      .filter(city =>
        city.nome.toLowerCase().includes(inputValue.toLowerCase())
      )
      .slice(0, 50) // Limitar resultados para performance
      .map(city => ({
        value: city.id,
        label: city.nome,
        city: city
      }));
  };

  return { cities, loading, error, searchCities };
};