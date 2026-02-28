import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ypl-logo.png";

const navLinks = ["Home", "About Us", "Blogs", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="YPL Logo" className="h-10 w-10 object-contain" />
          <span className="font-display font-bold text-lg text-foreground hidden sm:block">YPL</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
          <Button className="bg-gradient-gold text-secondary font-semibold shadow-gold gap-2">
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="block text-sm font-medium text-muted-foreground hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button className="w-full bg-gradient-gold text-secondary font-semibold shadow-gold gap-2">
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
