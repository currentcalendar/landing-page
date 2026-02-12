import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
  Youtube,
} from "lucide-react";
import { siTiktok } from "simple-icons/icons";
import mockup from "./assets/mockup-feed.png";
import logo from "./assets/logo-current.png";

import "./App.css";

emailjs.init("YOUR_PUBLIC_KEY_HERE");

const navSections = [
  { label: "Inicio", id: "home" },
  { label: "Características", id: "features" },
  { label: "Waitlist", id: "waitlist" },
];

const stackingCards = [
  {
    content: (
      <>
        <h2 className="text-3xl md:text-4xl font-bold text-[#FEFBF6] mb-12 text-center">
          Todo en un solo lugar
        </h2>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <Calendar className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">
              Calendarios Sociales
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sigue los calendarios públicos de tus amigos, equipos o artistas
              favoritos.
            </p>
          </div>
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <MapPin className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">
              Radar Discovery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              ¿Sin planes? Abre el mapa y descubre eventos cerca de ti.
            </p>
          </div>
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <Star className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">
              Reward System
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Gana popularidad creando los mejores eventos de tu zona.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <h2
          id="features"
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
        >
          ¿Por qué elegir Current Calendar?
        </h2>

        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <h3 className="text-xl font-bold text-[#11423F] mb-3">
              Interfaz moderna y fácil de usar
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nuestra interfaz intuitiva te permite navegar con facilidad y
              encontrar eventos de forma rápida y eficiente.
            </p>
          </div>

          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <h3 className="text-xl font-bold text-[#11423F] mb-3">
              Privacidad y seguridad de tus datos
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tus datos están protegidos con las más altas normas de seguridad.
              No compartimos información personal sin tu consentimiento.
            </p>
          </div>

          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <h3 className="text-xl font-bold text-[#11423F] mb-3">
              Soporte y actualizaciones constantes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Atento a nuestras redes sociales para recibir las últimas
              actualizaciones y noticias sobre Current Calendar.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <h2 className="text-3xl md:text-4xl font-bold text-[#FEFBF6] mb-12 text-center">
          Integraciones y Personalización
        </h2>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <Link2 className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">
              Google Calendar
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sincroniza tus eventos automáticamente.
            </p>
          </div>
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <UsersRound className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Comunidad</h3>
            <p className="text-gray-600 leading-relaxed">
              Encuentra el nicho adecuado para tus planes.
            </p>
          </div>
          <div className="p-8 bg-[#FEFBF6] rounded-3xl shadow-xl text-center border border-transparent hover:border-[#E88D87]/30 transition group max-w-sm">
            <div className="w-14 h-14 bg-[#11423F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition mx-auto">
              <Palette className="w-7 h-7 text-[#FEFBF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#11423F] mb-3">Temas</h3>
            <p className="text-gray-600 leading-relaxed">
              Personaliza la apariencia a tu gusto.
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
      behavior: "smooth",
    });
  }
}

