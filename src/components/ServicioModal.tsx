// src/components/ServicioModal.tsx
import { useEffect } from 'react';

interface Servicio {
    title: string;
    icon: string;
    description?: string; 
}

interface Props {
    servicio: Servicio | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ServicioModal({ servicio, isOpen, onClose }: Props) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // DEPURACIÓN EN MODAL
    console.log('=== SERVICIO MODAL ===');
    console.log('Servicio en modal:', servicio);
    console.log('Descripción en modal:', servicio?.description);

    if (!isOpen || !servicio) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            />

            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center p-6 border-b border-gray-200">
                    <div className="w-16 h-16 shrink-0 mr-4">
                        <img
                            src={servicio.icon}
                            alt={servicio.title}
                            className="w-full h-full object-cover rounded-full border-2 border-red-800"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        {servicio.title}
                    </h2>
                </div>

                <div className="p-6">
                    <p className="text-gray-600 mb-4 text-justify text-lg font-semibold">
                        {servicio.description || `Información detallada sobre ${servicio.title}.`}
                    </p>

                    <div className="mt-12 text-center">
                        <button className='border border-red-800 py-3 px-3 rounded-xl '>Solicitar información</button>

                    </div>
                </div>


            </div>
        </div>
    );
}