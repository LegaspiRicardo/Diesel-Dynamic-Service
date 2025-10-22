// src/components/Navbar.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logotipo from '/public/logos/logotipoblanco.png';

export default function Navbar() {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: "Refacciones", path: "/productos" },
        { name: "Contacto", path: "/contacto" },
    ];

    return (
        <nav className="bg-zinc-800 text-white py-4 shadow-md fixed w-full z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <a href="/"> 
                    <img src={logotipo} 
                        alt="Logotipo Diesel Dynamics Service"
                        className="w-18" 
                    />
                    <p>Diesel Dynamics Service</p>
                </a>


                {/* Menu escritorio */}
                <ul className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`hover:text-red-800 transition ${pathname === link.path ? "text-red-800 font-semibold" : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Botón hamburguesa */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu móvil */}
            {isOpen && (
                <ul className="md:hidden bg-zinc-800/95 px-6 pt-4 pb-6 space-y-3">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                onClick={() => setIsOpen(false)} // cierra el menú al hacer click
                                className={`block hover:text-red-600 transition ${pathname === link.path ? "text-red-500 font-semibold" : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
