import React, { useState, useEffect, useRef } from 'react';
import { Truck, Shield, Award, Zap, Star, Clock, Users, TrendingUp, Package, Settings, CheckCircle , BadgeCheck , Gauge , ShieldCheck} from 'lucide-react';


// Tipado para un componente más limpio
interface Feature {
  text: string;
  icon: React.ElementType;
}

interface Spec {
  label: string;
  value: string;
  icon: React.ElementType;
}

interface TruckModel {
  name: string;
  model: string;
  image: string;
  cabinImage: string; // Propiedad para la imagen de la cabina
  capacity: string;
  year: string;
  engine: string;
  power: string;
  features: Feature[];
  gradient: string;
  glowColor: string;
  specs: Spec[];
}

interface Certification {
  icon: React.ElementType;
  text: string;
  color: string;
  bgGlow: string;
}

interface Stat {
  number: string;
  label: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

// --- Datos Actualizados de la Flota ---
const trucks: TruckModel[] = [
  {
    name: 'Mercedes-Benz Atego 2428',
    model: 'Alto Rendimiento (6x2)',
    image: '/camion1.jpg',
    cabinImage: '/habitaculo.png', // Imagen de cabina
    capacity: '24.1 Toneladas PBT',
    year: '2023',
    engine: 'Motor OM 926 LA (7.2L)',
    power: '279 CV / 1.100 Nm',
    features: [
      { text: 'Motor de 7.2L y 279 CV para máxima potencia y torque.', icon: Zap },
      { text: 'Caja de cambios MB G 131-9 (9 velocidades) para rutas exigentes.', icon: Settings },
      { text: 'Alta Capacidad Máxima de Tracción (CMT: 45 ton).', icon: TrendingUp },
      { text: 'Sistema de frenos ABS, ESP y ASR de última generación.', icon: Shield },
      { text: 'Freno auxiliar Top Brake, ideal para control en pendientes.', icon: Award }
    ],
    gradient: 'from-blue-600 via-cyan-500 to-blue-700',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    specs: [
      { label: 'Carga Útil', value: '~17.3 Ton', icon: Package },
      { label: 'Potencia', value: '279 CV', icon: Zap },
      { label: 'Caja', value: '9 Vel.', icon: Settings }
    ]
  },
  {
    name: 'Mercedes-Benz Atego 2425',
    model: 'Distribución Pesada (6x2)',
    image: '/camion2.jpg',
    cabinImage: '/habitaculo.png', // Misma imagen por simplicidad
    capacity: '24.1 Toneladas PBT',
    year: '2022',
    engine: 'Motor OM 906 LA (6.4L)',
    power: '245 CV / 902 Nm',
    features: [
      { text: 'Motor OM 906 LA de 6.4L, eficiente y robusto para el trabajo diario.', icon: Zap },
      { text: 'Caja de cambios MB G 85-6 (6 velocidades), ideal para distribución.', icon: Settings },
      { text: 'Relación de eje optimizada para un mejor rendimiento en distribución pesada.', icon: TrendingUp },
      { text: 'Chasis reforzado con suspensión de ballestas parabólicas para mayor durabilidad.', icon: Shield },
      { text: 'Cabina dormitorio ergonómica, asegurando el confort del conductor.', icon: Award }
    ],
    gradient: 'from-green-600 via-emerald-500 to-green-700',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    specs: [
      { label: 'Carga Útil', value: '~17.7 Ton', icon: Package },
      { label: 'Potencia', value: '245 CV', icon: Zap },
      { label: 'Caja', value: '6 Vel.', icon: Settings }
    ]
  }
];

const certifications: Certification[] = [
  { icon: Truck,text: 'Flota Certificada',color: 'from-yellow-400 to-orange-500',bgGlow: 'from-yellow-400 to-orange-400' },
  { icon: Gauge, text: 'Motores de Alta Eficiencia', color: 'from-green-400 to-emerald-400', bgGlow: 'from-green-500/20' },
  { icon: BadgeCheck, text: 'Mantenimiento Preventivo', color: 'from-blue-400 to-cyan-400', bgGlow: 'from-blue-500/20' }
];



const stats: Stat[] = [
  { number: '100%', label: 'Flota Mercedes-Benz', icon: Truck, color: 'from-blue-400 to-cyan-400', description: 'Calidad alemana certificada y estandarizada' },
  { number: '+5000', label: 'Viajes Exitosos', icon: Users, color: 'from-green-400 to-emerald-400', description: 'Experiencia y logística comprobada' },
  { number: '100%', label: 'Conductores Certificados', icon: ShieldCheck, color: 'from-purple-400 to-pink-400', description: 'Profesionales capacitados para rutas seguras' }
  
];

// --- Componente Principal Flota ---

export default function Flota() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([false, false]);
  const [cabinImageLoaded, setCabinImageLoaded] = useState(false); // Estado para la imagen de la cabina
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsVisible(true);
    // Carga inicial de la imagen de cabina (es la misma para ambos en este ejemplo)
    const cabinImg = new Image();
    cabinImg.src = trucks[0].cabinImage;
    cabinImg.onload = () => setCabinImageLoaded(true);

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

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const currentTruck = trucks[selectedTruck];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-32 sm:py-36 lg:py-40">

