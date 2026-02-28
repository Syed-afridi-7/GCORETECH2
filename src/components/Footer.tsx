import logo from "@/assets/ypl-logo.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Company Logo" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-display font-bold text-lg">Your Company Name</div>
              <div className="text-sm text-secondary-foreground/60">Your Corporate Tagline</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-secondary-foreground/70">
            <a href="#home" className="hover:text-gold-light transition-colors">Home</a>
            <a href="#about-us" className="hover:text-gold-light transition-colors">About</a>
            <a href="#blogs" className="hover:text-gold-light transition-colors">Blogs</a>
            <a href="#contact" className="hover:text-gold-light transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a href="#" className="text-secondary-foreground/60 hover:text-gold-light transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-gold-light transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-gold-light transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-gold-light transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <a href="/privacy" className="hover:text-gold-light transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-gold-light transition-colors">Terms of Service</a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-secondary-foreground/50">
          © 2026 Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
