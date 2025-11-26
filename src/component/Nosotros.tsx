import React, { useEffect, useState, useRef } from 'react';
import { Users, Truck, ShieldCheck, Award, TrendingUp, Clock, MapPin, Target, Eye, Heart, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const INFO_CARDS = [
  {
    icon: ShieldCheck,
    title: 'Seguridad',
    description: 'Priorizamos la integridad de la carga y el personal. Nuestros protocolos de seguridad son rigurosos, certificados bajo normas nacionales.',
    color: 'text-emerald-400',
    bg: 'from-emerald-500/10 to-transparent',
    gradient: 'from-emerald-600 to-teal-500',
  },
  {
    icon: Award,
    title: 'Experiencia',
    description: 'Con años en el sector, garantizamos conocimiento logístico y la capacidad de resolver cualquier desafío en ruta.',
    color: 'text-amber-400',
    bg: 'from-amber-500/10 to-transparent',
    gradient: 'from-amber-600 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Eficiencia',
    description: 'Optimizamos rutas y tiempos de entrega , asegurando la máxima rentabilidad para su negocio.',
    color: 'text-blue-400',
    bg: 'from-blue-500/10 to-transparent',
    gradient: 'from-blue-600 to-cyan-500',
  },
];

const STATS = [
  { number: '+5000', label: 'Viajes Exitosos', icon: Truck },
  { number: '100%', label: 'Entregas a Tiempo', icon: Clock },
  { number: '100%', label: 'Satisfacción Cliente', icon: Heart },
  { number: '24/7', label: 'Atención Continua', icon: Zap },
];

const MISSION_VISION = [
  {
    icon: Target,
    title: 'Nuestra Misión',
    description: 'Proveer soluciones de transporte integral que superen las expectativas, combinando seguridad, eficiencia y tecnología para garantizar el éxito logístico de nuestros clientes.',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    icon: Eye,
    title: 'Nuestra Visión',
    description: 'Ser la empresa líder en transporte pesado de la región, reconocida por nuestra excelencia operativa, innovación tecnológica y compromiso inquebrantable con la calidad del servicio.',
    gradient: 'from-purple-600 to-fuchsia-600',
  },
];

export default function Nosotros() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const target = e.target as HTMLVideoElement;
    if (target instanceof HTMLVideoElement) {
      target.style.display = 'none';
      if (target.parentElement) {
        target.parentElement.innerHTML += `
          <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div class="text-center p-8">
              <svg class="w-24 h-24 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p class="text-gray-500 text-sm">Video no disponible</p>
              <p class="text-gray-600 text-xs mt-2">Verificar: /public/camion3.mp4</p>
            </div>
          </div>
        `;
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-32 sm:py-36 lg:py-40">
      {/* Background Effects Premium */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent rounded-full blur-[120px] animate-mesh-move-1"></div>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-fuchsia-600/20 via-pink-600/10 to-transparent rounded-full blur-[120px] animate-mesh-move-2"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-600/15 via-blue-600/5 to-transparent rounded-full blur-[100px] animate-pulse-slow"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_20%,transparent_100%)]"></div>

        {/* Mouse Follow Effect */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 transition-all duration-700 pointer-events-none hidden lg:block"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          return (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full animate-float-particles"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246'}, 0.4)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`
              }}
            />
          );
        })}
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Hero Header */}
     <header className="text-center mb-20 sm:mb-24">
    <div className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 backdrop-blur-2xl rounded-full mb-8 sm:mb-10 group hover:bg-gradient-to-r hover:from-fuchsia-500/20 hover:via-purple-500/10 hover:to-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all duration-500 shadow-[0_0_40px_rgba(232,121,249,0.1)] hover:shadow-[0_0_60px_rgba(232,121,249,0.3)]">
        <Users className="w-6 h-6 sm:w-7 sm:h-7 text-fuchsia-400 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
        <span className="text-white font-black tracking-[0.25em] uppercase text-sm sm:text-base">Nuestra Historia</span>
        <div className="flex gap-1.5">
            <div className="w-2 h-2 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(232,121,249,0.8)]"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(232,121,249,0.8)]" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(232,121,249,0.8)]" style={{ animationDelay: '0.6s' }}></div>
        </div>
    </div>


          <header className="text-center mb-20 sm:mb-24">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Quiénes Somos
              </span>
            </h1>

            <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent rounded-full mb-8"></div>

            <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Liderando la industria del transporte con <span className="text-white font-bold">excelencia</span>,
              <span className="text-white font-bold"> innovación</span> y <span className="text-white font-bold">compromiso</span>
            </p>
          </header>


        </header>

        {/* Video Section with Enhanced Design */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">

          {/* Text Column */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  VF Transportes:
                </span>
                <br />
                <span className="text-white">Compromiso en Movimiento</span>
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Somos <span className="text-white font-bold">VF Transportes</span>, una empresa líder en el sector logístico y de transporte pesado con una trayectoria sólida construida sobre años de excelencia operativa. Nuestra misión es <span className="text-blue-400 font-semibold">superar constantemente las expectativas</span> de nuestros clientes.
            </p>



            <div className="relative p-6 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent border border-blue-500/20 rounded-2xl backdrop-blur-sm">
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed pl-16 italic">
                "Desde nuestros inicios, nos hemos enfocado en construir relaciones duraderas basadas en la <span className="text-blue-400 font-bold">confianza</span> y el <span className="text-fuchsia-400 font-bold">servicio de calidad</span>, invirtiendo constantemente en la flota más moderna y la tecnología más avanzada."
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
              <Clock className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-lg">Operando con Excelencia</p>
                <p className="text-gray-400 text-sm">Años de experiencia comprobada en el mercado</p>
              </div>
            </div>
          </div>
          {/* Video Column with Premium Effects */}
          <div className="relative group lg:order-1">

            {/* Glow ambiental multicapa fucsia/púrpura/azul */}
            <div className="absolute -inset-6 bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-blue-500/25 rounded-[3rem] blur-[140px] opacity-70 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="absolute -inset-3 bg-gradient-to-br from-fuchsia-400/20 via-purple-400/15 to-blue-400/20 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

            <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-gray-900 to-black rounded-3xl overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)] group-hover:shadow-[0_35px_120px_-15px_rgba(217,70,239,0.6)] border border-white/10 group-hover:border-fuchsia-500/50 transition-all duration-700 group-hover:scale-[1.02]">

              {/* Marco decorativo gradiente (aparece en hover) */}
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-fuchsia-500/50 via-purple-500/40 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full bg-transparent rounded-3xl"></div>
              </div>

              {/* Video con zoom sutil */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                <video
                  ref={videoRef}
                  src="/camion3.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={handleVideoError}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>

              {/* Video Overlay Effects - Mejorados */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none"></div>

              {/* Vignette premium */}
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)] pointer-events-none"></div>

              {/* Grid técnico decorativo fucsia */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(to right, rgba(217,70,239,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(217,70,239,0.5) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}></div>
              </div>

              {/* Shine Effect on Hover - Mejorado con color fucsia */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent skew-x-12 group-hover:animate-shine"></div>
              </div>

              {/* Partículas de luz en esquinas (hover) */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-fuchsia-500/35 via-purple-500/25 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-blue-500/30 via-purple-500/25 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

            </div>

            {/* Línea decorativa inferior fucsia */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-fuchsia-500/70 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          </div>
        </div>


        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {MISSION_VISION.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl transition-all duration-700`}></div>

                <div className="relative p-8 sm:p-10 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border-2 border-white/10 group-hover:border-white/30 rounded-3xl backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.02]">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Values Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Nuestros Pilares Fundamentales
              </span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Los valores que nos definen y guían cada decisión que tomamos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {INFO_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-700`}></div>

                  <div className="relative p-8 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border-2 border-white/10 group-hover:border-white/30 rounded-3xl backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.05] h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.bg} opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                    <div className="relative z-10 space-y-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h4 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {card.title}
                      </h4>

                      <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {card.description}
                      </p>

                      <div className={`w-12 h-1 bg-gradient-to-r ${card.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-32">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                <div className="relative p-6 sm:p-8 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 group-hover:border-white/30 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:scale-105 text-center">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 text-blue-400 group-hover:text-fuchsia-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />

                  <div className="text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-fuchsia-500/10 rounded-3xl blur-3xl"></div>

          <div className="relative p-12 sm:p-16 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border-2 border-white/10 rounded-3xl backdrop-blur-xl text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                ¿Listo para la Excelencia?
              </span>
            </h3>

            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Experimente la diferencia de una logística impulsada por la <span className="text-blue-400 font-bold">innovación</span>,
              la <span className="text-fuchsia-400 font-bold">dedicación</span> y el <span className="text-purple-400 font-bold">compromiso absoluto</span> con su éxito
            </p>

            <a
              href="/servicios"
              className="relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-full transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-2xl backdrop-blur-sm group overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-fuchsia-500 transition-all duration-500"></div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 transition-opacity duration-500 -z-10"></div>

              {/* Content */}
              <MapPin className="relative w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
              <span className="relative text-white font-bold">
                <span className="hidden sm:inline">Descubrir Nuestros Servicios</span>
                <span className="inline sm:hidden">Ver Servicios</span>
              </span>
              <ArrowRight className="relative w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />

              {/* Pulse effect on mobile tap */}
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 sm:hidden"></div>
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes mesh-move-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        @keyframes mesh-move-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 40px) scale(0.9); }
          66% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .animate-mesh-move-1 { animation: mesh-move-1 20s ease-in-out infinite; }
        .animate-mesh-move-2 { animation: mesh-move-2 25s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-float-particles { animation: float-particles 10s ease-in-out infinite; }
        .animate-shine { animation: shine 3s ease-in-out; }
      `}</style>
    </section>
  );
}