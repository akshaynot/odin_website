import { Helmet } from "react-helmet-async";
import Donation from "../components/GetInvolved/Donation";
import Button from "../components/ui/Button";

export default function GetInvolved() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "ODIN - Cultural and Social Welfare Society",
    "description": "Your support powers our mission. Whether you donate, volunteer, or spread the word, you are making a difference.",
    "potentialAction": {
      "@type": "DonateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://odin-society.org/donate",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-hidden">
      <Helmet>
        <title>Get Involved | ODIN - Cultural and Social Welfare Society</title>
        <meta name="description" content="Support ODIN's mission through donations, volunteering, and spreading the word. Make a direct impact." />
        <meta name="keywords" content="donate, volunteer, ODIN, cultural welfare society, social work, NGO India" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Get Involved & Donate | ODIN Society" />
        <meta property="og:description" content="Your contribution makes a significant difference. Help us empower communities securely via UPI or by volunteering." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://odin-society.org/donate" />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
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
            Make A Difference
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Involved</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-light">
            Your support powers our mission. Whether you donate, volunteer, or spread the word, you are making a difference.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-20 -mt-20">
        <div className="max-w-5xl mx-auto">
          <Donation />

          {/* Other Ways to Help */}
          <div className="mt-24">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Other Ways to Help</h2>
              <div className="h-1 shadow-sm w-24 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Spread the Word</h3>
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  Help us reach more people by sharing our cause on social media
                  and within your network.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-orange-600 font-normal">Facebook</Button>
                  <span className="text-slate-300 self-center">|</span>
                  <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-orange-600 font-normal">Instagram</Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Corporate Partnerships</h3>
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  Partner with us for CSR initiatives and make a lasting impact on
                  communities.
                </p>
                <Button variant="outline" className="w-full rounded-full border-orange-200 text-orange-600 hover:bg-orange-50">
                  Learn More
                </Button>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Fundraise</h3>
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  Start your own fundraising campaign to support our causes.
                </p>
                <Button variant="outline" className="w-full rounded-full border-orange-200 text-orange-600 hover:bg-orange-50">
                  Start Campaign
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

