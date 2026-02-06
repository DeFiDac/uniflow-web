import React from 'react';
import { motion } from 'motion/react';

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.4), transparent 70%)',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.3), transparent 70%)',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.25), transparent 70%)',
        }}
      />
      
      {/* Geometric grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, var(--background) 100%)',
        }}
      />
    </div>
  );
}
