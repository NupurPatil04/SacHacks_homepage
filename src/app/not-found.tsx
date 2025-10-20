import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-140px] left-[-190px] w-[427px] h-[427px] rounded-full bg-gradient-radial from-[#5D2DA0] via-[#6625C3] via-[#9C50FE] to-[#EBBEFF] opacity-80 blur-[125px]" />
          <div className="absolute top-[181px] left-[-145px] w-[382px] h-[382px] rounded-full bg-[#D0625E] opacity-60 blur-[150px]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 pt-32 lg:pt-40 pb-20 text-center">
          <h1 className="font-unbounded text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white/20 via-white via-white to-white/20 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-white text-xl mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link 
            href="/" 
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
