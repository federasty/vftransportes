import React, { useState, useEffect } from 'react';
import { Truck, MapPin, Clock, Shield, Package, TrendingUp, CheckCircle2, Star, Award, Target, Users, Phone, Layers, Mountain, Construction, Factory } from 'lucide-react';

interface Service {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    gradient: string;
    glowColor: string;
}

interface Material {
    icon: React.ElementType;
    name: string;
    description: string;
    gradient: string;
}

interface Benefit {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
}

interface Process {
    number: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

const services: Service[] = [
    {
        icon: Truck,
        title: 'Transporte de Materiales de Cantera',
        description: 'Servicio integral especializado en el movimiento de todo tipo de materiales de construcción.',
        features: [
            'Flota 100% Mercedes-Benz Atego 2425/2428',
            'Capacidad de hasta 17+ toneladas por viaje',
            'Entregas puntuales con garantía de cumplimiento', 
        ],
        gradient: 'from-green-600 via-emerald-500 to-teal-600',
        glowColor: 'rgba(16, 185, 129, 0.4)'
    },
    {
        icon: Shield,
        title: 'Logística y Distribución Especializada',
        description: 'Soluciones logísticas integrales con protocolos de seguridad certificados y personal altamente capacitado.',
        features: [
            'Planificación logística profesional',
            'Personal certificado en manejo de cargas pesadas',
            'Servicio de alta disponibilidad',
        ],
        gradient: 'from-emerald-600 via-green-500 to-lime-600',
        glowColor: 'rgba(52, 211, 153, 0.4)'
    },
    {
        icon: Clock,
        title: 'Transporte Programado',
        description: 'Flexibilidad total con servicios programados para proyectos a largo plazo y respuesta inmediata para sus necesidades.',
        features: [
            'Programación flexible según su cronograma',
            'Entregas en horarios extendidos disponibles',
            'Coordinación con múltiples proyectos simultáneos',
        ],
        gradient: 'from-lime-600 via-green-500 to-emerald-600',
        glowColor: 'rgba(132, 204, 22, 0.4)'
    },
    {
        icon: Target,
        title: 'Soluciones Personalizadas',
        description: 'Desarrollo de soluciones a medida para proyectos especiales con requerimientos únicos de transporte y logística.',
        features: [
            'Análisis detallado de necesidades específicas',
            'Propuestas comerciales personalizadas',
            'Adaptación a volúmenes variables',
        ],
        gradient: 'from-teal-600 via-emerald-500 to-green-600',
        glowColor: 'rgba(20, 184, 166, 0.4)'
    }
];
const materials: Material[] = [
    { icon: Layers, name: 'Balasto', description: 'Todo tipo y granulometría', gradient: 'from-blue-500 to-cyan-400' },          // Azul Frío a Cian
    { icon: Mountain, name: 'Pedregullo', description: 'Varios tamaños disponibles', gradient: 'from-red-500 to-orange-500' },    // Rojo Vibrante a Naranja
    { icon: Package, name: 'Arena', description: 'Fina, gruesa y especializada', gradient: 'from-amber-400 to-yellow-300' },     // Dorado a Amarillo Claro
    { icon: Mountain, name: 'Piedra', description: 'Triturada y decorativa', gradient: 'from-violet-600 to-fuchsia-500' },       // Violeta Oscuro a Fucsia
    { icon: Construction, name: 'Tosca', description: 'Para relleno y base', gradient: 'from-green-600 to-emerald-500' },        // Verde Bosque a Esmeralda
    { icon: Layers, name: 'Tierra Negra', description: 'Fertilizada y compactada', gradient: 'from-gray-500 to-stone-400' },      // Gris Oscuro a Piedra (Neutro)
    { icon: Factory, name: 'Escombros', description: 'Retiro y transporte', gradient: 'from-teal-400 to-lime-400' },             // Verde Azulado a Lima
    { icon: Package, name: 'Materiales Especiales', description: 'Según requerimiento', gradient: 'from-pink-500 to-rose-400' }    // Rosa Cálido a Rosa Claro
];
const benefits: Benefit[] = [
    {
        icon: Clock,
        title: 'Puntualidad Garantizada',
        description: 'Compromiso absoluto con los tiempos de entrega acordados. Nuestro historial de cumplimiento es del 100%.',
        color: 'from-blue-500 to-sky-500' // ¡Cambiado! Azul a Cielo
    },
    {
        icon: Shield,
        title: 'Seguridad Certificada',
        description: "Cumplimos estrictamente con todas las normativas nacionales de transporte, garantizando servicio seguro, responsable y supervisado.",
        color: 'from-red-500 to-pink-500' // ¡Cambiado! Rojo a Rosa
    },
    {
        icon: Award,
        title: 'Flota de Primera Calidad',
        description: 'Vehículos 100% Mercedes-Benz con un mantenimiento preventivo riguroso y constante de las unidades.',
        color: 'from-yellow-500 to-amber-500' // ¡Cambiado! Amarillo a Ámbar
    },
    {
        icon: Users,
        title: 'Equipo Profesional',
        description: "Conductores plenamente habilitados y aptos para el servicio, evaluados regularmente para garantizar su desempeño y profesionalismo.",
        color: 'from-fuchsia-500 to-purple-500' // ¡Cambiado! Fucsia a Morado
    },
    {
        icon: Star,
        title: 'Excelencia Operativa',
        description: 'Procesos optimizados con un sistema de gestión que garantiza eficiencia en cada operación.',
        color: 'from-indigo-600 to-blue-600' // ¡Cambiado! Índigo a Azul Profundo
    },
    {
        icon: TrendingUp,
        title: 'Mejora Continua',
        description: 'Inversión constante en tecnología, capacitación del personal y actualización de procedimientos para mantenernos a la vanguardia.',
        color: 'from-teal-400 to-emerald-400' // ¡Cambiado! Verde-Azulado (Manteniendo un toque de color anterior, pero diferente)
    }
];

const processSteps: Process[] = [
    {
        number: '01',
        title: 'Solicitud de Cotización',
        description: 'Contáctenos a través de WhatsApp o llamada teléfonica. Nuestro equipo responderá en menos de 2 horas hábiles con una cotización detallada y personalizada.',
        icon: Phone
    },
    {
        number: '02',
        title: 'Planificación Estratégica',
        description:"Nuestro equipo analiza cada requerimiento y organiza rutas, tiempos y recursos para asegurar una planificación precisa y eficiente.",
        icon: MapPin
    },
    {
        number: '03',
        title: 'Ejecución Profesional',
        description: 'Comunicación continua durante el traslado y operación bajo estrictos estándares de seguridad.',
        icon: Truck
    },
    {
        number: '04',
        title: 'Confirmación y Seguimiento',
        description: "Confirmación de entrega finalizada, registro de documentos completo, firma de recepción para asegurar su plena satisfacción.",
        icon: CheckCircle2
    }
];

export default function Servicio() {
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

    return (
        <section className="relative min-h-screen bg-black overflow-hidden py-32 sm:py-36 lg:py-40">

            {/* Premium Background Effects - Green Theme */}
            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/rueda.png"
                        alt="Fondo"
                        className="w-full h-full object-cover opacity-[0.03] mix-blend-lighten pointer-events-none"
                        style={{ transform: 'scale(1.2)' }}
                    />
                </div>

                {/* Animated Gradient Orbs - Green Theme */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] sm:w-[1000px] sm:h-[1000px] bg-gradient-to-br from-green-600/30 via-emerald-600/20 to-transparent rounded-full blur-[150px] animate-mesh-move-1"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] sm:w-[900px] sm:h-[900px] bg-gradient-to-br from-teal-600/30 via-cyan-600/20 to-transparent rounded-full blur-[150px] animate-mesh-move-2"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-lime-600/25 via-green-600/15 to-transparent rounded-full blur-[140px] animate-pulse-slow"></div>
                </div>

                {/* Light Rays */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-green-400/0 via-green-400/60 to-green-400/0 blur-sm animate-light-ray-1"></div>
                    <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-emerald-400/0 via-emerald-400/60 to-emerald-400/0 blur-sm animate-light-ray-2"></div>
                    <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-teal-400/0 via-teal-400/60 to-teal-400/0 blur-sm animate-light-ray-3"></div>
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_20%,transparent_100%)]"></div>

                {/* Mouse Follow Effect */}
                <div
                    className="absolute w-[800px] h-[800px] rounded-full blur-[200px] opacity-20 transition-all duration-700 pointer-events-none hidden lg:block"
                    style={{
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.6) 0%, rgba(52, 211, 153, 0.4) 40%, transparent 70%)',
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                        mixBlendMode: 'screen'
                    }}
                />

                {/* Floating Particles */}
                {[...Array(60)].map((_, i) => {
                    const size = Math.random() * 4 + 1;
                    const greenShades = ['16, 185, 129', '52, 211, 153', '20, 184, 166', '134, 239, 172', '132, 204, 22'];
                    const randomColor = greenShades[Math.floor(Math.random() * greenShades.length)];
                    return (
                        <div
                            key={`particle-${i}`}
                            className="absolute rounded-full animate-float-particles"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                background: `rgba(${randomColor}, ${Math.random() * 0.5 + 0.3})`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${12 + Math.random() * 18}s`,
                                boxShadow: `0 0 ${size * 4}px rgba(${randomColor}, 0.6)`
                            }}
                        />
                    );
                })}
            </div>

            <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Hero Header */}
                <div className="text-center mb-20 sm:mb-24">
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 backdrop-blur-2xl rounded-full mb-10 group hover:bg-gradient-to-r hover:from-green-500/20 hover:via-emerald-500/10 hover:to-green-500/20 hover:border-green-400/40 transition-all duration-500 shadow-[0_0_40px_rgba(16,185,129,0.1)] hover:shadow-[0_0_60px_rgba(16,185,129,0.3)]">
                        <Package className="w-7 h-7 text-green-400 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
                        <span className="text-white font-black tracking-[0.3em] uppercase text-base">Atención de primer nivel</span>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" style={{ animationDelay: '0.3s' }}></div>
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                            Servicios de Transporte
                        </span>
                    </h2>

                    <div className="h-2 w-40 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mb-10 shadow-[0_0_20px_rgba(16,185,129,0.6)]"></div>

                    <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
                        Soluciones integrales de transporte de materiales con <span className="text-green-400 font-extrabold drop-shadow-lg">tecnología Mercedes-Benz</span>,
                        y un <span className="text-teal-400 font-extrabold drop-shadow-lg">compromiso inquebrantable</span> con la excelencia
                    </p>
                </div>

                {/* Services Premium Grid */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                                Nuestros Servicios Especializados
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Cuatro pilares de servicio diseñados para superar sus expectativas en cada proyecto
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-25 rounded-[2rem] blur-3xl transition-all duration-700`}></div>

                                    <div className="relative p-10 sm:p-12 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] border-2 border-white/20 group-hover:border-green-400/50 rounded-[2rem] backdrop-blur-2xl transition-all duration-500 group-hover:scale-[1.02] h-full shadow-2xl group-hover:shadow-[0_0_60px_rgba(16,185,129,0.3)]">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500 rounded-[2rem]`}></div>

                                        <div className="relative z-10 space-y-6">
                                            <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_30px_rgba(16,185,129,0.4)]`}>
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>

                                            <h3 className="text-3xl sm:text-4xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                                {service.description}
                                            </p>

                                            <div className="space-y-4 pt-6 border-t-2 border-white/10">
                                                {service.features.map((feature, fIndex) => (
                                                    <div key={fIndex} className="flex items-start gap-3 group/feature">
                                                        <div className={`w-6 h-6 flex-shrink-0 mt-0.5 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center group-hover/feature:scale-110 transition-all duration-300`}>
                                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                                        </div>
                                                        <span className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300 font-medium">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-[2rem]`}></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Materials We Transport */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                                Materiales que Transportamos
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Amplia variedad de materiales de construcción y cantera con servicio especializado para cada tipo
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {materials.map((material, index) => {
                            const Icon = material.icon;
                            return (
                                <div key={index} className="relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${material.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>

                                    <div className="relative p-6 sm:p-8 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border-2 border-white/10 group-hover:border-white/30 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:scale-105 text-center h-full">
                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 bg-gradient-to-br ${material.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-black text-white mb-2">{material.name}</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">
                                            {material.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                                Ventajas Competitivas
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Beneficios que nos posicionan como la mejor opción en transporte de materiales
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-2xl transition-all duration-700`}></div>

                                    <div className="relative p-8 sm:p-10 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border-2 border-white/10 group-hover:border-white/30 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:scale-105 h-full">
                                        <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-2xl font-black text-white mb-4 text-center">{benefit.title}</h3>
                                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-center">
                                            {benefit.description}
                                        </p>

                                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Process Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                                Proceso de Trabajo Profesional
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Metodología probada en cuatro etapas para garantizar resultados excepcionales
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                                    <div className="relative p-8 sm:p-10 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] border-2 border-white/10 group-hover:border-green-400/50 rounded-3xl backdrop-blur-xl transition-all duration-500 group-hover:scale-105 h-full">
                                        <div className="absolute top-6 right-6 text-7xl font-black text-green-500/5 group-hover:text-green-500/15 transition-colors duration-500 leading-none">
                                            {step.number}
                                        </div>

                                        <div className="relative z-10">
                                            <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>

                                            <h3 className="text-xl sm:text-2xl font-black text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                                                {step.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                                {step.description}
                                            </p>

                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section Premium */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-[2rem] blur-3xl"></div>

                    <div className="relative p-12 sm:p-16 lg:p-20 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] border-2 border-white/20 rounded-[2rem] backdrop-blur-2xl text-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-emerald-600/5 to-transparent opacity-50"></div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-green-400/30 rounded-tr-3xl"></div>
                        <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-green-400/30 rounded-bl-3xl"></div>

                        <div className="relative z-10">
                            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.5)] animate-pulse-slow">
                                <Target className="w-10 h-10 text-white" />
                            </div>

                            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6">
                                <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                                    ¿Listo para la
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                                    Excelencia en Transporte?
                                </span>
                            </h3>

                            <div className="h-1.5 w-48 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mb-10"></div>

                            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
                                Solicite una cotización personalizada y descubra por qué somos la empresa líder en transporte de materiales.
                                Nuestro equipo está listo para brindarle
                                <span className="text-green-400 font-extrabold"> soluciones</span>,
                                <span className="text-emerald-400 font-extrabold"> servicio impecable</span> y
                                <span className="text-teal-400 font-extrabold"> resultados garantizados</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                {/* WhatsApp Button */}
                                <a
                                    href="https://wa.me/59894044545?text=Hola,%20me%20interesa%20solicitar%20una%20cotización%20para%20transporte%20de%20materiales.%20Me%20gustaría%20conocer%20más%20detalles%20sobre%20sus%20servicios."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden rounded-2xl w-full sm:w-auto"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 animate-gradient-x"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover:border-white/50 transition-colors duration-500"></div>
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                                    <div className="relative px-8 py-5 sm:px-12 sm:py-6 flex items-center justify-center gap-4">
                                        <Phone className="w-7 h-7 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                                        
                                        <span className="font-black text-base sm:text-lg tracking-[0.15em] uppercase text-white">
                                            Solicitar Cotización
                                        </span>   
                                        <Truck className="w-6 h-6 text-white group-hover:scale-110 transition-all duration-300" />
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.4)] group-hover:shadow-[0_0_80px_rgba(16,185,129,0.7)] transition-shadow duration-700"></div>
                                </a>

                                {/* Phone Number Display */}
                                <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border-2 border-white/20 rounded-xl backdrop-blur-xl group hover:bg-white/10 hover:border-green-400/50 transition-all duration-500">
                                    <Phone className="w-6 h-6 text-green-400 group-hover:rotate-12 transition-transform duration-300" />
                                    <div className="text-left">
                                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Llámanos</p>
                                        <p className="text-white font-black text-lg">+598 94 044 545</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 pt-12 border-t-2 border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white font-bold text-sm">100% Confiable</p>
                                        <p className="text-gray-400 text-xs">Servicio Certificado</p>
                                    </div>
                                </div>

                             

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Premium Animations */}
            <style>{`
        @keyframes mesh-move-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -60px) scale(1.2); }
          66% { transform: translate(-40px, 40px) scale(0.9); }
        }
        @keyframes mesh-move-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, 60px) scale(0.9); }
          66% { transform: translate(40px, -40px) scale(1.2); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes float-particles {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3; 
          }
          25% {
            transform: translateY(-30px) translateX(20px) rotate(90deg);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-40px) translateX(-15px) rotate(180deg); 
            opacity: 1; 
          }
          75% {
            transform: translateY(-25px) translateX(25px) rotate(270deg);
            opacity: 0.6;
          }
        }
        @keyframes light-ray-1 {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes light-ray-2 {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes light-ray-3 {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.55; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-mesh-move-1 { animation: mesh-move-1 28s ease-in-out infinite; }
        .animate-mesh-move-2 { animation: mesh-move-2 32s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 12s ease-in-out infinite; }
        .animate-float-particles { animation: float-particles 15s ease-in-out infinite; }
        .animate-light-ray-1 { animation: light-ray-1 4s ease-in-out infinite; }
        .animate-light-ray-2 { animation: light-ray-2 5s ease-in-out infinite; }
        .animate-light-ray-3 { animation: light-ray-3 6s ease-in-out infinite; }
        .animate-gradient-x { 
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
        </section>
    );
}