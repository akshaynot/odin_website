import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Work() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497528892195-b4ee7ea4f8bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  ];

  const openGallery = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateGallery = (direction: 'prev' | 'next') => {
    let newIndex = direction === 'prev' ? currentImageIndex - 1 : currentImageIndex + 1;
    
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeGallery();
    } else if (e.key === 'ArrowLeft') {
      navigateGallery('prev');
    } else if (e.key === 'ArrowRight') {
      navigateGallery('next');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Work</h1>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: "Education Initiative",
                image: "https://images.unsplash.com/photo-1497528892195-b4ee7ea4f8bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Providing quality education to underprivileged children through modern learning methods and resources.",
                impact: "5000+ students benefited",
                goals: ["Increase literacy rates", "Provide digital education", "Support girl child education"]
              },
              {
                title: "Healthcare Access",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Ensuring accessible healthcare services for rural and urban communities through mobile clinics and health camps.",
                impact: "10000+ patients treated",
                goals: ["Preventive healthcare", "Medical camps", "Health education"]
              },
              {
                title: "Women Empowerment",
                image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Supporting women through skill development, entrepreneurship training, and microfinance programs.",
                impact: "2000+ women empowered",
                goals: ["Skill development", "Financial literacy", "Business support"]
              },
              {
                title: "Environmental Conservation",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Promoting sustainable practices and environmental awareness in communities.",
                impact: "100000+ trees planted",
                goals: ["Tree plantation", "Waste management", "Clean energy"]
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full inline-block mb-4">
                    {program.impact}
                  </div>
                  <h4 className="font-semibold mb-2">Key Goals:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {program.goals.map((goal, idx) => (
                      <li key={idx}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Meera's Journey",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                  story: "From struggling to make ends meet to running a successful small business."
                },
                {
                  name: "Village Transformation",
                  image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                  story: "How one village achieved 100% literacy through our education program."
                },
                {
                  name: "Healthcare Success",
                  image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                  story: "Making healthcare accessible to remote communities through mobile clinics."
                }
              ].map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{story.name}</h3>
                    <p className="text-gray-600">{story.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openGallery(index)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeGallery}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors duration-200"
            onClick={closeGallery}
          >
            <X size={32} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              navigateGallery('prev');
            }}
          >
            <ChevronLeft size={48} />
          </button>

          <img
            src={selectedImage}
            alt="Gallery"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              navigateGallery('next');
            }}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
}