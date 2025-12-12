import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu, Loader2 } from 'lucide-react';
import { AI_SYSTEM_INSTRUCTION, DEV_NAME } from '../constants';
import { ChatMessage } from '../types';

type GroqRole = 'system' | 'user' | 'assistant';
type GroqMessage = { role: GroqRole; content: string };

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `System Online. I am NEXUS-019, ${DEV_NAME}'s AI assistant. How can I assist you today?` }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const buildGroqMessages = (history: ChatMessage[]): GroqMessage[] => {
    const mappedHistory: GroqMessage[] = history
      .filter(m => Boolean(m.text?.trim()))
      .map((m) => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));

    return [
      { role: 'system', content: AI_SYSTEM_INSTRUCTION },
      ...mappedHistory,
    ];
  };

  const streamGroqResponse = async (
    response: Response,
    onDelta: (deltaText: string) => void,
  ) => {
    if (!response.body) {
      const json = await response.json().catch(() => null);
      const content = json?.choices?.[0]?.message?.content;
      if (typeof content === 'string' && content.length) onDelta(content);
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

        const data = line.slice('data:'.length).trim();
        if (!data || data === '[DONE]') continue;

        try {
          const parsed = JSON.parse(data);
          const delta =
            parsed?.choices?.[0]?.delta?.content ??
            parsed?.choices?.[0]?.message?.content ??
            '';
          if (typeof delta === 'string' && delta.length) onDelta(delta);
        } catch {
          // ignore malformed chunks
        }
      }
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    const nextHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(nextHistory);
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY as string | undefined;
      const model = (import.meta.env.VITE_GROQ_MODEL as string | undefined) ?? 'groq/compound';
      if (!apiKey) {
        setMessages(prev => [...prev, { role: 'model', text: 'Error: API Protocol Offline (Missing Key).', isError: true }]);
        return;
      }

      let fullText = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      const groqMessages = buildGroqMessages(nextHistory);

      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: groqMessages,
          stream: true,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => '');
        throw new Error(`Groq error ${response.status}: ${text}`);
      }

      await streamGroqResponse(response, (deltaText) => {
        fullText += deltaText;
        setMessages(prev => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1].text = fullText;
          return newHistory;
        });
      });
    } catch (error) {
        setMessages(prev => [...prev, { role: 'model', text: "Connection Error: Unable to reach neural net.", isError: true }]);
    } finally {
        setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-surface/95 backdrop-blur-md border border-primary/30 rounded-lg shadow-[0_0_30px_rgb(var(--color-primary)/0.2)] overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300 origin-bottom-right">
          
          {/* Header */}
          <div className="bg-surface border-b border-primary/30 p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-orbitron text-sm font-bold text-primary tracking-wider">NEXUS-019 AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-main transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary/20 border border-primary/30 text-main rounded-tr-none' 
                      : 'bg-surface border border-muted/20 text-muted rounded-tl-none'
                  } ${msg.isError ? 'border-red-500 text-red-400' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
                <div className="flex justify-start">
                    <div className="bg-surface border border-muted/20 p-3 rounded-lg rounded-tl-none flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-primary"/>
                        <span className="text-xs text-primary font-mono">Thinking...</span>
                    </div>
                </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-surface border-t border-primary/30 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about my stack..."
              className="flex-1 bg-background border border-muted/20 rounded-md px-3 py-2 text-sm text-main focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 placeholder:text-muted/50 font-mono"
            />
            <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="p-2 bg-primary hover:bg-primary/80 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center relative overflow-hidden ${isOpen ? 'bg-secondary rotate-90' : 'bg-primary'}`}
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
        {isOpen ? (
            <X className="w-6 h-6 text-white" />
        ) : (
            <MessageSquare className="w-6 h-6 text-white" />
        )}
        
        {/* Ping effect */}
        {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
        )}
      </button>
    </div>
  );
};

export default AIChat;