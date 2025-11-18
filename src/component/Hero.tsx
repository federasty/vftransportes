import React, { useState, useEffect } from 'react';
import { Award, Zap, Truck, TrendingUp, Clock, Shield, Package, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Truck, number: '02', label: 'Camiones con Zorra', color: 'from-blue-400 to-cyan-400' },
    { icon: TrendingUp, number: '500+', label: 'Cargas Completadas', color: 'from-purple-400 to-pink-400' },
    { icon: Clock, number: '24/7', label: 'Disponibilidad Total', color: 'from-green-400 to-emerald-400' },
    { icon: Shield, number: '100%', label: 'Servicio Garantizado', color: 'from-orange-400 to-red-400' },
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
    <div className="relative min-h-screen bg-black">
      
      {/* Ultra Premium Animated Background with Road Effect */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {/* Animated Road/Path Effect */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.1)', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0.1)', stopOpacity: 0 }} />
            </linearGradient>
            
            <pattern id="roadLines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect x="45" y="0" width="10" height="40" fill="white" opacity="0.3">
                <animate attributeName="y" from="-100" to="100" dur="3s" repeatCount="indefinite" />
              </rect>
            </pattern>
          </defs>
          
          {/* Main Road Path */}
          <path 
            d="M 50 -100 Q 30 20, 50 150 T 50 400 T 50 650 T 50 900" 
            stroke="url(#roadGradient)" 
            strokeWidth="200" 
            fill="none"
            opacity="0.4"
          />
          
          {/* Road center lines animation */}
          <path 
            d="M 50 -100 Q 30 20, 50 150 T 50 400 T 50 650 T 50 900" 
            stroke="url(#roadLines)" 
            strokeWidth="5" 
            fill="none"
            strokeDasharray="40 30"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="70" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Gradient Orbs with Mouse Tracking */}
        <div 
          className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full blur-[100px] sm:blur-[120px] lg:blur-[150px] opacity-20 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Diagonal Light Streaks */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Main Content - Positioned below navbar */}
      <div className={`relative pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          
          {/* Premium Badge */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500 group cursor-pointer rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
              <span className="text-white font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs lg:text-sm">Líder en Transporte Pesado</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            </div>
          </div>
          
          {/* Epic Headline */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="relative inline-block mb-4 sm:mb-5 lg:mb-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tighter">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(255,255,255,0.4)] sm:drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] mb-1 sm:mb-2">
                  TRANSPORTE
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(139,92,246,0.6)] sm:drop-shadow-[0_0_80px_rgba(139,92,246,0.6)] animate-pulse">
                  PROFESIONAL
                </span>
              </h1>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-t-2 border-l-2 border-white/20"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-b-2 border-r-2 border-white/20"></div>
            </div>
            
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-light tracking-wide px-4">
              Especialistas en movimiento y transporte de materiales de cantera con{' '}
              <span className="relative inline-block">
                <span className="text-white font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  2 camiones con zorra
                </span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-cyan-400"></span>
              </span>
              {' '}de última generación
            </p>

            {/* Features List */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
              {[
                { icon: CheckCircle, text: 'Garantizado' },
                { icon: Sparkles, text: 'Moderno' },
                { icon: Shield, text: 'Asegurado' },
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

            {/* Elite CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6">
              <button className="w-full sm:w-auto relative group overflow-hidden rounded-xl">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                {/* Content */}
                <div className="relative px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-6 flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <span className="font-black text-xs sm:text-sm lg:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white">
                    SOLICITAR COTIZACIÓN
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.4)] sm:shadow-[0_0_50px_rgba(139,92,246,0.4)] group-hover:shadow-[0_0_60px_rgba(139,92,246,0.7)] sm:group-hover:shadow-[0_0_80px_rgba(139,92,246,0.7)] transition-shadow duration-700"></div>
              </button>
              
              <button className="w-full sm:w-auto relative group px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-6 bg-white/5 border-2 border-white/20 hover:border-white/40 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative font-bold text-xs sm:text-sm lg:text-lg tracking-[0.15em] uppercase text-gray-300 group-hover:text-white transition-colors duration-500 flex items-center justify-center gap-2 sm:gap-3">
                  VER SERVICIOS
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Premium Stats */}
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
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-xl sm:rounded-2xl`}></div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-700"></div>
                  
                  <Icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-12 transition-all duration-700`} />
                  <div className={`text-3xl sm:text-4xl lg:text-6xl font-black mb-2 sm:mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-semibold uppercase text-[10px] sm:text-xs lg:text-sm tracking-[0.1em] sm:tracking-[0.15em] group-hover:text-gray-200 transition-colors duration-500">
                    {stat.label}
                  </div>
                  
                  {/* Bottom glow line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 sm:h-1 w-0 bg-gradient-to-r ${stat.color} group-hover:w-full transition-all duration-700 rounded-full`}>
                    <div className="absolute inset-0 blur-sm sm:blur-md"></div>
                  </div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* Elite Materials Grid */}
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
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${material.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl sm:rounded-2xl`}></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    
                    {/* Content */}
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
                      
                      {/* Bottom indicator with gradient */}
                      <div className={`absolute bottom-0 left-0 h-0.5 sm:h-1 w-0 bg-gradient-to-r ${material.gradient.replace('/20', '')} group-hover:w-full transition-all duration-700 rounded-full`}>
                        <div className="absolute inset-0 blur-sm"></div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}