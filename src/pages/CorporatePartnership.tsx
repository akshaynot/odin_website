import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button";
import { Building2, Handshake, HeartHandshake, Target, ArrowRight, Briefcase } from "lucide-react";

export default function CorporatePartnership() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Corporate Partnerships | ODIN Society",
    "description": "Partner with ODIN for CSR initiatives, employee volunteering, and impactful community development.",
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-hidden">
      <Helmet>
        <title>Corporate Partnerships | ODIN Society</title>
        <meta name="description" content="Explore CSR opportunities and corporate partnerships with ODIN. Together, we can create scalable impact and empower marginalized communities." />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
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
            CSR & Collaboration
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Partnerships</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-light mb-8">
            Let us align your corporate social responsibility goals with our grass-root initiatives to create sustainable and measurable impact.
          </p>
          <Button href="/contact" className="rounded-full shadow-orange-500/20 hover:shadow-orange-500/40 text-lg px-8 py-4">
            Partner With Us <ArrowRight className="ml-2 w-5 h-5 inline" />
          </Button>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Partner With ODIN?</h2>
            <div className="h-1 shadow-sm w-24 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto font-light">
              We provide transparent, scalable, and impact-driven solutions for your company's philanthropic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Measurable Impact",
                description: "Our initiatives are data-driven. We provide complete transparency with regular impact reports to showcase how your investment is transforming communities."
              },
              {
                icon: Handshake,
                title: "Strategic Alignment",
                description: "We work closely with your organization to build customized CSR programs that reflect your brand's core values and sustainability goals."
              },
              {
                icon: HeartHandshake,
                title: "Employee Engagement",
                description: "Enhance workplace culture through meaningful volunteering opportunities that allow your employees to connect and contribute."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Partnership Models</h2>
              <div className="h-1 shadow-sm w-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 font-light mb-8 leading-relaxed">
                Whether you are looking to fulfill statutory CSR requirements, support an existing project, or initiate a brand new program aligned with your corporate philosophy, we have flexible partnership models designed for mutual growth and sustainable impact.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Project Sponsorship</h4>
                    <p className="mt-1 text-slate-600 font-light">Adopt or completely fund an ongoing initiative such as our health camps, educational drives, or the theatre program.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Payroll Giving</h4>
                    <p className="mt-1 text-slate-600 font-light">Enable your employees to make small, systematic contributions directly from their salaries towards ODIN's causes.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-1 rounded-[2.5rem] shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-[2.5rem] transform rotate-3 opacity-20 -z-10"></div>
                <div className="bg-slate-900 text-white rounded-3xl p-10 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4">Start the Conversation</h3>
                  <p className="text-slate-300 font-light mb-8">
                    Let's discuss how we can work together to achieve your social responsibility goals and make a genuine difference.
                  </p>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Address</dt>
                      <dd className="mt-1 text-base text-slate-100">994/3k Bareth Road, Ganj Basoda, Madhya Pradesh 464221</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-orange-400 uppercase tracking-wider mt-4">Email Us</dt>
                      <dd className="mt-1 text-lg">odincasw.society@gmail.com</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-orange-400 uppercase tracking-wider mt-4">Call Us</dt>
                      <dd className="mt-1 text-lg">+91 8871130485</dd>
                    </div>
                  </dl>
                  <div className="mt-10">
                    <Button variant="primary" href="/contact" className="w-full text-lg shadow-none hover:shadow-none">
                      Submit Inquiry
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
