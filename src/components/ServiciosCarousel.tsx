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
    const slides = chunkArray(servicios, itemsPerSlide);

    const handleServicioClick = (servicio: Servicio) => {
        console.log('Servicio clickeado CON DESCRIPCIÓN:', servicio);
        setSelectedServicio(servicio);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedServicio(null);
    };

    return (
        <>
            <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation
                pagination={{ clickable: true }}
            >
                {slides.map((group, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="flex flex-col md:flex-row justify-center gap-2 flex-wrap pb-16">
                            {group.map((servicio, sIdx) => (
                                <div 
                                    key={sIdx} 
                                    className="border-3 border-red-800 rounded-full flex items-center md:min-w-100 md:max-w-100 justify-start cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={() => handleServicioClick(servicio)}
                                >
                                    <div className="w-24 h-24 shrink-0">
                                        <img
                                            src={servicio.icon}
                                            alt={servicio.title}
                                            className="w-full h-full object-cover rounded-full border-4 border-red-800"
                                        />
                                    </div>
                                    <h3 className="text-gray-700 text-3xl font-semibold uppercase ml-4 text-[clamp(1.2rem,2vw,1.5rem)]">
                                        {servicio.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

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