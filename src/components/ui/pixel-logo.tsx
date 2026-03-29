'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PixelLogoProps {
  text?: string;
  className?: string;
  href?: string;
}

export function PixelLogo({ text = 'Stairio', className, href = '/' }: PixelLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const letters = text.split('');

  return (
    <Link
      href={href}
      className={cn('relative group flex items-center cursor-pointer z-10', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect behind text */}
      <div 
        className={cn(
          'absolute -inset-2 rounded-lg bg-gradient-to-r from-[#D8B4FE]/20 via-[#FF9132]/20 to-[#D8B4FE]/20 blur-lg transition-opacity duration-500',
          isHovered ? 'opacity-100' : 'opacity-0'
        )} 
      />
      
      {/* Logo text with letter animations */}
      <span className="relative flex items-center text-lg font-semibold tracking-tight">
        {letters.map((letter, index) => (
          <span
            key={index}
            className={cn(
              'inline-block transition-all duration-300',
              isHovered && 'animate-wave'
            )}
            style={{
              animationDelay: isHovered ? `${index * 50}ms` : '0ms',
              color: isHovered ? undefined : 'white',
            }}
          >
            <span
              className={cn(
                'inline-block transition-all duration-300',
                isHovered && 'bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE] bg-clip-text text-transparent'
              )}
            >
              {letter}
            </span>
          </span>
        ))}
      </span>

      {/* Animated underline */}
      <span 
        className={cn(
          'absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE] transition-all duration-300',
          isHovered ? 'w-full' : 'w-0'
        )}
      />

      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .animate-wave {
          animation: wave 0.4s ease-in-out;
        }
      `}</style>
    </Link>
  );
}
