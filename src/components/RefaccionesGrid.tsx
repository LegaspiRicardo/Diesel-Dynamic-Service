// src/components/RefaccionesGrid.tsx
import { useState } from 'react';

interface Categoria {
    title: string;
    icon: string;
    images: string[];
}

interface RefaccionesGridProps {
    categorias: Categoria[];
}

export default function RefaccionesGrid({ categorias }: RefaccionesGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<Categoria | null>(null);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openImageModal = (categoria: Categoria, imageIndex: number) => {
        setSelectedCategory(categoria);
        setCurrentImageIndex(imageIndex);
        setImageModalOpen(true);
    };

    const closeImageModal = () => {
        setImageModalOpen(false);
        setSelectedCategory(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedCategory) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedCategory.images.length);
        }
    };

    const prevImage = () => {
        if (selectedCategory) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedCategory.images.length) % selectedCategory.images.length);
        }
    };

    return (
        <>
            {/* Grid 2x2 de categorías */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {categorias.slice(0, 4).map((categoria, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Icono de la categoría */}
                        <div className="w-16 h-16 mx-auto mb-4">
                            <img
                                src={categoria.icon}
                                alt={categoria.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Título */}
                        <h3 className="text-lg font-bold mb-4 text-gray-800">{categoria.title}</h3>

                        {/* Miniaturas de imágenes en grid 2x2 */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {categoria.images.slice(0, 4).map((image, imageIndex) => (
                                <div
                                    key={imageIndex}
                                    className="aspect-square bg-gray-100 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-200 overflow-hidden"
                                    onClick={() => openImageModal(categoria, imageIndex)}
                                >
                                    <img
                                        src={image}
                                        alt={`${categoria.title} ${imageIndex + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Botón ver más */}
                        <button
                            onClick={() => openImageModal(categoria, 0)}
                            className="text-red-600 hover:text-red-800 font-semibold text-sm transition-colors duration-200 inline-flex items-center"
                        >
                            Ver más imágenes
                            <span className="ml-1">›</span>
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal de imágenes (se mantiene igual) */}
            {imageModalOpen && selectedCategory && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                        {/* Header del modal */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-xl font-bold">{selectedCategory.title}</h3>
                            <button
                                onClick={closeImageModal}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        {/* Imagen principal */}
                        <div className="relative p-4">
                            <img
                                src={selectedCategory.images[currentImageIndex]}
                                alt={`${selectedCategory.title} ${currentImageIndex + 1}`}
                                className="w-full h-96 object-contain"
                            />

                            {/* Controles de navegación de imágenes */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
                            >
                                ›
                            </button>
                        </div>

                        {/* Miniaturas inferiores */}
                        <div className="p-4 border-t">
                            <div className="flex space-x-2 overflow-x-auto">
                                {selectedCategory.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${selectedCategory.title} ${index + 1}`}
                                        className={`w-16 h-16 object-cover cursor-pointer rounded ${index === currentImageIndex ? 'border-2 border-red-600' : 'border border-gray-300'
                                            }`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}