import { Calendar, User, ArrowRight } from 'lucide-react';

export default function News() {
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
            Stay Updated
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Updates</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-light">
            Read the latest stories and updates from our community initiatives.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Featured News */}
          <div className="mb-16 animate-fade-in-up animate-delay-100">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden h-96">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Featured News"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-10 relative z-10 bg-white">
                <div className="flex items-center text-slate-500 text-sm mb-4 font-medium">
                  <div className="flex items-center mr-6 bg-slate-100 px-3 py-1 rounded-full">
                    <Calendar size={16} className="mr-2 text-orange-500" />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center bg-slate-100 px-3 py-1 rounded-full">
                    <User size={16} className="mr-2 text-pink-500" />
                    <span>Admin</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                  Community Center Opening
                </h3>
                <p className="text-slate-600 mb-8 font-light text-lg">
                  We are thrilled to announce the opening of our new community
                  center in Basoda.
                </p>
                <div className="inline-flex items-center text-orange-500 font-bold cursor-pointer hover:text-pink-600 transition-colors uppercase tracking-wider text-sm">
                  Read More <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}