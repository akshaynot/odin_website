
import React from "react";
import { programs, futureInitiatives, workImages } from "../data/workData";
import ProgramCard from "../components/Work/ProgramCard";
import FutureInitiativeCard from "../components/Work/FutureInitiativeCard";
import Gallery from "../components/Work/Gallery";

export default function Work() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Our <span className="text-orange-600">Impact</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how we are making a difference through art, culture, and community engagement.
            </p>
          </div>

          {/* Current Programs Grid */}
          <div>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Current Programs</h2>
              <div className="h-1 flex-1 bg-gray-200 ml-8 rounded-full hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
            </div>
          </div>

          {/* Future Programs */}
          <div>
            <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl p-10 md:p-14 shadow-sm border border-indigo-50/50">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Future Initiatives
                </h2>
                <p className="text-lg text-gray-600">
                  Expanding our horizons to create comprehensive ecosystems for growth in education, healthcare, and beyond.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {futureInitiatives.map((initiative, index) => (
                  <FutureInitiativeCard key={index} initiative={initiative} />
                ))}
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <Gallery images={workImages} />

        </div>
      </section>
    </div>
  );
}

