import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu, Loader2, Sparkles, Trash2, ExternalLink } from 'lucide-react';
import { AI_SYSTEM_INSTRUCTION, DEV_NAME } from '../constants';
import { ChatMessage } from '../types';

const DEFAULT_MODEL = 'gemini-flash-lite-latest';
const ACTIVE_MODELS = [
  'gemini-flash-lite-latest',
  'gemini-flash-latest',
  'gemini-3.5-flash-lite',
  'gemini-3.1-flash-lite',
  'gemini-2.5-flash'
];

const API_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

const QUICK_PROMPTS = [
  'Who is Saquib Nazeer?',
  'Top AI & Computer Vision projects?',
  'What are his hackathon & contest honors?',
  'What is his full tech stack?',
  'How can I contact or hire him?'
];

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: `System Online. I am NEXUS-019, ${DEV_NAME}'s AI portfolio concierge.\n\nAsk me anything about Saquib's engineering projects, technical stack, certifications, hackathon milestones, or background!` 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const buildPayload = (history: ChatMessage[]) => {
    const contents = history
      .filter(m => Boolean(m.text?.trim()))
      .map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

    return {
      systemInstruction: {
        parts: [{ text: AI_SYSTEM_INSTRUCTION }]
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1200,
        topP: 0.95
      }
    };
  };

  const streamSSE = async (
    response: Response,
    onDelta: (deltaText: string) => void
  ) => {
    if (!response.body) {
      const json = await response.json().catch(() => null);
      const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) onDelta(text);
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line.startsWith('data:')) continue;

        const dataStr = line.slice(5).trim();
        if (!dataStr || dataStr === '[DONE]') continue;

        try {
          const parsed = JSON.parse(dataStr);
          const chunkText =
            parsed?.candidates?.[0]?.content?.parts?.[0]?.text ??
            parsed?.candidates?.[0]?.delta?.parts?.[0]?.text ??
            '';
          if (chunkText) {
            onDelta(chunkText);
          }
        } catch {
          // ignore partial json
        }
      }
    }
  };

  const callNeuralNet = async (history: ChatMessage[]) => {
    const apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string | undefined)?.trim();
    if (!apiKey) {
      throw new Error('API key is not configured. Please add VITE_GEMINI_API_KEY to your environment variables.');
    }
    const configuredModel = (import.meta.env.VITE_GEMINI_MODEL as string | undefined) || DEFAULT_MODEL;
    
    // Ordered candidate model list
    const modelsToTry = Array.from(new Set([configuredModel, ...ACTIVE_MODELS]));
    const payload = buildPayload(history);

    let lastError: Error | null = null;

    for (const model of modelsToTry) {
      try {
        // Attempt streaming first
        const streamUrl = `${API_BASE_URL}/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;
        const response = await fetch(streamUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          let accumulated = '';
          await streamSSE(response, (delta) => {
            accumulated += delta;
            setMessages(prev => {
              const updated = [...prev];
              updated[updated.length - 1].text = accumulated;
              return updated;
            });
          });
          if (accumulated.trim()) return; // Successfully streamed!
        }

        // If streaming didn't return text, try standard synchronous generation
        const nonStreamUrl = `${API_BASE_URL}/${model}:generateContent?key=${apiKey}`;
        const nonStreamResp = await fetch(nonStreamUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (nonStreamResp.ok) {
          const result = await nonStreamResp.json();
          const answer = result?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (answer && answer.trim()) {
            setMessages(prev => {
              const updated = [...prev];
              updated[updated.length - 1].text = answer;
              return updated;
            });
            return; // Successfully received answer!
          }
        }
      } catch (err: any) {
        lastError = err;
      }
    }

    throw lastError || new Error('Neural network link temporarily unavailable.');
  };

  const handleSend = async (customPrompt?: string) => {
    const textToSend = (customPrompt ?? input).trim();
    if (!textToSend || isTyping) return;

    setInput('');
    const nextHistory: ChatMessage[] = [...messages, { role: 'user', text: textToSend }];
    setMessages(nextHistory);
    setIsTyping(true);

    // Initial placeholder for assistant's incoming response
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      await callNeuralNet(nextHistory);
    } catch {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'model',
          text: `I experienced a temporary connection delay while processing your query. Please ask again in a moment!`,
          isError: true
        };
        return updated;
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    setMessages([
      { 
        role: 'model', 
        text: `Chat session reset. I'm ready to answer any questions about ${DEV_NAME}'s portfolio, technical projects, and background!` 
      }
    ]);
  };

  const renderMessageContent = (content: string) => {
    if (!content) return null;

    const lines = content.split('\n');

    return (
      <div className="space-y-1.5 text-xs sm:text-sm">
        {lines.map((line, lIdx) => {
          if (!line.trim()) return <div key={lIdx} className="h-1.5" />;

          const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*');
          const cleanLine = isBullet ? line.replace(/^[\s•\-\*]+/, '') : line;
          const formatted = renderInlineFormatting(cleanLine);

          if (isBullet) {
            return (
              <div key={lIdx} className="flex items-start gap-1.5 pl-1 text-muted">
                <span className="text-primary mt-1 text-[10px] leading-none">•</span>
                <span className="flex-1 leading-relaxed">{formatted}</span>
              </div>
            );
          }

          return (
            <p key={lIdx} className="leading-relaxed">
              {formatted}
            </p>
          );
        })}
      </div>
    );
  };

  const renderInlineFormatting = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|https?:\/\/[^\s]+)/g);

    return parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={pIdx} className="text-main font-semibold">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('http://') || part.startsWith('https://')) {
        const isDrive = part.includes('drive.google.com');
        const isYoutube = part.includes('youtube.com') || part.includes('youtu.be');
        const isGithub = part.includes('github.com');
        const isLinkedin = part.includes('linkedin.com');

        let label = 'Open Link';
        if (isDrive) label = '📄 Download Resume (Google Drive)';
        else if (isYoutube) label = '📺 Watch YouTube Demo';
        else if (isGithub) label = '🐙 GitHub Repository';
        else if (isLinkedin) label = '🔗 LinkedIn Profile';

        return (
          <a
            key={pIdx}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-secondary underline underline-offset-2 font-mono text-[11px] sm:text-xs mx-0.5"
          >
            <span>{label}</span>
            <ExternalLink className="w-3 h-3 flex-shrink-0" />
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end pointer-events-auto font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-[410px] max-w-md h-[540px] sm:h-[580px] bg-surface/95 backdrop-blur-2xl border border-primary/40 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300 origin-bottom-right">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-surface via-surface/95 to-primary/10 border-b border-primary/25 p-3.5 flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-primary animate-pulse" />
            
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center text-primary shadow-glow-sm">
                <Cpu className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-sm font-bold text-main">NEXUS-019</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 font-bold">
                    ONLINE
                  </span>
                </div>
                <p className="text-[10px] text-muted font-mono flex items-center gap-1">
                  <span>AI Portfolio Assistant</span>
                  <span className="text-secondary">•</span>
                  <span>Interactive Guide</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Clear Chat History"
                className="p-1.5 rounded-lg hover:bg-surface/80 text-muted hover:text-rose-400 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                title="Close Window"
                className="p-1.5 rounded-lg hover:bg-surface/80 text-muted hover:text-main transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-3 py-2 bg-background/40 border-b border-muted/15 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <Sparkles className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  disabled={isTyping}
                  className="px-2.5 py-1 rounded-full bg-surface/80 border border-muted/20 hover:border-primary/50 text-[10px] font-mono text-muted hover:text-primary transition-all disabled:opacity-50 cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Message Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-background/60">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-200`}
              >
                <div 
                  className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-primary to-blue-600 text-white rounded-tr-none font-medium' 
                      : 'bg-surface/90 border border-muted/20 text-main rounded-tl-none backdrop-blur-md'
                  } ${msg.isError ? 'border-red-500/60 bg-red-950/30 text-red-300' : ''}`}
                >
                  {msg.role === 'user' ? (
                    <p className="text-xs sm:text-sm whitespace-pre-wrap">{msg.text}</p>
                  ) : (
                    renderMessageContent(msg.text)
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-in fade-in">
                <div className="bg-surface/90 border border-primary/30 p-3 rounded-2xl rounded-tl-none flex items-center gap-2 shadow-glow-sm">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-primary" />
                  <span className="text-[11px] text-primary font-mono font-medium">
                    Synthesizing response from portfolio database...
                  </span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-surface/95 border-t border-primary/20 flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about Saquib's work..."
              className="flex-1 bg-background/80 border border-muted/25 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-muted/50 font-mono transition-all"
            />
            <button 
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="p-2.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-glow-sm hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Chat Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative overflow-hidden cursor-pointer ${
          isOpen ? 'bg-secondary rotate-90 shadow-glow-secondary' : 'bg-gradient-to-r from-primary to-blue-600 shadow-glow-md'
        }`}
        aria-label="Toggle AI Assistant"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white" />
        )}
        
        {/* Pulsing attention ring */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-80" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-secondary border border-background" />
          </span>
        )}
      </button>
    </div>
  );
};

export default AIChat;