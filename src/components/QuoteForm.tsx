import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Truck, Package, Weight } from "lucide-react";
import { toast } from "sonner";

const QuoteForm = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!origin.trim() || !destination.trim() || !description.trim()) {
      toast.error("Por favor, preencha origem, destino e descrição da mercadoria");
      return;
    }

    // Validate input length
    if (origin.length > 200 || destination.length > 200 || description.length > 500) {
      toast.error("Por favor, verifique o tamanho dos campos");
      return;
    }

    let message = `Olá! Gostaria de solicitar um orçamento de frete.\n\n📍 Origem: ${origin}\n📍 Destino: ${destination}\n📦 Descrição: ${description}`;
    
    if (weight.trim()) {
      message += `\n⚖️ Peso: ${weight} kg`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "5511999999999"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecionando para WhatsApp...");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="origin" className="text-lg font-medium flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Origem
          </Label>
          <Input
            id="origin"
            type="text"
            placeholder="De onde vai sair a carga?"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="h-14 text-lg"
            maxLength={200}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination" className="text-lg font-medium flex items-center gap-2">
            <Truck className="w-5 h-5 text-primary" />
            Destino
          </Label>
          <Input
            id="destination"
            type="text"
            placeholder="Para onde vai a carga?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="h-14 text-lg"
            maxLength={200}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="text-lg font-medium flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            Descrição da Mercadoria
          </Label>
          <Textarea
            id="description"
            placeholder="Ex: Móveis, eletrodomésticos, materiais de construção..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-24 text-lg resize-none"
            maxLength={500}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight" className="text-lg font-medium flex items-center gap-2">
            <Weight className="w-5 h-5 text-muted-foreground" />
            Peso Aproximado (opcional)
          </Label>
          <Input
            id="weight"
            type="text"
            placeholder="Ex: 500 kg, 1 tonelada..."
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="h-14 text-lg"
            maxLength={50}
          />
          <p className="text-sm text-muted-foreground">
            Se não souber o peso exato, não tem problema. Nos informe na descrição.
          </p>
        </div>
      </div>

      <Button 
        type="submit" 
        size="lg"
        className="w-full h-14 text-lg font-semibold"
      >
        Solicitar Orçamento via WhatsApp
      </Button>
    </form>
  );
};

export default QuoteForm;
