import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button";
import { Heart, Megaphone, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Fundraise() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-hidden">
      <Helmet>
        <title>Start a Campaign | ODIN Society</title>
        <meta name="description" content="Start your own fundraising campaign for ODIN. Empower communities and create a lasting impact by getting your network involved." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-orange-400 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
            Be A Changemaker
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Fundraise for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">ODIN</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-light mb-8">
            Turn your passion into action. Start a campaign, rally your friends and family, and help us empower the communities that need it most.
          </p>
          <Button 
            className="rounded-full shadow-orange-500/20 hover:shadow-orange-500/40 text-lg px-8 py-4"
            onClick={() => {
              document.getElementById('start-campaign')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start My Campaign <ArrowRight className="ml-2 w-5 h-5 inline" />
          </Button>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <div className="h-1 shadow-sm w-24 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Megaphone, title: "1. Create Your Campaign", text: "Tell us about your campaign idea, your goal, and why you support ODIN." },
              { icon: Users, title: "2. Rally Your Network", text: "Share your dedicated campaign link with friends, family, and colleagues." },
              { icon: Heart, title: "3. Make a Difference", text: "Watch your impact grow as the funds directly fuel our social initiatives." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600 shadow-sm border border-orange-200">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="start-campaign" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-[40px] opacity-40 pointer-events-none"></div>

            <div className="text-center mb-10 relative z-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Your Campaign</h2>
              <p className="text-slate-600 font-light">Fill out the details below to register your fundraising initiative.</p>
            </div>

            {status === 'success' ? (
              <div className="text-center py-10 animate-fade-in-up relative z-10">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Campaign Submitted!</h3>
                <p className="text-slate-600 font-light mb-8">
                  Thank you for your incredible initiative. Our team will review your campaign details and reach out to you with your dedicated fundraising link shortly.
                </p>
                <Button variant="outline" className="rounded-full" onClick={() => setStatus('idle')}>
                  Start Another Campaign
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input required type="text" id="name" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input required type="email" id="email" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input required type="tel" id="phone" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none" placeholder="+91 98765 43210" />
                </div>

                <div className="border-t border-slate-100 pt-6 mt-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Campaign Details</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="campaignTitle" className="block text-sm font-semibold text-slate-700 mb-2">Campaign Title</label>
                      <input required type="text" id="campaignTitle" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none" placeholder="e.g. Education For All Drive" />
                    </div>
                    
                    <div>
                      <label htmlFor="goalAmount" className="block text-sm font-semibold text-slate-700 mb-2">Funding Goal (in ₹)</label>
                      <input required type="number" id="goalAmount" min="1000" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none" placeholder="50000" />
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-2">Campaign Description / Your Story</label>
                      <textarea required id="description" rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none resize-none" placeholder="Share why you are raising funds and how it will help..."></textarea>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="primary" className="w-full rounded-xl py-4 text-lg" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Submitting...' : 'Submit Campaign'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
