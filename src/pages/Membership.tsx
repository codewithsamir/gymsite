import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

const plans = [
  {
    name: 'Day Pass',
    price: '25',
    features: ['Single day access', 'Full gym facilities', 'GenX HIIT class included', 'No commitment'],
    cta: 'Get Pass',
    popular: false
  },
  {
    name: 'Monthly GenX',
    price: '89',
    features: ['Unlimited gym access', 'All group classes', '1 Personal training session', 'Community events', 'Locker access'],
    cta: 'Start Trial',
    popular: true
  },
  {
    name: 'Annual Legend',
    price: '799',
    features: ['Everything in Monthly', '10% off merchandise', 'Guest passes (2/mo)', 'Priority booking', 'Free Hub Gym shirt'],
    cta: 'Join Now',
    popular: false
  }
];

export default function Membership() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="text-6xl font-black tracking-tighter mb-6">JOIN THE <span className="text-genx-red">TRIBE</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your lifestyle. No hidden fees, just pure energy and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "p-10 rounded-[40px] border-2 flex flex-col justify-between relative",
                plan.popular ? "border-genx-red bg-red-50/30 shadow-2xl shadow-red-500/10" : "border-gray-100"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-genx-red text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-black">$</span>
                  <span className="text-6xl font-black">{plan.price}</span>
                  {plan.name !== 'Annual Legend' && <span className="text-gray-400 font-bold ml-2">/mo</span>}
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center space-x-3 text-gray-600">
                      <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={cn(
                "w-full py-4 rounded-2xl font-black transition-all",
                plan.popular ? "bg-genx-red text-white hover:bg-red-600" : "bg-genx-black text-white hover:bg-genx-black/90"
              )}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
