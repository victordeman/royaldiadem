'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { Message } from 'ai';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: 'Hello! I am your Royal Diadem Technical Assistant. How can I help you today with information about our products or services?',
      } as Message,
    ],
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4"
          >
            <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl border-primary/20 overflow-hidden bg-background/95 backdrop-blur-md">
              {/* Header */}
              <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/10 rounded-full">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Technical Assistant</h3>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-[10px] opacity-80">AI Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <Minimize2 size={16} />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20"
              >
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={cn(
                      "flex gap-3 text-sm",
                      m.role === 'user' ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0",
                      m.role === 'user' ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}>
                      {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={cn(
                      "p-3 rounded-2xl max-w-[80%]",
                      m.role === 'user'
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted rounded-tl-none text-muted-foreground"
                    )}>
                      {m.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 text-sm">
                    <div className="p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 bg-muted">
                      <Bot size={16} />
                    </div>
                    <div className="p-3 rounded-2xl bg-muted rounded-tl-none text-muted-foreground">
                      <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" />
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="p-4 border-t flex gap-2 bg-background/50"
              >
                <input
                  className="flex-1 bg-muted rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  value={input}
                  placeholder="Type your message..."
                  onChange={handleInputChange}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  <Send size={16} />
                </Button>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110",
          isOpen ? "rotate-90" : "rotate-0"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>
    </div>
  );
}
