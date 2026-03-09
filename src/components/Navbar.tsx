import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Classes', href: '/classes' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Locations', href: '/locations' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-genx-red p-1.5 rounded-lg shadow-lg shadow-red-500/20">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase">GenX <span className="text-genx-red">Fitness</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-genx-red",
                  location.pathname === link.href ? "text-genx-red" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/join"
              className="bg-genx-red text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
            >
              Join GenX
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-hub-charcoal"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-semibold rounded-lg",
                    location.pathname === link.href ? "bg-blue-50 text-hub-blue" : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/join"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-genx-red text-white px-6 py-4 rounded-xl text-base font-bold mt-4"
              >
                Join GenX
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
