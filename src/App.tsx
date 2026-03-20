import { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy loading the page routes
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Contact = lazy(() => import("./pages/Contact"));
const News = lazy(() => import("./pages/News"));

// A clean Loading fallback while JS chunks download
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-500 font-medium tracking-wider animate-pulse">Loading ODIN...</p>
    </div>
  </div>
);

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
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
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
