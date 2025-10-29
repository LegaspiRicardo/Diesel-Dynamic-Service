// src/pages/Contacto.tsx
import BotonWhats from "../components/BotonWhats";
import ContactForm from "../components/ContactForm"; 

export default function Contacto() {
    return (
        <div className="min-h-screen bg-gray-50 ">
            {/* Header */}
            <section className="bg-red-800/90 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex items-center mb-6 w-11/12 mx-auto">
                        <svg
                            className="w-12 h-16 text-white mr-2 inline-block transform rotate-90"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 2 L18 18 H2 Z" />
                        </svg>
                        <h1 className="text-3xl md:text-4xl font-bold text-white uppercase">
                            Contáctanos
                        </h1>
                    </div>
                </div>
            </section>

            <BotonWhats />

            {/* Contenido Principal */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Columna Izquierda - Información de Contacto */}
                    <div className="space-y-8">
                        {/* Medios de comunicación */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Medios de comunicación</h3>
                            <div className="space-y-3">
                                <p className="text-lg text-gray-600 flex items-center">
                                    Email: 
                                    <a 
                                        href="mailto:ddsperiferico@gmail.com" 
                                        className="text-red-700 font-bold text-xl underline hover:text-red-800 transition-colors ml-2"
                                    >
                                        ddsperiferico@gmail.com
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
                                        href="https://api.whatsapp.com/send?phone=523332393790"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-700 font-bold text-xl underline hover:text-red-800 transition-colors ml-2"
                                    >
                                        33 3239 3790
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Horario de atención */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
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
                        </div>

                        {/* Domicilio */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
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
                        </div>
                    </div>
                    
                    {/* Columna Derecha - Formulario (USANDO EL COMPONENTE) */}
                    <div>
                        <ContactForm /> {/* ← Reemplazado por el componente */}
                    </div>
                </div>

                {/* Mapa */}
                <div className="mt-12">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.509670556299!2d-103.3291793598709!3d20.58726774135173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3738b72c8e5%3A0x95bc82c2792a168a!2sDIESEL%20DYNAMICS%20SERVICE!5e0!3m2!1ses!2smx!4v1761087065633!5m2!1ses!2smx" 
                        loading="lazy" 
                        className="w-full rounded-3xl h-96 border-0"
                        title="Ubicación de Diesel Dynamics Service"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}