import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
<section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {}
        <div className="md:w-1/2 text-left space-y-6 animate-fade-in-up">
          <span className="inline-block bg-[#E88D87] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm">
            Coming Soon 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
            Go with <br/> the flow.
          </h1>
          <p className="text-xl text-white max-w-lg leading-relaxed">
            La red social para descubrir eventos y compartir calendarios. 
            Más social que Google Calendar, más organizado que Instagram.
          </p>

          <div className="pt-4">
             <button 
               onClick={() => scrollToSection('waitlist')}
               className="bg-[#E88D87] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition transform"
             >
               Unirme a la Beta
             </button>
          </div>
        </div>

        {}
        <div className="md:w-1/2 flex justify-center relative">
           {}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E88D87]/20 rounded-full blur-3xl -z-10"></div>

           <img 
             src="src/assets/mockup-feed.png" 
             alt="Current App Feed" 
             className="w-72 md:w-80 rounded-[2rem] shadow-2xl border-4 border-[#efeae2] rotate-[-2deg] hover:rotate-0 transition duration-500"
           />
        </div>
      </section>
  ),
},
  {
  content: (
    <>
      <h2 id="features" className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
        Todo en un solo lugar
      </h2>

      <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
       <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-left border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
          <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
            📅
          </div>
          <h3 className="text-xl font-bold text-[#11423F] mb-3">Calendarios Sociales</h3>
          <p className="text-gray-600 leading-relaxed">
            Sigue los calendarios públicos de tus amigos, equipos o artistas favoritos. Si ellos van, tú te enteras.
          </p>
        </div>

        <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-left border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
          <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
            📍
          </div>
          <h3 className="text-xl font-bold text-[#11423F] mb-3">Radar Discovery</h3>
          <p className="text-gray-600 leading-relaxed">
            ¿Sin planes? Abre el mapa y descubre eventos cerca de ti en las próximas 48 horas.
          </p>
        </div>

        <div className="p-8 bg-[#efeae2] rounded-3xl shadow-xl text-left border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
          <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
            ⭐
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
        <h2 className="text-2xl font-semibold mb-4 text-center">¿Por qué elegir Current Calendar?</h2>
        <ul className="list-disc list-inside max-w-2xl text-left text-lg text-gray-100 mx-auto">
          <li>Interfaz moderna y fácil de usar</li>
          <li>Privacidad y seguridad de tus datos</li>
          <li>Soporte y actualizaciones constantes</li>
        </ul>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-4 text-center">Integraciones y personalización</h2>
        <p className="max-w-xl text-lg text-gray-100 mb-4 mx-auto text-center">Conecta Current Calendar con tus aplicaciones favoritas como Google Calendar, Outlook y más. Personaliza la apariencia, elige temas, colores y ajusta las notificaciones a tu gusto.</p>
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
              Descargar App
            </button>
          </div>
  </nav>

  {/* Stacking Cards Section */}
  <section
    id="home"
    className="flex flex-col items-center justify-center min-h-[100vh] -mt-8 bg-[#efeae2]"
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
        <p>© 2026 Current App. Group F Project.</p>
      </footer>
</>
  );
}

export default App;
