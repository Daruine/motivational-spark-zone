
import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-playfair font-bold text-primary">
              2cmotivation
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#articles" className="nav-link">
              Articles
            </a>
            <a href="#quotes" className="nav-link">
              Quotes
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <Button>Subscribe</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#articles"
              className="block px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Articles
            </a>
            <a
              href="#quotes"
              className="block px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Quotes
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md hover:bg-gray-50"
            >
              About
            </a>
            <div className="px-3 py-2">
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
