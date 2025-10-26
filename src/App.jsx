import React, { useState, useEffect } from 'react';
import { Brain, Zap, TrendingUp, MessageSquare, Bot, Settings, ChevronRight, Menu, X, Phone, Mail, Instagram, Facebook, CheckCircle, ArrowRight, Sparkles, Globe, Clock, Target } from 'lucide-react';

const SynapseLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['inicio', 'servicios', 'nosotros', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl'
          : 'bg-black/50 backdrop-blur-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="relative">
                <Brain className="w-9 h-9 text-white transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 blur-xl bg-white/20 group-hover:bg-white/30 transition-all duration-300"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">SYNAPSE</span>
            </div>

            <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-2 border border-white/10">
              {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.toLowerCase()
                      ? 'bg-white text-black shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-2">
              {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === item.toLowerCase()
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative w-full">
          <div className="text-center">
            <div
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8 hover:bg-white/10 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: '0.1s', opacity: 0, animation: 'fadeIn 0.6s ease-out 0.1s forwards' }}
            >
              <Sparkles className="w-4 h-4 text-gray-300" />
              <span className="text-sm text-gray-300">Inteligencia Artificial para el crecimiento empresarial</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeIn px-4"
              style={{ animationDelay: '0.2s', opacity: 0, animation: 'fadeIn 0.6s ease-out 0.2s forwards' }}
            >
              Transforma tu empresa con{' '}
              <span className="inline-block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text">
                Inteligencia Artificial
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeIn px-4"
              style={{ animationDelay: '0.3s', opacity: 0, animation: 'fadeIn 0.6s ease-out 0.3s forwards' }}
            >
              Creamos soluciones inteligentes a medida que impulsan tu productividad, aumentan tus ganancias y optimizan la gestión de tu negocio.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn px-4"
              style={{ animationDelay: '0.4s', opacity: 0, animation: 'fadeIn 0.6s ease-out 0.4s forwards' }}
            >
              <button
                onClick={() => scrollToSection('contacto')}
                className="group bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/40 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Comenzar ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm"
              >
                Ver servicios
              </button>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, text: 'Soluciones personalizadas', delay: '0.5s' },
              { icon: Zap, text: 'Implementación rápida', delay: '0.6s' },
              { icon: TrendingUp, text: 'Resultados medibles', delay: '0.7s' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: item.delay, opacity: 0, animation: `fadeIn 0.6s ease-out ${item.delay} forwards` }}
              >
                <item.icon className="w-8 h-8 text-gray-300 mb-3" />
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-neutral-950 relative flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative w-full">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Nuestros <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Servicios</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluciones de IA y automatización diseñadas para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Bot,
                title: 'Agentes de IA Personalizados',
                description: 'Agentes inteligentes que gestionan clientes, finanzas y operaciones. Bots disponibles 24/7 que atienden, llaman y responden. Asistentes que agendán reuniones y optimizan tu tiempo.',
                features: ['Gestión automatizada', 'Disponibilidad 24/7', 'Adaptados a tu negocio']
              },
              {
                icon: Settings,
                title: 'Automatización de Procesos',
                description: 'Eliminamos tareas repetitivas y creamos flujos de trabajo automáticos. Integramos tus herramientas actuales con automatizaciones inteligentes para reducir errores y ahorrar tiempo.',
                features: ['Elimina tareas manuales', 'Reduce errores', 'Integración completa']
              },
              {
                icon: MessageSquare,
                title: 'Bots Comerciales y Soporte',
                description: 'Sistemas que abren y cierran ventas automáticamente. Atienden mensajes en redes sociales y WhatsApp. Gestionan reservas y seguimiento sin intervención humana.',
                features: ['Ventas automáticas', 'Soporte multicanal', 'Gestión de clientes']
              },
              {
                icon: Sparkles,
                title: 'Soluciones IA a Medida',
                description: 'Desarrollo de modelos inteligentes específicos para tu negocio. Implementación de IA en marketing, atención al cliente y análisis. Integraciones personalizadas con tus plataformas.',
                features: ['Totalmente personalizado', 'Tecnología avanzada', 'Soporte continuo']
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                ¿Por qué elegir <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">SYNAPSE?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Somos un equipo apasionado por la innovación y el crecimiento empresarial, especializados en crear soluciones inteligentes que transforman negocios.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Target, text: 'Soluciones completamente personalizadas' },
                  { icon: Zap, text: 'Implementación rápida y soporte continuo' },
                  { icon: TrendingUp, text: 'Enfoque en aumentar ventas y optimizar recursos' },
                  { icon: MessageSquare, text: 'Comunicación directa con expertos' },
                  { icon: Brain, text: 'Tecnología de vanguardia que evoluciona contigo' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:translate-x-2 border border-white/0 hover:border-white/10">
                    <div className="bg-white/10 rounded-lg p-2.5">
                      <item.icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <span className="text-gray-300 pt-1.5">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.15] transition-all duration-300 hover:scale-105">
                <Globe className="w-12 h-12 text-gray-300 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Nuestra Visión</h3>
                <p className="text-gray-400 leading-relaxed">
                  Ser la empresa líder en desarrollo de agentes de IA y automatización empresarial en Latinoamérica, transformando la forma en que las empresas operan y crecen con tecnología.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.15] transition-all duration-300 hover:scale-105">
                <Target className="w-12 h-12 text-gray-300 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Nuestra Misión</h3>
                <p className="text-gray-400 leading-relaxed">
                  Impulsar la transformación digital mediante soluciones inteligentes personalizadas, optimizando tareas y generando mayor eficiencia y rentabilidad con IA estratégica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-950 to-black relative flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto relative w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              ¿Listo para <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">transformar</span> tu empresa?
            </h2>
            <p className="text-xl text-gray-400">
              Contáctanos y descubre cómo la IA puede llevar tu negocio al siguiente nivel
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:synapse.contact.ai@gmail.com"
                className="group flex items-center space-x-4 bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
              >
                <div className="bg-white/10 rounded-xl p-3">
                  <Mail className="w-8 h-8 text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-white group-hover:text-gray-200 transition-colors text-sm">synapse.contact.ai@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+573209590302"
                className="group flex items-center space-x-4 bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
              >
                <div className="bg-white/10 rounded-xl p-3">
                  <Phone className="w-8 h-8 text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Teléfono / WhatsApp</p>
                  <p className="text-white group-hover:text-gray-200 transition-colors">+57 320 959 0302</p>
                </div>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-300">Síguenos en redes sociales</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com/synapse.ai.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20"
              >
                <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://facebook.com/SynapseAI"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20"
              >
                <Facebook className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@synapse.ai.solutions1"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-6 h-6 text-gray-400" />
            <span className="text-xl font-bold text-white">SYNAPSE</span>
          </div>
          <p className="text-gray-400 mb-2">Deja que SYNAPSE sea el puente entre tu negocio y el futuro</p>
          <p className="text-gray-600 text-sm">© 2024 SYNAPSE. Todos los derechos reservados.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default SynapseLanding;