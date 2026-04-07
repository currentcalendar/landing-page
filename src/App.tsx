import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Calendar,
  MapPin,
  Star,
  Users,
  Radar,
  CheckCircle2,
  X,
  ChevronDown,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  BadgeCheck,
  BarChart3,
  MessageCircle,
  Megaphone,
  Lock,
  Globe,
  Heart,
  Zap,
  Menu,
} from "lucide-react";
import { siTiktok } from "simple-icons/icons";
import logo from "./assets/logo-current.png";
import mockupFeed from "./assets/mockup-feed.png";
import mockupCalendar from "./assets/mockup-calendar.png";
import mockupMap from "./assets/mockup-map.png";

import "./App.css";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 70,
      behavior: "smooth",
    });
  }
}

const navSections = [
  { label: "Inicio", id: "home" },
  { label: "Características", id: "features" },
  { label: "Planes", id: "pricing" },
  { label: "Waitlist", id: "waitlist" },
];

const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "Para empezar a fluir con tu comunidad",
    color: "free",
    features: [
      { text: "Interacciones ilimitadas", included: true },
      { text: "Hasta 10 calendarios favoritos", included: true },
      { text: "2 suscripciones a calendarios públicos", included: true },
      { text: "2 suscripciones a calendarios privados", included: true },
      { text: "Radar del día actual", included: true },
      { text: "Personalización de perfil básica", included: false },
      { text: "Radar completo de eventos", included: false },
      { text: "Calendarios ilimitados", included: false },
      { text: "Badge de verificación", included: false },
    ],
    cta: "Empezar gratis",
    popular: false,
  },
  {
    name: "Standard",
    price: { monthly: 4.99, yearly: 45.99 },
    description: "Para creators y usuarios que quieren el control total",
    color: "standard",
    features: [
      { text: "Todo lo de Free", included: true },
      { text: "Suscripciones ilimitadas", included: true },
      { text: "Creación de calendarios ilimitada", included: true },
      { text: "Badge de verificación", included: true },
      { text: "Personalización del calendario (imagen, etc.)", included: true },
      { text: "Full media en eventos", included: true },
      { text: "Radar completo de eventos", included: true },
      { text: "Analíticas de calendarios", included: false },
      { text: "Promocionar en buscador", included: false },
    ],
    cta: "Unirse al Standard",
    popular: true,
  },
  {
    name: "Business",
    price: { monthly: 9.99, yearly: 109.99 },
    description: "Para organizaciones, eventos y creadores profesionales",
    color: "business",
    features: [
      { text: "Todo lo de Standard", included: true },
      { text: "Analíticas avanzadas de calendarios", included: true },
      { text: "Promocionar en el buscador", included: true },
      { text: "Chat para asistentes al evento", included: true },
      { text: "Badge Business / Creator", included: true },
      { text: "Badge de verificación", included: true },
      { text: "Prioridad en soporte", included: true },
      { text: "Acceso anticipado a nuevas funciones", included: true },
    ],
    cta: "Empezar con Business",
    popular: false,
  },
];

const features = [
  { icon: Calendar, title: "Tu calendario, tu mundo", description: "Gestiona tus eventos personales y mantén todo organizado en un solo lugar. Sincroniza con Google Calendar para que nada se te escape.", tag: "Personal" },
  { icon: Users, title: "Sigue a quien te importa", description: "Suscríbete a los calendarios públicos o privados de amigos, artistas, equipos deportivos o cualquier creador. Sus eventos aparecen directamente en tu vista.", tag: "Social" },
  { icon: Radar, title: "Radar de eventos", description: "¿Sin planes? Abre el mapa y descubre eventos que están ocurriendo cerca de ti ahora mismo. Encuentra algo nuevo cada día.", tag: "Discovery" },
  { icon: Globe, title: "Calendarios públicos y privados", description: "Crea calendarios para tus eventos y compártelos con quien quieras. Tú controlas quién puede verlos y suscribirse.", tag: "Control" },
  { icon: Star, title: "Sistema de favoritos", description: "Guarda los calendarios que más te gustan y accede a ellos rápidamente. Nunca más pierdas de vista los eventos que te interesan.", tag: "Organización" },
  { icon: Lock, title: "Privacidad primero", description: "Tú decides qué compartir y con quién. Tus datos nunca se venden ni se comparten sin tu consentimiento explícito.", tag: "Seguridad" },
];

