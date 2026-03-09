import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-4xl font-black mb-8 tracking-tighter">PRIVACY <span className="text-genx-red">POLICY</span></h1>
          <p className="text-gray-500 mb-6">Last updated: May 2024</p>
          
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">Welcome to GenX Fitness. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at privacy@genxfitness.com.np.</p>
          
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 mb-6">We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.</p>
          
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          
          <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
          <p className="text-gray-600 mb-6">If you have questions or comments about this policy, you may email us at privacy@genxfitness.com.np or by post to: GenX Fitness, Lazimpat, Kathmandu 44600, Nepal.</p>
        </motion.div>
      </div>
    </div>
  );
}
