import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface Message {
  id: string;
  role: 'user' | 'agent';
  content: string;
}

export function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'agent',
      content: 'Hello! I am your personal DeFi portfolio advisor. How can I help you optimize your assets today?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdCounter = useRef(2);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: String(messageIdCounter.current++),
      role: 'user',
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      const agentMessage: Message = {
        id: String(messageIdCounter.current++),
        role: 'agent',
        content: getMockResponse(userMessage.content),
      };
      setMessages((prev) => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getMockResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('eth') || lowerInput.includes('ethereum')) {
      return "Ethereum is showing strong accumulation patterns. It might be a good time to consider increasing your position if it breaks $3,200 resistance.";
    }
    if (lowerInput.includes('btc') || lowerInput.includes('bitcoin')) {
      return "Bitcoin remains the market leader with high dominance. Volatility is expected to remain low for the next 48 hours.";
    }
    if (lowerInput.includes('sell') || lowerInput.includes('buy')) {
      return "I can help you execute trades. Please confirm the asset and amount you'd like to trade.";
    }
    return "I'm analyzing the market trends for you. Could you be more specific about which asset you're interested in?";
  };

  return (
    <div className="flex flex-col h-[400px] w-full">
      <div className="flex-1 overflow-y-auto space-y-4 p-4 rounded-lg bg-white/5 border border-white/10 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white/10 text-foreground border border-white/10'
                }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/10 text-foreground border border-white/10 rounded-2xl px-4 py-2 text-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask your advisor..."
          className="flex-1"
        />
        <Button onClick={handleSendMessage} disabled={isTyping || !inputValue.trim()}>
          Send
        </Button>
      </div>
    </div>
  );
}
