import VolunteerRoles from "../components/GetInvolved/VolunteerRoles";
import Button from "../components/ui/Button";

const Volunteer = () => {
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
            Join The Movement
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Volunteer <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">With Us</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-light">
            Make a real impact in Basoda, Madhya Pradesh — on-ground or remotely.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Quick Stats/Info */}
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8 text-center border border-orange-100 shadow-sm animate-fade-in-up">
            <p className="text-xl font-medium text-slate-800">
              ⏱ Flexible • 🌍 Online & Offline • 📜 Certificate Provided
            </p>
          </div>

          {/* Volunteer Roles */}
          <div className="animate-fade-in-up animate-delay-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Volunteer Opportunities</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
            </div>
            <VolunteerRoles />
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 animate-fade-in-up animate-delay-300">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div className="pb-6 border-b border-slate-100">
                <h3 className="font-bold text-xl mb-2 text-slate-900">Will I receive a certificate?</h3>
                <p className="text-slate-600 font-light">Yes, certificates are provided after successful participation.</p>
              </div>
              <div className="pb-6 border-b border-slate-100">
                <h3 className="font-bold text-xl mb-2 text-slate-900">Is prior experience required?</h3>
                <p className="text-slate-600 font-light">No — motivation and commitment matter most.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-slate-900">Can I volunteer remotely?</h3>
                <p className="text-slate-600 font-light">Yes, many roles are fully remote.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center animate-fade-in-up animate-delay-400">
            <p className="text-xl text-slate-700">
              Questions?{" "}
              <Button variant="ghost" href="mailto:your@email.com" className="text-pink-600 font-bold underline px-1 py-0 hover:bg-transparent hover:text-pink-700">
                Contact us
              </Button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;

