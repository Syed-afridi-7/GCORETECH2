import logo from "@/assets/ypl-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="YPL" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-display font-bold text-lg">Yogasana Premier League</div>
              <div className="text-sm text-secondary-foreground/60">Where Yoga Meets Competition</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-secondary-foreground/70">
            <a href="#home" className="hover:text-gold-light transition-colors">Home</a>
            <a href="#about-us" className="hover:text-gold-light transition-colors">About</a>
            <a href="#blogs" className="hover:text-gold-light transition-colors">Blogs</a>
            <a href="#contact" className="hover:text-gold-light transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/50">
          © 2026 Yogasana Premier League. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
