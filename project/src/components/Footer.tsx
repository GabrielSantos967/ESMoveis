import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Móveis Planejados</h3>
            <p className="text-slate-400 leading-relaxed">
              Transformando espaços em obras de arte com móveis planejados de
              qualidade premium e design exclusivo.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-slate-400">
              <a
                href="https://wa.me/5541997260646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-500 transition-colors"
              >
                <Phone size={18} />
                (41) 99726-0646
              </a>
              <a
                href="mailto:contato@moveisplanejados.com.br"
                className="flex items-center gap-2 hover:text-amber-500 transition-colors"
              >
                <Mail size={18} />
                contato@moveisplanejados.com.br
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Curitiba, PR - Brasil</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
            <div className="space-y-2 text-slate-400">
              <p>Segunda a Sexta: 8h - 18h</p>
              <p>Sábado: 9h - 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Móveis Planejados. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
