import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-10 space-y-2 md:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
              Solicite Seu Orçamento
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Preencha as informações abaixo e nossa equipe entrará em contato via WhatsApp com o melhor preço para você
            </p>
          </div>

          <div className="bg-card rounded-xl md:rounded-2xl shadow-lg border border-border p-4 sm:p-6 md:p-10">
            <QuoteForm />
          </div>

          <div className="mt-10 md:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center space-y-2 md:space-y-3">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Resposta Rápida</h3>
              <p className="text-sm md:text-base text-muted-foreground px-2">
                Receba sua cotação em minutos direto no WhatsApp
              </p>
            </div>

            <div className="text-center space-y-2 md:space-y-3">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-md">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Equipe Dedicada</h3>
              <p className="text-sm md:text-base text-muted-foreground px-2">
                Profissionais experientes prontos para atender você
              </p>
            </div>

            <div className="text-center space-y-2 md:space-y-3 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Confiança Total</h3>
              <p className="text-sm md:text-base text-muted-foreground px-2">
                Sua carga segura do início ao fim da jornada
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-6 md:py-8 px-4 mt-12 md:mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg font-medium">Agiliza - Frete Sob Demanda, Do Seu Jeito</p>
          <p className="text-sm md:text-base text-secondary-foreground/80 mt-1 md:mt-2">© {new Date().getFullYear()} Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
