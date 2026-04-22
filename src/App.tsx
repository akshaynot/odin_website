import { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReactGA from "react-ga4";
import { updateMetaTags } from "./utils/seoHelpers";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

ReactGA.initialize("G-0BL04FG25Y");

// Page meta tag configurations
const pageMetaTags: { [key: string]: { title: string; description: string } } = {
  '/': {
    title: 'ODIN NGO India | ODIN Social | Cultural and Social Welfare',
    description: 'ODIN, also known as ODIN Social, is a leading ODIN NGO in India empowering marginalized communities through education, healthcare, and economic programs.'
  },
  '/about': {
    title: 'About ODIN NGO | ODIN Social Mission, Vision & Team',
    description: 'Learn about ODIN NGO\'s mission to empower communities in India. Meet the dedicated team behind ODIN Social.'
  },
  '/work': {
    title: 'Our Work & Programs | ODIN NGO India Projects',
    description: 'Explore ODIN Social\'s initiatives, cultural programs, and community workshops designed to create lasting social impact across India.'
  },
  '/get-involved': {
    title: 'Get Involved | Volunteer & Donate with ODIN NGO',
    description: 'Make a difference! Join ODIN Social as a volunteer or support our mission to empower communities in India.'
  },
  '/donate': {
    title: 'Donate to ODIN NGO | Support ODIN Social in India',
    description: 'Your donation helps the ODIN NGO provide education, healthcare, and cultural programs to marginalized communities in India.'
  },
  '/contact': {
    title: 'Contact ODIN NGO | Reach Out to ODIN Social',
    description: 'Have questions? Contact ODIN NGO India to learn more about our programs, volunteer opportunities, or partnerships.'
  },
  '/news': {
    title: 'ODIN NGO News & Updates | ODIN Social Stories',
    description: 'Stay updated with the latest news, success stories, and updates from ODIN NGO\'s community programs in India.'
  },
  '/corporate-partnership': {
    title: 'Corporate Partnerships | ODIN NGO India',
    description: 'Partner with ODIN Social for CSR initiatives, employee volunteering, and impactful community development.'
  },
  '/fundraise': {
    title: 'Start a Campaign | ODIN NGO Social',
    description: 'Start your own fundraising campaign for ODIN NGO. Empower communities in India and create a lasting impact.'
  }
};






// Lazy loading the page routes
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Contact = lazy(() => import("./pages/Contact"));
const News = lazy(() => import("./pages/News"));
const CorporatePartnership = lazy(() => import("./pages/CorporatePartnership"));
const Fundraise = lazy(() => import("./pages/Fundraise"));
const NotFound = lazy(() => import("./pages/NotFound"));

// A clean Loading fallback while JS chunks download
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-500 font-medium tracking-wider animate-pulse">Loading ODIN...</p>
    </div>
  </div>
);

function ScrollToTopAndTrackPageView() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Update meta tags based on current page
    const metaTags = pageMetaTags[pathname] || pageMetaTags['/'];
    updateMetaTags({
      title: metaTags.title,
      description: metaTags.description,
      canonical: `https://odinsocial.vercel.app${pathname}`
    });
  }, [pathname]);

  useEffect(() => {
    // Send pageview with the current path to Google Analytics
    ReactGA.send({ hitType: "pageview", page: pathname + search });

    // Also send to global gtag for Google Search Console compatibility
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname + search,
      });
    }
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopAndTrackPageView />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/get-involved" element={<Volunteer />} />
              <Route path="/donate" element={<GetInvolved />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/corporate-partnership" element={<CorporatePartnership />} />
              <Route path="/fundraise" element={<Fundraise />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
