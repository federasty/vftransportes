import React, { useEffect, useState } from 'react';
import { Package, Truck, ShieldCheck, Award, Clock8, MessageSquare,  Layers,  Mountain, Construction, Factory } from 'lucide-react';

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
    gradient: 'from-blue-500 to-cyan-400',
    accentColor: '#3b82f6'  // ← Agregar esto
  }, 
  { 
    icon: Mountain, 
    name: 'Pedregullo', 
    description: 'Varios tamaños disponibles', 
    longDescription: 'Agregado grueso esencial en la producción de hormigón, asfalto y como base de caminos. Suministramos pedregullo lavado y clasificado (por ejemplo, 6/20 o 20/40) para la máxima pureza y resistencia mecánica.',
    gradient: 'from-red-500 to-orange-500',
    accentColor: '#ef4444'  // ← Agregar esto
  },
  { 
    icon: Package, 
    name: 'Arena', 
    description: 'Fina, gruesa y especializada', 
    longDescription: 'Indispensable para morteros, hormigones y revoques. Disponemos de arena de río, triturada y fina, cumpliendo con los estándares de limpieza y humedad más exigentes para optimizar la mezcla.',
    gradient: 'from-amber-400 to-yellow-300',
    accentColor: '#fbbf24'  // ← Agregar esto
  }, 
  { 
    icon: Mountain, 
    name: 'Piedra', 
    description: 'Triturada y decorativa', 
    longDescription: 'Piedra triturada (como la 0-32 o 0-45) para rellenos, drenajes y sub-bases, y piedra ornamental para proyectos paisajísticos. Contamos con diversas calidades y colores, desde grava hasta roca de contención.',
    gradient: 'from-violet-600 to-fuchsia-500',
    accentColor: '#8b5cf6'  // ← Agregar esto
  },
  { 
    icon: Construction, 
    name: 'Tosca', 
    description: 'Para relleno y base', 
    longDescription: 'Material granular arcilloso ideal para la compactación y nivelación de grandes terrenos, utilizado comúnmente en la preparación de sub-bases de carreteras, terraplenes y edificaciones que requieren alta densidad.',
    gradient: 'from-green-600 to-emerald-500',
    accentColor: '#22c55e'  // ← Agregar esto
  },
  { 
    icon: Layers, 
    name: 'Tierra Negra', 
    description: 'Fertilizada y compactada', 
    longDescription: 'Tierra de alta calidad, fertilizada y cribada (libre de impurezas), perfecta para jardinería, paisajismo y proyectos agrícolas. Asegura un sustrato rico en materia orgánica para el óptimo desarrollo vegetal.',
    gradient: 'from-gray-500 to-stone-400',
    accentColor: '#6b7280'  // ← Agregar esto
  },
  { 
    icon: Factory, 
    name: 'Escombros', 
    description: 'Retiro y transporte', 
    longDescription: 'Servicio integral de retiro, transporte y disposición final de escombros y restos de construcción. Gestionamos el material cumpliendo todas las normativas ambientales y de seguridad, incluyendo la clasificación de residuos.',
    gradient: 'from-teal-400 to-lime-400',
    accentColor: '#14b8a6'  // ← Agregar esto
  },
  { 
    icon: Package, 
    name: 'Materiales Especiales', 
    description: 'Según requerimiento', 
    longDescription: 'Soluciones personalizadas para materiales no estándar, cargas de volumen específico o con requerimientos técnicos únicos. Nos adaptamos a cualquier especificación que su proyecto industrial o de obra civil requiera.',
    gradient: 'from-pink-500 to-rose-400',
    accentColor: '#ec4899'  // ← Agregar esto
  }
];

