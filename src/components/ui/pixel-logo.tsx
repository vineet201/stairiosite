'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { stairioLogo } from '@/lib/brand-assets';

interface PixelLogoProps {
  text?: string;
  className?: string;
  href?: string;
}

export function PixelLogo({ text = 'Stairio', className, href = '/' }: PixelLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={cn('relative group flex items-center cursor-pointer z-10', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={text}
    >
      <span className="sr-only">{text}</span>

      <div 
        className={cn(
          'absolute -inset-2 rounded-lg bg-gradient-to-r from-[#D8B4FE]/20 via-[#FF9132]/20 to-[#D8B4FE]/20 blur-lg transition-opacity duration-500',
          isHovered ? 'opacity-100' : 'opacity-0'
        )} 
      />

      <Image
        src={stairioLogo}
        alt=""
        width={48}
        height={48}
        priority
        className={cn(
          'relative h-10 w-10 object-contain transition-transform duration-300',
          isHovered && 'scale-105'
        )}
      />
    </Link>
  );
}
