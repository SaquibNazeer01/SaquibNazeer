import React, { useState } from 'react';
import { Mail, MapPin, Send, Radio, Phone } from 'lucide-react';

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

                // Let the success overlay show briefly, then navigate.
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
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-secondary/30 rounded-full bg-surface/50">
                   <Radio className="w-4 h-4 text-secondary animate-pulse" />
                   <span className="text-secondary text-xs font-mono tracking-widest uppercase">Channel Open</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-main">
                    Get &nbsp;
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        In Touch
                    </span>
                </h2>
                
                <p className="text-muted text-lg leading-relaxed border-l-2 border-secondary/50 pl-4">
                    Ready to start a new mission? Whether it's a freelance project, a job opportunity, or just a chat about the future of AI, my frequency is open.
                </p>
                
                <div className="grid gap-6">
                    <div className="flex items-center gap-4 group p-4 bg-surface border border-muted/10 rounded-lg hover:border-primary/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs text-primary uppercase tracking-widest font-bold">Mail</p>
                            <a
                                href="mailto:bhatsaakib505@gmail.com"
                                className="text-main font-mono text-lg hover:text-primary transition-colors"
                                aria-label="Email bhatsaakib505@gmail.com"
                            >
                                bhatsaakib505@gmail.com
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group p-4 bg-surface border border-muted/10 rounded-lg hover:border-secondary/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Phone className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                            <p className="text-xs text-secondary uppercase tracking-widest font-bold">Phone</p>
                            <a
                                href="tel:+918899779073"
                                className="text-main font-mono text-lg hover:text-secondary transition-colors"
                                aria-label="Call +91 8899779073"
                            >
                                +91 8899779073
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-30 blur-sm" />
                
                <form
                    id="contactForm"
                    action={FORMSPREE_ENDPOINT}
                    method="POST"
                    onSubmit={handleSubmit}
                    className="relative bg-surface p-8 rounded-2xl border border-muted/10"
                >
                    <input type="hidden" name="_subject" value="New Message From Your Website" />
                    <input
                        type="text"
                        name="_gotcha"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-label="Do not fill"
                    />

                    {submitStatus !== 'idle' && (
                        <div className="absolute inset-0 z-20 bg-surface/95 flex flex-col items-center justify-center text-center p-6 animate-in fade-in rounded-2xl">
                            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/50 flex items-center justify-center mb-4">
                                <Send className="w-8 h-8 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-main mb-2">
                                {submitStatus === 'success' ? 'Transmission Sent' : 'Transmission Failed'}
                            </h3>
                            <p className="text-muted font-mono">
                                {submitStatus === 'success' ? 'Stand by for response...' : 'Please try again in a moment.'}
                            </p>
                        </div>
                    )}

                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs text-primary uppercase tracking-widest font-bold">Identity</label>
                                <input 
                                    type="text" 
                                    required
                                    name="name"
                                    value={formState.name}
                                    onChange={e => setFormState({...formState, name: e.target.value})}
                                    className="w-full bg-background border border-muted/20 rounded-none px-4 py-3 text-main focus:outline-none focus:border-primary focus:bg-background/80 transition-all font-mono placeholder:text-muted/50"
                                    placeholder="Enter Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-primary uppercase tracking-widest font-bold">Frequency</label>
                                <input 
                                    type="email" 
                                    required
                                    name="email"
                                    value={formState.email}
                                    onChange={e => setFormState({...formState, email: e.target.value})}
                                    className="w-full bg-background border border-muted/20 rounded-none px-4 py-3 text-main focus:outline-none focus:border-primary focus:bg-background/80 transition-all font-mono placeholder:text-muted/50"
                                    placeholder="Enter Email"
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-xs text-primary uppercase tracking-widest font-bold">Data Packet</label>
                            <textarea 
                                rows={4}
                                required
                                name="message"
                                value={formState.message}
                                onChange={e => setFormState({...formState, message: e.target.value})}
                                className="w-full bg-background border border-muted/20 rounded-none px-4 py-3 text-main focus:outline-none focus:border-primary focus:bg-background/80 transition-all font-mono resize-none placeholder:text-muted/50"
                                placeholder="Enter message data..."
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full py-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 font-bold tracking-widest uppercase transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">Transmitting...</span>
                            ) : (
                                <>
                                    Send Transmission
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;