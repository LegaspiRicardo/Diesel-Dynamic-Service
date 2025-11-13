// src/pages/NuestrosTrabajos.tsx
import { useState } from "react";
import BotonWhats from "../components/BotonWhats";

const categoriasTrabajos = [
    {
        title: "Servicio Camiones",
        images: [
            "/images/ddsfotos/camion1.jpg",
            "/images/ddsfotos/camion2.jpg",
            "/images/ddsfotos/camion9.jpg",
            "/images/ddsfotos/camion4.jpg",
            "/images/ddsfotos/camion5.jpg",
            "/images/ddsfotos/camion6.jpg",
            "/images/ddsfotos/camion7.jpg",
            "/images/ddsfotos/camion8.jpg"
        ]
    },
    {
        title: "Reparaciones",
        images: [
            "/images/ddsfotos/reparacion1.jpg",
            "/images/ddsfotos/reparacion2.jpg",
            "/images/ddsfotos/reparacion4.jpg",
            "/images/ddsfotos/reparacion5.jpg",
            "/images/ddsfotos/reparacion6.jpg"
        ]
    },
    {
        title: "Instalación Piezas Nuevas",
        images: [
            "/images/ddsfotos/pieza1.jpg",
            "/images/ddsfotos/pieza2.jpg",
            "/images/ddsfotos/reparacion3.jpg"
        ]
    }
];

export default function NuestrosTrabajos() {
    const [categoriaActiva, setCategoriaActiva] = useState(0);
    const [imagenActiva, setImagenActiva] = useState(0);
    const [modalAbierto, setModalAbierto] = useState(false);

    const categoriaActual = categoriasTrabajos[categoriaActiva];

    const siguienteImagen = () => {
        setImagenActiva((prev) =>
            prev === categoriaActual.images.length - 1 ? 0 : prev + 1
        );
    };

    const anteriorImagen = () => {
        setImagenActiva((prev) =>
            prev === 0 ? categoriaActual.images.length - 1 : prev - 1
        );
    };

    const abrirModal = () => {
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
    };

    const siguienteImagenModal = () => {
        setImagenActiva((prev) =>
            prev === categoriaActual.images.length - 1 ? 0 : prev + 1
        );
    };

    const anteriorImagenModal = () => {
        setImagenActiva((prev) =>
            prev === 0 ? categoriaActual.images.length - 1 : prev - 1
        );
    };

    return (
        <section>
            {/* Botón Whatsapp */}
            <BotonWhats />

            {/* Hero Section para Rescates */}
            <div
                className="relative bg-cover bg-center bg-no-repeat text-white py-20"
                style={{ backgroundImage: "url('images/ddsfotos/flotilla1.jpg')" }}
            >
                {/* Overlay para mejor contraste */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6">Nuestros Trabajos</h1>
                    <a
                        href="https://api.whatsapp.com/send?phone=523332393790&text=Hola,%20necesito%20información%20de%20sus%20servicios"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="border border-white hover:bg-red-800 text-white px-8 py-3 rounded-lg font-bold text-lg transition uppercase">
                            Solicitar Servicio
                        </button>
                    </a>
                </div>
            </div>

            {/* Sección de Navegación por Categorías */}
            <section className="w-11/12 mx-auto bg-gray-50 py-12 rounded-xl">
                <div className="mb-12">
                    <p className="text-xl text-center font-bold text-gray-600 max-w-2xl mx-auto mb-8">
                        Conozca algunos de nuestros proyectos
                    </p>

                    {/* Navegación de categorías */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categoriasTrabajos.map((categoria, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCategoriaActiva(index);
                                    setImagenActiva(0);
                                }}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                    categoriaActiva === index
                                        ? 'bg-red-800 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                                }`}
                            >
                                {categoria.title}
                            </button>
                        ))}
                    </div>

                    {/* Contenido de la categoría activa */}
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                {/* Carrusel de imágenes */}
                                <div className="md:w-1/2 relative">
                                    <div className="relative h-80 md:h-96 overflow-hidden">
                                        <img
                                            src={categoriaActual.images[imagenActiva]}
                                            alt={`${categoriaActual.title} ${imagenActiva + 1}`}
                                            className="w-full h-full object-cover cursor-zoom-in"
                                            onClick={abrirModal}
                                        />

                                        {/* Controles del carrusel */}
                                        <button
                                            onClick={anteriorImagen}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                                        >
                                            ‹
                                        </button>
                                        <button
                                            onClick={siguienteImagen}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                                        >
                                            ›
                                        </button>

                                        {/* Indicadores */}
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                            {categoriaActual.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setImagenActiva(index)}
                                                    className={`w-3 h-3 rounded-full ${
                                                        imagenActiva === index
                                                            ? 'bg-white'
                                                            : 'bg-white/50'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Información de la categoría */}
                                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        {categoriaActual.title}
                                    </h3>
                                    <div className="flex gap-2 flex-wrap">
                                        {categoriaActual.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setImagenActiva(index)}
                                                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                                                    imagenActiva === index
                                                        ? 'border-red-800'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                            >
                                                <img
                                                    src={categoriaActual.images[index]}
                                                    alt={`Miniatura ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Estadísticas o información adicional */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 py-16">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-800 mb-2">+500</div>
                        <div className="text-gray-600">Proyectos Completados</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-800 mb-2">+50</div>
                        <div className="text-gray-600">Clientes Satisfechos</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-800 mb-2">100%</div>
                        <div className="text-gray-600">Garantía en Trabajos</div>
                    </div>
                </div>
            </section>

            {/* Modal para imagen en tamaño completo */}
            {modalAbierto && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
                        {/* Botón cerrar */}
                        <button
                            onClick={cerrarModal}
                            className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition z-10"
                        >
                            ✕
                        </button>
                        
                        {/* Imagen en tamaño completo */}
                        <img
                            src={categoriaActual.images[imagenActiva]}
                            alt={`${categoriaActual.title} ${imagenActiva + 1}`}
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                        
                        {/* Controles de navegación en el modal */}
                        <button
                            onClick={anteriorImagenModal}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
                        >
                            ‹
                        </button>
                        <button
                            onClick={siguienteImagenModal}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
                        >
                            ›
                        </button>
                        
                        {/* Indicadores en el modal */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {categoriaActual.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setImagenActiva(index)}
                                    className={`w-3 h-3 rounded-full ${
                                        imagenActiva === index
                                            ? 'bg-white'
                                            : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                        
                        {/* Contador de imágenes */}
                        <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded-lg">
                            {imagenActiva + 1} / {categoriaActual.images.length}
                        </div>
                    </div>
                    
                    {/* Cerrar al hacer clic fuera de la imagen */}
                    <div 
                        className="absolute inset-0 -z-10"
                        onClick={cerrarModal}
                    ></div>
                </div>
            )}

            {/* Llamada a la acción final */}
            <div className="bg-red-800/90 text-white py-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-4">¿Necesita mantenimiento para su flotilla?</h2>
                    <p className="text-xl mb-6">
                        Contamos con experiencia comprobada en reparación y mantenimiento de camiones
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=523332393790&text=Hola,%20me%20interesa%20solicitar%20mantenimiento%20para%20mi%20flotilla%20de%20camiones"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="hover:bg-red-800 border border-white text-white text-2xl px-8 py-3 rounded-lg font-bold transition md:px-10 md:py-4 md:text-lg">
                            Cotizar mantenimiento
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}