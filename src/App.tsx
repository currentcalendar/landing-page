

import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import currentCalendarLogo from './assets/currentCalendarLogo.svg';

const stackingCards = [
  {
    content: (
      <>
        <img src={currentCalendarLogo} className="h-[20vh] w-[20vh] object-cover rounded-full shadow-lg mx-auto mb-4" alt="Current Calendar logo" />
        <h1 className="text-4xl font-bold mt-2 mb-2 text-center">Current Calendar</h1>
        <p className="max-w-xl text-lg text-gray-100 mb-4 mx-auto text-center">
          Organiza tu vida de manera sencilla y eficiente. Current Calendar es la aplicación que te ayuda a gestionar tus eventos, tareas y recordatorios en un solo lugar, accesible desde cualquier dispositivo.
        </p>
        <a href="#registro" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow transition-colors duration-200 mx-auto block w-fit">
          ¡Empieza gratis ahora!
        </a>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-4 text-center">Características principales</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <li className="bg-blue-800 bg-opacity-60 rounded-lg p-6 shadow text-left">
            <span className="block text-xl font-bold mb-2">Gestión de eventos</span>
            <span>Agrega, edita y visualiza todos tus eventos en un calendario intuitivo.</span>
          </li>
          <li className="bg-blue-800 bg-opacity-60 rounded-lg p-6 shadow text-left">
            <span className="block text-xl font-bold mb-2">Recordatorios inteligentes</span>
            <span>Recibe notificaciones para no olvidar tus tareas y compromisos importantes.</span>
          </li>
          <li className="bg-blue-800 bg-opacity-60 rounded-lg p-6 shadow text-left">
            <span className="block text-xl font-bold mb-2">Sincronización multiplataforma</span>
            <span>Accede a tu calendario desde tu móvil, tablet o computadora.</span>
          </li>
        </ul>
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

const navSections = [
  { label: 'Home', id: 'home' },
  { label: 'Funcionalidades', id: 'features-section' },
  { label: 'Precios', id: 'pricing-section' },
  { label: 'Contacto', id: 'contact-section' },
  { label: 'Acceso', id: 'login-section' },
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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-950 bg-opacity-95 shadow flex items-center px-4 md:px-8 py-3 justify-between">
        <span className="font-bold text-white text-xl cursor-pointer" onClick={() => scrollToSection('home')}>Current Calendar</span>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-2">
          {navSections.map(item => (
            <button
              key={item.id}
              className="text-white hover:bg-blue-800 px-4 py-2 rounded-lg font-medium transition-colors"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-blue-950 bg-opacity-95 shadow-md flex flex-col items-center md:hidden animate-fade-in z-50">
            {navSections.map(item => (
              <button
                key={item.id}
                className="w-full text-white hover:bg-blue-800 px-6 py-4 border-b border-blue-900 font-medium text-lg text-left"
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

      {/* Stacking Cards Scroll-Driven Effect */}
        <section id="home" className="flex flex-col items-center justify-center min-h-[100vh] pt-8" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)'}}>
        <div
          id="cards"
          className="w-full flex flex-col gap-8 py-24"
          style={{
            '--numcards': stackingCards.length,
          } as React.CSSProperties}
        >
          {stackingCards.map((card, i) => (
            <div
              className="card rounded-3xl shadow-2xl flex items-center justify-center transition-all duration-700 opacity-0 scale-95"
              key={i}
              ref={el => {
                if (el) cardsRef.current[i] = el;
              }}
              style={{
                '--index': i + 1,
                background: 'rgba(30,58,138,0.98)',
                color: 'white',
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

      {/* Other sections... */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-gradient-to-b from-blue-900 to-blue-700" id="registro" style={{ position: 'relative', zIndex: 0, width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
        <h2 className="text-2xl font-semibold mb-4 text-white">¡Únete a nuestra comunidad!</h2>
        <p className="max-w-xl text-lg text-gray-200 mb-4">Regístrate para recibir novedades y ser de los primeros en probar la app.</p>
        <form className="flex flex-col md:flex-row gap-4 w-full max-w-md">
          <input type="email" placeholder="Tu correo electrónico" className="flex-1 px-4 py-2 rounded-full border border-gray-600" required />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow transition-colors">Notificarme</button>
        </form>
      </section>
    </>
  );
}

export default App;
