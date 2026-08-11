import React, { useState } from 'react';
import { Mail, MapPin, Send, Radio, Phone, Sparkles, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  onSuccess?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onSuccess }) => {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvadyjk';

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });

        window.setTimeout(() => {
          onSuccess?.();
        }, 900);

        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3500);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background transition-colors duration-500">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 mb-4 backdrop-blur-md shadow-glow-sm">
            <Radio className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-secondary uppercase">
              Direct Communication Frequency Open
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-main mb-4 font-display">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-300 to-secondary neon-text">Contact</span>
          </h2>
          
          <p className="text-muted text-base md:text-lg max-w-xl font-normal leading-relaxed">
            Available for full-time engineering roles, high-impact freelance projects, and AI system collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface/70 border border-muted/15 p-8 rounded-3xl backdrop-blur-xl shadow-glass space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-main font-display mb-2">Let's Build Together</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Have an exciting project idea, looking for a full-stack engineer, or want to explore an AI proof-of-concept? Send a message and I'll respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href="mailto:bhatsaakib505@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background/60 border border-muted/15 hover:border-primary/50 transition-all hover:bg-background/90 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-mono font-bold uppercase text-primary tracking-wider">Email Address</p>
                    <p className="text-sm md:text-base font-mono text-main group-hover:text-primary transition-colors truncate">
                      bhatsaakib505@gmail.com
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors flex-shrink-0" />
                </a>

                {/* Phone Card */}
                <a
                  href="tel:+918899779073"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background/60 border border-muted/15 hover:border-secondary/50 transition-all hover:bg-background/90 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-mono font-bold uppercase text-secondary tracking-wider">Voice & WhatsApp</p>
                    <p className="text-sm md:text-base font-mono text-main group-hover:text-secondary transition-colors">
                      +91 8899779073
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-secondary transition-colors flex-shrink-0" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-background/60 border border-muted/15">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono font-bold uppercase text-emerald-400 tracking-wider">Base Location</p>
                    <p className="text-sm md:text-base font-mono text-main">
                      J&K, India (Available Worldwide)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Form Container */}
              <form
                id="contactForm"
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                className="relative bg-surface/80 p-8 md:p-10 rounded-3xl border border-muted/15 backdrop-blur-xl shadow-glass space-y-6"
              >
                <input type="hidden" name="_subject" value="New Message From Portfolio" />
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-label="Do not fill"
                />

                {/* Transmission Status Overlay */}
                {submitStatus !== 'idle' && (
                  <div className="absolute inset-0 z-30 bg-surface/95 flex flex-col items-center justify-center text-center p-8 rounded-3xl animate-in fade-in backdrop-blur-md">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/50 flex items-center justify-center mb-4 shadow-glow-sm">
                      <CheckCircle2 className="w-9 h-9 text-emerald-400 animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-main font-display mb-2">
                      {submitStatus === 'success' ? 'Transmission Dispatched' : 'Connection Interrupted'}
                    </h3>
                    <p className="text-muted font-mono text-sm max-w-xs">
                      {submitStatus === 'success' 
                        ? 'Message received in command queue. Stand by for response.' 
                        : 'Failed to send message. Please retry or contact directly via email.'}
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                      Your Identity / Name
                    </label>
                    <input 
                      type="text" 
                      required
                      name="name"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-background/70 border border-muted/20 rounded-xl px-4 py-3.5 text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-mono text-sm placeholder:text-muted/50"
                      placeholder="e.g. Alex Mercer"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                      Your Contact Frequency / Email
                    </label>
                    <input 
                      type="email" 
                      required
                      name="email"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-background/70 border border-muted/20 rounded-xl px-4 py-3.5 text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-mono text-sm placeholder:text-muted/50"
                      placeholder="e.g. alex@company.com"
                    />
                  </div>
                </div>
                
                {/* Message TextArea */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                    Message Payload
                  </label>
                  <textarea 
                    rows={5}
                    required
                    name="message"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-background/70 border border-muted/20 rounded-xl px-4 py-3.5 text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-mono text-sm resize-none placeholder:text-muted/50"
                    placeholder="Describe your project, role opportunity, or question..."
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-display font-bold tracking-widest uppercase rounded-xl shadow-glow-md transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse font-mono">DISPATCHING TRANSMISSION...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;