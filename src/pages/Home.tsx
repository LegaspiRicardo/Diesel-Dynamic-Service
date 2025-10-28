// src/pages/Home.tsx
import { motion } from 'framer-motion';
import ServiciosCarousel from "../components/ServiciosCarousel";
import SimpleHeroCarousel from "../components/SimpleHeroCarousel";
import BotonWhats from "../components/BotonWhats";
import ContactForm from "../components/ContactForm";

// Configuración de animaciones
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
};

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
        title: "Reparación y mantenimiento de motores diesel.",
    },
];

export default function Home() {
    return (
        <div>
            <BotonWhats />

            <SimpleHeroCarousel
                slides={homeSlides}
                autoPlayInterval={4000}
            />

            {/* Sección "Quiénes somos" */}
            <motion.section
                className="max-w-6xl mx-auto px-6 pt-20"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.div className="flex mb-6" variants={fadeInLeft}>
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
                </motion.div>

                <motion.p
                    className="text-gray-700 text-xl font-semibold text-justify md:text-xl leading-relaxed"
                    variants={fadeInUp}
                >
                    Diesel Dynamics Service es una empresa con más de 9 años de experiencia dedicada al
                    servicio de mantenimiento preventivo y correctivo a flotillas, con experiencia certificada
                    en el ramo del diesel y gasolina.
                </motion.p>
                <motion.p
                    className="text-gray-700 text-xl font-semibold text-justify md:text-xl leading-relaxed mt-8"
                    variants={fadeInUp}
                >
                    Además de la comercialización de refacciones y partes
                    para servicio pesado.
                </motion.p>
            </motion.section>

            {/* Sección "Rescate Urgente" */}
            <motion.div
                className="bg-red-800/90 py-16 mt-28"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-6xl mx-auto text-center px-6">
                    <motion.h1
                        className="text-white text-4xl font-bold uppercase mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Rescate urgente
                    </motion.h1>
                    <motion.p
                        className="text-white text-lg mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Llame al:
                    </motion.p>
                    <motion.div
                        className="flex justify-center items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <img
                            src="/icons/telefono.png"
                            alt="Icono telefono"
                            className="w-8 h-8"
                        />
                        <a
                            href="tel:3326295248"
                            className="text-white text-4xl font-bold uppercase hover:scale-x-110 duration-300"
                        >
                            33 2629 5248
                        </a>
                    </motion.div>
                    <motion.p
                        className="text-white/80 mt-4 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Haga clic en el número para llamar inmediatamente
                    </motion.p>
                </div>
            </motion.div>

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
                <motion.div
                    className="flex w-11/12 mx-auto"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
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
                </motion.div>
            </div>

            {/* Sección Servicios*/}
            <motion.section
                className="w-10/12 mx-auto my-12"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div>
                    <ServiciosCarousel servicios={servicios} itemsPerSlide={5} />
                </div>
            </motion.section>

            {/* Sección Refacciones*/}
            <motion.section
                className="bg-red-800/90 text-white py-32"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.div
                    className="flex mb-6 w-11/12 mx-auto"
                    variants={fadeInLeft}
                >
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
                </motion.div>

                <motion.p
                    className="text-justify text-xl w-11/12 mx-auto mb-12"
                    variants={fadeInUp}
                >
                    En DDS podrá encontrar una amplia gama de refacciones tanto de marcas originales
                </motion.p>

                {/* Grid con centrado completo */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 w-11/12 mx-auto"
                    variants={staggerContainer}
                >
                    {[
                        "/logos/marcas/Cat.png",
                        "/logos/marcas/cummins.png",
                        "/logos/marcas/mercedesbenz.png",
                        "/logos/marcas/detroit.png",
                        "/logos/marcas/freight.png",
                        "/logos/marcas/international.png",
                        "/logos/marcas/kenw.png",
                        "/logos/marcas/navistar.png"
                    ].map((logo, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg"
                            variants={scaleIn}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <img src={logo} alt={logo.split('/').pop()} className="brightness-0 invert w-full max-w-[100px] h-auto" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    className="text-justify text-xl w-11/12 mx-auto mt-24 mb-8"
                    variants={fadeInUp}
                >
                    Como marcas de reemplazo
                </motion.p>

                {/* Grid con centrado completo */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 w-11/12 mx-auto"
                    variants={staggerContainer}
                >
                    {[
                        "/logos/marcas/swicch.png",
                        "/logos/marcas/alliant.png",
                        "/logos/marcas/genuine.png",
                        "/logos/marcas/interstate.png",
                        "/logos/marcas/ctp.png",
                        "/logos/marcas/fpdiesel.png"
                    ].map((logo, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center justify-center p-4 min-h-[120px] bg-white/5 rounded-lg"
                            variants={scaleIn}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <img src={logo} alt={logo.split('/').pop()} className="brightness-0 invert w-full max-w-[100px] h-auto" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Sección ¿Porque elegirnos?*/}
            <motion.section
                className="py-32 relative bg-fixed bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/ddsfotos/rescate2edit.jpg)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-11/12 mx-auto text-justify relative z-10">
                    <motion.h2
                        className="text-3xl font-bold uppercase mb-24 text-center text-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        ¿Porque elegirnos?
                    </motion.h2>

                    <motion.div
                        className="md:grid md:grid-cols-3 md:gap-6 md:items-stretch lg:gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                title: "Minimiza tiempos muertos",
                                text: "Programamos el mantenimiento de su flota para que ningún camión pare más de lo necesario."
                            },
                            {
                                title: "Maximiza la vida util",
                                text: "Contamos con planes de mantenimiento preventido que extienden la vida de sus unidades."
                            },
                            {
                                title: "Transparencia total",
                                text: "Recibirá fotografias y detalles de cada servicio, sin cargos ocultos."
                            }
                        ].map((item, index) => (
                            <motion.article
                                key={index}
                                className="py-4 bg-white bg-opacity-90 relative rounded md:rounded-lg md:h-full md:flex md:flex-col md:justify-center md:min-h-0 mt-8 md:mt-0"
                                style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }}
                                variants={fadeInUp}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="md:p-4 lg:p-6 h-full flex items-center">
                                    <div className="w-10/12 ml-4 md:ml-0 md:w-full md:py-2">
                                        <h3 className="uppercase font-semibold mb-2 text-2xl text-left md:text-left md:text-lg lg:text-xl xl:text-2xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-xl md:text-sm lg:text-base xl:text-lg md:text-justify">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-32 md:mt-20 lg:mt-24"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-3xl font-bold text-white md:text-2xl lg:text-3xl">¿Qué espera? </h3>
                        <h3 className="text-2xl font-bold mb-6 text-white md:text-2xl lg:text-3xl">Invierta en su flotilla</h3>

                        <motion.a
                            href="https://api.whatsapp.com/send?phone=523320853721&text=Hola,%20me%20interesa%20solicitar%20una%20cotización%20de%20sus%20servicios"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className="bg-red-800/90 text-white text-2xl px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-800 transition md:px-10 md:py-4 md:text-lg">
                                COTIZAR AHORA
                            </button>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.section>

            {/* Sección ubicacion y contacto */}
            <motion.section
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.div
                    className="mt-8"
                    variants={fadeInLeft}
                >
                    <div className="flex mb-6 w-11/12 mx-auto">
                        <svg
                            className="w-12 h-16 text-red-800/90 mr-2 inline-block transform rotate-90"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 2 L18 18 H2 Z" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 uppercase">
                            Ubicación y contacto
                        </h2>
                    </div>

                    <section className="pb-16">
                        <div className="container mx-auto px-4">
                            {/* Grid con dos columnas: información de contacto y formulario */}
                            <motion.div
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
                                variants={staggerContainer}
                            >
                                {/* Columna izquierda - Información de contacto */}
                                <motion.div
                                    className="space-y-8"
                                    variants={fadeInLeft}
                                >
                                    {/* Medios de comunicación */}
                                    <motion.div
                                        className="bg-white p-4 rounded-lg shadow-md"
                                        variants={fadeInUp}
                                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                    >
                                        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Medios de comunicación</h3>
                                        <div className="space-y-3">
                                            <p className="text-lg text-gray-600 flex items-center">
                                                Email:
                                                <a
                                                    href="mailto:dieselservice82@gmail.com"
                                                    className="text-red-700 font-bold text-xl underline hover:text-red-800 transition-colors ml-2"
                                                >
                                                    dieselservice82@gmail.com
                                                </a>
                                            </p>
                                            <p className="text-lg text-gray-600 flex items-center">
                                                Teléfono:
                                                <a
                                                    href="tel:3326295248"
                                                    className="text-red-700 font-bold text-xl hover:text-red-800 transition-colors ml-2"
                                                >
                                                    33 2629 5248
                                                </a>
                                            </p>
                                            <p className="text-lg text-gray-600 flex items-center">
                                                WhatsApp:
                                                <a
                                                    href="https://api.whatsapp.com/send?phone=523326295248"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-red-700 font-bold text-xl underline hover:text-red-800 transition-colors ml-2"
                                                >
                                                    33 2629 5248
                                                </a>
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Horario de atención */}
                                    <motion.div
                                        className="bg-white p-4 rounded-lg shadow-md"
                                        variants={fadeInUp}
                                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                    >
                                        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Horario de atención</h3>
                                        <div className="space-y-2">
                                            <p className="text-lg text-gray-600">
                                                <span className="font-semibold">Lunes a Viernes:</span> 9:00 AM - 6:00 PM
                                            </p>
                                            <p className="text-lg text-gray-600">
                                                <span className="font-semibold">Sábados:</span> 9:00 AM - 2:00 PM
                                            </p>
                                            <p className="text-lg text-gray-600">
                                                <span className="font-semibold">Domingos:</span> Cerrado
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Domicilio */}
                                    <motion.div
                                        className="bg-white p-4 rounded-lg shadow-md"
                                        variants={fadeInUp}
                                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                    >
                                        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Domicilio</h3>
                                        <div className="space-y-3">
                                            <p className="text-lg text-gray-600">
                                                Calle: <span className="text-red-700 font-bold">Los Pinos #2300</span>
                                            </p>
                                            <p className="text-lg text-gray-600">
                                                Colonia: La Guadalupana
                                            </p>
                                            <p className="text-lg text-gray-600">
                                                San Pedro Tlaquepaque, Jalisco
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Columna derecha - Formulario */}
                                <motion.div variants={fadeInRight}>
                                    <ContactForm />
                                </motion.div>
                            </motion.div>

                            {/* Mapa - Ahora fuera del grid, abajo de todo */}
                            <motion.div
                                className="mt-12"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.509670556299!2d-103.3291793598709!3d20.58726774135173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3738b72c8e5%3A0x95bc82c2792a168a!2sDIESEL%20DYNAMICS%20SERVICE!5e0!3m2!1ses!2smx!4v1761087065633!5m2!1ses!2smx"
                                    loading="lazy"
                                    className="w-full rounded-3xl h-96 border-0"
                                    title="Ubicación de Diesel Dynamics Service"
                                ></iframe>
                            </motion.div>
                        </div>
                    </section>
                </motion.div>
            </motion.section>
        </div>
    );
}