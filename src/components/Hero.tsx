import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-amber-50 pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Transforme Seu Espaço em uma
            <span className="text-amber-600"> Obra de Arte</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Móveis planejados sob medida com design exclusivo, acabamento premium
            e a qualidade que você merece. Cada projeto é uma experiência única de
            personalização e sofisticação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all hover:scale-105 flex items-center gap-2"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight size={20} />
            </button>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-slate-600">Anos de Experiência</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-slate-600">Projetos Realizados</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-slate-600">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
