import { motion } from 'motion/react';

export default function Join() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 p-12 rounded-[40px] border border-gray-100"
        >
          <h1 className="text-4xl font-black mb-4 tracking-tighter">START YOUR <span className="text-genx-red">TRIAL</span></h1>
          <p className="text-gray-500 mb-10">Fill out the form below and our team will reach out to schedule your first session.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">First Name</label>
                <input type="text" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-genx-red transition-colors" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Last Name</label>
                <input type="text" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-genx-red transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
              <input type="email" className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-genx-red transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Preferred Location</label>
              <select className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-genx-red transition-colors appearance-none">
                <option>Lazimpat HQ</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Fitness Goals</label>
              <textarea className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-genx-red transition-colors h-32" placeholder="Tell us what you want to achieve..."></textarea>
            </div>
            <button className="w-full bg-genx-red text-white py-5 rounded-2xl font-black text-xl hover:bg-red-600 transition-all shadow-xl shadow-red-500/20">
              SUBMIT REQUEST
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
