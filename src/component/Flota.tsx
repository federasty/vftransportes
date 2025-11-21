import React from 'react';
import { useState, useEffect } from 'react';
import { Truck, Shield, Gauge, Award, Wrench, CheckCircle, Zap, TrendingUp, Star, Clock, Users } from 'lucide-react';

export default function Flota() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([false, false, false]);

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

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const trucks = [
    {
      name: 'Mercedes-Benz Atego 1726',
      model: 'Atego 1726/48',
      image: '/camion1.jpg',
      capacity: '17 Toneladas',
      year: '2022',
      engine: 'Motor OM 936 LA',
      power: '260 CV / 191 kW',
      features: [
        'Sistema hidráulico volcador de alta eficiencia',
        'GPS con telemetría en tiempo real',
        'Mantenimiento preventivo certificado Mercedes-Benz',
        'Suspensión neumática adaptativa',
        'Sistema de frenos ABS y ESP de última generación'
      ],
      gradient: 'from-blue-600 to-cyan-500',
      specs: [
        { label: 'Carga Útil', value: '17 Ton' },
        { label: 'Potencia', value: '260 CV' },
        { label: 'Año', value: '2022' }
      ]
    },
    {
      name: 'Mercedes-Benz Atego 2426',
      model: 'Atego 2426/48',
      image: '/camion2.jpg',
      capacity: '24 Toneladas',
      year: '2023',
      engine: 'Motor OM 936 LA',
      power: '260 CV / 191 kW',
      features: [
        'Suspensión reforzada para cargas pesadas',
        'Control electrónico de estabilidad avanzado',
        'Certificación ISO 9001 en mantenimiento',
        'Sistema de volcado hidráulico de doble pistón',
        'Cabina ergonómica con climatización automática'
      ],
      gradient: 'from-purple-600 to-pink-500',
      specs: [
        { label: 'Carga Útil', value: '24 Ton' },
        { label: 'Potencia', value: '260 CV' },
        { label: 'Año', value: '2023' }
      ]
    },
    {
      name: 'Mercedes-Benz Atego 1726',
      model: 'Atego 1726/52',
      image: '/camion3.jpg',
      capacity: '17 Toneladas',
      year: '2023',
      engine: 'Motor OM 936 LA',
      power: '260 CV / 191 kW',
      features: [
        'Tecnología BlueTec 5 para máxima eficiencia',
        'Sistema Start/Stop para ahorro de combustible',
        'Seguridad certificada con 5 estrellas Euro NCAP',
        'Transmisión automatizada Mercedes PowerShift',
        'Sistema de asistencia al conductor con control crucero adaptativo'
      ],
      gradient: 'from-green-600 to-emerald-500',
      specs: [
        { label: 'Carga Útil', value: '17 Ton' },
        { label: 'Potencia', value: '260 CV' },
        { label: 'Año', value: '2023' }
      ]
    }
  ];

  const certifications = [
    { icon: Star, text: 'Flota 100% Mercedes-Benz', color: 'from-yellow-400 to-orange-400' },
    { icon: Shield, text: 'Certificación ISO 9001', color: 'from-blue-400 to-cyan-400' },
    { icon: Zap, text: 'Tecnología BlueTec 5', color: 'from-green-400 to-emerald-400' }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-32 sm:py-36 lg:py-40">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>
        <div className="absolute inset-0">
          <img src="/rueda.png" alt="Fondo" className="w-full h-full object-cover opacity-[0.03] mix-blend-lighten pointer-events-none" style={{ transform: 'scale(1.2)' }} />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent rounded-full blur-[120px] animate-mesh-move-1"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent rounded-full blur-[120px] animate-mesh-move-2"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_20%,transparent_100%)]"></div>
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 transition-all duration-700 pointer-events-none hidden lg:block"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          return (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full animate-float-small"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'rgba(255, 255, 255, 0.4)',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          );
        })}
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 group hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-white font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">Mercedes-Benz Atego</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Nuestra Flota </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Flota 100% <span className="text-white font-bold">Mercedes-Benz Atego</span>, equipamiento alemán de primer nivel para garantizar 
            <span className="text-white font-bold"> seguridad</span>, <span className="text-white font-bold">eficiencia</span> y <span className="text-white font-bold">confiabilidad</span> en cada transporte.
          </p>
        </div>

        {/* Certifications Badge */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 backdrop-blur-xl transition-all duration-500 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`} />
                  <span className="text-gray-300 text-xs sm:text-sm font-semibold group-hover:text-white transition-colors duration-300">{cert.text}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specs Grid */}
     

        {/* Truck Selection */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {trucks.map((truck, index) => (
              <button
                key={index}
                onClick={() => setSelectedTruck(index)}
                className={`relative px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base tracking-wider transition-all duration-500 overflow-hidden group backdrop-blur-md ${
                  selectedTruck === index ? 'bg-white/10 border-2 border-white/30 scale-105' : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${truck.gradient} opacity-0 ${selectedTruck === index ? 'opacity-20' : 'group-hover:opacity-10'} transition-all duration-500`}></div>
                <div className="relative">
                  <span className={`block ${selectedTruck === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{truck.name}</span>
                  <span className={`block text-xs mt-1 ${selectedTruck === index ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'}`}>{truck.model}</span>
                </div>
                {selectedTruck === index && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>}
              </button>
            ))}
          </div>

          {/* Truck Detail Card */}
          <div className="relative bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border-2 border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl p-4 sm:p-8 lg:p-12">
            <div className={`absolute inset-0 bg-gradient-to-br ${trucks[selectedTruck].gradient} opacity-5`}></div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Truck Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-all duration-700">
                  {/* Loading State */}
                  {!imageLoaded[selectedTruck] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 border-4 border-blue-400/20 border-t-blue-400 rounded-full animate-spin"></div>
                        <p className="text-gray-500 text-sm">Cargando imagen...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Truck Image */}
                  <img 
                    src={trucks[selectedTruck].image}
                    alt={trucks[selectedTruck].name}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded[selectedTruck] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(selectedTruck)}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML += `
                        <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                          <div class="text-center p-4">
                            <svg class="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p class="text-gray-500 text-sm">Imagen no disponible</p>
                            <p class="text-gray-600 text-xs mt-2">Verificar: /public${trucks[selectedTruck].image}</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine"></div>
                  </div>

                  {/* Mercedes-Benz Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2">
                    <p className="text-white text-xs font-bold tracking-wider">MERCEDES-BENZ</p>
                  </div>
                </div>
              </div>

              {/* Truck Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    {trucks[selectedTruck].name}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-6">Modelo: <span className="text-white font-semibold">{trucks[selectedTruck].model}</span></p>
                  
                  {/* Specs Cards */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                    {trucks[selectedTruck].specs.map((spec, index) => (
                      <div key={index} className={`px-3 py-3 sm:px-4 sm:py-4 bg-gradient-to-r ${trucks[selectedTruck].gradient} bg-opacity-10 border border-white/20 rounded-lg hover:scale-105 transition-all duration-300`}>
                        <p className="text-[10px] sm:text-xs text-gray-400 mb-1">{spec.label}</p>
                        <p className="text-white font-bold text-sm sm:text-base">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Engine Info */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Motor</p>
                        <p className="text-white font-semibold text-sm">{trucks[selectedTruck].engine}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Potencia</p>
                        <p className="text-white font-semibold text-sm">{trucks[selectedTruck].power}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    Características Destacadas
                  </h4>
                  {trucks[selectedTruck].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/59894044545?text=Hola,%20quiero%20más%20información%20sobre%20el%20${trucks[selectedTruck].name}%20de%20su%20flota`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-500 group mt-6 w-full sm:w-auto justify-center"
                >
                  <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Solicitar Información</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { number: '100%', label: 'Flota Mercedes-Benz', icon: Truck, color: 'from-blue-400 to-cyan-400' },
            { number: '24/7', label: 'Disponibilidad', icon: Clock, color: 'from-purple-400 to-pink-400' },
            { number: '500+', label: 'Viajes Exitosos', icon: Users, color: 'from-green-400 to-emerald-400' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 hover:border-white/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl hover:scale-105 transition-all duration-500 text-center">
                <Icon className={`w-10 h-10 mx-auto mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`} />
                <div className={`text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes mesh-move-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes mesh-move-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
        }
        @keyframes float-small {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .animate-mesh-move-1 { animation: mesh-move-1 20s ease-in-out infinite; }
        .animate-mesh-move-2 { animation: mesh-move-2 25s ease-in-out infinite; }
        .animate-float-small { animation: float-small 8s ease-in-out infinite; }
        .animate-shine { animation: shine 3s ease-in-out; }
      `}</style>
    </section>
  );
}