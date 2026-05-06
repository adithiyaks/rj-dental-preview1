import { motion } from 'motion/react';
import { 
  Smile, ShieldCheck, Activity, Layers, Scissors, HeartPulse, 
  Video, Stethoscope, Microscope, Sparkles, Wand2, Star, 
  Camera, Zap, Baby 
} from 'lucide-react';

const services = [
  { name: 'Teeth Whitening', icon: Sparkles, desc: 'Professional brightening for a radiant smile.' },
  { name: 'Check-ups', icon: Stethoscope, desc: 'Comprehensive examinations and preventive care.' },
  { name: 'Dental Implants', icon: ShieldCheck, desc: 'Permanent, natural-looking tooth replacements.' },
  { name: 'Dentures & Bridges', icon: Layers, desc: 'Custom prosthetics for full functional restoration.' },
  { name: 'Extractions', icon: Scissors, desc: 'Gentle, pain-free removal of problematic teeth.' },
  { name: 'Fillings & Sealants', icon: Wand2, desc: 'Premium materials to preserve and protect teeth.' },
  { name: 'Online Dentist Booking', icon: Video, desc: 'Virtual consultations from your home.' },
  { name: 'Oral Surgery', icon: Activity, desc: 'Expert surgical care for complex conditions.' },
  { name: 'Root Canals', icon: HeartPulse, desc: 'Advanced endodontic care to save your natural teeth.' },
  { name: 'Teeth Cleaning', icon: Star, desc: 'Deep scaling and polishing for optimal hygiene.' },
  { name: 'Teeth Reshaping', icon: Smile, desc: 'Subtle contouring for aesthetic perfection.' },
  { name: 'Veneers & Crowns', icon: Microscope, desc: 'Custom-crafted ceramics for a flawless look.' },
  { name: 'X-ray', icon: Camera, desc: 'High-definition digital imaging for precise diagnosis.' },
  { name: 'Orthodontic Treatment', icon: Zap, desc: 'Modern alignment solutions for all ages.' },
  { name: 'Pedodontics', icon: Baby, desc: 'Gentle, fun dental care for our youngest patients.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-deep"
          >
            Comprehensive Care for Your <span className="italic">Perfect Smile</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-pearl rounded-3xl border border-gray-100 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold mb-3 text-slate-deep">{service.name}</h3>
              <p className="text-sm text-slate-deep/50 leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
