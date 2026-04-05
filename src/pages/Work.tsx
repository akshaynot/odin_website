import { programs, futureInitiatives, workImages } from "../data/workData";
import ProgramCard from "../components/Work/ProgramCard";
import FutureInitiativeCard from "../components/Work/FutureInitiativeCard";
import Gallery from "../components/Work/Gallery";

export default function Work() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-orange-400 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
            Our Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Impact</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-light">
            Discover how we are making a difference through art, culture, and community engagement.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto space-y-24">

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
          {/* <Gallery images={workImages} /> */}

        </div>
      </section>
    </div>
  );
}

