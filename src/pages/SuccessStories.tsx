import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { cn } from '../lib/utils';

const stories = [
  {
    name: 'Alex Rivera',
    time: '12 months',
    result: 'Lost 45lbs & Gained Muscle',
    quote: "The Hub Gym isn't just a place to work out; it's a community that held me accountable when I wanted to quit.",
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Sophie Bennett',
    time: '6 months',
    result: 'Improved Mobility & Strength',
    quote: "I came here for the equipment, but I stayed for the people. My energy levels have never been higher.",
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Jordan Smith',
    time: '2 years',
    result: 'Professional Athlete Prep',
    quote: "The coaching here is top-tier. They understand the science behind the sweat. Best gym in the city, hands down.",
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop'
  }
];

export default function SuccessStories() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="text-6xl font-black tracking-tighter mb-6">GENX <span className="text-emerald-500">RESULTS</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Real people, real sweat, real results. See how our community is transforming lives every single day.
          </p>
        </div>

        <div className="space-y-20">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              <div className="w-full lg:w-1/2 aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-genx-red text-genx-red" />)}
                </div>
                <Quote className="w-12 h-12 text-genx-red/20 mb-6" />
                <h3 className="text-4xl font-black mb-2">{s.name}</h3>
                <p className="text-emerald-500 font-bold text-lg mb-6">{s.result}</p>
                <p className="text-xl text-gray-500 italic leading-relaxed mb-8">"{s.quote}"</p>
                <div className="p-6 bg-gray-50 rounded-2xl inline-block">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Training Duration</p>
                  <p className="font-black text-xl">{s.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
