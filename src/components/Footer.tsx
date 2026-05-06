import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Clock, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="#" className="text-2xl font-display font-bold tracking-tight text-slate-deep">
              RJ's<span className="text-gold">DentalCare</span>
            </a>
            <p className="text-sm text-slate-deep/50 leading-relaxed max-w-xs">
              Exceptional dentistry in a boutique setting. We believe every patient deserves a masterpiece of a smile.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: '#C5A059' }}
                  className="w-10 h-10 rounded-full bg-pearl flex items-center justify-center text-slate-deep hover:shadow-lg transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-deep/60">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <address className="not-italic text-sm leading-relaxed">
                  7, M.R Radha Rd, Siruseri,<br />
                  Tamil Nadu 603103
                </address>
              </div>
              <div className="flex items-center gap-3 text-slate-deep/60">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-sm">+91 (44) 2345 6789</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Hours</h4>
            <div className="space-y-3">
              {[
                { day: 'Mon - Fri', time: '9:00 AM - 7:00 PM' },
                { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
                { day: 'Sunday', time: 'By Appointment Only' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-slate-deep/40 font-medium">{item.day}</span>
                  <span className="text-slate-deep font-bold">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Newsletter</h4>
            <p className="text-sm text-slate-deep/50 mb-6">Receive dental health tips and exclusive offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-pearl border-none py-4 px-6 rounded-full outline-none focus:ring-2 focus:ring-gold/20 text-sm"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-slate-deep text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-slate-deep/40 font-bold">
            &copy; {new Date().getFullYear()} RJ'sDentalCare. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-slate-deep/40 hover:text-gold transition-colors font-bold">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-slate-deep/40 hover:text-gold transition-colors font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
