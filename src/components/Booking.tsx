import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Calendar, User, Phone, Clipboard, CheckCircle2, ChevronRight } from 'lucide-react';
import Button from './UI/Button';

const services = [
  'Teeth Whitening', 'Check-ups', 'Dental Implants', 'Dentures & Bridges', 
  'Extractions', 'Fillings and sealants', 'Online dentist booking', 
  'Oral surgery', 'Root canals', 'Teeth cleaning', 'Teeth reshaping', 
  'Veneers & crowns', 'X-ray', 'Orthodontic treatment', 'Pedodontics'
];

export default function Booking() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <section id="booking" className="py-24 bg-pearl overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left: Info Pannel */}
            <div className="bg-slate-deep p-12 lg:p-20 text-white relative flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute top-10 right-10 w-64 h-64 border-[40px] border-white rounded-full translate-x-1/2 -translate-y-1/2" />
              </div>

              <div className="relative z-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-block px-3 py-1 bg-gold text-white rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                >
                  Appointments
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl lg:text-6xl font-display font-medium leading-tight mb-8"
                >
                  Your Path to a <br />
                  <span className="italic text-gold">Confident</span> Smile Starts Here.
                </motion.h2>
                <p className="text-white/60 text-lg mb-12 max-w-md">
                  Book your consultation today and transform your dental experience with our world-class care.
                </p>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold">Prioritizing Your Comfort</h4>
                    <p className="text-sm text-white/40">Minimally invasive and pain-free treatments.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold">Boutique Atmosphere</h4>
                    <p className="text-sm text-white/40">Step into a relaxing, spa-like environment.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="p-12 lg:p-20 flex items-center justify-center min-h-[600px] relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="w-full space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-deep/40 flex items-center gap-2">
                          <User className="w-3 h-3" /> Full Name
                        </label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-gold outline-none transition-colors bg-transparent placeholder:text-gray-300"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-deep/40 flex items-center gap-2">
                          <Phone className="w-3 h-3" /> Phone Number
                        </label>
                        <input 
                          required
                          type="tel" 
                          placeholder="+91 00000 00000"
                          className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-gold outline-none transition-colors bg-transparent placeholder:text-gray-300"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-deep/40 flex items-center gap-2">
                        <Clipboard className="w-3 h-3" /> Select Service
                      </label>
                      <select 
                        required
                        className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-gold outline-none transition-colors bg-transparent"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="">Select a treatment</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-deep/40 flex items-center gap-2">
                          <Calendar className="w-3 h-3" /> Preferred Date
                        </label>
                        <input 
                          required
                          type="date" 
                          className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-gold outline-none transition-colors bg-transparent"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-deep/40 flex items-center gap-2">
                          <Calendar className="w-3 h-3" /> Preferred Time
                        </label>
                        <input 
                          required
                          type="time" 
                          className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-gold outline-none transition-colors bg-transparent"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full h-14">
                      Confirm Request <ChevronRight className="w-5 h-5" />
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-24 h-24 bg-cyan-soft/30 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan-soft text-cyan-600">
                       <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-slate-deep">Request Confirmed.</h3>
                    <p className="text-slate-deep/50 max-w-sm mx-auto leading-relaxed">
                      Thank you, {formData.name}. Our concierge will contact you shortly to finalize your appointment.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-gold font-bold text-sm uppercase tracking-widest pt-4 border-b-2 border-gold/20 hover:border-gold transition-all"
                    >
                      Make Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
