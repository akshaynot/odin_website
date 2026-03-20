import React from 'react';
import Button from '../ui/Button';
import { Target, Users, HeartHandshake } from 'lucide-react';

const AboutSnippet: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent z-0 pointer-events-none rounded-l-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
            <span className="inline-block py-1 px-4 rounded-full bg-orange-100 text-orange-600 font-semibold tracking-wider uppercase text-sm border border-orange-200 shadow-sm">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Igniting hope and building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">stronger communities</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              ODIN - Cultural and Social Welfare Society is dedicated to empowering the underprivileged, promoting cultural heritage, and ensuring sustainable development across communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/about" variant="primary" className="text-lg px-8 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Learn Our Story
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-orange-600">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Our Mission</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                To eradicate inequality and build equitable opportunities through education and healthcare.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 sm:translate-y-8">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-pink-600">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Our Vision</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                A world where every individual has the resources to thrive and uphold their cultural values.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 sm:col-span-2">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner text-purple-600">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Community First</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    We believe in localized approaches to solve global challenges. Everything we do is centered around community empowerment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
