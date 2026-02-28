import { motion } from "framer-motion";
import { Trophy, MonitorPlay, Globe, BarChart3 } from "lucide-react";
import overviewImg from "@/assets/overview-bg.jpg";

const features = [
  {
    icon: Trophy,
    title: "Professional Career for Yogasana Athletes",
    desc: "YPL creates a structured professional ecosystem where yogasana players progress from grassroots auditions to national leagues, rankings, and long-term career opportunities.",
  },
  {
    icon: MonitorPlay,
    title: "High Visibility - Digital Reach",
    desc: "The league delivers premium live coverage across television, OTT platforms, and social media, transforming yogasana performances into mass-viewed sports entertainment.",
  },
  {
    icon: Globe,
    title: "Scalable Model with Global Expansion",
    desc: "Designed on international sports league standards, YPL offers a franchise-ready, sponsor-friendly model capable of expanding across cities, countries, and global yoga markets.",
  },
  {
    icon: BarChart3,
    title: "Transparent Scoring, Rankings & Fair Play",
    desc: "A standardized, technology-driven judging and ranking framework ensures objective evaluation, athlete credibility, and investor confidence in long-term league integrity.",
  },
];

const OverviewSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Yogasana Premier League Overview
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Yogasana Premier League (YPL) is India's professional yogasana sports league, structured
            around league-based competition, standardized rules, and transparent scoring & results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={overviewImg}
              alt="YPL Overview"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </motion.div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-secondary font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
