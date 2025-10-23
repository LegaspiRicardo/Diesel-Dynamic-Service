// src/pages/Servicios.tsx
import ServiciosCarousel from "../components/ServiciosCarousel";

const servicios = [
    { title: "Reparación de motor", icon: "/icons/reparacionmotor.PNG" },
    { title: "Frenos", icon: "/icons/frenos.PNG" },
    { title: "Diagnóstico electronico", icon: "/icons/diagnostico.PNG" },
    { title: "Fuel injection", icon: "/icons/fuelinjection.PNG" },
    { title: "Fallas electromecanicas", icon: "/icons/fallaselect.PNG" },

    { title: "Alineación y balanceo", icon: "/icons/alineacion.PNG" },
    { title: "Afinación", icon: "/icons/afinacion.PNG" },
    { title: "Bandas de tiempo", icon: "/icons/bandatiempo.PNG" },
    { title: "Mantenimiento predictivo, preventivo y correctivo", icon: "/icons/mantenimientoprevent.PNG" },
    { title: "Reparación de transmisión", icon: "/icons/reparaciontransmision.PNG" },

    { title: "Gestion de flota", icon: "/icons/gestionflota.PNG" },
    { title: "Suspension", icon: "/icons/suspension.PNG" },
    { title: "Cambio de clutch", icon: "/icons/cambioclutch.PNG" },
    { title: "Reparación de diferenciales", icon: "/icons/reparaciondif.PNG" },
    { title: "Alianza comercial con proovedores mayoristas", icon: "/icons/alianza.PNG" },
];

export default function Servicios() {
    return (
        <section className="pt-12">
            {/* Botón Whatsapp*/}
            <a
                href="https://api.whatsapp.com/send?phone=523320853721&text=Hola,%20me%20interesa%20solicitar%20informes%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 fixed bottom-8 left-68 z-50"
            >
                WhatsApp
            </a>
            {/* Hero Section para Servicios */}
            <div className="bg-red-800/90 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6">Servicios </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Mantenga su negocio en movimiento
                    </p>
                    <button className="border border-white hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition">
                        Solicitar Cotización
                    </button>
                </div>
            </div>

            {/* Introducción a los Servicios */}
            <div className="max-w-6xl mx-auto px-6 pt-16">
                <div className="text-center mb-12">
                    {/*  <h2 className="text-4xl font-bold mb-8">Todo para el mantenimiento de sus unidades</h2>*/}
                    <p className="text-lg font-bold text-gray-600 max-w-3xl mx-auto text-justify">
                        En Diesel Dynamics Service, entendemos que cada minuto de inactividad de su flota
                        representa <span className="text-red-800"> pérdidas económicas </span>. Por eso ofrecemos servicios especializados
                        que garantizan máxima disponibilidad y rendimiento de sus unidades.
                    </p>
                </div>

                {/* Beneficios Rápidos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 bg-white rounded-lg shadow-xl">
                        <div className="text-3xl mb-4">⚡</div>
                        <h3 className="text-xl font-bold mb-2">Servicio Rápido</h3>
                        <p className="text-gray-600">Minimizamos tiempos muertos con diagnósticos precisos y reparaciones eficientes</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-xl">
                        <div className="text-3xl mb-4">🛡️</div>
                        <h3 className="text-xl font-bold mb-2">Garantía Incluida</h3>
                        <p className="text-gray-600">Todos nuestros servicios incluyen garantía por escrito para su tranquilidad</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-xl">
                        <div className="text-3xl mb-4">📊</div>
                        <h3 className="text-xl font-bold mb-2">Reportes Detallados</h3>
                        <p className="text-gray-600">Reciba reportes completos con fotos del trabajo realizado</p>
                    </div>
                </div>

                {/* Lista de servicios básicos - Manteniendo tu estructura actual 
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Servicios Principales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Mantenimiento Regular</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Cambio de aceite y filtros</li>
                                <li>Alineación y balanceo</li>
                                <li>Afinación mayor y menor</li>
                                <li>Bandas de tiempo</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Reparaciones Especializadas</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Reparación de motor y transmisión</li>
                                <li>Sistema de frenos completo</li>
                                <li>Diagnóstico electrónico avanzado</li>
                                <li>Suspensión y dirección</li>
                            </ul>
                        </div>
                    </div>
                </div>*/}
            </div>

            {/* Sección Carrusel de Servicios */}
            <section className="w-11/12 mx-auto  bg-gray-50 py-12 rounded-xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Todos Nuestros Servicios</h2>
                    <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto text-center">
                        Conozca nuestra gama completa de servicios
                    </p>
                </div>
                <ServiciosCarousel servicios={servicios} itemsPerSlide={5} />
            </section>

            {/* Llamada a la acción final */}
            <div className="bg-red-800/90 text-white py-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-4">¿Necesita un trabajo más específico?</h2>
                    <p className="text-xl mb-6">
                        Contáctenos y reciba una cotización personalizada para las necesidades de su flota
                    </p>
                    <button className="border border-white hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition">
                        Solicitar información
                    </button>
                </div>
            </div>

        </section>
    );
}