import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../img/logo.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">
            <img src={logo} width={150}></img>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Solicitar Orçamento
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-slate-600 hover:text-slate-900 transition-colors text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-slate-600 hover:text-slate-900 transition-colors text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-slate-600 hover:text-slate-900 transition-colors text-left"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Solicitar Orçamento
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
