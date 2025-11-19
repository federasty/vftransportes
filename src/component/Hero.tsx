import React, { useState, useEffect } from 'react';
import { Award, Truck, Clock, Package, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 1024) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const stats = [
    // Nuevo (Basado en el trabajo de transporte): Compromiso con la Seguridad
    { icon: Truck, number: '100%', label: 'Compromiso con la Seguridad', color: 'from-green-600 to-lime-500' },

    // Mantiene: Cargas Completadas
    { icon: Truck, number: '500+', label: 'Cargas Completadas', color: 'from-purple-400 to-pink-400' },

    // Nuevo (Basado en el trabajo de transporte): Cumplimiento Normativo
    { icon: Truck, number: '100%', label: 'Adherencia a Normativas', color: 'from-indigo-500 to-blue-500' },

    // Nuevo (Basado en el trabajo de transporte): Conducción Especializada
    { icon: Truck, number: '100%', label: 'Conducción Especializada', color: 'from-red-400 to-orange-400' },
  ];

  const materials = [
    {
      title: 'Balastro',
      desc: 'Transporte especializado de balastro para construcción con máxima eficiencia',
      icon: Package,
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Pedregullo',
      desc: 'Movimiento profesional de pedregullo en grandes volúmenes garantizado',
      icon: Package,
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Arena',
      desc: 'Entrega puntual de arena de todo tipo para sus proyectos',
      icon: Package,
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'Piedra',
      desc: 'Transporte seguro de piedra en todos los tamaños disponibles',
      icon: Package,
      gradient: 'from-orange-500/20 to-red-500/20'
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* 🌌 MEGA PREMIUM ANIMATED BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden -z-10">

        {/* 1. MESH GRADIENT BASE */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>

        {/* 1.5. IMAGEN DE FONDO (rueda.png) - AÑADIDA AQUÍ */}
        <div className="absolute inset-0">
          <img
            src="/rueda.png" // ⬅️ Ruta en la carpeta public
            alt="Fondo de Rueda Industrial"
            className="w-full h-full object-cover opacity-[0.03] mix-blend-lighten pointer-events-none" // Opacidad muy baja (3%)
            style={{ transform: 'scale(1.2)' }}
          />
        </div>

        {/* 2. ANIMATED MESH GRADIENT ORBS */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-transparent rounded-full blur-[120px] animate-mesh-move-1"></div>
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-transparent rounded-full blur-[120px] animate-mesh-move-2"></div>
          <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] sm:w-[750px] sm:h-[750px] lg:w-[950px] lg:h-[950px] bg-gradient-to-br from-cyan-600/30 via-blue-600/20 to-transparent rounded-full blur-[120px] animate-mesh-move-3"></div>
          <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-pink-600/25 via-purple-600/15 to-transparent rounded-full blur-[120px] animate-mesh-move-4"></div>
        </div>

        {/* 3. VOLUMETRIC LIGHT RAYS */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-blue-400/0 via-blue-400/80 to-blue-400/0 blur-sm animate-light-ray-1"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-purple-400/0 via-purple-400/80 to-purple-400/0 blur-sm animate-light-ray-2"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/80 to-cyan-400/0 blur-sm animate-light-ray-3"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-pink-400/0 via-pink-400/80 to-pink-400/0 blur-sm animate-light-ray-4"></div>
        </div>

        {/* 4. EXPANDING WAVES */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] border border-blue-400/10 rounded-full animate-wave-expand"></div>
          <div className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] border border-purple-400/10 rounded-full animate-wave-expand" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] border border-cyan-400/10 rounded-full animate-wave-expand" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] border border-pink-400/10 rounded-full animate-wave-expand" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* 5. NEURAL NETWORK LINES */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.2 }} />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.2 }} />
            </linearGradient>
            <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          <g className="animate-neural-pulse">
            <line x1="10%" y1="20%" x2="30%" y2="80%" stroke="url(#lineGrad1)" strokeWidth="1" opacity="0.4" />
            <line x1="30%" y1="80%" x2="70%" y2="30%" stroke="url(#lineGrad2)" strokeWidth="1" opacity="0.4" />
            <line x1="70%" y1="30%" x2="90%" y2="70%" stroke="url(#lineGrad3)" strokeWidth="1" opacity="0.4" />
            <line x1="20%" y1="50%" x2="80%" y2="60%" stroke="url(#lineGrad1)" strokeWidth="1" opacity="0.4" />
            <circle cx="10%" cy="20%" r="3" fill="#3b82f6" opacity="0.6" />
            <circle cx="30%" cy="80%" r="3" fill="#8b5cf6" opacity="0.6" />
            <circle cx="70%" cy="30%" r="3" fill="#ec4899" opacity="0.6" />
            <circle cx="90%" cy="70%" r="3" fill="#06b6d4" opacity="0.6" />
          </g>
        </svg>

        {/* 6. ADVANCED PARTICLES */}
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const isLarge = size > 2.5;
          return (
            <div
              key={`particle-${i}`}
              className={`absolute rounded-full ${isLarge ? 'animate-float-large' : 'animate-float-small'}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: isLarge
                  ? `radial-gradient(circle, rgba(59, 130, 246, ${Math.random() * 0.5 + 0.3}) 0%, transparent 70%)`
                  : 'rgba(255, 255, 255, 0.6)',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                boxShadow: isLarge ? '0 0 20px rgba(59, 130, 246, 0.4)' : 'none'
              }}
            />
          );
        })}

        {/* 7. GRID PATTERN WITH GLOW */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_20%,transparent_100%)]"></div>

        {/* 8. SCANLINE EFFECT */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent h-[200px] animate-scanline"></div>
        </div>

        {/* 9. MOUSE TRACKING ORB */}
        <div
          className="absolute w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] lg:w-[1200px] lg:h-[1200px] rounded-full blur-[150px] opacity-20 transition-all duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'screen'
          }}
        />

        {/* 10. GLASS MORPHISM SHAPES */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 animate-float-slow opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-blue-500/10 backdrop-blur-3xl rounded-full border border-blue-400/20 animate-float-slow opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 sm:w-44 sm:h-44 lg:w-60 lg:h-60 bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-400/20 animate-float-slow opacity-30" style={{ animationDelay: '4s' }}></div>

        {/* 11. SPOTLIGHT EFFECT */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-white/5 via-transparent to-transparent opacity-50 blur-3xl"></div>

        {/* 12. NOISE TEXTURE OVERLAY */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-noise animate-noise"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className={`relative pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
{/* Premium Badge (Contenedor con relative) */}
<div className="text-center mb-8 sm:mb-10 lg:mb-12 relative"> 
    {/* Contenedor del Badge */}
    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500 group cursor-pointer rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)]">
        <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
        <span className="text-white font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs lg:text-sm">Líder en Transporte Pesado</span>
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
    </div>
    
    
  {/* ⚙️ RUEDA DERECHA (Más cerca del badge) */}
    <img
        src="/rueda.png" 
        alt="Símbolo de Rueda" 
        className="absolute w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 top-1/2 -translate-y-1/2 opacity-70 animate-spin-slow pointer-events-none brightness-200 contrast-125"
        style={{ right: '05px', filter: 'brightness(1) contrast(1.25) saturate(0)' }} 
    />
    
    {/* ⚙️ RUEDA IZQUIERDA (Más cerca del badge) */}
    <img
        src="/rueda.png" 
        alt="Símbolo de Rueda" 
        className="absolute w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 top-1/2 -translate-y-1/2 opacity-70 animate-spin-slow-reverse pointer-events-none brightness-200 contrast-125"
        style={{ left: '05px', filter: 'brightness(1) contrast(1.25) saturate(0)' }} 
    />
</div>

         {/* Premium Logo Section */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="relative inline-block">
              {/* Animated background glow */}
              <div className="absolute inset-0 blur-3xl opacity-30 animate-pulse">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              </div>

              {/* Orbiting particles */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full blur-sm"></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full blur-sm"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/2 left-0 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full blur-sm"></div>
                <div className="absolute top-1/2 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-blue-300 rounded-full blur-sm"></div>
              </div>

              {/* Main logo container */}
              <div className="relative group">
                
                
                {/* Glowing frame */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Logo wrapper with glassmorphism effect */}
                <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:bg-white/10 group-hover:border-white/20">
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl opacity-50"></div>
                  
                  {/* Logo */}
                  <img 
                    src="/logo.png" 
                    alt="Logo Profesional" 
                    className="relative w-48 h-auto sm:w-64 md:w-80 lg:w-96 xl:w-[450px] drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] animate-float"
                  />
                </div>

                {/* Floating shine effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine"></div>
                </div>
              </div>
            </div>
            
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-light tracking-wide px-4 mt-16">
    Especialistas en movimiento y transporte de materiales de cantera con{' '}
    <span className="relative inline-block">
        <span className="text-white font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"
              style={{ 
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.5), 0 0 5px rgba(0, 255, 255, 0.3)' 
              }}>
            camiones
        </span>
        {/* Eliminamos la línea inferior y usamos solo la sombra para el efecto premium */}
        {/* <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-cyan-400"></span> */}
    </span>
    {' '}de última generación y rendimiento comprobado.
</p>


            {/* Features List */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
              {[
                { icon: CheckCircle, text: 'Confianza' },
                { icon: Clock, text: 'Garantia de tiempo' },
                { icon: CheckCircle, text: 'Integridad' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 group"
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-gray-300 font-semibold text-[10px] sm:text-xs lg:text-sm">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6">
              {/* Botón WhatsApp con degradado verde */}
              <a
                href="https://wa.me/59894044545?text=Hola,%20me%20interesa%20solicitar%20una%20cotización%20para%20transporte%20de%20materiales..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto relative group overflow-hidden rounded-xl"
              >
                {/* Gradiente verde animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 animate-gradient-x"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-500"></div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                {/* Contenido del botón - más compacto en móvil */}
                <div className="relative px-4 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-6 flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                  {/* Logo WhatsApp */}
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 fill-current" />
                  {/* Camión */}
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-all duration-300" />
                  {/* Texto corto en móvil, largo en desktop */}
                  <span className="font-black text-xs sm:text-sm lg:text-lg tracking-[0.1em] sm:tracking-[0.2em] uppercase text-white">
                    <span className="sm:hidden">COTIZAR</span>
                    <span className="hidden sm:inline">SOLICITAR COTIZACIÓN</span>
                  </span>
                  
                </div>

                {/* Sombra verde */}
                <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] sm:shadow-[0_0_50px_rgba(16,185,129,0.4)] group-hover:shadow-[0_0_60px_rgba(16,185,129,0.7)] sm:group-hover:shadow-[0_0_80px_rgba(16,185,129,0.7)] transition-shadow duration-700"></div>
              </a>

            
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-24">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="relative group overflow-hidden bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 hover:border-white/30 transition-all duration-700 hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2 backdrop-blur-xl p-4 sm:p-6 lg:p-10 rounded-xl sm:rounded-2xl"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-xl sm:rounded-2xl`}></div>
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-700"></div>

                  <Icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-12 transition-all duration-700`} />
                  <div className={`text-3xl sm:text-4xl lg:text-6xl font-black mb-2 sm:mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-semibold uppercase text-[10px] sm:text-xs lg:text-sm tracking-[0.1em] sm:tracking-[0.15em] group-hover:text-gray-200 transition-colors duration-500">
                    {stat.label}
                  </div>

                  <div className={`absolute bottom-0 left-0 h-0.5 sm:h-1 w-0 bg-gradient-to-r ${stat.color} group-hover:w-full transition-all duration-700 rounded-full`}>
                    <div className="absolute inset-0 blur-sm sm:blur-md"></div>
                  </div>

                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* Materials Grid */}
          <div>
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Materiales que Transportamos
              </h2>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg">Especialización en movimiento de materiales de cantera</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {materials.map((material, index) => {
                const Icon = material.icon;
                return (
                  <div
                    key={index}
                    className="relative group overflow-hidden bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border-2 border-white/10 hover:border-white/30 transition-all duration-700 hover:scale-105 hover:-translate-y-2 sm:hover:-translate-y-3 backdrop-blur-xl rounded-xl sm:rounded-2xl"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${material.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl sm:rounded-2xl`}></div>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    <div className="relative p-6 sm:p-8 lg:p-10">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] sm:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] sm:group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 backdrop-blur-sm">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                        {material.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                        {material.desc}
                      </p>

                      <div className={`absolute bottom-0 left-0 h-0.5 sm:h-1 w-0 bg-gradient-to-r ${material.gradient.replace('/20', '')} group-hover:w-full transition-all duration-700 rounded-full`}>
                        <div className="absolute inset-0 blur-sm"></div>
                      </div>

                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}