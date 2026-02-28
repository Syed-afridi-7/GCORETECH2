import { motion } from "framer-motion";

const stats = [
  { value: "65+", label: "Registered Institutes" },
  { value: "150+", label: "Coaches Onboard" },
  { value: "200+", label: "Certified Officials / Referees" },
  { value: "5000+", label: "Registered Players" },
];

const StatsSection = () => {
  return (
    <section className="bg-gradient-navy py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-display font-bold text-center text-cream mb-12"
        >
          Our Achievements
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-display font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-cream/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
