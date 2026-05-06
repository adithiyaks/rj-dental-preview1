/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { Leaf, Shield, Award } from 'lucide-react';

export default function App() {
  return (
    <main className="selection:bg-gold/30 selection:text-slate-deep">
      <Navbar />
      <Hero />
      
      {/* Philosophy / Features section for added luxury feel */}
      <section id="philosophy" className="py-24 bg-pearl relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: Leaf, 
                title: 'Holistic Approach', 
                desc: 'We treat the person, not just the tooth. Our treatments consider your overall wellbeing.' 
              },
              { 
                icon: Shield, 
                title: 'Advanced Safety', 
                desc: 'Exceeding hospital-grade sterilization standards for your absolute peace of mind.' 
              },
              { 
                icon: Award, 
                title: 'Excellence Guaranteed', 
                desc: 'Winner of the Gold Standard for Patient Care three years in a row.' 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-slate-deep/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* Quote / Testimonial Divider */}
      <section className="py-32 bg-slate-deep text-white relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-gold text-5xl font-display">"</span>
            <blockquote className="text-3xl md:text-5xl font-display font-medium italic mb-8 leading-tight">
              A smile is a curve that sets everything straight. We just make sure that curve is a masterpiece.
            </blockquote>
            <p className="text-gold uppercase tracking-[0.3em] font-bold text-sm">— Dr. RJ, Lead Surgeon</p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </section>

      <Booking />
      <Footer />

      {/* Background Decor */}
      <div className="fixed inset-0 -z-50 pointer-events-none opacity-20">
         <div className="absolute top-[20%] left-[-10%] w-[60rem] h-[60rem] bg-cyan-soft blur-[180px] rounded-full" />
         <div className="absolute bottom-[20%] right-[-10%] w-[50rem] h-[50rem] bg-gold blur-[150px] rounded-full" />
      </div>
    </main>
  );
}
