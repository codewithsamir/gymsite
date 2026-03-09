import { motion } from 'motion/react';
import { Clock, Users, ArrowRight } from 'lucide-react';

const classes = [
  {
    name: 'GenX HIIT',
    time: '45 mins',
    intensity: 'High',
    desc: 'Our signature high-intensity interval training designed to burn fat and build explosive power.',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Power Lift',
    time: '60 mins',
    intensity: 'Medium-High',
    desc: 'Focus on compound movements and progressive overload to build raw strength and muscle.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Flow & Focus',
    time: '50 mins',
    intensity: 'Low-Medium',
    desc: 'A blend of mobility, yoga, and core stability to improve recovery and mental clarity.',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Boxing Burn',
    time: '45 mins',
    intensity: 'High',
    desc: 'Technical boxing drills mixed with conditioning for the ultimate cardio challenge.',
    img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Classes() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="text-6xl font-black tracking-tighter mb-6">OUR <span className="text-genx-red">CLASSES</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From high-octane HIIT to focused strength sessions, we have a class for every goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {classes.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 hover:border-genx-red transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <Clock className="w-4 h-4 mr-1" />
                        {c.time}
                      </div>
                      <div className="flex items-center text-xs font-bold text-genx-red uppercase tracking-widest">
                        <Users className="w-4 h-4 mr-1" />
                        {c.intensity} Intensity
                      </div>
                    </div>
                    <h3 className="text-3xl font-black mb-4">{c.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">{c.desc}</p>
                  </div>
                  <button className="flex items-center space-x-2 font-black text-genx-black group-hover:text-genx-red transition-colors">
                    <span>Book Session</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