function App() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) {
          el.classList.add("revealed");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || email.trim() === "") {
      setMessage({ type: "error", text: "Por favor, escribe tu email." });
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
      setMessage({ type: "success", text: `¡Genial! ${email} apuntado a la lista 🦦` });
      setEmail("");
      setTimeout(() => setMessage(null), 5000);
    } catch {
      setMessage({ type: "error", text: "Error al enviar. Intenta más tarde." });
    } finally {
      setIsLoading(false);
    }
  };

  const yearlyDiscount = (plan: typeof plans[0]) => {
    if (plan.price.monthly === 0) return null;
    const monthlyTotal = plan.price.monthly * 12;
    const saved = monthlyTotal - plan.price.yearly;
    return Math.round((saved / monthlyTotal) * 100);
  };

  return (
    <div className="cc-root">
      {/* NAV */}
      <nav className="cc-nav">
        <div className="cc-nav-inner">
          <button className="cc-logo-btn" onClick={() => scrollToSection("home")}>
            <div className="cc-logo-img-wrap">
              <img src={logo} alt="Current Calendar" className="cc-logo-img" />
            </div>
            <span className="cc-logo-text">current</span>
          </button>
          <div className="cc-nav-links">
            {navSections.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="cc-nav-link">
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollToSection("waitlist")} className="cc-nav-cta">
              Únete a la Beta
            </button>
          </div>
          <button className="cc-mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="cc-mobile-menu">
            {navSections.map((item) => (
              <button key={item.id} onClick={() => { scrollToSection(item.id); setMobileMenuOpen(false); }} className="cc-mobile-link">
                {item.label}
              </button>
            ))}
            <button onClick={() => { scrollToSection("waitlist"); setMobileMenuOpen(false); }} className="cc-mobile-cta">
              Únete a la Beta
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="cc-hero" ref={heroRef}>
        <div className="cc-hero-bg">
          <div className="cc-hero-blob cc-hero-blob-1" />
          <div className="cc-hero-blob cc-hero-blob-2" />
        </div>
        <div className="cc-hero-inner">
          <div className="cc-hero-content">
            <div className="cc-hero-badge">
              <Zap size={13} /> Coming Soon · 2026
            </div>
            <h1 className="cc-hero-title">
              El calendario<br /><em>social</em> que<br />necesitabas.
            </h1>
            <p className="cc-hero-desc">
              Más social, más organizado.<br />
              Todo en un solo lugar.<br />
              Sigue eventos de las personas que te importan.
            </p>
            <div className="cc-hero-actions">
              <button onClick={() => scrollToSection("waitlist")} className="cc-btn-primary">
                Unirme a la Beta
              </button>
              <button onClick={() => scrollToSection("features")} className="cc-btn-ghost">
                Ver cómo funciona <ChevronDown size={16} />
              </button>
            </div>
            <div className="cc-hero-stats">
              <div className="cc-stat">
                <span className="cc-stat-number">∞</span>
                <span className="cc-stat-label">Calendarios por seguir</span>
              </div>
              <div className="cc-stat-sep" />
              <div className="cc-stat">
                <span className="cc-stat-number">🗺️</span>
                <span className="cc-stat-label">Radar de eventos</span>
              </div>
              <div className="cc-stat-sep" />
              <div className="cc-stat">
                <span className="cc-stat-number">100%</span>
                <span className="cc-stat-label">Tuyo</span>
              </div>
            </div>
          </div>
          <div className="cc-hero-visual">
            <div className="cc-mockup-stack">
              <div className={`cc-mockup-card cc-mockup-back ${activeFeature === 2 ? "active" : ""}`}>
                <img src={mockupMap} alt="Radar de eventos" />
                <div className="cc-mockup-label"><MapPin size={13} /> Radar</div>
              </div>
              <div className={`cc-mockup-card cc-mockup-mid ${activeFeature === 1 ? "active" : ""}`}>
                <img src={mockupCalendar} alt="Tu calendario" />
                <div className="cc-mockup-label"><Calendar size={13} /> Calendario</div>
              </div>
              <div className={`cc-mockup-card cc-mockup-front ${activeFeature === 0 ? "active" : ""}`}>
                <img src={mockupFeed} alt="Feed social" />
                <div className="cc-mockup-label"><Users size={13} /> Feed</div>
              </div>
            </div>
            <div className="cc-mockup-dots">
              {[0, 1, 2].map((i) => (
                <button key={i} className={`cc-mockup-dot ${activeFeature === i ? "active" : ""}`} onClick={() => setActiveFeature(i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="cc-strip">
        <div className="cc-strip-inner">
          <span>Tu calendario personal</span><span className="cc-strip-dot">◆</span>
          <span>Calendarios públicos y privados</span><span className="cc-strip-dot">◆</span>
          <span>Radar de eventos cercanos</span><span className="cc-strip-dot">◆</span>
          <span>Discovery de planes</span><span className="cc-strip-dot">◆</span>
          <span>Badge de verificación</span><span className="cc-strip-dot">◆</span>
          <span>Sin anuncios</span>
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="cc-features">
        <div className="cc-section-inner">
          <div className="cc-section-header reveal-on-scroll">
            <div className="cc-eyebrow">Funcionalidades</div>
            <h2 className="cc-section-title">
              Todo lo que necesitas<br />para vivir tu agenda social
            </h2>
            <p className="cc-section-desc">
              Current Calendar no es solo un calendario. Es la manera de estar al tanto de todo lo que ocurre en tu entorno.
            </p>
          </div>
          <div className="cc-features-grid">
            {features.map((feature, i) => (
              <div key={i} className="cc-feature-card reveal-on-scroll" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="cc-feature-icon-wrap"><feature.icon size={22} /></div>
                <div className="cc-feature-tag">{feature.tag}</div>
                <h3 className="cc-feature-title">{feature.title}</h3>
                <p className="cc-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="cc-showcase">
        <div className="cc-section-inner">
          <div className="cc-showcase-row reveal-on-scroll">
            <div className="cc-showcase-text">
              <div className="cc-eyebrow">Feed Social</div>
              <h2 className="cc-showcase-title">Sigue a quien te importa, vive sus planes</h2>
              <p className="cc-showcase-desc">
                Suscríbete a los calendarios de tus amigos, artistas favoritos o equipos. Todos sus eventos aparecen en tu vista principal para que nunca te pierdas nada.
              </p>
              <ul className="cc-showcase-list">
                <li><CheckCircle2 size={16} /> Calendarios públicos y privados</li>
                <li><CheckCircle2 size={16} /> Notificaciones de nuevos eventos</li>
                <li><CheckCircle2 size={16} /> Gestión de suscripciones</li>
              </ul>
            </div>
            <div className="cc-showcase-img-wrap">
              <img src={mockupFeed} alt="Feed de eventos" className="cc-showcase-img" />
              <div className="cc-showcase-blob" />
            </div>
          </div>
          <div className="cc-showcase-row cc-showcase-row-reverse reveal-on-scroll">
            <div className="cc-showcase-text">
              <div className="cc-eyebrow">Radar & Discovery</div>
              <h2 className="cc-showcase-title">¿Sin planes? Descubre qué pasa cerca</h2>
              <p className="cc-showcase-desc">
                Abre el mapa y encuentra eventos que están ocurriendo ahora mismo en tu zona. El radar te muestra lo que hay alrededor, de forma visual e intuitiva.
              </p>
              <ul className="cc-showcase-list">
                <li><CheckCircle2 size={16} /> Vista de mapa interactivo</li>
                <li><CheckCircle2 size={16} /> Eventos nuevos cada día</li>
              </ul>
            </div>
            <div className="cc-showcase-img-wrap">
              <img src={mockupMap} alt="Radar de eventos" className="cc-showcase-img" />
              <div className="cc-showcase-blob cc-showcase-blob-salmon" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="cc-pricing">
        <div className="cc-section-inner">
          <div className="cc-section-header reveal-on-scroll">
            <div className="cc-eyebrow">Planes</div>
            <h2 className="cc-section-title">
              Empieza gratis.<br />Crece cuando estés listo.
            </h2>
            <p className="cc-section-desc">
              Sin sorpresas, sin letra pequeña. Elige el plan que se adapte a cómo quieres vivir tu calendario social.
            </p>
            <div className="cc-billing-toggle">
              <button className={`cc-billing-btn ${billing === "monthly" ? "active" : ""}`} onClick={() => setBilling("monthly")}>Mensual</button>
              <button className={`cc-billing-btn ${billing === "yearly" ? "active" : ""}`} onClick={() => setBilling("yearly")}>
                Anual <span className="cc-billing-save">Ahorra hasta 23%</span>
              </button>
            </div>
          </div>
          <div className="cc-pricing-grid">
            {plans.map((plan, i) => (
              <div key={plan.name} className={`cc-plan-card reveal-on-scroll ${plan.popular ? "cc-plan-popular" : ""}`} style={{ animationDelay: `${i * 100}ms` }}>
                {plan.popular && <div className="cc-plan-badge">Más popular</div>}
                <div className="cc-plan-header">
                  <div className={`cc-plan-color-dot cc-plan-dot-${plan.color}`} />
                  <h3 className="cc-plan-name">{plan.name}</h3>
                </div>
                <div className="cc-plan-price">
                  {plan.price.monthly === 0 ? (
                    <span className="cc-price-amount">Gratis</span>
                  ) : (
                    <>
                      <span className="cc-price-amount">
                        {billing === "monthly" ? `${plan.price.monthly}€` : `${(plan.price.yearly / 12).toFixed(2)}€`}
                      </span>
                      <span className="cc-price-period">/mes</span>
                      {billing === "yearly" && (
                        <div className="cc-price-yearly">
                          {plan.price.yearly}€/año<span className="cc-price-save"> · {yearlyDiscount(plan)}% off</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <p className="cc-plan-desc">{plan.description}</p>
                <button onClick={() => scrollToSection("waitlist")} className={`cc-plan-cta ${plan.popular ? "cc-plan-cta-primary" : "cc-plan-cta-secondary"}`}>
                  {plan.cta}
                </button>
                <ul className="cc-plan-features">
                  {plan.features.filter(f => f.text).map((feature, j) => (
                    <li key={j} className={`cc-plan-feature ${feature.included ? "included" : "excluded"}`}>
                      {feature.included ? <CheckCircle2 size={15} className="cc-feat-check" /> : <X size={15} className="cc-feat-x" />}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="cc-perks reveal-on-scroll">
            <div className="cc-perks-title">Incluido en Business:</div>
            <div className="cc-perks-grid">
              <div className="cc-perk"><BarChart3 size={20} /><span>Analíticas avanzadas</span></div>
              <div className="cc-perk"><Megaphone size={20} /><span>Promoción en el buscador</span></div>
              <div className="cc-perk"><MessageCircle size={20} /><span>Chat para asistentes</span></div>
              <div className="cc-perk"><BadgeCheck size={20} /><span>Badge Business/Creator</span></div>
              <div className="cc-perk"><Heart size={20} /><span>Soporte prioritario</span></div>
              <div className="cc-perk"><Zap size={20} /><span>Acceso anticipado</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="cc-waitlist">
        <div className="cc-waitlist-inner">
          <div className="cc-waitlist-blob cc-waitlist-blob-1" />
          <div className="cc-waitlist-blob cc-waitlist-blob-2" />
          <div className="cc-waitlist-content reveal-on-scroll">
            <div className="cc-eyebrow cc-eyebrow-light">Acceso anticipado</div>
            <h2 className="cc-waitlist-title">¿Listo para fluir?</h2>
            <p className="cc-waitlist-desc">
              Apúntate a la lista de espera y sé de los primeros en acceder a Current Calendar cuando lancemos en 2026.
            </p>
            <form onSubmit={handleJoinWaitlist} className="cc-waitlist-form">
              <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="cc-waitlist-input" />
              <button type="submit" disabled={isLoading} className="cc-waitlist-btn">
                {isLoading ? "Enviando..." : "Unirme"}
              </button>
            </form>
            {message && (
              <div className={`cc-waitlist-msg ${message.type === "success" ? "success" : "error"}`}>
                {message.text}
              </div>
            )}
            <a href="https://forms.cloud.microsoft/r/UErS0DvUBR" target="_blank" rel="noopener noreferrer" className="cc-waitlist-suggest">
              ¿Tienes alguna sugerencia? Cuéntanosla aquí →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cc-footer">
        <div className="cc-footer-inner">
          <div className="cc-footer-top">
            <div className="cc-footer-brand">
              <div className="cc-footer-logo-wrap">
                <img src={logo} alt="Current" className="cc-footer-logo" />
              </div>
              <span className="cc-footer-brand-name">current</span>
              <p className="cc-footer-tagline">El calendario social que necesitabas.</p>
            </div>
            <div className="cc-footer-links">
              <div className="cc-footer-col">
                <div className="cc-footer-col-title">Navegación</div>
                {navSections.map((s) => (
                  <button key={s.id} onClick={() => scrollToSection(s.id)} className="cc-footer-link">{s.label}</button>
                ))}
              </div>
              <div className="cc-footer-col">
                <div className="cc-footer-col-title">Síguenos</div>
                <div className="cc-footer-socials">
                  <a href="https://www.instagram.com/current.calendar" target="_blank" rel="noopener noreferrer" className="cc-social-link"><Instagram size={18} />Instagram</a>
                  <a href="https://x.com/currentcalendar" target="_blank" rel="noopener noreferrer" className="cc-social-link"><Twitter size={18} />Twitter / X</a>
                  <a href="https://www.tiktok.com/@current.calendar" target="_blank" rel="noopener noreferrer" className="cc-social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d={siTiktok.path} /></svg>TikTok
                  </a>
                  <a href="https://www.linkedin.com/company/currentcalendar/" target="_blank" rel="noopener noreferrer" className="cc-social-link"><Linkedin size={18} />LinkedIn</a>
                  <a href="https://www.youtube.com/@currentcalendar" target="_blank" rel="noopener noreferrer" className="cc-social-link"><Youtube size={18} />YouTube</a>
                </div>
              </div>
            </div>
          </div>
          <div className="cc-footer-bottom">
            <p>© 2026 Current App. Todos los derechos reservados.</p>
            <div className="cc-footer-legal"><span>Privacidad</span><span>·</span><span>Términos</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;