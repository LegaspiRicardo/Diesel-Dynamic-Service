// src/pages/Rescates.tsx
import BotonWhats from "../components/BotonWhats";


export default function Rescates() {
    return (
        <section>
            {/* Botón Whatsapp */}
            <BotonWhats />

            {/* Hero Section para Rescates */}
            <div
                className="relative bg-cover bg-center bg-no-repeat text-white py-20"
                style={{ backgroundImage: "url('images/ddsfotos/rescate3.jpg')" }}
            >
                {/* Overlay para mejor contraste */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6">Rescate Vial</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        ¿Su unidad no arranca?, ¿Camión descompuesto? ó ¿Problemas en carretera?                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=523320853721&text=Hola,%20necesito%20un%20rescate%20"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="border border-white hover:bg-red-800 text-white px-8 py-3 rounded-lg font-bold text-lg transition uppercase">
                            Solicitar Rescate
                        </button>
                    </a>

                </div>
            </div>

            {/* Introducción a los Rescates */}
            <div className="max-w-6xl mx-auto px-6 pt-16">


                {/* Beneficios del Servicio de Rescate */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-11/12 mx-auto">
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="text-3xl mb-4">⏱️</div>
                        <h3 className="text-xl font-bold mb-2">Respuesta Inmediata</h3>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="text-3xl mb-4">🚛</div>
                        <h3 className="text-xl font-bold mb-2">Equipo Especializado</h3>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="text-3xl mb-4">🛡️</div>
                        <h3 className="text-xl font-bold mb-2">Traslado Seguro</h3>
                    </div>
                </div>
            </div>


            <div className="bg-red-800/90 py-16 mt-28">
                <div className="max-w-6xl mx-auto text-center px-6">
                    <h1 className="text-white text-4xl font-bold uppercase mb-4">Rescate urgente</h1>
                    <p className="text-white text-lg mb-6">Llame al:</p>
                    <div className="flex justify-center items-center gap-4">
                        <img
                            src="/icons/telefono.png"
                            alt="Icono telefono"
                            className="w-8 h-8"
                        />
                        <a
                            href="tel:3326295248"
                            className="text-white text-4xl font-bold uppercase hover:scale-110 duration-300"
                        >
                            33 2629 5248
                        </a>
                    </div>
                    <p className="text-white/80 mt-4 text-sm">
                        Haga clic en el número para llamar inmediatamente
                    </p>
                </div>
            </div>


            {/* Información del Servicio */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12 max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-center">Servicio de Rescate </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Fallas en carretera</li>
                            <li>Accidentes viales</li>
                            <li>Fallas mecánicas graves</li>
                            <li>Problemas eléctricos</li>
                            <li>Neumáticos reventados</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Cobertura y Disponibilidad</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Servicio las 24 horas, los 365 días del año</li>
                            <li>Cobertura en carreteras federales y estatales</li>
                            <li>Atención en AMG y periféricos</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Proceso de Rescate */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8 uppercase">Solicita un rescate</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center p-6">
                            <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                            <h3 className="text-lg font-bold mb-2">Llamada de Emergencia</h3>
                            <p className="text-gray-600">Nos contacta por teléfono o WhatsApp proporcionando ubicación y detalles</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                            <h3 className="text-lg font-bold mb-2">Despacho Inmediato</h3>
                            <p className="text-gray-600">Enviamos una grúa cercana a su ubicación </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                            <h3 className="text-lg font-bold mb-2">Rescate en Sitio</h3>
                            <p className="text-gray-600">Nuestro equipo especializado llega y realiza el rescate de forma segura</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                            <h3 className="text-lg font-bold mb-2">Traslado Garantizado</h3>
                            <p className="text-gray-600">Transportamos su unidad al taller o destino que usted indique</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Llamada a la acción final */}
            <div className="bg-red-800/90 text-white py-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-12">¿Su unidad no arranca?</h2>
                    <a
                        href="tel:3326295248"
                        className="text-white text-4xl font-bold uppercase hover:text-yellow-300 transition-colors duration-300"
                    >
                        <button className="border border-white hover:bg-gray-100 hover:text-red-800 px-8 py-3 rounded-lg font-bold text-lg transition">
                            Llamar para Rescate Urgente
                        </button>
                    </a>

                </div>
            </div>
        </section>
    );
}