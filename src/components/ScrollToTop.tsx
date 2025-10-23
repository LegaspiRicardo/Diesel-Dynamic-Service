// src/components/ScrollToTop.tsx Componente para subir el contenido de la pagina cada que se cambie de vista.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}