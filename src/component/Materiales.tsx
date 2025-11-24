import React, { useEffect, useState } from 'react';
import { Package, Truck, ShieldCheck, Award, CheckCircle2, Sparkles, Box, Layers, ArrowRight, Mountain, Construction, Factory } from 'lucide-react';

// --- DATA (Sin cambios) ---
const MATERIAL_FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Certificación Total',
    description: 'Todos nuestros materiales cuentan con certificaciones internacionales que garantizan la máxima calidad y seguridad en cada transporte.',
  },
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Seleccionamos únicamente los mejores materiales del mercado, asegurando durabilidad y resistencia excepcional en todas las operaciones.',
  },
  {
    icon: Layers,
    title: 'Variedad Completa',
    description: 'Amplio catálogo de materiales especializados para cada tipo de carga, adaptándonos a las necesidades específicas de su industria.',
  },
];

const ALL_MATERIALS = [
  { 
    icon: Layers, 
    name: 'Balastro', 
    description: 'Todo tipo y granulometría', 
    longDescription: 'Material fundamental para bases de construcción y ferrocarriles. Ofrecemos diferentes granulometrías certificadas (como 15-50, 40-70, etc.) para asegurar la estabilidad estructural y el drenaje adecuado en cualquier proyecto.',
    gradient: 'from-blue-500 to-cyan-400' 
  }, 
  { 
    icon: Mountain, 
    name: 'Pedregullo', 
    description: 'Varios tamaños disponibles', 
    longDescription: 'Agregado grueso esencial en la producción de hormigón, asfalto y como base de caminos. Suministramos pedregullo lavado y clasificado (por ejemplo, 6/20 o 20/40) para la máxima pureza y resistencia mecánica.',
    gradient: 'from-red-500 to-orange-500' 
  },
  { 
    icon: Package, 
    name: 'Arena', 
    description: 'Fina, gruesa y especializada', 
    longDescription: 'Indispensable para morteros, hormigones y revoques. Disponemos de arena de río, triturada y fina, cumpliendo con los estándares de limpieza y humedad más exigentes para optimizar la mezcla.',
    gradient: 'from-amber-400 to-yellow-300' 
  }, 
  { 
    icon: Mountain, 
    name: 'Piedra', 
    description: 'Triturada y decorativa', 
    longDescription: 'Piedra triturada (como la 0-32 o 0-45) para rellenos, drenajes y sub-bases, y piedra ornamental para proyectos paisajísticos. Contamos con diversas calidades y colores, desde grava hasta roca de contención.',
    gradient: 'from-violet-600 to-fuchsia-500' 
  },
  { 
    icon: Construction, 
    name: 'Tosca', 
    description: 'Para relleno y base', 
    longDescription: 'Material granular arcilloso ideal para la compactación y nivelación de grandes terrenos, utilizado comúnmente en la preparación de sub-bases de carreteras, terraplenes y edificaciones que requieren alta densidad.',
    gradient: 'from-green-600 to-emerald-500' 
  },
  { 
    icon: Layers, 
    name: 'Tierra Negra', 
    description: 'Fertilizada y compactada', 
    longDescription: 'Tierra de alta calidad, fertilizada y cribada (libre de impurezas), perfecta para jardinería, paisajismo y proyectos agrícolas. Asegura un sustrato rico en materia orgánica para el óptimo desarrollo vegetal.',
    gradient: 'from-gray-500 to-stone-400' 
  },
  { 
    icon: Factory, 
    name: 'Escombros', 
    description: 'Retiro y transporte', 
    longDescription: 'Servicio integral de retiro, transporte y disposición final de escombros y restos de construcción. Gestionamos el material cumpliendo todas las normativas ambientales y de seguridad, incluyendo la clasificación de residuos.',
    gradient: 'from-teal-400 to-lime-400' 
  },
  { 
    icon: Package, 
    name: 'Materiales Especiales', 
    description: 'Según requerimiento', 
    longDescription: 'Soluciones personalizadas para materiales no estándar, cargas de volumen específico o con requerimientos técnicos únicos. Nos adaptamos a cualquier especificación que su proyecto industrial o de obra civil requiera.',
    gradient: 'from-pink-500 to-rose-400' 
  }
];

