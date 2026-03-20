import Mission from '../components/About/Mission';
import TeamGrid from '../components/About/TeamGrid';
import Timeline from '../components/About/Timeline';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 border-b border-white/10">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-orange-400 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
            Discover Our Story
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">ODIN</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-light">
            We are a community of changemakers dedicated to building a sustainable and equitable future for all.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-20 -mt-10 lg:-mt-16">
        <Mission />
      </div>
      
      <div className="bg-slate-50">
        <TeamGrid />
        <Timeline />
      </div>
    </div>
  );
}