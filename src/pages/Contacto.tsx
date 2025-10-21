// src/pages/Contacto.tsx
export default function Contacto() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
            <p className="mb-6 text-gray-700">
                ¿Tienes dudas o necesitas una cotización? Envíanos un mensaje.
            </p>
            <a
                href="mailto:contacto@tallerxyz.com"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
                Enviar correo
            </a>
        </div>
    );
}
