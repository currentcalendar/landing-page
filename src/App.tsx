<<<<<<< Updated upstream
import { useState } from 'react';
=======
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Calendar, 
  MapPin, 
  Star, 
  Link2, 
  UsersRound, 
  Palette, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube 
} from 'lucide-react';
import { siTiktok } from 'simple-icons/icons';

>>>>>>> Stashed changes
import './App.css';

const navSections = [
  { label: 'Inicio', id: 'home' },
  { label: 'Características', id: 'features' },
  { label: 'Waitlist', id: 'waitlist' },
];

<<<<<<< Updated upstream
=======
const stackingCards = [
  {
    content: (
      <>
        <h2 className="text-3xl md:text-4xl font-bold text-[#FEFBF6] mb-12 text-center">Todo en un solo lugar</h2>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <Calendar className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Calendarios Sociales</h3>
            <p className="text-gray-600 leading-relaxed">Sigue los calendarios públicos de tus amigos, equipos o artistas favoritos.</p>
          </div>
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <MapPin className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Radar Discovery</h3>
            <p className="text-gray-600 leading-relaxed">¿Sin planes? Abre el mapa y descubre eventos cerca de ti.</p>
          </div>
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <Star className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Reward System</h3>
            <p className="text-gray-600 leading-relaxed">Gana popularidad creando los mejores eventos de tu zona.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-3xl md:text-4xl font-bold text-[#FEFBF6] mb-12 text-center">Integraciones y Personalización</h2>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <Link2 className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Google Calendar</h3>
            <p className="text-gray-600 leading-relaxed">Sincroniza tus eventos automáticamente.</p>
          </div>
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <UsersRound className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Comunidad</h3>
            <p className="text-gray-600 leading-relaxed">Encuentra el nicho adecuado para tus planes.</p>
          </div>
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <Palette className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Temas</h3>
            <p className="text-gray-600 leading-relaxed">Personaliza la apariencia a tu gusto.</p>
          </div>
        </div>
      </>
    ),
  }
];

>>>>>>> Stashed changes
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
<<<<<<< Updated upstream

  const handleJoinWaitlist = (e: React.FormEvent) => {
=======
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
    window.addEventListener('scroll', updateCardVisibility);
    updateCardVisibility();
    return () => window.removeEventListener('scroll', updateCardVisibility);
  }, []);

 const handleJoinWaitlist = (e: React.FormEvent) => {
>>>>>>> Stashed changes
    e.preventDefault();
    if (!email || email.trim() === '') {
      alert('⚠️ Por favor, escribe tu email.');
      return;
    }
<<<<<<< Updated upstream
    alert(`¡Genial! Hemos apuntado ${email} a la lista de espera 🦦`);
    setEmail('');
=======

    setIsLoading(true);

    
    setTimeout(() => {
      setIsLoading(false);
      setMessage({ type: 'success', text: `¡Genial! Hemos apuntado ${email} a la lista de espera 🦦` });
      setEmail('');
      
    
      setTimeout(() => setMessage(null), 5000);
    }, 1000);
>>>>>>> Stashed changes
  };
  return (
<<<<<<< Updated upstream
    <div className="min-h-screen bg-[#efeae2] text-[#11423F] font-sans w-full overflow-x-hidden">
      
      {}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#11423F] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          
          {}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            {}
            <div className="w-10 h-10 bg-[#efeae2] rounded-full flex items-center justify-center overflow-hidden">
               {}
               <img src="src/assets/logo-current.png" alt="C" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
               <span className="text-[#11423F] font-bold text-xl absolute">C</span> 
            </div>
            <span className="font-bold text-[#efeae2] text-xl tracking-tight">current</span>
          </div>

          {}
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

          {}
          <div className="md:hidden">
            <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {}
        {menuOpen && (
          <div className="md:hidden bg-[#0d3330] border-t border-[#efeae2]/10">
            {navSections.map(item => (
              <button
                key={item.id}
                className="w-full text-left text-[#efeae2] px-8 py-4 border-b border-[#efeae2]/5 hover:bg-[#11423F]"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {}
      <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {}
        <div className="md:w-1/2 text-left space-y-6 animate-fade-in-up">
          <span className="inline-block bg-[#E88D87] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm">
            Coming Soon 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#11423F] leading-[1.1]">
            Go with <br/> the flow.
          </h1>
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            La red social para descubrir eventos y compartir calendarios. 
            Más social que Google Calendar, más organizado que Instagram.
          </p>
          
          <div className="pt-4">
             <button 
               onClick={() => scrollToSection('waitlist')}
               className="bg-[#11423F] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition transform"
             >
=======
    <div className="min-h-screen bg-[#FEFBF6] text-[#11423F] w-full overflow-x-hidden font-sans">
      {}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#11423F] shadow-lg flex items-center px-4 md:px-8 py-3 justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 bg-[#FEFBF6] rounded-full flex items-center justify-center overflow-hidden relative">
            <img src="src/assets/logo-current.png" alt="C" className="w-full h-full object-cover" />
            <span className="text-[#11423F] font-bold text-xl absolute">C</span>
          </div>
          <span className="font-bold text-[#FEFBF6] text-xl tracking-tight">current</span>
        </div>
        
        <div className="hidden md:flex gap-6 items-center">
          {navSections.map(item => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="bg-transparent border-none text-[#FEFBF6] hover:text-[#E88D87] font-medium cursor-pointer transition-colors p-2"
            >
              {item.label}
            </button>
          ))}
          <button className="bg-[#E88D87] text-white px-5 py-2 rounded-full font-bold hover:bg-[#FEFBF6] hover:text-[#E88D87] transition shadow-md border-none cursor-pointer">
            Próximamente
          </button>
        </div>
      </nav>

      {}
      <section id="home" className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="md:w-1/2 text-left space-y-6">
          <span className="inline-block bg-[#E88D87] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm">
            Coming Soon 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#11423F] leading-[1.1]">
            Go with <br/> <span className="text-[#11423F]">the flow.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            La red social para descubrir eventos y compartir calendarios. Más social que Google Calendar, más organizado que Instagram.
          </p>
          <div className="pt-4">
             <button onClick={() => scrollToSection('waitlist')} className="bg-[#11423F] border-none text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition cursor-pointer">
>>>>>>> Stashed changes
               Unirme a la Beta
             </button>
          </div>
        </div>
<<<<<<< Updated upstream

        {}
        <div className="md:w-1/2 flex justify-center relative">
           {}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E88D87]/20 rounded-full blur-3xl -z-10"></div>
           
           <img 
             src="src/assets/mockup-feed.png" 
             alt="Current App Feed" 
             className="w-72 md:w-80 rounded-[2rem] shadow-2xl border-4 border-[#efeae2] rotate-[-2deg] hover:rotate-0 transition duration-500"
           />
=======
        <div className="md:w-1/2 flex justify-center relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E88D87]/10 rounded-full blur-3xl -z-10"></div>
           <img src="src/assets/mockup-feed.png" alt="Mockup" className="w-80 md:w-[450px] rounded-[3rem] shadow-2xl border-4 border-white rotate-[-2deg]" />
>>>>>>> Stashed changes
        </div>
      </section>

      {}
<<<<<<< Updated upstream
      <section id="features" className="py-24 bg-white rounded-t-[3rem] -mt-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#11423F] mb-16">Todo en un solo lugar</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {}
            <div className="p-8 bg-[#efeae2] rounded-3xl hover:shadow-xl transition group text-left border border-transparent hover:border-[#E88D87]/30">
              <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">📅</div>
              <h3 className="text-xl font-bold text-[#11423F] mb-3">Calendarios Sociales</h3>
              <p className="text-gray-600 leading-relaxed">Sigue los calendarios públicos de tus amigos, equipos o artistas favoritos. Si ellos van, tú te enteras.</p>
            </div>

            {}
            <div className="p-8 bg-[#efeae2] rounded-3xl hover:shadow-xl transition group text-left border border-transparent hover:border-[#E88D87]/30">
              <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">📍</div>
              <h3 className="text-xl font-bold text-[#11423F] mb-3">Radar Discovery</h3>
              <p className="text-gray-600 leading-relaxed">¿Sin planes? Abre el mapa y descubre eventos cerca de ti en las próximas 48 horas.</p>
            </div>

            {}
            <div className="p-8 bg-[#efeae2] rounded-3xl hover:shadow-xl transition group text-left border border-transparent hover:border-[#E88D87]/30">
              <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">⭐</div>
              <h3 className="text-xl font-bold text-[#11423F] mb-3">Reward System</h3>
              <p className="text-gray-600 leading-relaxed">Gana popularidad creando los mejores eventos y conviértete en un "Top Event Maker".</p>
            </div>
          </div>
=======
      <section id="features" className="py-24 bg-[#FEFBF6]">
        <div className="flex flex-col gap-12">
          {stackingCards.map((card, i) => (
            <div 
              key={i} 
              ref={el => { if (el) cardsRef.current[i] = el; }} 
              className="card rounded-[3rem] shadow-2xl transition-all duration-700 opacity-0 scale-95 mx-auto flex items-center justify-center p-12" 
              style={{ background: '#11423F', minHeight: '400px', width: '90vw', maxWidth: '1100px' }}
            >
              <div className="w-full text-[#FEFBF6]">{card.content}</div>
            </div>
          ))}
>>>>>>> Stashed changes
        </div>
      </section>

      {}
<<<<<<< Updated upstream
      <section id="waitlist" className="py-24 px-6 bg-[#11423F] text-[#efeae2] text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">¿Listo para fluir?</h2>
          <p className="text-xl opacity-90">Únete a la lista de espera y sé el primero en probar la beta en Sevilla.</p>
          
=======
      <section id="waitlist" className="py-24 px-6 bg-[#11423F] text-[#FEFBF6] text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">¿Listo para fluir?</h2>
>>>>>>> Stashed changes
          <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="tu@email.com" 
<<<<<<< Updated upstream
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-xl text-[#000000] bg-[#efeae2] outline-none focus:ring-4 ring-[#E88D87]"
            />
            <button type="submit" className="bg-[#E88D87] text-white font-bold px-8 py-4 rounded-xl hover:brightness-110 transition shadow-lg">
              Enviar
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-[#11423F]/60 bg-[#efeae2]">
        <p>© 2026 Current App. Group F Project.</p>
      </footer>

=======
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="flex-1 px-6 py-4 rounded-xl text-black bg-[#FEFBF6] outline-none" 
            />
            <button type="submit" disabled={isLoading} className="bg-[#E88D87] border-none text-white font-bold px-8 py-4 rounded-xl shadow-lg cursor-pointer hover:brightness-110 transition">
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
          {message && <div className={`p-4 rounded-xl font-bold ${message.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>{message.text}</div>}
        </div>
      </section>

      {}
      <footer className="py-16 text-center bg-[#FEFBF6]">
        <div className="flex justify-center gap-8 mb-8">
          <Instagram className="w-6 h-6 text-[#11423F] hover:text-[#E88D87] cursor-pointer" />
          <Twitter className="w-6 h-6 text-[#11423F] hover:text-[#E88D87] cursor-pointer" />
          <Linkedin className="w-6 h-6 text-[#11423F] hover:text-[#E88D87] cursor-pointer" />
          <Youtube className="w-6 h-6 text-[#11423F] hover:text-[#E88D87] cursor-pointer" />
          <svg className="w-6 h-6 fill-current text-[#11423F] hover:text-[#E88D87] cursor-pointer" viewBox="0 0 24 24">
            <path d={siTiktok.path} />
          </svg>
        </div>
        <p className="text-[#11423F]/40 font-medium">© 2026 Current App · Sevilla, España</p>
      </footer>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;