function App() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
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
          el.classList.add("opacity-100", "scale-100");
          el.classList.remove("opacity-0", "scale-95");
        } else {
          el.classList.remove("opacity-100", "scale-100");
          el.classList.add("opacity-0", "scale-95");
        }
      });
    }
    window.addEventListener("scroll", updateCardVisibility);
    updateCardVisibility();
    return () => window.removeEventListener("scroll", updateCardVisibility);
  }, []);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || email.trim() === "") {
      setMessage({ type: "error", text: "⚠️ Por favor, escribe tu email." });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const adminEmail = import.meta.env.VITE_EMAILJS_ADMIN_EMAIL;

    try {
      await emailjs.send(serviceId, templateId, {
        to_email: adminEmail,
        user_email: email,
        date: new Date().toLocaleDateString("es-ES"),
      });

      setMessage({
        type: "success",
        text: `¡Genial! Hemos apuntado ${email} a la lista de espera 🦦`,
      });
      setEmail("");

      setTimeout(() => setMessage(null), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage({
        type: "error",
        text: "Error al enviar. Intenta más tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#FEFBF6] text-[#11423F] w-full overflow-x-hidden font-sans">
      {}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#11423F] shadow-lg flex items-center px-4 md:px-8 py-3 justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <div className="w-10 h-10 bg-[#FEFBF6] rounded-full flex items-center justify-center overflow-hidden relative">
            <img src={logo} alt="C" className="w-full h-full object-cover" />
            <span className="text-[#11423F] font-bold text-xl absolute">C</span>
          </div>
          <span className="font-bold text-[#FEFBF6] text-xl tracking-tight">
            current
          </span>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {navSections.map((item) => (
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
      <section
        id="home"
        className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-[#fdf7ed] rounded-3xl shadow-xl relative overflow-hidden z-10"
      >
        <div className="md:w-1/2 text-left space-y-6">
          <span className="inline-block bg-[#E88D87] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm">
            Coming Soon 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#11423F] leading-[1.1]">
            Go with <br /> <span className="text-[#11423F]">the flow.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            La red social para descubrir eventos y compartir calendarios. Más
            social que Google Calendar, más organizado que Instagram.
          </p>
          <div className="pt-4">
            <button
              onClick={() => scrollToSection("waitlist")}
              className="bg-[#11423F] border-none text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition cursor-pointer"
            >
              Unirme a la Beta
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E88D87]/10 rounded-full blur-3xl -z-10"></div>
          <img
            src={mockup}
            alt="Mockup"
            className="w-80 md:w-[450px] rounded-[3rem] shadow-2xl border-4 border-white rotate-[-2deg]"
          />
        </div>
      </section>

      {}
      <section id="features" className="py-24 bg-[#FEFBF6]">
        <div className="flex flex-col gap-12">
          {stackingCards.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="card rounded-[3rem] shadow-2xl transition-all duration-700 opacity-0 scale-95 mx-auto flex items-center justify-center p-12"
              style={{
                background: "#11423F",
                minHeight: "400px",
                width: "90vw",
                maxWidth: "1100px",
              }}
            >
              <div className="w-full text-[#FEFBF6]">{card.content}</div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section
        id="waitlist"
        className="py-24 px-6 bg-[#11423F] text-[#FEFBF6] text-center"
      >
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">¿Listo para fluir?</h2>
          <form
            onSubmit={handleJoinWaitlist}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-xl text-black bg-[#FEFBF6] outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#E88D87] border-none text-white font-bold px-8 py-4 rounded-xl shadow-lg cursor-pointer hover:brightness-110 transition"
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </form>
          {message && (
            <div
              className={`p-4 rounded-xl font-bold ${message.type === "success" ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}`}
            >
              {message.text}
            </div>
          )}
          <div className="mt-6">
            <a
              href="https://forms.cloud.microsoft/r/UErS0DvUBR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E88D87] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#D97D7D] hover:scale-105 transition-all duration-300"
            >
              ¿Tienes alguna sugerencia? Pulsa aquí
            </a>
          </div>
        </div>
      </section>

      {}
      <footer
        className="py-8 text-center text-sm text-[#11423F]/60 bg-[#efeae2]"
        style={{
          position: "relative",
          zIndex: 0,
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.instagram.com/current.calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#11423F] text-[#efeae2] flex items-center justify-center hover:bg-[#E88D87] transition-colors shadow-md"
            >
              <Instagram className="w-5 h-5 text-[#efeae2]" />
            </a>
            <a
              href="https://x.com/currentcalendar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#11423F] text-[#efeae2] flex items-center justify-center hover:bg-[#E88D87] transition-colors shadow-md"
            >
              <Twitter className="w-5 h-5 text-[#efeae2]" />
            </a>
            <a
              href="https://www.linkedin.com/company/currentcalendar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#11423F] text-[#efeae2] flex items-center justify-center hover:bg-[#E88D87] transition-colors shadow-md"
            >
              <Linkedin className="w-5 h-5 text-[#efeae2]" />
            </a>
            <a
              href="https://www.tiktok.com/@current.calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#11423F] text-[#efeae2] flex items-center justify-center hover:bg-[#E88D87] transition-colors shadow-md"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d={siTiktok.path} className="w-5 h-5 text-[#efeae2]" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@currentcalendar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#11423F] text-[#efeae2] flex items-center justify-center hover:bg-[#E88D87] transition-colors shadow-md"
            >
              <Youtube className="w-5 h-5 text-[#efeae2]" />
            </a>
          </div>
          <p>© 2026 Current App</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
