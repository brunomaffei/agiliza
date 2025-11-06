import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Truck, Package, Weight, Route, ArrowLeftRight, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import AsyncSelect from 'react-select/async';
import { useCities, City } from "@/hooks/useCities";
import { calculateCityDistance } from "@/utils/distance";

interface CityOption {
  value: number;
  label: string;
  city: City;
}

type TripType = "one-way" | "round-trip";

const QuoteForm = () => {
  const [origin, setOrigin] = useState<CityOption | null>(null);
  const [destination, setDestination] = useState<CityOption | null>(null);
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [distance, setDistance] = useState<number | null>(null);
  const [calculatingDistance, setCalculatingDistance] = useState(false);
  const { searchCities, loading: citiesLoading } = useCities();

  // Calcula a distância quando origem e destino são selecionados
  useEffect(() => {
    const calculateDistance = async () => {
      if (origin && destination) {
        setCalculatingDistance(true);
        try {
          const dist = await calculateCityDistance(
            origin.city.nome,
            origin.city.microrregiao.mesorregiao.UF.sigla,
            destination.city.nome,
            destination.city.microrregiao.mesorregiao.UF.sigla
          );
          setDistance(dist);
        } catch (error) {
          console.error('Erro ao calcular distância:', error);
          setDistance(null);
        } finally {
          setCalculatingDistance(false);
        }
      } else {
        setDistance(null);
      }
    };

    calculateDistance();
  }, [origin, destination]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!origin || !destination || !description.trim()) {
      toast.error("Por favor, preencha origem, destino e descrição da mercadoria");
      return;
    }

    // Validate input length
    if (description.length > 500) {
      toast.error("Por favor, verifique o tamanho dos campos");
      return;
    }

    // Build message - WhatsApp API handles text formatting
    const tripTypeLabel = tripType === "one-way" ? "Só Ida" : "Ida e Volta";
    const totalDistance = tripType === "round-trip" && distance ? distance * 2 : distance;

    let message = `Olá! Gostaria de solicitar um orçamento de frete.

*Origem:* ${origin.label}
*Destino:* ${destination.label}
*Tipo:* ${tripTypeLabel}`;

    if (totalDistance) {
      message += `
*Distância Total:* ${totalDistance} km`;
      if (tripType === "round-trip" && distance) {
        message += ` (${distance} km cada trecho)`;
      }
    }

    message += `
*Descrição:* ${description}`;

    if (weight.trim()) {
      message += `
*Peso:* ${weight}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "5514998495842";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecionando para WhatsApp...");
  };

  const loadOptions = async (inputValue: string): Promise<CityOption[]> => {
    // Debounce
    await new Promise(resolve => setTimeout(resolve, 300));
    return searchCities(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4 md:space-y-5">
      <div className="space-y-3 md:space-y-4">
        <div className="space-y-2">
          <Label htmlFor="origin" className="text-base md:text-lg font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            Origem
          </Label>
          <AsyncSelect
            id="origin"
            placeholder="Digite a cidade de origem..."
            value={origin}
            onChange={setOrigin}
            loadOptions={loadOptions}
            isLoading={citiesLoading}
            className="text-base md:text-lg"
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '48px',
                height: 'auto',
                fontSize: '16px',
                '@media (min-width: 768px)': {
                  minHeight: '56px',
                  fontSize: '18px',
                },
              }),
              placeholder: (base) => ({
                ...base,
                fontSize: '16px',
              }),
              singleValue: (base) => ({
                ...base,
                fontSize: '16px',
              }),
              option: (base) => ({
                ...base,
                fontSize: '15px',
              }),
            }}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination" className="text-base md:text-lg font-medium flex items-center gap-2">
            <Truck className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            Destino
          </Label>
          <AsyncSelect
            id="destination"
            placeholder="Digite a cidade de destino..."
            value={destination}
            onChange={setDestination}
            loadOptions={loadOptions}
            isLoading={citiesLoading}
            className="text-base md:text-lg"
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '48px',
                height: 'auto',
                fontSize: '16px',
              }),
              placeholder: (base) => ({
                ...base,
                fontSize: '16px',
              }),
              singleValue: (base) => ({
                ...base,
                fontSize: '16px',
              }),
              option: (base) => ({
                ...base,
                fontSize: '15px',
              }),
            }}
            required
          />
        </div>

        {/* Tipo de Frete */}
        <div className="space-y-2">
          <Label className="text-base md:text-lg font-medium">
            Tipo de Frete
          </Label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTripType("one-way")}
              className={`flex items-center justify-center gap-2 p-3 md:p-4 rounded-lg border-2 transition-all ${
                tripType === "one-way"
                  ? "border-primary bg-primary/10 text-primary font-semibold"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Só Ida</span>
            </button>
            <button
              type="button"
              onClick={() => setTripType("round-trip")}
              className={`flex items-center justify-center gap-2 p-3 md:p-4 rounded-lg border-2 transition-all ${
                tripType === "round-trip"
                  ? "border-primary bg-primary/10 text-primary font-semibold"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            >
              <ArrowLeftRight className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Ida e Volta</span>
            </button>
          </div>
        </div>

        {/* Exibição da Distância */}
        {(distance !== null || calculatingDistance) && (
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 md:p-4">
            <div className="flex items-center gap-2 text-primary">
              <Route className="w-5 h-5 md:w-6 md:h-6" />
              <div className="flex-1">
                <p className="text-sm md:text-base font-semibold">
                  Distância estimada
                </p>
                {calculatingDistance ? (
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Calculando...
                  </p>
                ) : distance ? (
                  <div>
                    <p className="text-lg md:text-xl font-bold">
                      {tripType === "round-trip" ? distance * 2 : distance} km
                    </p>
                    {tripType === "round-trip" && (
                      <p className="text-xs md:text-sm text-muted-foreground">
                        ({distance} km cada trecho)
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Não foi possível calcular
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="description" className="text-base md:text-lg font-medium flex items-center gap-2">
            <Package className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            Descrição da Mercadoria
          </Label>
          <Textarea
            id="description"
            placeholder="Ex: Móveis, eletrodomésticos..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-20 md:min-h-24 text-base md:text-lg resize-none"
            maxLength={500}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight" className="text-base md:text-lg font-medium flex items-center gap-2">
            <Weight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
            Peso Aproximado (opcional)
          </Label>
          <Input
            id="weight"
            type="text"
            placeholder="Ex: 500 kg, 1 tonelada..."
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="h-12 md:h-14 text-base md:text-lg"
            maxLength={50}
          />
          <p className="text-xs md:text-sm text-muted-foreground">
            Se não souber o peso exato, não tem problema. Nos informe na descrição.
          </p>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full h-12 md:h-14 text-base md:text-lg font-semibold"
      >
        Solicitar Orçamento via WhatsApp
      </Button>
    </form>
  );
};

export default QuoteForm;
