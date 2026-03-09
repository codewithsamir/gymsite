import { motion } from 'motion/react';
import { Users, Trophy, Star, ArrowRight, MapPin, Instagram, Check, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Gym Background"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hub-charcoal/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-genx-red font-bold tracking-widest uppercase text-sm mb-4 block">
              Kathmandu's Premier Fitness
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
              GENERATE <br />
              <span className="text-genx-red">EXCELLENCE.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Experience world-class training in the heart of Kathmandu. Premium equipment, expert coaching, and a community that drives you to your peak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/join"
                className="bg-genx-red text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform text-center"
              >
                START YOUR JOURNEY
              </Link>
              <Link
                to="/classes"
                className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-black text-lg hover:bg-white/20 transition-colors text-center"
              >
                View Classes
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Users, label: 'Active Members', value: '800+', color: 'text-genx-blue' },
                { icon: Trophy, label: 'Certified Trainers', value: '15+', color: 'text-genx-red' },
                { icon: Star, label: 'Success Stories', value: '350+', color: 'text-emerald-500' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl flex items-center space-x-6 h-32 border border-white/20"
                >
                  <div className={stat.color}>
                    <stat.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <p className={cn("font-black text-xs uppercase tracking-widest mb-1", stat.color)}>{stat.label}</p>
                    <p className="text-3xl font-black text-genx-black leading-none">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Tribe Dominates */}
      <section className="pt-56 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              WHY <span className="text-genx-red uppercase">GENX FITNESS</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We provide a premium fitness experience with a focus on results, community, and cutting-edge equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Community Spirit',
                desc: 'No mirrors, no ego. Just a supportive tribe pushing you to be your absolute best every single day.',
                img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
              },
              {
                title: 'Modern Equipment',
                desc: 'Top-tier gear in a bright, vibrant environment designed to spark energy and focus.',
                img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop'
              },
              {
                title: 'Expert Coaching',
                desc: 'Guidance from industry leaders who care about your form, your progress, and your mindset.',
                img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-64 mb-8 overflow-hidden rounded-3xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              MEMBERSHIP <span className="text-genx-red uppercase">PLANS</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Transparent pricing for your fitness journey. No hidden fees, just results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: '3,500',
                features: ['Gym Access', 'Locker Room', 'Free Assessment'],
                popular: false
              },
              {
                name: 'Premium',
                price: '5,500',
                features: ['Gym Access', 'All Group Classes', '1 PT Session/mo', 'Steam & Sauna'],
                popular: true
              },
              {
                name: 'Elite',
                price: '8,000',
                features: ['24/7 Access', 'Unlimited PT', 'Nutrition Plan', 'Guest Passes'],
                popular: false
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "p-10 rounded-[40px] border-2 flex flex-col justify-between relative bg-white",
                  plan.popular ? "border-genx-red shadow-2xl scale-105 z-10" : "border-transparent shadow-lg"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-genx-red text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                    Best Value
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-black mb-4">{plan.name}</h3>
                  <div className="flex items-baseline mb-8">
                    <span className="text-2xl font-black mr-1">Rs.</span>
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-gray-400 font-bold ml-2">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center space-x-3 text-gray-600">
                        <Check className="w-5 h-5 text-genx-red" />
                        <span className="text-sm font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/join"
                  className={cn(
                    "w-full py-4 rounded-2xl font-black text-center transition-all",
                    plan.popular ? "bg-genx-red text-white hover:bg-red-600" : "bg-genx-black text-white hover:bg-gray-900"
                  )}
                >
                  Choose Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                WEEKLY <span className="text-genx-red uppercase">SCHEDULE</span>
              </h2>
              <p className="text-gray-500 text-lg">
                Find the perfect time to train. Our diverse classes are designed to fit your busy lifestyle.
              </p>
            </div>
            <Link to="/classes" className="mt-8 md:mt-0 flex items-center space-x-2 text-genx-red font-bold hover:translate-x-2 transition-transform">
              <span>View All Classes</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-8 gap-4 mb-8">
                <div className="p-4"></div>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="p-4 text-center font-black text-sm uppercase tracking-widest text-gray-400">
                    {day}
                  </div>
                ))}
              </div>

              {[
                { time: '06:00 AM', classes: ['HIIT', 'Yoga', 'HIIT', 'Yoga', 'HIIT', 'Open', 'Closed'] },
                { time: '09:00 AM', classes: ['Strength', 'Zumba', 'Strength', 'Zumba', 'Strength', 'HIIT', 'Closed'] },
                { time: '05:00 PM', classes: ['Boxing', 'HIIT', 'Boxing', 'HIIT', 'Boxing', 'Open', 'Closed'] },
                { time: '07:00 PM', classes: ['Yoga', 'Strength', 'Yoga', 'Strength', 'Yoga', 'Closed', 'Closed'] },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-8 gap-4 mb-4">
                  <div className="p-6 bg-gray-50 rounded-2xl flex items-center justify-center font-black text-xs text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {row.time}
                  </div>
                  {row.classes.map((c, j) => (
                    <div
                      key={j}
                      className={cn(
                        "p-6 rounded-2xl text-center text-sm font-bold transition-all",
                        c === 'Closed' ? "bg-gray-100 text-gray-300" : 
                        c === 'Open' ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                        "bg-red-50 text-genx-red border border-red-100 hover:scale-105 cursor-pointer"
                      )}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-genx-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-genx-red font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Testimonials</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              WHAT OUR <span className="text-genx-red">TRIBE SAYS.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-12 gap-8 snap-x no-scrollbar">
              {[
                {
                  name: 'Anish Thapa',
                  role: 'Member since 2023',
                  quote: "Best gym in Kathmandu! The equipment is top-notch and the trainers really know their stuff. GenX Fitness has completely transformed my workout routine.",
                  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop'
                },
                {
                  name: 'Sarah Jenkins',
                  role: 'Member since 2022',
                  quote: "I never thought I could love working out. The energy here is infectious. I've found my second family!",
                  img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
                },
                {
                  name: 'Elena Rodriguez',
                  role: 'Member since 2023',
                  quote: "Coming from a professional sports background, I wanted a place that challenged me. I found it here.",
                  img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop'
                },
                {
                  name: 'David Chen',
                  role: 'Member since 2024',
                  quote: "The community here is unmatched. Everyone is pushing each other to be better. It's the highlight of my day.",
                  img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop'
                }
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="min-w-[350px] md:min-w-[450px] bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] relative group hover:bg-white/10 transition-colors snap-center"
                >
                  <Star className="absolute top-10 right-10 w-8 h-8 text-genx-red opacity-20 group-hover:opacity-100 transition-opacity" />
                  <p className="text-xl text-white font-medium italic mb-10 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-genx-red/30">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-xl font-black text-white">{t.name}</p>
                      <p className="text-sm text-genx-red font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <Link to="/success-stories" className="inline-flex items-center space-x-4 text-white font-black text-lg group">
                <span className="border-b-2 border-genx-red pb-1">Read all stories</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform text-genx-red" />
              </Link>
              <div className="flex space-x-2">
                <div className="w-12 h-1 bg-genx-red rounded-full" />
                <div className="w-4 h-1 bg-white/20 rounded-full" />
                <div className="w-4 h-1 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-6 md:space-y-0">
            <div>
              <h2 className="text-3xl font-black tracking-tighter">
                FOLLOW THE <span className="text-genx-red">HEAT</span>
              </h2>
              <p className="text-gray-500 font-medium">@genxfitnessnepal #GenXFitness</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Instagram className="w-6 h-6 text-hub-charcoal" />
              </button>
              <a href="#" className="bg-white border border-blue-100 text-hub-blue px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Follow Instagram
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop'
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group relative">
                <img src={img} alt="Social" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-genx-red/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 tracking-tighter">
                FIND YOUR <span className="text-genx-red">SPOT.</span>
              </h2>
              <p className="text-gray-500 text-lg mb-12 leading-relaxed">
                Located in the heart of Kathmandu. Easy access, premium facilities, and a community that drives you.
              </p>

              <div className="space-y-6">
                {[
                  { name: 'Lazimpat HQ', addr: 'Lazimpat, Kathmandu 44600, Nepal', active: true },
                ].map((loc, i) => (
                  <div
                    key={i}
                    className={cn(
                      "p-6 rounded-2xl border-2 transition-all cursor-pointer",
                      loc.active ? "border-genx-red bg-red-50/50" : "border-gray-100 hover:border-gray-200"
                    )}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={cn("p-2 rounded-lg", loc.active ? "bg-genx-red text-white" : "bg-gray-100 text-gray-400")}>
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{loc.name}</p>
                        <p className="text-gray-500 text-sm">{loc.addr}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-gray-100">
                <h4 className="font-black text-lg mb-6 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-genx-red rounded-full" />
                  <span>Hours of Operation</span>
                </h4>
                <div className="grid grid-cols-2 gap-8 text-sm">
                  <div>
                    <p className="text-gray-400 uppercase tracking-widest font-bold mb-1">Sun - Fri</p>
                    <p className="font-black text-xl">5:30 AM - 9:00 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase tracking-widest font-bold mb-1">Saturday</p>
                    <p className="font-black text-xl">7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-square bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://api.placeholder.com/800/800?text=Interactive+Map+Placeholder"
                alt="Map"
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-3xl shadow-2xl flex items-center space-x-4 animate-bounce">
                  <div className="bg-genx-red p-3 rounded-2xl text-white">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-black">GenX Fitness HQ</p>
                    <p className="text-xs text-gray-400">You are here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-genx-black rounded-[40px] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                  READY TO <br /> GENERATE?
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  First session is on us. No commitment, just excellence. Are you in?
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Link
                  to="/join"
                  className="bg-genx-red text-white px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-2xl shadow-red-500/20"
                >
                  START YOUR TRIAL
                </Link>
                <p className="text-sm text-gray-500 font-medium">Join Kathmandu's elite fitness community</p>
              </div>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-genx-red/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