      {/* Premium Background Effects (Manteniendo la lógica original) */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>
        <div className="absolute inset-0">
          <img
            src="/rueda.png"
            alt="Fondo"
            className="w-full h-full object-cover opacity-[0.04] mix-blend-lighten pointer-events-none transition-opacity duration-1000"
            style={{ transform: 'scale(1.2)' }}
          />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] sm:w-[900px] sm:h-[900px] bg-gradient-to-br from-blue-600/25 via-cyan-600/15 to-transparent rounded-full blur-[140px] animate-mesh-move-1"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-gradient-to-br from-purple-600/25 via-fuchsia-600/15 to-transparent rounded-full blur-[140px] animate-mesh-move-2"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-600/20 via-emerald-600/10 to-transparent rounded-full blur-[120px] animate-pulse-slow"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_25%,transparent_100%)]"></div>
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[180px] opacity-15 transition-all duration-700 pointer-events-none hidden lg:block"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          const colors = ['59, 130, 246', '139, 92, 246', '16, 185, 129', '168, 85, 247'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full animate-float-particles-enhanced"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(${randomColor}, ${Math.random() * 0.4 + 0.3})`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${10 + Math.random() * 15}s`,
                boxShadow: `0 0 ${size * 3}px rgba(${randomColor}, 0.5)`
              }}
            />
          );
        })}
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

    {/* Hero Header and Certifications */}
