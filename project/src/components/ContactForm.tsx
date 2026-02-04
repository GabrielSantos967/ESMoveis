import { useState } from 'react';
import { Mail, Phone, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Solicite Seu Orçamento
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Preencha o formulário abaixo e nossa equipe entrará em contato para
              transformar seus sonhos em realidade. Atendimento personalizado e
              orçamento sem compromisso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Fale Conosco
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-slate-700 font-semibold mb-2"
                  >
                    <User size={20} className="text-amber-600" />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-slate-700 font-semibold mb-2"
                  >
                    <Mail size={20} className="text-amber-600" />
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-slate-700 font-semibold mb-2"
                  >
                    <Phone size={20} className="text-amber-600" />
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-slate-700 font-semibold mb-2"
                  >
                    <MessageSquare size={20} className="text-amber-600" />
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle size={20} />
                    <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle size={20} />
                    <span>Erro ao enviar mensagem. Tente novamente.</span>
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Entre em Contato Agora
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Prefere um atendimento mais direto? Fale conosco pelo WhatsApp e
                  receba atendimento imediato de nossa equipe especializada.
                </p>
                <a
                  href="https://wa.me/5541997260646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-all"
                >
                  <Phone size={20} />
                  Falar no WhatsApp
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Por Que Nos Escolher?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-600">
                      <strong className="text-slate-900">Atendimento Personalizado:</strong> Cada
                      projeto é único e recebe atenção exclusiva
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-600">
                      <strong className="text-slate-900">Materiais Premium:</strong> Utilizamos
                      apenas fornecedores de primeira linha
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-600">
                      <strong className="text-slate-900">Garantia Estendida:</strong> Confiamos na
                      qualidade do nosso trabalho
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-600">
                      <strong className="text-slate-900">Prazos Cumpridos:</strong> Pontualidade e
                      compromisso em cada entrega
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
