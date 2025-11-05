import agilizaLogo from "@/assets/agiliza-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-16 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.05),transparent_50%)]" />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center animate-fade-in-up">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={agilizaLogo} 
              alt="Agiliza - Frete Sob Demanda" 
              className="relative w-auto h-64 md:h-80 lg:h-96 xl:h-[500px] object-contain animate-glow-pulse transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Transporte Ágil e Confiável
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Solicite seu frete agora e receba uma cotação personalizada em minutos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg font-medium">Rápido e Prático</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <span className="text-lg font-medium">Preço Justo</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-lg font-medium">Seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
