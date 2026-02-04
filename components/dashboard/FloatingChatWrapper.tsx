import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ChatBox } from './ChatBox';

export function FloatingChatWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] shadow-2xl rounded-xl overflow-hidden border border-primary/20 bg-background/95 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-10 duration-200">
          <div className="flex items-center justify-between p-3 bg-primary/10 border-b border-primary/10">
            <h3 className="font-semibold text-sm">AI Advisor</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 hover:bg-primary/20 rounded-full"
            >
              ✕
            </Button>
          </div>
          <ChatBox />
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full h-16 shadow-lg shadow-primary/25 transition-all duration-300 flex items-center gap-3 px-6 ${isOpen ? 'bg-secondary hover:bg-secondary/90' : 'bg-primary hover:bg-primary/90'
          }`}
      >
        {!isOpen ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="text-lg font-semibold">AI Assistant</span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="text-lg font-semibold">Close</span>
          </>
        )}
      </Button>
    </div>
  );
}
