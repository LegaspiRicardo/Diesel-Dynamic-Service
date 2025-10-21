// src/components/ServiciosCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Servicio {
    title: string;
    icon: string;
}

interface Props {
    servicios: Servicio[];
    itemsPerSlide?: number; // opcional, por defecto 5
}

export default function ServiciosCarousel({ servicios, itemsPerSlide = 5 }: Props) {
    const slides = chunkArray(servicios, itemsPerSlide);

    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}        // un bloque de 5 servicios por slide
            slidesPerGroup={1}       // se mueve un bloque completo
            navigation
            pagination={{ clickable: true }}
        >
            {slides.map((group, idx) => (
                <SwiperSlide key={idx}>
                    <div className="flex flex-col md:flex-row justify-center gap-2 flex-wrap pb-16">
                        {group.map((servicio, sIdx) => (
                            <div key={sIdx} className="border-3 border-red-800 rounded-full flex items-center  justify-start">
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
    );
}

// Función auxiliar para agrupar servicios por slide
function chunkArray<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
