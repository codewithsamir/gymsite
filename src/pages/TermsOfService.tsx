import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-4xl font-black mb-8 tracking-tighter">TERMS OF <span className="text-genx-red">SERVICE</span></h1>
          <p className="text-gray-500 mb-6">Last updated: May 2024</p>
          
          <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-600 mb-6">These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity and GenX Fitness, concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
          
          <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
          <p className="text-gray-600 mb-6">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.</p>
          
          <h2 className="text-2xl font-bold mb-4">3. User Representations</h2>
          <p className="text-gray-600 mb-6">By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.</p>
          
          <h2 className="text-2xl font-bold mb-4">4. Gym Rules</h2>
          <p className="text-gray-600 mb-6">All members must follow the gym rules posted at our physical locations. Failure to comply with these rules may result in termination of your membership without refund.</p>
        </motion.div>
      </div>
    </div>
  );
}
