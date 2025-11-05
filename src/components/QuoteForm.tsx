import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Truck } from "lucide-react";
import { toast } from "sonner";

const QuoteForm = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!origin.trim() || !destination.trim()) {
      toast.error("Por favor, preencha origem e destino");
      return;
    }

    // Validate input length
    if (origin.length > 200 || destination.length > 200) {
      toast.error("Origem e destino devem ter no máximo 200 caracteres");
      return;
    }

    const message = `Olá! Gostaria de solicitar um orçamento de frete.\n\n📍 Origem: ${origin}\n📍 Destino: ${destination}`;
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