const STATS = [
  { number: '+8', label: 'Tipos de Materiales', icon: Layers },
  { number: '100%', label: 'Certificados', icon: ShieldCheck },
  { number: '24/7', label: 'Disponibilidad', icon: Sparkles },
];

// --- COMPONENTE PRINCIPAL ---

export default function Materiales() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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

  // Definición de colores
  const PRIMARY_COLOR = 'fuchsia';
  const SECONDARY_COLOR = 'purple';
  const TERTIARY_COLOR = 'violet';
  const ORANGE_PRIMARY = 'orange';
  const ORANGE_SECONDARY = 'amber';

  // Usamos el color naranja para el fondo del camión 5
  const IMAGE_BORDER_COLOR = ORANGE_PRIMARY;
  const IMAGE_GRADIENT_COLOR_1 = ORANGE_PRIMARY;
  const IMAGE_GRADIENT_COLOR_2 = ORANGE_SECONDARY;

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-32 sm:py-36 lg:py-40">
      {/* Background Effects Premium (Sin cambios) */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-${PRIMARY_COLOR}-600/20 via-${SECONDARY_COLOR}-600/10 to-transparent rounded-full blur-[120px] animate-mesh-move-1`}></div>
          <div className={`absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-${TERTIARY_COLOR}-600/20 via-${PRIMARY_COLOR}-600/10 to-transparent rounded-full blur-[120px] animate-mesh-move-2`}></div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-${SECONDARY_COLOR}-600/15 via-${PRIMARY_COLOR}-600/5 to-transparent rounded-full blur-[100px] animate-pulse-slow`}></div>
        </div>
        <div className={`absolute inset-0 bg-[linear-gradient(rgba(192,38,211,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(192,38,211,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_20%,transparent_100%)]`}></div>
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 transition-all duration-700 pointer-events-none hidden lg:block"
          style={{
            background: `radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(192, 38, 211, 0.2) 50%, transparent 70%)`,
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
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
                background: `rgba(${Math.random() > 0.5 ? '236, 72, 153' : '192, 38, 211'}, 0.4)`,
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
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full mb-8 group hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500">
            <Package className={`w-6 h-6 text-${ORANGE_PRIMARY}-400 group-hover:rotate-12 transition-transform duration-500`} />
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm">Calidad Superior</span>
            <div className={`w-2 h-2 bg-gradient-to-r from-${ORANGE_PRIMARY}-400 to-${ORANGE_SECONDARY}-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]`}></div>
            <div className={`w-2 h-2 bg-gradient-to-r from-${ORANGE_PRIMARY}-400 to-${ORANGE_SECONDARY}-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]`} style={{ animationDelay: '0.3s' }}></div>
            <div className={`w-2 h-2 bg-gradient-to-r from-${ORANGE_PRIMARY}-400 to-${ORANGE_SECONDARY}-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]`} style={{ animationDelay: '0.6s' }}></div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 text-white">
            Nuestros Materiales
          </h1>

          <div className={`h-1.5 w-32 mx-auto bg-gradient-to-r from-transparent via-${ORANGE_PRIMARY}-500 to-transparent rounded-full mb-8`}></div>

          <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-16">
            Suministramos materiales de <span className="text-white font-bold">primera categoría</span>, garantizando
            <span className="text-white font-bold"> la mejor base</span> y <span className="text-white font-bold">durabilidad</span> para su proyecto.
          </p>
          
          {/* --- IMAGEN camion4.jpg AQUÍ (Se mantiene) --- */}
          <div className="relative max-w-5xl mx-auto mb-20 lg:mb-32 group">
            <div className={`absolute inset-0 bg-gradient-to-br from-${ORANGE_PRIMARY}-500/30 via-${PRIMARY_COLOR}-500/20 to-${TERTIARY_COLOR}-500/30 rounded-3xl blur-[100px] opacity-70 group-hover:opacity-100 transition-opacity duration-700`}></div>
            
            <div className={`relative aspect-[16/7] bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transition-all duration-700 group-hover:border-${PRIMARY_COLOR}-500/50 group-hover:scale-[1.01]`}>
              <img
                src="/camion4.jpg"
                alt="Camión cargado con materiales de primera categoría"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                onError={() => {/* error handling */}}
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-6 right-6">
                <div className={`px-4 py-2 bg-black/60 backdrop-blur-md border border-${ORANGE_PRIMARY}-500/30 rounded-full text-white font-semibold text-sm flex items-center gap-2`}>
                    <Truck className={`w-4 h-4 text-${ORANGE_PRIMARY}-400`} />
                    <span>Transporte de Confianza</span>
                </div>
              </div>
            </div>
          </div>
          {/* --- FIN IMAGEN camion4.jpg --- */}

        </header>

        {/* --- Catálogo de Materiales --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Catálogo Completo
            </h3>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Contamos con una amplia variedad de materiales especializados, listos para su proyecto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {ALL_MATERIALS.map((material, index) => {
              const Icon = material.icon;
              return (
                <div key={index} className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
                    style={{ background: `linear-gradient(to bottom right, ${material.gradient.replace('from-', 'rgba(').replace('to-', ''), 0.2})` }}></div>

                  <div className="relative p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.03] h-full flex flex-col justify-between">
                    <div className="relative z-10 space-y-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${material.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h4 className="text-xl font-black text-white">
                        {material.name}
                      </h4>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        <span className="font-semibold italic text-white/80 block mb-1">{material.description}</span> 
                        {material.longDescription}
                      </p>

                      <div className="flex justify-end pt-2">
                        <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* --- FIN Catálogo de Materiales --- */}

        {/* --- BLOQUE DE IMAGEN SOLICITADO (camion5.jpg) - AHORA NARANJA --- */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Logística y Distribución a Gran Escala
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Nuestra flota de camiones modernos garantiza una entrega eficiente y segura de sus materiales.
            </p>
          </div>
          
          <div className="relative max-w-7xl mx-auto group">
             {/* Sombra/Blur exterior naranja/ámbar */}
             <div className={`absolute inset-0 bg-gradient-to-br from-${IMAGE_GRADIENT_COLOR_1}-500/20 via-${IMAGE_GRADIENT_COLOR_2}-500/10 to-transparent rounded-3xl blur-3xl group-hover:blur-[100px] transition-all duration-700`}></div>
            
            <div className={`relative aspect-[16/6] lg:aspect-[16/5] bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transition-all duration-700 group-hover:border-${IMAGE_BORDER_COLOR}-500/50 group-hover:scale-[1.01]`}>
              <img
                src="/camion5.jpg" // La imagen solicitada
                alt="Vista panorámica de camiones modernos en un entorno de obra"
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-[1.03]"
                 onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                        parent.innerHTML = `
                        <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                            <div class="text-center p-8">
                                <p class="text-gray-500 text-sm">Imagen de logística (camion5.jpg) no disponible</p>
                            </div>
                        </div>
                        `;
                    }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

              {/* Se eliminó la leyenda "Visión de Logística" */}
            </div>
          </div>
        </div>
        {/* --- FIN BLOQUE DE IMAGEN camion5.jpg --- */}


        {/* Features Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Características Destacadas
            </h3>
            <div className={`h-1 w-24 mx-auto bg-gradient-to-r from-${PRIMARY_COLOR}-500 to-${TERTIARY_COLOR}-500 rounded-full mb-6`}></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cada elemento de nuestro inventario cumple con los más altos estándares de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {MATERIAL_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${PRIMARY_COLOR}-600 to-${TERTIARY_COLOR}-600 opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-700`}></div>

                  <div className={`relative p-8 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border-2 border-white/10 group-hover:border-${PRIMARY_COLOR}-500/30 rounded-3xl backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.05] h-full`}>
                    <div className={`absolute inset-0 bg-gradient-to-br from-${PRIMARY_COLOR}-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                    <div className="relative z-10 space-y-4">
                      <div className={`w-14 h-14 bg-gradient-to-br from-${PRIMARY_COLOR}-600 to-${TERTIARY_COLOR}-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h4 className="text-2xl font-black text-white">
                        {feature.title}
                      </h4>

                      <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>

                      <div className={`w-12 h-1 bg-gradient-to-r from-${PRIMARY_COLOR}-600 to-${TERTIARY_COLOR}-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section, Quality Assurance, and CTA (Se mantienen sin cambios) */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-32">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br from-${PRIMARY_COLOR}-500/20 to-${TERTIARY_COLOR}-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>

                <div className="relative p-6 sm:p-8 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 group-hover:border-fuchsia-500/30 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:scale-105 text-center">
                  <Icon className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 text-${PRIMARY_COLOR}-400 group-hover:text-${SECONDARY_COLOR}-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`} />

                  <div className={`text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-r from-${PRIMARY_COLOR}-400 to-${TERTIARY_COLOR}-400 bg-clip-text text-transparent`}>
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

        <div className="relative mb-32">
          <div className={`absolute inset-0 bg-gradient-to-r from-${PRIMARY_COLOR}-500/10 via-${SECONDARY_COLOR}-500/10 to-${TERTIARY_COLOR}-500/10 rounded-3xl blur-3xl`}></div>

          <div className="relative p-10 sm:p-12 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border-2 border-white/10 rounded-3xl backdrop-blur-xl">
            <div className="grid lg:grid-cols-1 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${PRIMARY_COLOR}-600 to-${TERTIARY_COLOR}-500 rounded-2xl flex items-center justify-center`}>
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white">
                    Garantía de <span className={`text-${PRIMARY_COLOR}-400`}>Calidad</span>
                  </h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Cada material pasa por un riguroso proceso de inspección y certificación antes de ser incorporado
                  a nuestra flota. Trabajamos únicamente con proveedores certificados y reconocidos internacionalmente.
                </p>

                <div className="space-y-3">
                  {['Inspección inicial completa', 'Certificación internacional', 'Mantenimiento preventivo', 'Garantía extendida'].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 bg-white/5 border border-${PRIMARY_COLOR}-500/20 rounded-xl backdrop-blur-sm group hover:bg-${PRIMARY_COLOR}-500/10 hover:border-${PRIMARY_COLOR}-500/40 transition-all duration-300`}>
                      <CheckCircle2 className={`w-5 h-5 text-${PRIMARY_COLOR}-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r from-${PRIMARY_COLOR}-500/10 via-${SECONDARY_COLOR}-500/10 to-${TERTIARY_COLOR}-500/10 rounded-3xl blur-3xl`}></div>

          <div className="relative p-12 sm:p-16 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border-2 border-fuchsia-500/20 rounded-3xl backdrop-blur-xl text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white">
              ¿Listo para la Mejor Calidad?
            </h3>

            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Confíe en materiales de <span className={`text-${PRIMARY_COLOR}-400 font-bold`}>primera categoría</span> que garantizan
              <span className={`text-${SECONDARY_COLOR}-400 font-bold`}> seguridad</span>, <span className={`text-${TERTIARY_COLOR}-400 font-bold`}>durabilidad</span> y
              <span className={`text-${PRIMARY_COLOR}-400 font-bold`}> rendimiento excepcional</span>
            </p>

            <a
              href="/contacto"
              className={`inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-lg rounded-full transition-all duration-500 transform hover:scale-105 shadow-2xl backdrop-blur-sm group bg-gradient-to-r from-${PRIMARY_COLOR}-600 via-${SECONDARY_COLOR}-600 to-${TERTIARY_COLOR}-600 text-white hover:shadow-[0_0_60px_rgba(236,72,153,0.6)]`}
            >
              <Truck className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Solicitar Información</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>

      <style>{`
        /* ... Estilos de animación (sin cambios) ... */
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