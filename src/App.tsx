import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Calendar, MapPin, Star, Link2, UsersRound, Palette, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { siTiktok } from 'simple-icons/icons';

import './App.css';

emailjs.init('YOUR_PUBLIC_KEY_HERE');

const navSections = [
  { label: 'Inicio', id: 'home' },
  { label: 'Características', id: 'features' },
  { label: 'Waitlist', id: 'waitlist' },
];

const stackingCards = [
  {
    content: (
      <>
        <h2 id="features" className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
        Todo en un solo lugar
      </h2>

      <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
        <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
          <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
            <Calendar className="w-7 h-7 text-[#efeae2]" />
          </div>
          <h3 className="text-xl font-bold text-[#11423F] mb-3">Calendarios Sociales</h3>
          <p className="text-gray-600 leading-relaxed">
            Sigue los calendarios públicos de tus amigos, equipos o artistas favoritos. Si ellos van, tú te enteras.
          </p>
        </div>

        <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
          <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
            <MapPin className="w-7 h-7 text-[#efeae2]" />
          </div>
          <h3 className="text-xl font-bold text-[#11423F] mb-3">Radar Discovery</h3>
          <p className="text-gray-600 leading-relaxed">
            ¿Sin planes? Abre el mapa y descubre eventos cerca de ti en las próximas 48 horas.
          </p>
        </div>

        <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
          <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
            <Star className="w-7 h-7 text-[#efeae2]" />
          </div>
          <h3 className="text-xl font-bold text-[#11423F] mb-3">Reward System</h3>
          <p className="text-gray-600 leading-relaxed">
            Gana popularidad creando los mejores eventos y conviértete en un "Top Event Maker".
          </p>
        </div>
      </div>
    </>
  ),
},
{
    content: (
      <>
        <h2 id="features" className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
        ¿Por qué elegir Current Calendar?
      </h2>

      <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
       <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
          <h3 className="text-xl font-bold text-[#11423F] mb-3">Interfaz moderna y fácil de usar</h3>
          <p className="text-gray-600 leading-relaxed">
            Nuestra interfaz intuitiva te permite navegar con facilidad y encontrar eventos de forma rápida y eficiente.
          </p>
        </div>

        <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
          <h3 className="text-xl font-bold text-[#11423F] mb-3">Privacidad y seguridad de tus datos</h3>
          <p className="text-gray-600 leading-relaxed">
            Tus datos están protegidos con las más altas normas de seguridad. No compartimos información personal sin tu consentimiento.
          </p>
        </div>

        <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
          <h3 className="text-xl font-bold text-[#11423F] mb-3">Soporte y actualizaciones constantes</h3>
          <p className="text-gray-600 leading-relaxed">
            Atento a nuestras redes sociales para recibir las últimas actualizaciones y noticias sobre Current Calendar.
          </p>
        </div>
      </div>
    </>
  ),
},

  {
    content: (
      <>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Integraciones y Personalización</h2>
        
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <Link2 className="w-7 h-7 text-[#efeae2]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Google Calendar</h3>
            <p className="text-gray-600 leading-relaxed">
              Sincroniza automáticamente tus eventos de Google Calendar.
            </p>
          </div>

          <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <UsersRound className="w-7 h-7 text-[#efeae2]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Encuentra tu nicho</h3>
            <p className="text-gray-600 leading-relaxed">
              Explora los diferentes calendarios disponibles y encuentra el adecuado para ti.
            </p>
          </div>

          <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <Palette className="w-7 h-7 text-[#efeae2]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Temas y Colores</h3>
            <p className="text-gray-600 leading-relaxed">
              Personaliza la apariencia con temas y colores a tu gusto.
            </p>
          </div>
        </div>
      </>
    ),
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 70,
      behavior: 'smooth',
    });
  }
}

