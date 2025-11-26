import React from 'react';
import { Truck, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/95 backdrop-blur-3xl border-t border-white/10 transition-colors duration-300 overflow-hidden">
      {/* Efecto de brillo superior animado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      
      {/* Ondas de fondo decorativas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-white/20 to-gray-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-300/20 to-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Contenido principal - RESPONSIVE */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          
          {/* Lado izquierdo: Logo PREMIUM con IMAGEN y redes sociales */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            
            {/* Logo ULTRA PREMIUM CON IMAGEN - RESPONSIVE */}
            <div className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer">
              <div className="relative">
                {/* Anillo exterior pulsante */}
                <div className="absolute -inset-2 sm:-inset-2.5 bg-gradient-to-r from-white/40 via-gray-300/40 to-white/40 rounded-full opacity-0 group-hover:opacity-60 blur-xl sm:blur-2xl transition-all duration-700 animate-pulse"></div>
                
                {/* Resplandor base */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-white rounded-lg sm:rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
                
                {/* Contenedor del logo */}
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-[1.5px] shadow-lg sm:shadow-xl transform group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-2 sm:group-hover:rotate-3 transition-all duration-300">
                  
                  {/* Borde brillante */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-white/40 via-gray-300/50 to-white/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Fondo interno */}
                  <div className="relative w-full h-full rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">
                    
                    {/* Reflexión superior */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent rounded-t-lg sm:rounded-t-xl"></div>
                    
                    {/* Destello diagonal - SOLO DESKTOP */}
                    <div className="hidden sm:block absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    {/* IMAGEN DEL LOGO - RESPONSIVE */}
                    <img 
                      src="/logo.png"
                      alt="VFTransportes Logo" 
                      className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain z-10 drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] sm:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] sm:group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,1)] transition-all duration-500 group-hover:brightness-125 group-hover:contrast-110"
                    />
                    
                    {/* Partículas brillantes */}
                    <div className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full top-1 left-1 opacity-0 group-hover:opacity-100 animate-ping shadow-[0_0_6px_rgba(255,255,255,1)]"></div>
                    <div className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-300 rounded-full bottom-1 right-1 opacity-0 group-hover:opacity-100 animate-ping shadow-[0_0_6px_rgba(209,213,219,1)]" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
                
                {/* Reflejo inferior */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1.5 sm:w-8 sm:h-2 bg-gradient-to-b from-white/40 to-transparent blur-sm rounded-full"></div>
              </div>
              
              {/* Texto del logo - RESPONSIVE */}
              <div className="flex flex-col leading-tight relative">
                <div className="relative overflow-hidden">
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white group-hover:from-gray-100 group-hover:via-white group-hover:to-gray-100 transition-all duration-500 bg-[length:200%_auto] animate-gradient-x">
                    VFTransportes
                  </h3>
                  
                  {/* Subrayado animado */}
                  <div className="absolute -bottom-0.5 left-0 h-[1px] sm:h-[1.5px] w-0 group-hover:w-full bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-700 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.6)]"></div>
                </div>
                
                <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 tracking-[0.1em] sm:tracking-wider uppercase group-hover:text-gray-200 group-hover:tracking-[0.15em] sm:group-hover:tracking-[0.2em] transition-all duration-300">
                  Transporte Profesional
                </p>
              </div>
            </div>
            
            {/* Línea divisoria vertical - RESPONSIVE */}
            <div className="hidden sm:block w-px h-8 sm:h-10 bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-50"></div>
            
            {/* Redes sociales PREMIUM - RESPONSIVE */}
            <div className="flex gap-2 sm:gap-2.5">
              {[
                { 
                  Icon: Instagram, 
                  href: "https://www.instagram.com/vftransportesuy/", 
                  label: "Instagram", 
                  color: "from-pink-500 to-purple-600" 
                },
                { 
                  Icon: Phone, 
                  href: "https://wa.me/+59894044545?text=" + encodeURIComponent("Hola, me gustaría recibir más información sobre ..."), 
                  label: "WhatsApp", 
                  color: "from-green-500 to-emerald-600" 
                },
              ].map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="relative group/social"
                >
                  {/* Resplandor del botón */}
                  <div className={`absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br ${color} opacity-0 group-hover/social:opacity-60 blur-lg transition-all duration-500`}></div>
                  
                  {/* Botón principal */}
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-gray-900/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-white/20 hover:to-gray-300/20 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-white/20 border border-gray-700/50 hover:border-white/30 overflow-hidden">
                    
                    {/* Destello en hover - SOLO TABLET+ */}
                    <div className="hidden sm:block absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover/social:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Icono */}
                    <Icon size={14} className="relative z-10 group-hover/social:scale-110 transition-transform duration-300" />
                    
                    {/* Partícula decorativa */}
                    <div className="absolute top-1 right-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full opacity-0 group-hover/social:opacity-100 group-hover/social:animate-ping"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Lado derecho: Copyright y Made with - RESPONSIVE */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
            
            {/* Copyright con efectos */}
            <div className="relative group/copy text-gray-400 text-xs sm:text-sm font-medium text-center sm:text-left">
              <div className="relative z-10">
                © {currentYear}{' '}
                <span className="relative inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover/copy:from-blue-300 group-hover/copy:to-pink-300 transition-all duration-500">
                  FDRoots
                  {/* Subrayado en hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 group-hover/copy:w-full transition-all duration-500 rounded-full"></span>
                </span>
                {' '}·Derechos Reservados
              </div>
              
              {/* Brillo sutil de fondo */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover/copy:opacity-100 blur-xl transition-opacity duration-500 rounded-lg"></div>
            </div>

            {/* Línea divisoria vertical - RESPONSIVE */}
            <div className="hidden sm:block w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-50"></div>

            {/* Made with PREMIUM */}
            <div className="relative group/truck flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm font-medium">
              <span className="group-hover/truck:text-gray-200 transition-colors duration-300">
                Hecho con pasión
              </span>
              
              {/* Icono de camión con efectos */}
              <div className="relative">
                {/* Humo animado */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover/truck:opacity-100 transition-opacity duration-500">
                  <div className="w-0.5 h-2 bg-gradient-to-t from-white to-transparent rounded-full animate-pulse"></div>
                  <div className="w-0.5 h-2 bg-gradient-to-t from-gray-300 to-transparent rounded-full animate-pulse absolute left-1" style={{ animationDelay: '0.3s' }}></div>
                </div>
                
                {/* Resplandor del camión */}
                <div className="absolute inset-0 bg-white/30 blur-lg opacity-0 group-hover/truck:opacity-100 group-hover/truck:scale-150 transition-all duration-500 rounded-full"></div>
                
                {/* Icono */}
                <Truck 
                  size={14} 
                  className="relative text-gray-300 group-hover/truck:text-white group-hover/truck:scale-125 group-hover/truck:translate-x-1 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de brillo decorativo inferior - más pronunciado */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 sm:w-96 h-12 sm:h-16 bg-gradient-to-t from-white/10 via-gray-300/5 to-transparent blur-2xl pointer-events-none"></div>
      
      {/* Línea inferior de brillo */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;