// src/pages/Home.tsx
import ServiciosCarousel from "../components/ServiciosCarousel";
import SimpleHeroCarousel from "../components/SimpleHeroCarousel";

const servicios = [
    {
        title: "Reparación de motor",
        icon: "/icons/reparacionmotor.PNG",
        description: "Diagnóstico y reparación completa de motores de combustión interna. Incluye desmontaje, evaluación de componentes, rectificación de block, cambio de pistones, bielas, árbol de levas y puesta a punto del sistema de lubricación y refrigeración."
    },
    {
        title: "Frenos",
        icon: "/icons/frenos.PNG",
        description: "Servicio integral del sistema de frenos. Reemplazo de pastillas, discos, tambores, zapatas y líquido de frenos. Diagnóstico computarizado del sistema ABS y reparación de bombas de freno y cilindros maestros."
    },
    {
        title: "Diagnóstico electronico",
        icon: "/icons/diagnostico.PNG",
        description: "Escaneo computarizado con equipos de última generación para lectura de códigos de falla, monitoreo en tiempo real de sensores, calibración de módulos electrónicos y programación de centralitas."
    },
    {
        title: "Fuel injection",
        icon: "/icons/fuelinjection.PNG",
        description: "Limpieza y calibración de sistemas de inyección electrónica. Reemplazo de inyectores, bombas de combustible, reguladores de presión y sensores. Optimización del rendimiento y reducción de consumo de combustible."
    },
    {
        title: "Fallas electromecanicas",
        icon: "/icons/fallaselect.PNG",
        description: "Diagnóstico y reparación de fallas que combinan componentes eléctricos y mecánicos. Solución de problemas en sistemas híbridos, sensores de posición, actuadores y módulos de control integrados."
    },
    {
        title: "Alineación y balanceo",
        icon: "/icons/alineacion.PNG",
        description: "Alineación de dirección con equipos láser de precisión y balanceo dinámico de ruedas. Corrección de ángulos de caída, convergencia y avance. Mejora la estabilidad y prolonga la vida útil de los neumáticos."
    },
    {
        title: "Afinación",
        icon: "/icons/afinacion.PNG",
        description: "Mantenimiento preventivo completo del motor. Incluye cambio de bujías, cables, filtros (aire, combustible, aceite), limpieza de cuerpo de aceleración y verificación de sistemas de encendido y combustible."
    },
    {
        title: "Bandas de tiempo",
        icon: "/icons/bandatiempo.PNG",
        description: "Reemplazo de kit completo de distribución (banda, tensores, rodamientos). Incluye verificación de sincronización entre árbol de levas y cigüeñal. Prevención de daños catastróficos en el motor."
    },
    {
        title: "Mantenimiento predictivo, preventivo y correctivo",
        icon: "/icons/mantenimientoprevent.PNG",
        description: "Programas de mantenimiento basados en condiciones reales del vehículo. Monitoreo predictivo con tecnología IoT, mantenimiento preventivo programado y corrección inmediata de fallas detectadas."
    },
    {
        title: "Reparación de transmisión",
        icon: "/icons/reparaciontransmision.PNG",
        description: "Reparación especializada de transmisiones automáticas y manuales. Reconstrucción de convertidores de par, cambio de embragues, sincronizadores y reparación de sistemas mecatrónicos en cajas automáticas."
    },
    {
        title: "Gestion de flota",
        icon: "/icons/gestionflota.PNG",
        description: "Servicios integrales para empresas con múltiples vehículos. Programación de mantenimientos, control de combustible, gestión de reparaciones, reportes de productividad y optimización de costos operativos."
    },
    {
        title: "Suspension",
        icon: "/icons/suspension.PNG",
        description: "Diagnóstico y reparación completa del sistema de suspensión. Reemplazo de amortiguadores, muelles, rótulas, terminales axiales, brazos de control y estabilizadores. Mejora de confort y seguridad."
    },
    {
        title: "Cambio de clutch",
        icon: "/icons/cambioclutch.PNG",
        description: "Reemplazo completo del sistema de embrague. Incluye disco, plato de presión, collarín de empuje y verificación del cilindro maestro y esclavo. Ajuste perfecto para un cambio de marchas suave."
    },
    {
        title: "Reparación de diferenciales",
        icon: "/icons/reparaciondif.PNG",
        description: "Reparación y reconstrucción de diferenciales convencionales, autoblocantes y electrónicos. Cambio de engranajes cónicos, satélites, coronas y ajuste de precargas. Especialistas en tracción 4x4."
    },
    {
        title: "Alianza comercial con proovedores mayoristas",
        icon: "/icons/alianza.PNG",
        description: "Convenios estratégicos con proveedores mayoristas que nos permiten ofrecer repuestos originales y de alta calidad a precios competitivos. Garantía en todos los componentes instalados."
    }
];


