// src/components/ServiciosCarousel.tsx
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ServicioModal from './ServicioModal';

interface Servicio {
    title: string;
    icon: string;
    description?: string;
}

interface Props {
    servicios: Servicio[];
    itemsPerSlide?: number;
}

export default function ServiciosCarousel({ servicios, itemsPerSlide = 5 }: Props) {
    // VERIFICACIÓN FINAL
    console.log('=== SERVICIOS EN CAROUSEL (FINAL) ===');
    console.log('Servicios recibidos:', servicios);
    console.log('Primer servicio completo:', servicios[0]);
    
    const [selectedServicio, setSelectedServicio] = useState<Servicio | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleServicioClick = (servicio: Servicio) => {
        console.log('Servicio clickeado CON DESCRIPCIÓN:', servicio);
        setSelectedServicio(servicio);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedServicio(null);
    };

    // Para pantallas grandes: dividir en 2 columnas
    const serviciosColumna1 = servicios.slice(0, Math.ceil(servicios.length / 2));
    const serviciosColumna2 = servicios.slice(Math.ceil(servicios.length / 2));

    return (
        <>
            {/* Versión Desktop - Grid de 2 columnas (desde lg: 1024px) */}
            <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Columna 1 */}
                    <div className="space-y-6">
                        {serviciosColumna1.map((servicio, index) => (
                            <div 
                                key={index}
                                className="border-3 border-red-800 rounded-full flex items-center justify-start cursor-pointer hover:bg-gray-50 transition-colors p-2"
                                onClick={() => handleServicioClick(servicio)}
                            >
                                <div className="w-20 h-20 shrink-0">
                                    <img
                                        src={servicio.icon}
                                        alt={servicio.title}
                                        className="w-full h-full object-cover rounded-full border-4 border-red-800"
                                    />
                                </div>
                                <h3 className="text-gray-700 text-xl font-semibold uppercase ml-4 flex-1">
                                    {servicio.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                    
                    {/* Columna 2 */}
                    <div className="space-y-6">
                        {serviciosColumna2.map((servicio, index) => (
                            <div 
                                key={index}
                                className="border-3 border-red-800 rounded-full flex items-center justify-start cursor-pointer hover:bg-gray-50 transition-colors p-2"
                                onClick={() => handleServicioClick(servicio)}
                            >
                                <div className="w-20 h-20 shrink-0">
                                    <img
                                        src={servicio.icon}
                                        alt={servicio.title}
                                        className="w-full h-full object-cover rounded-full border-4 border-red-800"
                                    />
                                </div>
                                <h3 className="text-gray-700 text-xl font-semibold uppercase ml-4 flex-1">
                                    {servicio.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Versión Mobile y Tablet - Carrusel (hasta lg) */}
            <div className="lg:hidden">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {chunkArray(servicios, itemsPerSlide).map((group, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="flex flex-col justify-center gap-4 pb-16">
                                {group.map((servicio, sIdx) => (
                                    <div 
                                        key={sIdx} 
                                        className="border-3 border-red-800 rounded-full flex items-center justify-start cursor-pointer hover:bg-gray-50 transition-colors p-2"
                                        onClick={() => handleServicioClick(servicio)}
                                    >
                                        <div className="w-20 h-20 shrink-0">
                                            <img
                                                src={servicio.icon}
                                                alt={servicio.title}
                                                className="w-full h-full object-cover rounded-full border-4 border-red-800"
                                            />
                                        </div>
                                        <h3 className="text-gray-700 text-xl font-semibold uppercase ml-4 flex-1">
                                            {servicio.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <ServicioModal 
                servicio={selectedServicio}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}

function chunkArray<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}