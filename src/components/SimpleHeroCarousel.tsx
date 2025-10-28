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
    const [isLoaded, setIsLoaded] = useState(false);

    // Precargar imágenes
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = slides.map((slide) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = slide.image;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(imagePromises);
                setIsLoaded(true);
            } catch (error) {
                console.error('Error preloading images:', error);
                setIsLoaded(true); 
            }
        };

        preloadImages();
    }, [slides]);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    // Autoplay
    useEffect(() => {
        if (slides.length <= 1 || !isLoaded) return;

        const timer = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(timer);
    }, [nextSlide, autoPlayInterval, slides.length, isLoaded]);

    if (!isLoaded) {
        return (
            <section className="bg-black text-white relative h-screen overflow-hidden select-none flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-xl">Cargando...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-black text-white relative h-screen overflow-hidden select-none">
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                            index === currentSlide 
                                ? 'opacity-100 z-10' 
                                : 'opacity-0 z-0'
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover opacity-50"
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                        />
                        
                        <div className={`absolute inset-0 flex flex-col justify-center items-center px-4 ${
                            index === currentSlide 
                                ? 'opacity-100' 
                                : 'opacity-0'
                        } transition-opacity duration-500 ease-in-out`}>
                            <div className="text-center space-y-8 w-full max-w-6xl mx-auto">
                                <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight px-4">
                                    {slide.title}
                                </p>
                                
                                <div className="pt-4"> 
                                    <a
                                        href={`https://api.whatsapp.com/send?phone=523320853721&text=${encodeURIComponent(`Hola, solicito información sobre: ${slide.title}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block  bg-white  hover:bg-red-800/90 hover:text-white text-red-800 font-semibold px-10 py-4 rounded-lg transition-all duration-300 text-2xl hover:scale-105 transform relative z-50 shadow-lg hover:shadow-xl"
                                        onClick={(e) => e.stopPropagation()} // Prevenir interferencia con el carousel
                                    >
                                        Solicitar informes
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {slides.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all z-20 group backdrop-blur-sm"
                        aria-label="Slide anterior"
                    >
                        <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all z-20 group backdrop-blur-sm"
                        aria-label="Slide siguiente"
                    >
                        <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Indicadores con números */}
            {slides.length > 1 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-sm font-medium backdrop-blur-sm ${
                                index === currentSlide 
                                    ? 'bg-white text-black border-white scale-110 shadow-lg' 
                                    : 'bg-transparent text-white border-white/50 hover:border-white hover:scale-105'
                            }`}
                            aria-label={`Ir al slide ${index + 1}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </section>
    );
}