const homeSlides = [
    {
        image: "/images/camionescarretera.jpg",
        title: "Servicio a flotillas y particulares.",
    },
    {
        image: "/images/camion1.jpg",
        title: "Refacciones originales de primera calidad.",
    },
    {
        image: "/images/refacciones/motor1.jpg",
        title: "Amplio inventario de refacciones.",
    },
    {
        image: "/images/volantecamion.jpg",
        title: "Reparación y mantenimiento de motores diesel.", // ← Solo este cambiado
    },
];

export default function Home() {

    return (
        <div>
            <a
                href="https://api.whatsapp.com/send?phone=523320853721&text=Hola,%20me%20interesa%20solicitar%20informes%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-2 rounded-lg fixed bottom-8 left-80 z-50 md:left-160 lg:left-220"
            >
                <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-14" />
            </a>

            <SimpleHeroCarousel
                slides={homeSlides}
                autoPlayInterval={4000}
            />


            {/* Sección BIENVENIDA
            <section className="bg-black text-white">
                <div className="max-w-6xl mx-auto pt-16 text-center static">

                    <img
                        src="/images/camionescarretera.jpg"
                        alt="Camiones en carretera"
                        className="w-full h-screen object-cover opacity-50"
                    />
                    <div className="absolute bottom-50 ">
                        <p className="text-3xl mb-8 text-center w-8/12 mx-auto">
                            Servicio a flotillas y particulares.
                        </p>

                        <a
                            href="/servicios"
                            className="bg-red-800/90 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                        >
                            Cotizar servicio
                        </a>
                    </div>


                </div>
            </section>*/}

            {/* Sección "Quiénes somos" */}
            <section className="max-w-6xl mx-auto px-6 pt-20">
                <div className="flex mb-6">
                    <svg
                        className="w-12 h-16 text-red-800/90 mr-2 inline-block transform rotate-90"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 2 L18 18 H2 Z" />
                    </svg>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3 text-zinc-800 uppercase">
                        ¿Quiénes <span className="text-red-800/90"> somos?</span>
                    </h2>
                </div>

                <p className="text-gray-700 text-xl font-semibold text-justify md:text-xl leading-relaxed">
                    Diesel Dynamics Service es una empresa con más de 9 años de experiencia dedicada al
                    servicio de mantenimiento preventivo y correctivo a flotillas, con experiencia certificada
                    en el ramo del diesel y gasolina.
                </p>
                <p className="text-gray-700 text-xl font-semibold text-justify md:text-xl leading-relaxed mt-8">
                    Además de la comercialización de refacciones y partes
                    para servicio pesado.
                </p>
            </section>


            <div className="bg-red-800/90 py-42 mt-28">
                <div className=" mx-auto text-center">
                    <h1 className="text-white text-4xl font-bold uppercase mb-4">Rescate urgente</h1>
                    <p className="text-white">Llame al:</p>
                    <div className="flex w-11/12 mx-auto  ">
                        <img src="/icons/telefono.png" alt="Icono telefono" className="w-7 max-h-7 mt-3 ml-1" />
                        <h1 className="text-white text-5xl font-bold uppercase ml-auto ">33 2629 5248</h1>
                    </div>

                </div>

            </div>

            {/* Lineas diagonales, separando secciones */}
            <div className="w-full overflow-hidden transform  mb-16 static">
                <svg
                    className="w-full h-64 md:h-32 block transform rotate-y-180"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    {/* Línea gris: diagonal superior */}
                    <polygon
                        points="0,0 100,0 100,2 0,80"
                        className="fill-red-800/90"
                    />
                    {/* Línea roja: diagonal intermedia */}
                    <polygon
                        points="0,100 100,2 100,0 0,70"
                        className="fill-zinc-800"
                    />
                </svg>
                <div className="flex w-11/12 mx-auto ">
                    <svg
                        className="w-12 h-16 text-zinc-800/90 mr-2 inline-block transform rotate-90"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 2 L18 18 H2 Z" />
                    </svg>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mt-1 text-zinc-800 uppercase">
                            Servicios
                        </h2>
                        <p className="font-semibold text-center">Diesel y gasolina</p>
                    </div>


                </div>

            </div>

            {/* Sección Servicios*/}
            <section className=" w-10/12 mx-auto my-12 ">
                <div>
                    <ServiciosCarousel servicios={servicios} itemsPerSlide={5} />
                </div>
            </section>

            {/* Sección Refacciones*/}
            <section className="bg-red-800/90 text-white py-32">
                <div className="flex mb-6 w-11/12 mx-auto">
                    <svg
                        className="w-12 h-16 text-white mr-2 inline-block transform rotate-90"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 2 L18 18 H2 Z" />
                    </svg>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white uppercase">
                        Refacciones
                    </h2>
                </div>

                <p className="text-justify text-xl w-11/12 mx-auto mb-12">
                    En DDS podrá encontrar una amplia gama de refacciones tanto de marcas originales
                </p>

                {/* Grid con centrado completo */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-11/12 mx-auto">

                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/Cat.png" alt="Caterpillar" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/cummins.png" alt="Cummins" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/mercedesbenz.png" alt="Mercedes Benz" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/detroit.png" alt="Detroit" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/freight.png" alt="Freightliner" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/international.png" alt="International" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/kenw.png" alt="Kenworth" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/navistar.png" alt="Navistar" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                </div>


                <p className="text-justify text-xl w-11/12 mx-auto mt-24 mb-8">
                    Como marcas de reemplazo
                </p>
                {/* Grid con centrado completo */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-11/12 mx-auto">

                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/swicch.png" alt="Swicch Parts" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/alliant.png" alt="Alliant Power" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/genuine.png" alt="Genuine PAI" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/interstate.png" alt="Interstate Mcbee" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/ctp.png" alt="CTP" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                    <div className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg">
                        <img src="/logos/marcas/fpdiesel.png" alt="FP Diesel" className="brightness-0 invert w-full max-w-[100px] h-auto" />
                    </div>
                </div>


            </section>

            {/* Sección ¿Porque elegirnos?*/}
            {/* Sección ¿Porque elegirnos?*/}
            <section className="py-32 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/images/carretera.jpg)' }}>

                <div className="w-11/12 mx-auto text-justify relative z-10">
                    <h2 className="text-3xl font-bold uppercase mb-24 text-center text-white">¿Porque elegirnos?</h2>

                    <div className="md:grid md:grid-cols-3 md:gap-6 md:items-stretch lg:gap-8">

                        <article className="py-4 bg-white bg-opacity-90 relative rounded md:rounded-lg md:h-full md:flex md:flex-col md:justify-center md:min-h-0"
                            style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }}>
                            <div className="md:p-4 lg:p-6 h-full flex items-center">
                                <div className="w-10/12 ml-4 md:ml-0 md:w-full md:py-2">
                                    <h3 className="uppercase font-semibold mb-2 text-2xl text-left md:text-left md:text-lg lg:text-xl xl:text-2xl">Minimiza tiempos muertos</h3>
                                    <p className="text-xl md:text-sm lg:text-base xl:text-lg md:text-justify">Programamos el mantenimiento de su flota para que ningún camión pare más de lo necesario.</p>
                                </div>
                            </div>
                        </article>

                        <article className="py-4 bg-white bg-opacity-90 relative mt-8 rounded md:mt-0 md:rounded-lg md:h-full md:flex md:flex-col md:justify-center md:min-h-0"
                            style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }}>
                            <div className="md:p-4 lg:p-6 h-full flex items-center">
                                <div className="w-10/12 ml-4 md:ml-0 md:w-full md:py-2">
                                    <h3 className="uppercase font-semibold mb-2 text-2xl md:text-left md:text-lg lg:text-xl xl:text-2xl">Maximiza la vida util</h3>
                                    <p className="text-xl md:text-sm lg:text-base xl:text-lg md:text-justify">Contamos con planes de mantenimiento preventido que extienden la vida de sus unidades.</p>
                                </div>
                            </div>
                        </article>

                        <article className="py-4 bg-white bg-opacity-90 relative mt-8 rounded md:mt-0 md:rounded-lg md:h-full md:flex md:flex-col md:justify-center md:min-h-0"
                            style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }}>
                            <div className="md:p-4 lg:p-6 h-full flex items-center">
                                <div className="w-10/12 ml-4 md:ml-0 md:w-full md:py-2">
                                    <h3 className="uppercase font-semibold mb-2 text-2xl md:text-left md:text-lg lg:text-xl xl:text-2xl">Transparencia total</h3>
                                    <p className="text-xl md:text-sm lg:text-base xl:text-lg md:text-justify">Recibirá fotografias y detalles de cada servicio, sin cargos ocultos.</p>
                                </div>
                            </div>
                        </article>

                    </div>

                    <div className="text-center mt-32 md:mt-20 lg:mt-24">
                        <h3 className="text-2xl font-bold text-white md:text-2xl lg:text-3xl">¿Qué espera? </h3>
                        <h3 className="text-2xl font-bold mb-6 text-white md:text-2xl lg:text-3xl">Invierta en su flotilla</h3>
                        <button className="bg-red-800/90 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition md:px-10 md:py-4 md:text-lg">
                            COTIZAR AHORA
                        </button>
                    </div>
                </div>
            </section>

            {/* Sección ubicacion y contacto*/}
            <section>
                <div className=" mt-8">
                    <div className="flex mb-6 w-11/12 mx-auto">
                        <svg
                            className="w-12 h-16 text-red-800/90 mr-2 inline-block transform rotate-90"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 2 L18 18 H2 Z" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-bold  text-zinc-800 uppercase">
                            Ubicación y contacto
                        </h2>
                    </div>

                    <section className="pb-16">
                        <div className="container mx-auto px-4">

                            <div className="max-w-2xl mx-auto ">
                                <div className="bg-white p-8 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Domicilio:</h3>
                                    <p className="text-lg text-gray-600 mb-2">
                                        Calle: <span className="text-red-700 font-bold">Los Pinos #2300</span>
                                    </p>
                                    <p className="text-lg text-gray-600 mb-2">
                                        Colonia: La Guadalupana
                                    </p>
                                    <p className="text-lg text-gray-600 mb-2">
                                        San Pedro Tlaquepaque, Jalisco
                                    </p>
                                </div>
                            </div>


                            <div className="max-w-2xl mx-auto mt-8">
                                <div className="bg-white p-8 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Medios de comunicación</h3>
                                    <p className="text-lg text-gray-600 mb-2 flex">
                                        Email: <a href="mailto:dieselservice82@gmail.com" className="text-red-700 font-bold text-xl underline hover:text-red-800 transition-colors block ml-2">dieselservice82@gmail.com</a>
                                    </p>
                                    <p className="text-lg text-gray-600 mb-2">
                                        Teléfono: <span className="text-red-700 font-bold text-xl"> 33 2629 5248 </span>
                                    </p>
                                </div>
                            </div>


                        </div>
                    </section>


                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.509670556299!2d-103.3291793598709!3d20.58726774135173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3738b72c8e5%3A0x95bc82c2792a168a!2sDIESEL%20DYNAMICS%20SERVICE!5e0!3m2!1ses!2smx!4v1761087065633!5m2!1ses!2smx" loading="lazy" className=" w-full rounded-3xl mx-auto h-96 mb-16" ></iframe>
                </div>
            </section>





        </div>
    );
}
