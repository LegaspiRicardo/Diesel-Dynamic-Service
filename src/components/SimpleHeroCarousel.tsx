'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Slide {
    image: string;
    title: string;
}

interface SimpleHeroCarouselProps {
    slides: Slide[];
    autoPlayInterval?: number;
}

export default function SimpleHeroCarousel({ slides, autoPlayInterval = 2000 }: SimpleHeroCarouselProps) {
    return (
        <section className="bg-black text-white relative">
            <Swiper
                modules={[Autoplay]}
                speed={1000}
                autoplay={{
                    delay: autoPlayInterval,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                className="h-screen"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover opacity-50"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center">
                                <p className="text-3xl md:text-4xl lg:text-5xl mb-8 text-center w-10/12 md:w-8/12 mx-auto font-semibold">
                                    {slide.title}
                                </p>

                                <a
                                    href="/servicios"
                                    className="bg-red-800/90 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg hover:scale-105"
                                >
                                    Cotizar servicio
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}