import { Home, Warehouse, Bed, Briefcase, Sparkles, Ruler } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Cozinhas Planejadas',
    description:
      'Projetos completos de cozinhas sob medida, unindo funcionalidade e design sofisticado. Otimização de espaços com armários inteligentes, ilhas gourmet e acabamentos de primeira linha.',
  },
  {
    icon: Warehouse,
    title: 'Armários e Closets',
    description:
      'Guarda-roupas e closets personalizados que maximizam seu espaço com elegância. Soluções organizacionais exclusivas com divisórias inteligentes e acabamento impecável.',
  },
  {
    icon: Bed,
    title: 'Dormitórios Completos',
    description:
      'Ambientes de descanso planejados com harmonia e requinte. Camas, criados-mudos, bancadas e soluções integradas que transformam seu quarto em um refúgio de conforto.',
  },
  {
    icon: Briefcase,
    title: 'Home Office',
    description:
      'Escritórios residenciais sob medida para máxima produtividade. Bancadas ergonômicas, estantes planejadas e organização perfeita para seu espaço de trabalho.',
  },
  {
    icon: Sparkles,
    title: 'Ambientes Integrados',
    description:
      'Projetos completos de decoração e móveis planejados para salas, halls e áreas de convivência. Painéis, estantes, racks e soluções que agregam sofisticação ao seu lar.',
  },
  {
    icon: Ruler,
    title: 'Projetos Personalizados',
    description:
      'Criação de móveis únicos e exclusivos para qualquer ambiente. Do conceito à execução, materializamos suas ideias com artesanato refinado e atenção a cada detalhe.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Soluções completas em móveis planejados para todos os ambientes da sua
            casa. Cada projeto é desenvolvido com exclusividade, qualidade superior
            e design personalizado para refletir seu estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-amber-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Qualidade e Exclusividade em Cada Detalhe
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Utilizamos materiais premium, ferragens de primeira linha e acabamentos
            refinados. Nossos artesãos experientes trabalham com precisão milimétrica
            para garantir móveis que duram uma vida inteira com a beleza do primeiro dia.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">Garantia</div>
              <div className="opacity-90">De 5 Anos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">Materiais</div>
              <div className="opacity-90">Premium</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">Design</div>
              <div className="opacity-90">Exclusivo</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">Atendimento</div>
              <div className="opacity-90">Personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
