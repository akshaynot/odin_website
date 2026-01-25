
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = (index: number) => {
        setSelectedImage(images[index]);
        setCurrentImageIndex(index);
        document.body.style.overflow = "hidden";
    };

    const closeGallery = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };

    const navigateGallery = React.useCallback((direction: "prev" | "next") => {
        let newIndex =
            direction === "prev" ? currentImageIndex - 1 : currentImageIndex + 1;

        if (newIndex < 0) {
            newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
            newIndex = 0;
        }

        setCurrentImageIndex(newIndex);
        setSelectedImage(images[newIndex]);
    }, [currentImageIndex, images]);


    // Handle keyboard events
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;

            if (e.key === "Escape") {
                closeGallery();
            } else if (e.key === "ArrowLeft") {
                navigateGallery("prev");
            } else if (e.key === "ArrowRight") {
                navigateGallery("next");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage, navigateGallery]); // Dependencies for closure capture

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Photo Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                        onClick={() => openGallery(index)}
                    >
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                        <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>

            {/* Image Gallery Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-sm"
                    onClick={closeGallery}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-200 z-50 p-2 hover:bg-white/10 rounded-full"
                        onClick={closeGallery}
                    >
                        <X size={32} />
                    </button>

                    <button
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateGallery("prev");
                        }}
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <div
                        className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Gallery"
                            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-lg"
                        />
                        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-white/50 text-sm">
                            Image {currentImageIndex + 1} of {images.length}
                        </div>
                    </div>

                    <button
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateGallery("next");
                        }}
                    >
                        <ChevronRight size={48} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
