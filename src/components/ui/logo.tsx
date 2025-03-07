
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

interface LogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
  to?: string;
}

export function Logo({ 
  className, 
  textClassName, 
  showText = true,
  to = "/"
}: LogoProps) {
  return (
    <Link 
      to={to}
      className={cn(
        "flex items-center gap-2 transition-opacity hover:opacity-90",
        className
      )}
    >
      <div className="relative flex items-center justify-center h-9 w-9 rounded-lg 
                      bg-gradient-to-tr from-primary to-terracotta-400
                      shadow-sm overflow-hidden group">
        <Camera 
          className="h-5 w-5 text-white drop-shadow-sm relative z-10 
                     transition-transform duration-300 ease-out 
                     group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-glass-shine bg-[length:200%_100%] animate-shimmer"></div>
      </div>
      {showText && (
        <span className={cn(
          "font-display text-xl font-semibold tracking-tight",
          textClassName
        )}>
          <span className="text-primary">Wander</span>
          <span className="text-accent">Lens</span>
        </span>
      )}
    </Link>
  );
}
