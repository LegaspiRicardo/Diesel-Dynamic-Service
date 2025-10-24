// src/pages/Productos.tsx
import RefaccionesGrid from "../components/RefaccionesGrid";
import BotonWhats from "../components/BotonWhats";


const categoriasRefacciones = [
    {
        title: "Medias Reparaciones",
        icon: "/icons/mediasreparaciones.PNG",
        images: [
            "/refacciones/medias/1.jpg",
            "/refacciones/medias/2.jpg",
            "/refacciones/medias/3.jpg",
            "/refacciones/medias/4.jpg"
        ]
    },
    {
        title: "Bombas de Agua/Aceite",
        icon: "/icons/bombasagua.PNG",
        images: [
            "/refacciones/bombas/1.jpg",
            "/refacciones/bombas/2.jpg",
            "/refacciones/bombas/3.jpg",
            "/refacciones/bombas/4.jpg"
        ]
    },
    {
        title: "Cabezas de Cilindro",
        icon: "/icons/cabezascilindro.PNG",
        images: [
            "/refacciones/cabezas/1.jpg",
            "/refacciones/cabezas/2.jpg",
            "/refacciones/cabezas/3.jpg",
            "/refacciones/cabezas/4.jpg"
        ]
    },
    {
        title: "Juntas",
        icon: "/icons/juntas.PNG",
        images: [
            "/refacciones/juntas/1.jpg",
            "/refacciones/juntas/2.jpg",
            "/refacciones/juntas/3.jpg",
            "/refacciones/juntas/4.jpg"
        ]
    },
    {
        title: "Sensores",
        icon: "/icons/sensores.PNG",
        images: [
            "/refacciones/sensores/1.jpg",
            "/refacciones/sensores/2.jpg",
            "/refacciones/sensores/3.jpg",
            "/refacciones/sensores/4.jpg"
        ]
    },
    {
        title: "Inyectores",
        icon: "/icons/inyectores.PNG",
        images: [
            "/refacciones/inyectores/1.jpg",
            "/refacciones/inyectores/2.jpg",
            "/refacciones/inyectores/3.jpg",
            "/refacciones/inyectores/4.jpg"
        ]
    },
];

export default function Productos() {
    return (
        <section >
            {/* Botón Whatsapp */}
                        <BotonWhats />

            {/* Hero Section para Refacciones */}
            <div className="bg-red-800/90 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6">Refacciones </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Partes originales y de reemplazo
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=523320853721&text=Hola,%20me%20interesa%20solicitar%20informes%20de%20de%20sus%20refacciones,%20estoy%20buscando:"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="hover:bg-red-800 border border-white text-white text-xl px-8 py-3 rounded-lg font-bold  transition md:px-10 md:py-4 md:text-lg">
                            COTIZAR AHORA
                        </button>
                    </a>
                </div>
            </div>

            {/* Sección Carrusel de Refacciones */}
            <section className="w-11/12 mx-auto bg-gray-50 py-12 rounded-xl">
                <div className="text-center mb-12">
                    <p className="text-lg font-bold text-gray-600 max-w-3xl mx-auto text-justify">
                        En Diesel Dynamics Service, entendemos que la calidad de las refacciones es fundamental
                        para el <span className="text-red-800">rendimiento y durabilidad</span> de su flota.
                        Por eso trabajamos con los mejores proveedores.
                    </p>
                </div>
                <div className=" mb-8">
                    <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto ">
                        Conozca nuestro catálogo
                    </p>
                </div>
                <RefaccionesGrid categorias={categoriasRefacciones} />
            </section>

            {/* Introducción a las Refacciones */}
            <div className="max-w-6xl mx-auto px-6 pt-16">

            </div>



            {/* Llamada a la acción final */}
            <div className="bg-red-800/90 text-white py-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-4">¿Necesita una pieza en específico?</h2>
                    <p className="text-xl mb-6">
                        Contáctenos y reciba asesoría especializada para las refacciones que busca
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=523320853721&text=Hola,%20me%20interesa%20solicitar%20informes%20de%20refacciones%20en%20especifico"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="hover:bg-red-800 border border-white text-white text-2xl px-8 py-3 rounded-lg font-bold  transition md:px-10 md:py-4 md:text-lg">
                            Solicitar información                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}