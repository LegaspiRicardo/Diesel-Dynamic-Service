// src/pages/Productos.tsx
import RefaccionesGrid from "../components/RefaccionesGrid";

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
            <a
                href="https://api.whatsapp.com/send?phone=523320853721&text=Hola,%20me%20interesa%20solicitar%20informes%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-2 rounded-lg fixed bottom-8 left-80 z-50 md:left-160 lg:left-220"
            >
                <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-14" />
            </a>

            {/* Hero Section para Refacciones */}
            <div className="bg-red-800/90 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6">Refacciones </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Partes originales y de reemplazo 
                    </p>
                    <button className="border border-white hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition">
                        Solicitar Cotización
                    </button>
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
                <RefaccionesGrid categorias={categoriasRefacciones}  />
            </section>

            {/* Introducción a las Refacciones */}
            <div className="max-w-6xl mx-auto px-6 pt-16">


                {/* Beneficios Rápidos 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 bg-white rounded-lg shadow-xl">
                        <div className="text-3xl mb-4">🔧</div>
                        <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
                        <p className="text-gray-600">Todas nuestras refacciones cuentan con garantía y certificación de calidad</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-xl">
                        <div className="text-3xl mb-4">🚚</div>
                        <h3 className="text-xl font-bold mb-2">Disponibilidad </h3>
                        <p className="text-gray-600">Amplio inventario para entrega inmediata y minimizar tiempos de espera</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-xl">
                        <div className="text-3xl mb-4">💯</div>
                        <h3 className="text-xl font-bold mb-2">Originales y Alternativas</h3>
                        <p className="text-gray-600">Ofrecemos partes originales y alternativas de calidad certificada</p>
                    </div>
                </div>*/}
            </div>



            {/* Información Adicional sobre Refacciones 
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Garantía en Refacciones</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Nuestros Compromisos</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Garantía en todas las refacciones</li>
                                <li>Certificación de calidad</li>
                                <li>Proveedores autorizados</li>
                                <li>Documentación completa</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Ventajas Adicionales</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Precios competitivos para flotillas</li>
                                <li>Entrega programada según sus necesidades</li>
                                <li>Asesoría técnica especializada</li>
                                <li>Compatibilidad garantizada</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>*/}

            {/* Llamada a la acción final */}
            <div className="bg-red-800/90 text-white py-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-4">¿Necesita una pieza en específico?</h2>
                    <p className="text-xl mb-6">
                        Contáctenos y reciba asesoría especializada para las refacciones que busca
                    </p>
                    <button className="border border-white hover:bg-gray-100 hover:text-red-800 px-8 py-3 rounded-lg font-bold text-lg transition">
                        Solicitar Información 
                    </button>
                </div>
            </div>
        </section>
    );
}