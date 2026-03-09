import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const locations = [
  {
    name: 'Lazimpat HQ',
    addr: 'Lazimpat, Kathmandu 44600, Nepal',
    phone: '+977 1-4410000',
    email: 'info@genxfitness.com.np',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Locations() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="text-6xl font-black tracking-tighter mb-6">OUR <span className="text-genx-red">SPOT</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Find us in the heart of Kathmandu. Our facility features state-of-the-art equipment and a premium fitness environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100"
            >
              <div className="h-64 overflow-hidden">
                <img src={loc.img} alt={loc.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-black mb-8">{loc.name}</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-genx-red shrink-0" />
                    <p className="text-gray-500">{loc.addr}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-genx-red shrink-0" />
                    <p className="text-gray-500">{loc.phone}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-genx-red shrink-0" />
                    <p className="text-gray-500">{loc.email}</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-genx-red shrink-0" />
                    <div>
                      <p className="text-gray-500 text-sm">Sun-Fri: 5:30am - 9pm</p>
                      <p className="text-gray-500 text-sm">Saturday: 7am - 7pm</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-10 bg-genx-black text-white py-4 rounded-2xl font-black hover:bg-genx-black/90 transition-colors">
                  Get Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Map Placeholder */}
        <div className="mt-20 rounded-[40px] overflow-hidden h-[500px] relative shadow-2xl">
          <img
            src="https://api.placeholder.com/1200/500?text=Full+Width+Interactive+Map+Placeholder"
            alt="Map"
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center max-w-md mx-4">
              <MapPin className="w-12 h-12 text-hub-blue mx-auto mb-4" />
              <h4 className="text-2xl font-black mb-2">Interactive Map</h4>
              <p className="text-gray-500">Explore our locations and find the easiest route to your next workout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
