

import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";

export default function Contact() {
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
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Us</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-light">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 lg:-mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

