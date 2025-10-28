// src/pages/Galeria.tsx
import BotonWhats from "../components/BotonWhats";

const imagenesGaleria = [
    {
        src: "images/ddsfotos/taller1.jpg",
        alt: "Taller Diesel Dynamics Service - Vista general",
        categoria: "instalaciones"
    },
    {
        src: "images/ddsfotos/taller2.jpg",
        alt: "Taller Diesel Dynamics",
        categoria: "instalaciones"
    },
    {
        src: "images/ddsfotos/camion1.jpg",
        alt: "Camion a reparación",
        categoria: "trabajos"
    },
    {
        src: "images/ddsfotos/flota1.jpg",
        alt: "Mantenimiento de flotillas",
        categoria: "trabajos"
    },
    {
        src: "images/ddsfotos/flota2.jpg",
        alt: "Mantenimiento a flotillas",
        categoria: "trabajos"
    },
    {
        src: "images/ddsfotos/rescate1.jpg",
        alt: "Proceso de rescate",
        categoria: "rescates"
    },
    {
        src: "images/ddsfotos/rescate2edit.jpg",
        alt: "Servicio de rescate",
        categoria: "rescates"
    },
    {
        src: "images/ddsfotos/rescate3.jpg",
        alt: "Rescate en carretera",
        categoria: "rescates"
    },
    {
        src: "images/ddsfotos/rescate4.jpg",
        alt: "Rescate en carretera",
        categoria: "rescates"
    }
];

const categorias = [
    { id: "todas", nombre: "Todas las Fotos" },
    { id: "instalaciones", nombre: "Nuestras Instalaciones" },
    { id: "trabajos", nombre: "Nuestros trabajos" },
    { id: "rescates", nombre: "Rescates Realizados" }
];

export default function Galeria() {
    return (
        <section>
            {/* Botón Whatsapp*/}
            <BotonWhats />

            {/* Hero Section para Galería */}
            <div
                className="relative bg-cover bg-center bg-no-repeat text-white py-20"
                style={{ backgroundImage: "url('images/ddsfotos/taller2.jpg')" }}
            >
                {/* Overlay para mejor contraste */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
                    <h1 className="text-5xl font-bold mb-6">Galería</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Conozca nuestras instalaciones y trabajos
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=523320853721&text=Hola,%20me%20gustaría%20agendar%20una%20visita%20a%20sus%20instalaciones"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>
                </div>
            </div>



            {/* Galería de Imágenes */}
            <section className="w-11/12 mx-auto bg-gray-50 py-12 rounded-xl">

                {/* Filtros de Categorías */}
                <div className="flex flex-wrap justify-center gap-4 mb-8 px-6">
                    {categorias.map((categoria) => (
                        <button
                            key={categoria.id}
                            className="px-6 py-2 bg-white border border-red-800 text-red-800 rounded-lg hover:bg-red-800 hover:text-white transition-colors font-semibold"
                            onClick={() => {
                                // Aquí iría la lógica para filtrar las imágenes
                                console.log(`Filtrar por: ${categoria.id}`);
                            }}
                        >
                            {categoria.nombre}
                        </button>
                    ))}
                </div>

                {/* Grid de Imágenes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                    {imagenesGaleria.map((imagen, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="aspect-w-16 aspect-h-12">
                                <img
                                    src={imagen.src}
                                    alt={imagen.alt}
                                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700 text-sm">{imagen.alt}</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                                    {imagen.categoria.toUpperCase()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mensaje si no hay imágenes */}
                {imagenesGaleria.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No hay imágenes disponibles en esta categoría.</p>
                    </div>
                )}
            </section>

            {/* Llamada a la acción final */}
            <div className="bg-red-800/90 text-white py-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-4">¿Busca mantenimiento para su flota?</h2>
                    <p className="text-xl mb-6">
                        Contamos con el equipo y experiencia para atenderlo
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=523320853721&text=Hola,%20me%20gustaría%20solicitar%20más%20información%20de%20sus%20servicios%20"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="hover:bg-red-800 border border-white text-white text-2xl px-8 py-3 rounded-lg font-bold transition md:px-10 md:py-4 md:text-lg uppercase">
                            Solicitar informes
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}