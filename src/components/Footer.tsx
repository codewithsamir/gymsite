import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Twitter, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-hub-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-genx-red p-1.5 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase">GenX <span className="text-genx-red">Fitness</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kathmandu's premier fitness destination. Experience world-class equipment and expert coaching.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-genx-red hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-genx-red hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-genx-red hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/classes" className="hover:text-genx-red transition-colors">Our Classes</Link></li>
              <li><Link to="/trainers" className="hover:text-genx-red transition-colors">Personal Training</Link></li>
              <li><Link to="/membership" className="hover:text-genx-red transition-colors">Membership Pricing</Link></li>
              <li><Link to="/success-stories" className="hover:text-genx-red transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold text-lg mb-6">Community</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/events" className="hover:text-genx-red transition-colors">GenX Events</Link></li>
              <li><Link to="/blog" className="hover:text-genx-red transition-colors">Community Blog</Link></li>
              <li><Link to="/refer" className="hover:text-genx-red transition-colors">Refer a Friend</Link></li>
              <li><Link to="/merch" className="hover:text-genx-red transition-colors">Merchandise</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6">
              Stay updated with our latest workouts and tribe events.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-genx-red transition-colors"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-genx-red rounded-lg hover:bg-red-600 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
          <p>© 2024 GenX Fitness. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
