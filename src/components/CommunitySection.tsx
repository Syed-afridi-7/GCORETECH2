import { motion } from "framer-motion";
import { Facebook } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="section-padding bg-gradient-navy text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-cream mb-4">
            Join Our YPL Community
          </h2>
          <p className="text-cream/70 mb-8">
            Connect with a passionate community dedicated to wellness and Yogasana excellence.
            Share your journey, learn from others, and help us build the next era of Yoga sport.
          </p>
          <div className="inline-flex items-center gap-3 bg-card/10 backdrop-blur rounded-xl px-6 py-4 border border-cream/10">
            <Facebook className="w-8 h-8 text-gold-light" />
            <div className="text-left">
              <div className="text-2xl font-display font-bold text-cream">128K followers</div>
            </div>
            <a
              href="https://www.facebook.com/yogasana.game/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-gold text-secondary font-semibold px-5 py-2 rounded-lg shadow-gold hover:opacity-90 transition-opacity"
            >
              Join Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
