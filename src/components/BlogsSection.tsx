import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "YPL 2026 to Be Conducted Separately This November: A New Era Begins",
    date: "February 15, 2026",
    readTime: "6 min read",
    image: "https://yplworld.in//uploads/blog/blog1771128638.jpg",
  },
  {
    title: "Jaipur to Host 51st Sub-Junior & Junior National Yoga Sports Championship",
    date: "February 14, 2026",
    readTime: "7 min read",
    image: "https://yplworld.in//uploads/blog/blog1771066065.jpg",
  },
  {
    title: "Jaipur Yoga League Returns This August with a Bigger Competitive Vision",
    date: "February 09, 2026",
    readTime: "5 min read",
    image: "https://yplworld.in//uploads/blog/blog1770628416.jpg",
  },
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-display font-bold text-center text-foreground mb-12"
        >
          Blogs
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border group cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                </div>
                <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
