// src/components/Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: "Refacciones", path: "/productos" },
        { name: "Rescates", path: "/rescates" },
        { name: "Contacto", path: "/contacto" },
    ];

    const services = [
        "Reparación de motor",
        "Diagnóstico electrónico",
        "Sistema de frenos",
        "Fuel injection",
        "Alineación y balanceo",
        "Transmisión"
    ];

    const contactInfo = [
        {
            icon: "📍",
            text: "Los Pinos #2300, La Guadalupana",
            subtext: "San Pedro Tlaquepaque, Jalisco"
        },
        {
            icon: "📞",
            text: "33 2629 5248",
            link: "tel:3326295248"
        },
        {
            icon: "✉️",
            text: "dieselservice82@gmail.com",
            link: "mailto:dieselservice82@gmail.com"
        },
        {
            icon: "🕒",
            text: "Lun-Vie: 9:00 AM - 6:00 PM",
            subtext: "Sáb: 9:00 AM - 2:00 PM"
        }
    ];

    return (
        <footer className="bg-zinc-800 text-gray-300">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <img
                                src="/logos/logotipoblanco.PNG"
                                alt="Diesel Dynamics Service"
                                className="h-12 w-auto mr-3"
                            />
                            <div>
                                <h3 className="text-white text-xl font-bold">Diesel Dynamics</h3>
                                <p className="text-red-500 text-sm font-semibold">Service</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                            Especialistas en mantenimiento y reparación de motores diesel y gasolina.
                            Más de 9 años de experiencia sirviendo a flotillas y particulares.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://api.whatsapp.com/send?phone=523326295248"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.549-8.485" />
                                </svg>
                            </a>
                            <a
                                href="tel:3326295248"
                                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                                aria-label="Llamar"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
                                    <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 uppercase tracking-wider">
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 uppercase tracking-wider">
                            Servicios
                        </h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-gray-400 hover:text-red-500 transition-colors text-sm cursor-default">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 uppercase tracking-wider">
                            Contacto
                        </h3>
                        <div className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <span className="text-red-500 mt-0.5">{item.icon}</span>
                                    <div>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                className="text-gray-400 hover:text-red-500 transition-colors text-sm block"
                                            >
                                                {item.text}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400 text-sm block">
                                                {item.text}
                                            </span>
                                        )}
                                        {item.subtext && (
                                            <span className="text-gray-500 text-xs block">
                                                {item.subtext}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mx-auto text-center mt-8">
                    <p className="text-gray-500 text-sm mx-auto">
                        &copy; {currentYear} Diesel Dynamics Service. Todos los derechos reservados.
                    </p>
                </div>
            </div>


        </footer>
    );
}