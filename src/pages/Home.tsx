import Hero from "../components/Home/Hero";
import FeaturedPrograms from "../components/Home/FeaturedPrograms";
import ImpactStats from "../components/Home/ImpactStats";
import Button from "../components/ui/Button";
import AboutSnippet from "../components/Home/AboutSnippet";
import HowWeWork from "../components/Home/HowWeWork";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* About Overview */}
      <AboutSnippet />

      {/* How We Work */}
      <HowWeWork />

      {/* Featured Programs */}
      <FeaturedPrograms />

      {/* Impact Numbers */}
      <ImpactStats />

      {/* Community Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="relative bg-slate-900 border-t border-white/10 overflow-hidden py-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-orange-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-orange-400 font-semibold tracking-wider uppercase mb-2 backdrop-blur-md shadow-sm">
            Make an Impact
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight">
            Ready to Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Difference</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Join us in our mission to create positive change. Every contribution counts and helps us reach more communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button href="/donate" variant="primary" className="text-lg px-10 py-4 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]">
              Donate Now
            </Button>
            <Button href="/get-involved#volunteer" variant="outline" className="text-lg px-10 py-4 border-slate-600 text-white hover:bg-white hover:text-slate-900 hover:border-white shadow-lg">
              Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

