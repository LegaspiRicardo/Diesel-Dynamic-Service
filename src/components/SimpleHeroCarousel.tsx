'use client';

import { useState, useEffect, useCallback } from 'react';

interface Slide {
    image: string;
    title: string;
}

interface SimpleHeroCarouselProps {
    slides: Slide[];
    autoPlayInterval?: number;
}

export default function SimpleHeroCarousel({ slides, autoPlayInterval = 9000 }: SimpleHeroCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const TRANSITION_DURATION = 300;

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
        }, TRANSITION_DURATION);
    }, [isTransitioning, slides.length]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsTransitioning(false);
        }, TRANSITION_DURATION);
    }, [isTransitioning, slides.length]);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsTransitioning(false);
        }, TRANSITION_DURATION);
    }, [isTransitioning, currentSlide]);

    // useEffect simplificado para el autoplay
    useEffect(() => {
        if (slides.length <= 1) return;

        const timer = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(timer);
    }, [nextSlide, autoPlayInterval, slides.length]);

    return (
        <section className="bg-black text-white relative h-screen overflow-hidden select-none">
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-500 ease-out ${
                            index === currentSlide 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-105'
                        }`}
                        style={{
                            transitionDuration: `${TRANSITION_DURATION}ms`
                        }}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className={`absolute inset-0 flex flex-col justify-center items-center px-4 transition-all duration-500 ${
                            index === currentSlide 
                                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                                : 'opacity-0 translate-y-4 pointer-events-none'
                        }`}
                        style={{
                            transitionDuration: `${TRANSITION_DURATION}ms`
                        }}
                        >
                            <p className="text-3xl md:text-4xl lg:text-5xl mb-8 text-center w-full md:w-8/12 mx-auto font-semibold leading-tight">
                                {slide.title}
                            </p>
                            <a
                                href={`https://api.whatsapp.com/send?phone=523320853721&text=${encodeURIComponent(`Hola, solicito información sobre: ${slide.title}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-800/90 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg hover:scale-105 transform"
                            >
                                Cotizar servicio
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botones de navegación */}
            <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all z-10 disabled:opacity-50 group"
                aria-label="Slide anterior"
            >
                <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all z-10 disabled:opacity-50 group"
                aria-label="Slide siguiente"
            >
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicadores circulares con números */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isTransitioning}
                        className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-sm font-medium ${
                            index === currentSlide 
                                ? 'bg-white text-black border-white scale-110' 
                                : 'bg-transparent text-white border-white/50 hover:border-white hover:scale-105'
                        } disabled:pointer-events-none`}
                        aria-label={`Ir al slide ${index + 1}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
}