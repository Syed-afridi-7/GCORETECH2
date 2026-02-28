import { motion } from "framer-motion";
import { Heart, User } from "lucide-react";

const testimonials = [
  { name: "Khum Bahadur", text: "The sessions have been incredibly uplifting. I feel more energetic, focused, and balanced in my daily routine. Truly a life-changing experience." },
  { name: "Mayank", text: "The sessions have been incredibly uplifting. I feel more energetic, focused, and balanced in my daily routine. Truly a life-changing experience." },
  { name: "Harshit", text: "The sessions have been incredibly uplifting. I feel more energetic, focused, and balanced in my daily routine. Truly a life-changing experience." },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-display font-bold text-center text-foreground mb-2"
        >
          <Heart className="inline w-8 h-8 text-primary mr-2" />
          Love from India's Yoga Community
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">{t.name}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