function App() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards || cards.length === 0) return;

    function updateCardVisibility() {
      cards.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        if (rect.top < vh * 0.7 && rect.bottom > vh * 0.2) {
          el.classList.add('opacity-100', 'scale-100');
          el.classList.remove('opacity-0', 'scale-95');
        } else {
          el.classList.remove('opacity-100', 'scale-100');
          el.classList.add('opacity-0', 'scale-95');
        }
      });
    }

    updateCardVisibility();
    window.addEventListener('scroll', updateCardVisibility);
    window.addEventListener('resize', updateCardVisibility);
    return () => {
      window.removeEventListener('scroll', updateCardVisibility);
      window.removeEventListener('resize', updateCardVisibility);
    };
  }, []);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || email.trim() === '') {
      setMessage({ type: 'error', text: '⚠️ Por favor, escribe tu email.' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID_HERE',
        'YOUR_TEMPLATE_ID_HERE',
        {
          to_email: 'YOUR_EMAIL_HERE',
          user_email: email,
          date: new Date().toLocaleDateString('es-ES'),
        }
      );

      setMessage({ type: 'success', text: `¡Genial! Hemos apuntado ${email} a la lista de espera 🦦` });
      setEmail('');
      
      setTimeout(() => setMessage(null), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage({ type: 'error', text: 'Error al enviar. Intenta más tarde.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
<>
  <nav className="fixed top-0 left-0 w-full z-50 bg-[#11423F] shadow flex items-center px-4 md:px-8 py-3 justify-between">
<div
  className="flex items-center gap-2 cursor-pointer"
  onClick={() => scrollToSection('home')}
>
  <div className="w-10 h-10 bg-[#efeae2] rounded-full flex items-center justify-center overflow-hidden relative">
    <img
      src="src/assets/logo-current.png"
      alt="C"
      className="w-full h-full object-cover"
      onError={(e) => (e.currentTarget.style.display = 'none')}
    />
    <span className="text-[#11423F] font-bold text-xl absolute">C</span>
  </div>
  <span className="font-bold text-[#efeae2] text-xl">Current Calendar</span>
</div>
         <div className="hidden md:flex gap-6 bg-transparent">
            {navSections.map(item => (
              <button
                key={item.id}
                className="text-[#efeae2]/90 hover:text-[#E88D87] font-medium transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#E88D87] text-white px-5 py-2 rounded-full font-bold hover:bg-white hover:text-[#E88D87] transition shadow-md">
              Coming Soon
            </button>
          </div>
  </nav>

  {/* Home Section */}
  <section id="home" className="min-h-screen flex items-center justify-center py-20 px-6 bg-[#efeae2]" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
    <div className="max-w-7xl mx-auto w-full">
      <div className="grid md:grid-cols-2 items-center gap-16 md:gap-20">
        
        <div className="card rounded-3xl shadow-2xl p-10 order-2 md:order-1" style={{ background: '#11423F', color: '#efeae2', maxWidth: '600px' }}>
          <div className="text-left space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E88D87] to-[#E07870] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg border border-[#E88D87]/30">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Coming Soon 2026
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#efeae2] leading-[1.1] tracking-tight">
              Go with <span className="bg-gradient-to-r from-[#E88D87] to-[#E07870] bg-clip-text text-transparent">the flow.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-md leading-relaxed font-light">
              La red social para descubrir eventos y compartir calendarios. 
              Más social que Google Calendar, más organizado que Instagram.
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={() => scrollToSection('waitlist')}
                 className="bg-gradient-to-r from-[#E88D87] to-[#E07870] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
               >
                 Unirme a la Beta
               </button>
               <button className="border-2 border-[#efeae2] text-[#efeae2] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#efeae2] hover:text-[#11423F] transition-all duration-300">
                 Saber Más
               </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center relative order-1 md:order-2">
           <div className="absolute inset-0 bg-gradient-to-br from-[#E88D87]/20 via-transparent to-[#E88D87]/10 rounded-full blur-3xl -z-10"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#E88D87]/15 to-[#E07870]/10 rounded-full blur-3xl -z-10"></div>
           
           <div className="relative group">
             <div className="absolute inset-0 bg-gradient-to-r from-[#E88D87]/20 to-[#E07870]/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition duration-500 -z-10"></div>
             <img 
               src="src/assets/mockup-feed.png" 
               alt="Current App Feed" 
               className="w-200 md:w-200 rounded-[2.5rem] shadow-2xl border-4 border-[#efeae2] group-hover:border-[#E88D87]/50 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500"
             />
           </div>
        </div>
      </div>
    </div>
  </section>

  {/* Stacking Cards Section */}
  <section
    className="flex flex-col items-center justify-center bg-[#efeae2]"
    style={{
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      marginRight: 'calc(50% - 50vw)'
    }}
  >
    <div
      id="cards"
      className="w-full flex flex-col gap-8 py-24"
      style={{
        '--numcards': stackingCards.length,
      } as React.CSSProperties}
    >
      {stackingCards.map((card, i) => (
        <div
          className="card rounded-3xl shadow-2xl flex items-center justify-center transition-all duration-700 opacity-0 scale-90"
          key={i}
          ref={el => {
            if (el) cardsRef.current[i] = el;
          }}
          style={{
            '--index': i + 1,
            background: '#11423F',
            color: '#efeae2',
            minHeight: '80vh',
            width: '90vw',
            maxWidth: '1200px',
            margin: '0 auto',
          } as React.CSSProperties}
          id={`card-${i}`}
        >
          <div className="p-10 flex flex-col items-center w-full h-full">
            {card.content}
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Registro */}
      <section id="waitlist" className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-[#11423F] text-[#efeae2] text-center" style={{ position: 'relative', zIndex: 0, width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">¿Listo para fluir?</h2>
          <p className="text-xl opacity-90">Únete a la lista de espera y sé el primero en probar la beta en Sevilla.</p>

          <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="tu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-6 py-4 rounded-xl text-[#000000] bg-[#efeae2] outline-none focus:ring-4 ring-[#E88D87] disabled:opacity-60"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-[#E88D87] text-white font-bold px-8 py-4 rounded-xl hover:brightness-110 transition shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>

          {/* Success/Error Message */}
          {message && (
            <div className={`max-w-md mx-auto p-4 rounded-lg font-semibold transition-all ${
              message.type === 'success' 
                ? 'bg-green-500/20 text-green-200 border border-green-500/50' 
                : 'bg-red-500/20 text-red-200 border border-red-500/50'
            }`}>
              {message.text}
            </div>
          )}
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-[#11423F]/60 bg-[#efeae2]" style={{ position: 'relative', zIndex: 0, width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
                <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.instagram.com/current.calendar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#11423F] text-[#efeae2] flex items-center justify-center hover:bg-[#E88D87] transition-colors shadow-md">
              <Instagram className="w-5 h-5 text-[#efeae2]" />
            </a>
            <a href="https://x.com/currentcalendar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#11423F] text-[#efeae2] flex items-center justify-center hover:bg-[#E88D87] transition-colors shadow-md">
              <Twitter className="w-5 h-5 text-[#efeae2]" />
            </a>
            <a href="https://www.linkedin.com/company/currentcalendar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#11423F] text-[#efeae2] flex items-center justify-center hover:bg-[#E88D87] transition-colors shadow-md">
              <Linkedin className="w-5 h-5 text-[#efeae2]" />
            </a>
             <a href="https://www.tiktok.com/@current.calendar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#11423F] text-[#efeae2] flex items-center justify-center hover:bg-[#E88D87] transition-colors shadow-md">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d={siTiktok.path} className="w-5 h-5 text-[#efeae2]" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@currentcalendar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#11423F] text-[#efeae2] flex items-center justify-center hover:bg-[#E88D87] transition-colors shadow-md">
              <Youtube className="w-5 h-5 text-[#efeae2]" />
            </a>
          </div>
          <p>© 2026 Current App</p>
        </div>
      </footer>
</>
  );
}

export default App;