<div className="text-center mb-16 sm:mb-20 lg:mb-24">
    <div className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 backdrop-blur-2xl rounded-full mb-8 sm:mb-10 group hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-cyan-500/10 hover:to-blue-500/20 hover:border-blue-400/40 transition-all duration-500 shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]">
        <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
        <span className="text-white font-black tracking-[0.25em] uppercase text-sm sm:text-base">Mercedes Benz Atego</span>
        <div className="flex gap-1.5">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" style={{ animationDelay: '0.4s' }}></div>
        </div>
    </div>

          

          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Nuestra flota
            </span>
          </h2>

          <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full mb-8"></div>

          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Flota 100% "Mercedes-Benz Atego", equipamiento alemán de primer nivel para garantizar "seguridad absoluta", "eficiencia máxima" y "confiabilidad total" en cada transporte.
          </p>
        </div>

        
{/* Premium Certifications */}
<div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 px-4">
  {certifications.map((cert, index) => {
    const Icon = cert.icon;
    return (
      <div key={index} className="group relative overflow-visible p-2">
        {/* Glow effect - ahora con más espacio */}
        <div className={`absolute inset-0 bg-gradient-to-r ${cert.bgGlow} to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-500 scale-150`}></div>
        
        {/* Card principal */}
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] border-2 border-white/20 hover:border-white/40 rounded-full px-5 py-2.5 sm:px-7 sm:py-3.5 backdrop-blur-2xl transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className={`w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-sm sm:text-base font-bold tracking-wide whitespace-nowrap">{cert.text}</span>
          </div>
        </div>
      </div>
    );
  })}
</div>

        {/* Truck Selection with Premium Design */}
        <div className="mb-20 sm:mb-28">
          <h3 className="text-4xl font-black text-center mb-10 text-white">Detalles del Modelo</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            {trucks.map((truck, index) => (
              <button
                key={index}
                onClick={() => setSelectedTruck(index)}
                className={`relative px-8 py-4 sm:px-12 sm:py-6 rounded-2xl font-black text-base sm:text-lg tracking-wider transition-all duration-500 overflow-hidden group backdrop-blur-2xl shadow-2xl ${selectedTruck === index
                    ? 'bg-gradient-to-r from-white/15 to-white/10 border-2 border-white/40 scale-105'
                    : 'bg-gradient-to-r from-white/5 to-white/[0.02] border-2 border-white/20 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:border-white/30 hover:scale-[1.02]'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${truck.gradient} opacity-0 ${selectedTruck === index ? 'opacity-20' : 'group-hover:opacity-10'} transition-all duration-500`}></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <Truck className={`w-5 h-5 ${selectedTruck === index ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors duration-300`} />
                    <span className={`block ${selectedTruck === index ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors duration-300`}>
                      {truck.name}
                    </span>
                  </div>
                  <span className={`block text-xs ${selectedTruck === index ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'} transition-colors duration-300`}>
                    {truck.model} • {truck.year}
                  </span>
                </div>

                {selectedTruck === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
                )}
              </button>
            ))}
          </div>

          {/* Premium Truck Detail Card */}
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentTruck.gradient} opacity-10 rounded-[2rem] blur-3xl group-hover:blur-[100px] transition-all duration-700`}></div>

            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] border-2 border-white/20 rounded-[2rem] overflow-hidden backdrop-blur-2xl p-6 sm:p-10 lg:p-14 shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${currentTruck.gradient} opacity-5`}></div>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                {/* Image Section */}
                <div className="relative group/image">
                  <div className={`absolute inset-0 rounded-3xl blur-2xl group-hover/image:blur-3xl transition-all duration-700`}
                    style={{ background: `radial-gradient(circle, ${currentTruck.glowColor} 0%, transparent 70%)` }}>
                  </div>

                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-3xl overflow-hidden border-2 border-white/20 group-hover/image:border-white/40 transition-all duration-700 shadow-2xl group-hover/image:shadow-[0_0_80px_rgba(59,130,246,0.4)] cursor-pointer">
                    {!imageLoaded[selectedTruck] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"><div className="flex flex-col items-center gap-5"><div className="relative"><div className="w-20 h-20 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"></div><div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div></div><p className="text-gray-400 text-base font-semibold">Cargando imagen...</p></div></div>
                    )}
                    <img
                      ref={imageRef}
                      src={currentTruck.image}
                      alt={currentTruck.name}
                      className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover/image:scale-110 ${imageLoaded[selectedTruck] ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(selectedTruck)}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.innerHTML += `
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                              <div class="text-center p-8">
                                <svg class="w-24 h-24 mx-auto mb-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                <p class="text-gray-400 text-base font-semibold mb-2">Imagen no disponible</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                    <div className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-1000 pointer-events-none">
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shine"></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Details Section */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black mb-3 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                      {currentTruck.name}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg mb-8">
                      Modelo: <span className="text-white font-bold">{currentTruck.model}</span>
                    </p>

                    {/* Premium Specs Cards */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-5 mb-8">
                      {currentTruck.specs.map((spec, index) => {
                        const SpecIcon = spec.icon;
                        return (
                          <div
                            key={index}
                            className={`relative group/spec p-4 sm:p-5 bg-gradient-to-br ${currentTruck.gradient} bg-opacity-10 border-2 border-white/30 rounded-2xl hover:scale-105 hover:border-white/50 transition-all duration-500 overflow-hidden`}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${currentTruck.gradient} opacity-0 group-hover/spec:opacity-20 transition-opacity duration-500`}></div>
                            <div className="relative">
                              <SpecIcon className="w-5 h-5 text-white mb-2 group-hover/spec:scale-110 transition-all duration-300" />
                              <p className="text-[10px] sm:text-xs text-gray-300 mb-1 font-semibold">{spec.label}</p>
                              <p className="text-white font-black text-base sm:text-lg">{spec.value}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Premium Engine Info */}
                    <div className="relative group/engine p-6 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 group-hover/engine:border-white/40 rounded-2xl backdrop-blur-xl mb-8 transition-all duration-500 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${currentTruck.gradient} opacity-0 group-hover/engine:opacity-10 transition-opacity duration-500`}></div>
                      <div className="relative grid sm:grid-cols-2 gap-5">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Settings className="w-4 h-4 text-blue-400" />
                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Motor</p>
                          </div>
                          <p className="text-white font-bold text-base">{currentTruck.engine}</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Potencia / Torque</p>
                          </div>
                          <p className="text-white font-bold text-base">{currentTruck.power}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Premium Features List */}
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      Características Premium
                    </h4>

                    {currentTruck.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div
                          key={index}
                          className="relative group/feature p-5 bg-gradient-to-br from-white/5 to-white/[0.02] border-2 border-white/10 hover:border-white/30 rounded-xl hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 transition-all duration-500 overflow-hidden cursor-pointer"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${currentTruck.gradient} opacity-0 group-hover/feature:opacity-10 transition-opacity duration-500`}></div>

                          <div className="relative flex items-start gap-4">
                            <div className={`w-10 h-10 flex-shrink-0 bg-gradient-to-br ${currentTruck.gradient} rounded-lg flex items-center justify-center group-hover/feature:scale-110 transition-all duration-500`}>
                              <FeatureIcon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover/feature:text-white transition-colors duration-300 font-medium">
                              {feature.text}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECCIÓN REUBICADA: Cabina/Habitáculo --- */}
        <div className="mb-20 sm:mb-28">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-12 text-white">
            <span>
              Habitáculo de Clase Mundial
            </span>
          </h2>

          <div className="relative group/cabin p-6 sm:p-10 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 rounded-3xl backdrop-blur-xl transition-all duration-500 hover:border-white/40 shadow-2xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentTruck.gradient} opacity-0 group-hover/cabin:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

            <div className="relative grid md:grid-cols-2 items-center gap-10">

              {/* Cabina Text */}
              <div className="text-left order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h4 className="text-2xl font-black text-white">Confort y Ergonomía Certificada</h4>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Nuestras cabinas "Mercedes-Benz Atego" están diseñadas para el "máximo confort" y "ergonomía", reduciendo la fatiga del conductor en rutas largas.
                  Esta dedicación a los detalles internos es una garantía de que su carga es transportada por un conductor "concentrado", "descansado" y en un "ambiente seguro".
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-400 font-semibold">
                    <Star className="flex-shrink-0 w-5 h-5 mt-1 text-yellow-400" />
                    <span>"Puesto de Mando Ergonómico": Controles intuitivos y asientos con suspensión de aire</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 font-semibold">
                    <Shield className="flex-shrink-0 w-5 h-5 mt-1 text-blue-400" />
                    <span>"Aislamiento Acústico Superior": Reducción del ruido para mayor concentración</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 font-semibold">
                    <Clock className="flex-shrink-0 w-5 h-5 mt-1 text-purple-400" />
                    <span>"Cabina Dormitorio": Espacio optimizado para el descanso reglamentario del personal</span>
                  </li>
                </ul>
              </div>

              {/* Cabina Image */}
              <div className="flex-shrink-0 w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden border-2 border-white/20 order-1 md:order-2 shadow-xl hover:shadow-cyan-500/30 transition-shadow duration-500">
                {!cabinImageLoaded ? (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">Cargando imagen del habitáculo...</div>
                ) : (
                  <img
                    src={currentTruck.cabinImage}
                    alt="Imagen del Habitáculo Mercedes-Benz Atego"
                    className="w-full h-full object-cover object-center md:object-contain group-hover/cabin:scale-[1.05] transition-transform duration-700"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group/stat">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover/stat:opacity-20 rounded-3xl blur-2xl transition-all duration-700`}></div>

                <div className="relative p-8 sm:p-10 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] border-2 border-white/20 group-hover/stat:border-white/40 rounded-3xl backdrop-blur-2xl hover:scale-105 transition-all duration-500 text-center shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover/stat:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover/stat:scale-110 group-hover/stat:rotate-12 transition-all duration-500 shadow-xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className={`text-5xl sm:text-6xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>

                    <p className="text-white text-base sm:text-lg font-bold uppercase tracking-wider mb-2">
                      {stat.label}
                    </p>

                    <p className="text-gray-400 text-sm group-hover/stat:text-gray-300 transition-colors duration-300">
                      {stat.description}
                    </p>

                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500 rounded-full`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Estilos CSS (Manteniendo la lógica original) */}
      <style>{`
        @keyframes mesh-move-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.15); }
          66% { transform: translate(-30px, 30px) scale(0.85); }
        }
        @keyframes mesh-move-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 50px) scale(0.85); }
          66% { transform: translate(30px, -30px) scale(1.15); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.08); }
        }
        @keyframes float-particles-enhanced {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3; 
          }
          25% {
            transform: translateY(-25px) translateX(15px) rotate(90deg);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-35px) translateX(-10px) rotate(180deg); 
            opacity: 0.9; 
          }
          75% {
            transform: translateY(-20px) translateX(20px) rotate(270deg);
            opacity: 0.6;
          }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .animate-mesh-move-1 { animation: mesh-move-1 25s ease-in-out infinite; }
        .animate-mesh-move-2 { animation: mesh-move-2 30s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }
        .animate-float-particles-enhanced { animation: float-particles-enhanced 12s ease-in-out infinite; }
        .animate-shine { animation: shine 3s ease-in-out; }
        
        /* Custom scrollbar for premium look */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5));
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8));
        }
      `}</style>
    </section>
  );
}