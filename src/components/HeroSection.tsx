import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* Decorative swirl */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg viewBox="0 0 1000 600" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,300 Q250,100 500,300 T1000,300" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <path d="M0,350 Q250,150 500,350 T1000,350" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block border border-primary/30 rounded-full px-5 py-1.5 text-sm font-medium text-primary mb-6">
            Yogasana Premier League
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
            YPL: Where Yoga Becomes a{" "}
            <span className="text-gradient-gold">World-Class</span>{" "}
            Competitive Sport
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-gold">
            <img
              src={heroImg}
              alt="Yogasana Premier League - 8 Top Teams Faceoff"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
