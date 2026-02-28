import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-yoga.jpg";

const highlights = [
  "Positioning Yogasana as a Recognized Competitive Sport",
  "Development of a Clear & Effective Yoga Sports Policy Framework",
  "Youth Development & Yoga Sports Human Resource Growth",
  "Opportunities for Professional Pathways for Emerging Yoga Athletes",
];

const AboutSection = () => {
  return (
    <section id="about-us" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={aboutImg}
            alt="About Yogasana Premier League"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            YPL Preamble
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            <strong className="text-foreground">Yogasana Premier League (YPL)</strong> is the world's
            dedicated professional yogasana league, built to establish yogasana as a structured
            competitive sport through a modern league system, official competition ranking, and
            transparent scoring & results. YPL delivers standardized professional yoga competition
            formats governed by defined rules and accurate scoring, ensuring fairness and
            performance-based outcomes.
          </p>

          <div className="space-y-4 mb-8">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block bg-gradient-gold text-secondary font-semibold px-6 py-3 rounded-lg shadow-gold hover:opacity-90 transition-opacity"
          >
            Read More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
