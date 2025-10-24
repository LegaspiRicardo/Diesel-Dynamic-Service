// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logotipo from '/public/logos/logotipoblanco.png';

export default function Navbar() {
    const { pathname } = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { name: "Inicio", path: "/", icon: "home.png" },
        { name: "Servicios", path: "/servicios", icon: "categorias.png" },
        { name: "Refacciones", path: "/productos", icon: "lista.png" },
        { name: "Rescates", path: "/rescates", icon: "luzambulancia.png" },
        { name: "Contacto", path: "/contacto", icon: "telefono.png" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`bg-zinc-800 text-white py-3 px-6 shadow-md transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}`}>
                <div className="flex justify-between items-center">
                    {/* Logo y nombre - siempre visibles */}
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="hover:text-red-800 transition-colors"
                        >
                            <img
                                src={logotipo}
                                alt="Logotipo Diesel Dynamics Service"
                                className="w-24"
                            />
                        </a>

                    </div>

                    {/* Botón menú hamburguesa - siempre visible */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="hover:text-red-800 transition-colors flex flex-col items-center text-xs group"
                    >
                        <div className="w-8 h-8 flex items-center justify-center bg-zinc-700 rounded-lg group-hover:bg-zinc-600 transition-colors">
                            <span className="text-lg font-bold">☰</span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Menú lateral (navbar) */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-zinc-800 text-white shadow-2xl z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">
                    {/* Header del menú lateral */}
                    <div className="flex justify-between items-center mb-8">
                        <a href="/"><h2 className="text-xl font-bold">Diesel Dynamics Service</h2></a>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white hover:text-red-800 text-2xl transition-colors"
                        >
                            ×
                        </button>
                    </div>

                    {/* Links de navegación con iconos */}
                    <nav className="space-y-4">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                icon={link.icon}
                                label={link.name}
                                isActive={pathname === link.path}
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ))}
                    </nav>

                    {/* Información adicional */}
                    <div className="mt-12 pt-6 border-t border-zinc-700">
                        <p className="text-sm text-zinc-200 mb-2">Contacto</p>
                        <p className="text-xs text-zinc-300">Teléfono: 33 2629 5248</p>
                        <p className="text-xs text-zinc-300">Email: dieselservice82@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Overlay para cerrar el menú al hacer clic fuera */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    );
}

// Componente auxiliar para los links de navegación con iconos
const NavLink = ({
    to,
    icon,
    label,
    isActive,
    onClick
}: {
    to: string;
    icon: string;
    label: string;
    isActive: boolean;
    onClick: () => void;
}) => (
    <Link
        to={to}
        onClick={onClick}
        className={`flex items-center space-x-4 p-3 rounded-lg transition-all group ${isActive
            ? "bg-zinc-700 text-red-800 border-l-4 border-red-800"
            : "hover:bg-zinc-700 hover:text-red-800"
            }`}
    >
        <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all group-hover:scale-110 ${isActive ? "bg-white" : "bg-zinc-600 group-hover:bg-zinc-500"
            }`}>
            <img
                src={`/icons/${icon}`}
                alt={label}
                className="w-6 h-6 filter invert"
            />
        </div>
        <span className={`text-lg font-medium transition-colors ${isActive ? "text-white " : "group-hover:text-red-800"
            }`}>
            {label}
        </span>
    </Link>
);