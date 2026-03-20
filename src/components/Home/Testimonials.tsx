import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Aarti Sharma",
      role: "Community Member",
      quote: "ODIN has completely changed our village. The new educational programs gave our children a reason to dream big.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Rahul Verma",
      role: "Volunteer",
      quote: "Volunteering with ODIN was the most fulfilling experience of my life. Seeing the direct impact of our work is incredible.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Sunita Devi",
      role: "Local Artisan",
      quote: "Thanks to ODIN's cultural preservation initiatives, we are able to sustain our traditional crafts and earn a stable living.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block py-1 px-4 rounded-full bg-pink-50 text-pink-600 font-semibold tracking-wider uppercase text-sm border border-pink-100 shadow-sm mb-4">
            Voices of Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Stories from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Heart</span>
          </h2>
          <div className="h-1 shadow-sm w-24 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
            >
              <div className="absolute top-6 right-8 text-pink-200 group-hover:text-pink-300 transition-colors duration-300">
                <Quote size={48} />
              </div>
              <p className="text-slate-700 italic leading-relaxed mb-8 relative z-10 text-lg font-light">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full shadow-md border-2 border-white object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-pink-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
