import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Solicite Seu Orçamento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preencha as informações abaixo e nossa equipe entrará em contato via WhatsApp com o melhor preço para você
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12">
            <QuoteForm />
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Resposta Rápida</h3>
              <p className="text-muted-foreground">
                Receba sua cotação em minutos direto no WhatsApp
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Equipe Dedicada</h3>
              <p className="text-muted-foreground">
                Profissionais experientes prontos para atender você
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Confiança Total</h3>
              <p className="text-muted-foreground">
                Sua carga segura do início ao fim da jornada
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-medium">Agiliza - Frete Sob Demanda, Do Seu Jeito</p>
          <p className="text-secondary-foreground/80 mt-2">© {new Date().getFullYear()} Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
