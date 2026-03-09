import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Marcus Chen',
    specialty: 'Strength & Conditioning',
    bio: 'Former collegiate athlete with 10+ years of experience in powerlifting and functional fitness.',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Sarah Miller',
    specialty: 'HIIT & Fat Loss',
    bio: 'Specializes in high-energy group training and nutrition planning for sustainable results.',
    img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'David Okafor',
    specialty: 'Mobility & Recovery',
    bio: 'Certified physical therapist assistant focusing on injury prevention and athletic longevity.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Jessica Wu',
    specialty: 'Boxing & Agility',
    bio: 'Professional boxing coach dedicated to improving coordination, speed, and mental toughness.',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop'
  }
];

export default function Trainers() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="text-6xl font-black tracking-tighter mb-6">EXPERT <span className="text-genx-red">COACHES</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our trainers aren't just experts; they're part of the family. They're here to push you further than you thought possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-6">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-genx-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-genx-red hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-genx-red hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-genx-red hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-1">{t.name}</h3>
              <p className="text-genx-red font-bold text-sm uppercase tracking-widest mb-4">{t.specialty}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{t.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
