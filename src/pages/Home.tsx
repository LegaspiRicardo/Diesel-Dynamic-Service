// src/pages/Home.tsx
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


export default function Home() {
    return (
        <div>


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
                            Cotizar
                        </a>
                    </div>


                </div>
            </section>

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
                    Diesel Dynamic Service es una empresa con más de 5 años de experiencia dedicada a dar
                    servicio de mantenimiento preventivo y correctivo a flotillas, con experiencia certificada
                    en el ramo del diesel y gasolina.
                </p>
                <p className="text-gray-700 text-xl font-semibold text-justify md:text-xl leading-relaxed mt-8">
                    Además de la comercialización de refacciones y partes
                    para servicio pesado.
                </p>
            </section>

            {/* Lineas diagonales, separando secciones */}
            <div className="w-full overflow-hidden transform mt-24 static">
                <svg
                    className="w-full h-64 md:h-32 block transform rotate-y-180 "
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    {/* Línea gris: diagonal superior */}
                    <polygon
                        points="0,0 100,0 100,2 0,80"
                        className="fill-gray-800"
                    />
                    {/* Línea roja: diagonal intermedia */}
                    <polygon
                        points="0,100 100,2 100,0 0,70"
                        className="fill-red-800"
                    />
                </svg>
                <div className="0 w-3/6 absolute top-430 text-center">
                    <h2 className="text-3xl font-bold uppercase">Servicios</h2>
                    <p className=" font-semibold">Diesel y gasolina</p>
                </div>

            </div>

            <section className=" w-10/12 mx-auto mb-12">
                <div>
                    <ServiciosCarousel servicios={servicios} itemsPerSlide={5}/>
                </div>
            </section>

        </div>
    );
}