const STATS = [
  { number: '+8', label: 'Tipos de Materiales', icon: Layers },
  { number: '100%', label: 'Certificados', icon: ShieldCheck },
  { number: '✔', label: 'Entrega Segura', icon: Clock8 },
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
          
     {/* --- IMAGEN camion4.jpg AQUÍ (ETIQUETA MÁS PEQUEÑA) --- */}
          <div className="relative max-w-5xl mx-auto mb-20 lg:mb-32 group">
            
            {/* Sombra/Blur exterior naranja/ámbar - Base de brillo constante y premium */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${ORANGE_PRIMARY}-500/20 via-${ORANGE_SECONDARY}-500/10 to-transparent rounded-3xl blur-[120px] opacity-100 transition-opacity duration-700`}></div>
            
            {/* Contenedor principal de la imagen: Bordes, Ring interior y Efecto Hover */}
            <div className={`
                relative aspect-[16/7] 
                bg-gradient-to-br from-gray-900 via-slate-900 to-black 
                rounded-3xl 
                overflow-hidden 
                shadow-2xl 
                transition-all duration-700 
                
                // Borde inicial SUTIL
                border border-white/10 
                
                // Efecto Premium en Hover: Borde más grueso y sombra luminosa
                group-hover:ring-2 
                group-hover:ring-${ORANGE_PRIMARY}-500/80 
                group-hover:border-${ORANGE_PRIMARY}-500/40 
                group-hover:scale-[1.005] 
                group-hover:shadow-[0_0_100px_rgba(251,146,60,0.4)]
            `}>
              
              <img
                src="/camion4.jpg"
                alt="Camión cargado con materiales de primera categoría"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]" 
                onError={() => {/* error handling */}}
              />
              {/* Degradado para añadir profundidad en la imagen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Etiqueta superior - AHORA MÁS PEQUEÑA */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6"> 
                <div className={`
                    // CAMBIO CLAVE 1: Relleno Mínimo
                    px-2 py-1 
                    bg-black/60 
                    backdrop-blur-md 
                    border border-${ORANGE_PRIMARY}-500/30 
                    rounded-full 
                    // CAMBIO CLAVE 2: Texto Mínimo (extra small)
                    text-white font-semibold text-[10px] // Usando un valor explícito si text-xs no es suficiente
                    flex items-center gap-1
                    transition-all duration-300
                    group-hover:bg-${ORANGE_PRIMARY}-500/10
                `}>
                    {/* CAMBIO CLAVE 3: Ícono Mínimo */}
                    <Truck className={`w-3 h-3 text-${ORANGE_PRIMARY}-400`} /> 
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
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Catálogo Completo
              </span>
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
                  {/* Animated glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${material.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-15 transition-all duration-700`}></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  </div>

                  {/* Main card */}
                  <div className="relative p-6 sm:p-7 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 group-hover:border-white/25 rounded-3xl backdrop-blur-2xl transition-all duration-500 group-hover:scale-[1.05] sm:group-hover:scale-[1.08] h-full flex flex-col shadow-2xl group-hover:shadow-3xl overflow-hidden">
                    
                    {/* Background gradient overlay - Single tone on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`}
                      style={{ background: material.accentColor }}></div>

                    {/* Top accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${material.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-t-3xl`}></div>

                    {/* Content */}
                    <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                      
                      {/* Icon with glow */}
                      <div className="relative mb-2">
                        <div className={`absolute inset-0 bg-gradient-to-br ${material.gradient} rounded-xl blur-md opacity-20 group-hover:opacity-35 transition-opacity duration-500`}></div>
                        <div className={`relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${material.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
                        </div>
                      </div>

                      {/* Title with gradient on hover */}
                      <h4 className={`text-xl sm:text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text ${material.gradient} transition-all duration-300`}>
                        {material.name}
                      </h4>
                      
                      {/* Description with accent */}
                      <div className="space-y-2 flex-1">
                        <p className="text-xs sm:text-sm font-semibold text-blue-300/90 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${material.gradient}`}></span>
                          <span className="italic">{material.description}</span>
                        </p>
                        
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {material.longDescription}
                        </p>
                      </div>

                      {/* Bottom shine effect */}
                      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${material.gradient} opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                      {/* Corner accent - Desktop only */}
                      <div className={`hidden sm:block absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${material.gradient} opacity-0 group-hover:opacity-[0.03] transition-all duration-500 rounded-bl-full`}></div>

                      {/* Floating particles effect - Desktop */}
                      <div className="hidden lg:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className={`absolute top-1/4 left-1/4 w-1 h-1 bg-gradient-to-r ${material.gradient} rounded-full animate-float`}></div>
                        <div className={`absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-gradient-to-r ${material.gradient} rounded-full animate-float-delayed`}></div>
                        <div className={`absolute bottom-1/3 left-2/3 w-1 h-1 bg-gradient-to-r ${material.gradient} rounded-full animate-float-slow`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
           </div>
          {/* Add custom animations */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
              50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
            }
            @keyframes float-delayed {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
              50% { transform: translateY(-15px) translateX(-10px); opacity: 1; }
            }
            @keyframes float-slow {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
              50% { transform: translateY(-25px) translateX(15px); opacity: 1; }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
            .animate-float-delayed {
              animation: float-delayed 4s ease-in-out infinite 0.5s;
            }
            .animate-float-slow {
              animation: float-slow 5s ease-in-out infinite 1s;
            }
            .animate-fade-in {
              animation: fadeIn 0.8s ease-out;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
        {/* --- FIN Catálogo de Materiales --- */}

   {/* --- BLOQUE DE IMAGEN SOLICITADO (camion5.jpg) - MUCHO MÁS GRANDE Y VERTICAL --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Logística Impecable a Gran Escala
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Nuestra avanzada flota de camiones garantiza una <span className={`text-${ORANGE_PRIMARY}-300 font-semibold`}>entrega eficiente, segura y puntual</span> de todos sus materiales, sin importar el volumen o la complejidad.
            </p>
          </div>
          
          {/* Contenedor principal del bloque de imagen */}
          {/* CAMBIO CLAVE 1: max-w-md para un ancho más contenido y mx-auto para centrarlo */}
          <div className="relative max-w-md mx-auto group">
             {/* Sombra/Blur exterior naranja/ámbar - Más dinámico en hover */}
             <div className={`absolute inset-0 bg-gradient-to-br from-${IMAGE_GRADIENT_COLOR_1}-500/20 via-${IMAGE_GRADIENT_COLOR_2}-500/10 to-transparent rounded-3xl blur-3xl group-hover:blur-[120px] transition-all duration-700`}></div>
            
            {/* Contenedor principal de la imagen con borde y efecto hover */}
            {/* CAMBIO CLAVE 2: aspect-[9/16] para un contenedor VERTICAL y border-2 más fino */}
            <div className={`relative aspect-[9/16] bg-gradient-to-br from-gray-950 via-slate-900 to-black rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 transition-all duration-700 group-hover:border-${IMAGE_BORDER_COLOR}-500/50 group-hover:shadow-[0_0_80px_rgba(251,146,60,0.4)] group-hover:scale-[1.005]`}>
              
              {/* Contenedor interno para la imagen, con fondo sutil para object-contain */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-0">
                <img
                  src="/camion5.jpg" // La imagen solicitada (horizontal)
                  alt="Vista panorámica de camiones modernos en un entorno de obra"
                  className="max-w-full max-h-full object-contain object-center rounded-2xl shadow-xl transition-all duration-700 group-hover:scale-[1.01]"
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
              </div>

              {/* Degradado superpuesto para un look más profundo, sobre la imagen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

              {/* Etiqueta opcional en la esquina para profesionalismo (se mantiene, pero su posición podría ajustarse si la imagen es muy alta) */}
              <div className="absolute bottom-6 right-6">
                <div className={`flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-${ORANGE_PRIMARY}-500/30 rounded-full text-white font-semibold text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300`}>
                    <Truck className={`w-4 h-4 text-${ORANGE_PRIMARY}-400`} />
                    <span>Movilizando su Futuro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --- FIN BLOQUE DE IMAGEN camion5.jpg --- */}


        

   {/* --- Stats Section (ADAPTABLE / RESPONSIVE) --- */}
{/* Grid de 1 columna en móvil, 2 en sm, 3 en lg */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-32">
  {STATS.map((stat, index) => {
    const Icon = stat.icon;
    return (
      <div key={index} className="relative group">
        {/* Sombra de fondo NARANJA/ÁMBAR más visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-100 transition-all duration-700"></div>

        <div className="relative p-6 sm:p-8 
            bg-gradient-to-br from-orange-950/40 via-orange-900/20 to-amber-950/30 
            border border-orange-500/20 
            group-hover:border-orange-400/50 
            rounded-2xl backdrop-blur-xl 
            transition-all duration-500 
            group-hover:scale-[1.03]
            text-center h-full">
          
          {/* Ícono Centrado en tonos Naranja/Ámbar brillantes */}
          <Icon className="
              w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 
              text-orange-400 
              group-hover:text-amber-300 
              group-hover:scale-110 group-hover:rotate-12 transition-all duration-500
          " />

          {/* Número con Degradado Naranja/Ámbar visible */}
          <div className="
              text-4xl sm:text-5xl lg:text-6xl font-black mb-2
              bg-gradient-to-r from-orange-400 via-orange-300 to-amber-400 
              bg-clip-text text-transparent
              drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]
          ">
            {stat.number}
          </div>

          {/* Etiqueta en tono naranja tenue */}
          <p className="text-orange-200/70 text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wider group-hover:text-orange-100 transition-colors duration-300">
            {stat.label}
          </p>
        </div>
      </div>
    );
  })}
</div>

       {/* Bloque Blur inferior (Ajustado a Naranja/Ámbar) - Se mantiene el color Naranja de la sección anterior */}
        <div className="relative mb-32">
          <div className={`absolute inset-0 bg-gradient-to-r from-${ORANGE_PRIMARY}-500/10 via-${ORANGE_SECONDARY}-500/10 to-amber-500/10 rounded-3xl blur-3xl`}></div>
          {/* ... Contenido siguiente ... */}
        </div>

        {/* --- BLOQUE CTA: ¿Listo para la Mejor Calidad? (FUCSIA + BOTÓN WHATSAPP VERDE) --- */}
        <div className="relative max-w-5xl mx-auto">
          {/* Sombra de fondo FUCSIA/PÚRPURA */}
          <div className={`absolute inset-0 bg-gradient-to-r from-${PRIMARY_COLOR}-500/10 via-${SECONDARY_COLOR}-500/10 to-${TERTIARY_COLOR}-500/10 rounded-3xl blur-3xl`}></div>

          <div className={`
              relative p-12 sm:p-16 
              bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent 
              // Borde de la tarjeta FUCSIA
              border-2 border-fuchsia-500/20 
              rounded-3xl backdrop-blur-xl text-center
          `}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white">
              ¿Listo para la Mejor Calidad?
            </h3>

            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Confíe en materiales de <span className={`text-${PRIMARY_COLOR}-400 font-bold`}>primera categoría</span> que garantizan
              <span className={`text-${SECONDARY_COLOR}-400 font-bold`}> seguridad</span>, <span className={`text-${TERTIARY_COLOR}-400 font-bold`}>durabilidad</span> y
              <span className={`text-${PRIMARY_COLOR}-400 font-bold`}> rendimiento excepcional</span>
            </p>

           <a
    href={`https://wa.me/+59894044545?text=${encodeURIComponent("Hola, me gustaría recibir más información sobre ...")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-full transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-2xl backdrop-blur-sm group overflow-hidden"
  >
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 group-hover:from-emerald-500 group-hover:via-green-500 group-hover:to-lime-500 transition-all duration-500"></div>
    
    {/* Shine effect on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
    </div>

    {/* Glow effect - WhatsApp green */}
    <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 transition-opacity duration-500 -z-10"></div>

    {/* Pulse animation for attention */}
    <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping opacity-75"></div>

    {/* Content */}
    <Truck className="relative w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
    
    <span className="relative text-white font-bold">
      <span className="hidden sm:inline">Contactar por WhatsApp</span>
      <span className="inline sm:hidden">WhatsApp</span>
    </span>
    
    <MessageSquare className="relative w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 flex-shrink-0" />

    {/* Tap feedback for mobile */}
    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 sm:hidden"></div>

    {/* WhatsApp badge indicator */}
    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full border-2 border-emerald-600 animate-pulse"></div>
  </a>
          </div>
        </div>
        {/* --- FIN BLOQUE CTA --- */}
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