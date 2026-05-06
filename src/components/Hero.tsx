import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './UI/Button';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-pearl">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-soft/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px]" />

      {/* Subtle grid overlay between decorative blobs and content */}
      <div className="absolute inset-0 z-[5] pointer-events-none hero-grid-overlay" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gold/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-deep/70">
                Siruseri's premier dental clinic
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-slate-deep">
              Premium Dental Care. <br />
              <span className="italic text-gold">Redefined.</span>
            </h1>

            <p className="text-xl text-slate-deep/60 mb-10 max-w-lg leading-relaxed">
              Experience the future of dentistry with pain-free treatments, 
              advanced technology, and a boutique atmosphere designed for your comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Appointment <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Services
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
              <div className="text-center">
                <div className="text-2xl font-display font-bold">15+</div>
                <div className="text-[10px] uppercase tracking-tighter">Specialized Services</div>
              </div>
              <div className="w-px h-8 bg-slate-deep/20" />
              <div className="text-center">
                <div className="text-2xl font-display font-bold">100%</div>
                <div className="text-[10px] uppercase tracking-tighter">Patient Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, translateY: -6 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative group lg:ml-6"
          >
             <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl relative max-h-[560px]">
                <img
                  src={heroImg}
                  alt="Luxury Dental Clinic"
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/40 to-transparent" />
             </div>
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]"
               aria-hidden="true"
             >
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold" />)}
                </div>
                <p className="text-xs font-medium text-slate-deep tracking-tight">
                  "Most gentle extraction I've ever had. Truly painless!"
                </p>
                <p className="text-[10px] mt-2 text-slate-deep/40">— Sarah J.</p>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
