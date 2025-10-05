import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div className="min-h-screen bg-space-gradient">
      <Navigation />
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 pt-32">
        <h1 className="text-6xl font-unbounded font-bold mb-6 text-center"
          style={{
            background: 'linear-gradient(95deg, rgba(215, 215, 215, 0.20) -7.54%, #FFF 11.23%, #FFF 30.19%, #FFF 72.65%, rgba(255, 255, 255, 0.20) 114.15%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
          Team Page
        </h1>
        <p className="text-xl text-white/80 mb-8 text-center max-w-2xl">
          This page is coming soon! We're working on showcasing our amazing team.
        </p>
        <Link 
          to="/"
          className="px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
