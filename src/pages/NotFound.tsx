import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button";
import { MoveLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[90vh] bg-slate-50 flex items-center justify-center font-sans px-4 pt-16">
      <Helmet>
        <title>Page Not Found | ODIN Society</title>
      </Helmet>
      
      <div className="text-center max-w-2xl mx-auto animate-fade-in-up relative">
        {/* Decorative elements behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

        <div className="w-24 h-24 bg-orange-100 text-orange-500 rounded-[2rem] flex items-center justify-center mx-auto mb-8 transform -rotate-6 shadow-sm border border-orange-200">
          <AlertTriangle className="w-12 h-12" />
        </div>
        
        <h1 className="text-8xl md:text-9xl font-extrabold text-slate-900 mb-6 tracking-tighter">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight">Oops! Page not found</h2>
        
        <p className="text-lg text-slate-600 font-light mb-12 max-w-lg mx-auto leading-relaxed">
          The page you are looking for doesn't exist, has been moved, or is currently unavailable. No worries, let's get you back to the main website.
        </p>
        
        <Button href="/" variant="primary" className="rounded-full px-8 py-4 text-lg">
          <MoveLeft className="w-5 h-5 mr-3 inline" /> Return to Homepage
        </Button>
      </div>
    </div>
  );
}
