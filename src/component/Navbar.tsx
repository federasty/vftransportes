import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

// --- DEFINICIONES DE TIPOS (TYPE MODULES) ---
interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'flota', label: 'Nuestra Flota' },
  { id: 'materiales', label: 'Materiales' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // 1. Manejo de Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Manejo de WhatsApp
  const handleWhatsAppClick = useCallback(() => {
    window.open('https://wa.me/59894044545?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20transporte', '_blank');
  }, []);

  // Componente de botón de navegación reutilizable (Sin cambios)
  const NavButton: React.FC<{ item: NavItem }> = ({ item }) => (
    <button
      key={item.id}
      onClick={() => setActiveSection(item.id)}
      className="relative px-4 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-500 group"
    >
      <div className={`absolute inset-0 transition-all duration-500 ${activeSection === item.id
        ? 'bg-gradient-to-br from-white/10 via-white/5 to-transparent scale-100 opacity-100'
        : 'bg-white/0 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-white/5'
        }`}></div>
      <div className={`absolute inset-0 transition-all duration-500 ${activeSection === item.id
        ? 'border border-white/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]'
        : 'border border-white/0 group-hover:border-white/20'
        }`}></div>
      <span className={`relative z-10 transition-all duration-500 ${activeSection === item.id
        ? 'bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent'
        : 'text-gray-400 group-hover:text-white'
        }`}>
        {item.label}
      </span>
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500 ${activeSection === item.id ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
        }`}>
        <div className="absolute inset-0 bg-white blur-sm"></div>
      </div>
      {activeSection === item.id && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
      )}
    </button>
  );

  return (
    <>
      {/* Elite Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
        ? 'bg-black/95 backdrop-blur-3xl shadow-[0_10px_100px_rgba(255,255,255,0.1)] border-b border-white/10'
        : 'bg-black/60 backdrop-blur-2xl border-b border-white/5'
        }`}>

        {/* Elegant Top Bar */}
        <div className="border-b border-white/5 bg-gradient-to-r from-black via-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="flex items-center justify-between h-8 sm:h-10 text-[10px] sm:text-xs text-white">
              
              {/* [CAMBIO CLAVE] Se eliminó 'hidden sm:flex' para mostrar el teléfono en móvil */}
              <div className="flex items-center gap-4 md:gap-8"> 
                {/* Teléfono */}
                <a href="tel:+59894044545" className="flex items-center gap-1.5 sm:gap-2 text-white hover:text-gray-300 transition-all duration-300 cursor-pointer group">
                  <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="tracking-wide">+598 94 044 545</span>
                </a>
                
                {/* Montevideo (Oculto en móvil para ahorrar espacio si el número ya está visible) */}
                <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 text-gray-500 hover:text-white transition-all duration-300 cursor-pointer group">
                  <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="tracking-wide hidden md:inline">Montevideo, Uruguay</span>
                  <span className="tracking-wide md:hidden">MVD, UY</span>
                </div>
              </div>
              
              {/* Servicio Disponible */}
              <div className="flex items-center gap-1.5 sm:gap-2 font-semibold tracking-wide">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-pulse text-white" />
                <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                  <span className="hidden sm:inline">Servicio Disponible</span>
                  {/* Simplificamos el texto para móvil */}
                  <span className="sm:hidden">Disponible</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Premium Navbar (Contenido de Logo y Navegación) - Sin cambios de código aquí */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">

            {/* Ultra Premium Logo con Efecto Hover */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 group cursor-pointer">
              <div className="relative">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-500 to-gray-300 rounded-full blur-xl sm:blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>

                {/* Rotating Outer Ring */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-white/40 via-transparent to-white/40 group-hover:animate-spin" style={{ animationDuration: '3s' }}></div>
                </div>

                {/* Main Logo - Responsive sizes */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                bg-gradient-to-br from-gray-300 via-gray-400 to-gray-300 rounded-full
                flex items-center justify-center border-2 sm:border-[3px] border-white/20
                shadow-[0_0_30px_rgba(255,255,255,0.3)] sm:shadow-[0_0_50px_rgba(255,255,255,0.3)]
                group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]
                sm:group-hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all duration-700 overflow-hidden">

                  {/* Logo fijo usando la ruta pública, sin padding */}
                  <img
                    src="/logo.png"
                    alt="Logo de la empresa"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Animated Dots */}
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-ping"></div>
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              </div>

              {/* Título de la empresa (Sin cambios) */}
              <div className="hidden sm:block">
                <div className="relative">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter leading-none mb-1 sm:mb-2">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] sm:drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                      TRANSPORTE
                    </span>
                  </h1>
                  <div className="hidden md:flex items-center gap-2 lg:gap-3">
                    <div className="h-[1.5px] lg:h-[2px] w-12 lg:w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    <p className="text-[9px] lg:text-xs text-gray-400 font-bold tracking-[0.3em] lg:tracking-[0.4em] uppercase">Profesional de Carga</p>
                    <div className="h-[1.5px] lg:h-[2px] w-12 lg:w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Horizontal Navigation (Sin cambios) */}
            <div className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => <NavButton key={item.id} item={item} />)}
            </div>

            {/* Premium Mobile Menu Button (Sin cambios) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-white/20 hover:border-white/40 backdrop-blur-xl transition-all duration-300 group rounded-lg"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors rounded-md"></div>
              <div className="relative flex items-center justify-center">
                {isOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Elite Mobile Menu (Sin cambios) */}
        <div className={`xl:hidden transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-3 sm:px-4 pt-4 sm:pt-6 pb-6 sm:pb-8 space-y-1.5 sm:space-y-2 bg-black/98 backdrop-blur-2xl border-t border-white/10">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={`w-full group relative overflow-hidden transition-all duration-500 rounded-md ${activeSection === item.id ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white via-gray-400 to-white transition-all duration-500 ${activeSection === item.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-5">
                  <span className={`font-bold tracking-[0.15em] uppercase text-xs sm:text-sm transition-all duration-300 ${activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Ultra Premium Floating WhatsApp Button (Sin cambios) */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-[#25D366] blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
        <div className="absolute inset-0 rounded-full p-[3px] group-hover:p-[4px] transition-all duration-500">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] animate-spin" style={{ animationDuration: '3s' }}></div>
        </div>
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] bg-gradient-to-br from-[#25D366] via-[#20BA5A] to-[#128C7E] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] group-hover:shadow-[0_15px_60px_rgba(37,211,102,0.6)] transition-all duration-500 group-hover:scale-110">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
        </div>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 group-hover:translate-x-0 translate-x-2">
          <div className="bg-black/95 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-lg whitespace-nowrap shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <span className="text-white text-xs sm:text-sm font-bold tracking-wider">Cotizar por WhatsApp</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-black/95"></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-active:opacity-30 group-active:scale-150 transition-all duration-300"></div>
      </button>
    </>
  );
}