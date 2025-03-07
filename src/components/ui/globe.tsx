
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface GlobeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export function Globe({ 
  className, 
  size = 'md', 
  animated = true 
}: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-40 h-40',
    lg: 'w-60 h-60',
    xl: 'w-80 h-80',
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // In a real implementation, we would initialize Three.js or a map library here
    // For now, we'll use a static image with CSS animations
    console.log('Globe component mounted');

    return () => {
      console.log('Globe component unmounted');
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        'relative rounded-full overflow-hidden bg-ocean-300 shadow-soft-xl',
        sizeClasses[size],
        animated && 'animate-float',
        className
      )}
    >
      {/* Simplified globe representation */}
      <div className="absolute inset-0 bg-ocean-400 opacity-70">
        <div className="absolute w-full h-full">
          {/* Meridians */}
          <div className="absolute w-full h-full border-2 border-ocean-200/20 rounded-full"></div>
          <div className="absolute w-full h-full border-2 border-ocean-200/20 rounded-full rotate-30"></div>
          <div className="absolute w-full h-full border-2 border-ocean-200/20 rounded-full rotate-60"></div>
          <div className="absolute w-full h-full border-2 border-ocean-200/20 rounded-full rotate-90"></div>
          
          {/* Parallels */}
          <div className="absolute left-0 right-0 h-[20%] top-[40%] border-2 border-ocean-200/20"></div>
          <div className="absolute left-0 right-0 h-[20%] top-[20%] border-2 border-ocean-200/20"></div>
          <div className="absolute left-0 right-0 h-[20%] top-[60%] border-2 border-ocean-200/20"></div>
        </div>
        
        {/* Continents (simplified) */}
        <div className="absolute w-[50%] h-[30%] top-[20%] left-[25%] bg-earth-300 rounded-full opacity-80"></div>
        <div className="absolute w-[20%] h-[15%] top-[55%] left-[30%] bg-earth-300 rounded-full opacity-80"></div>
        <div className="absolute w-[25%] h-[20%] top-[25%] left-[55%] bg-earth-300 rounded-full opacity-80"></div>
        <div className="absolute w-[10%] h-[10%] top-[40%] left-[75%] bg-earth-300 rounded-full opacity-80"></div>
        <div className="absolute w-[30%] h-[25%] top-[65%] left-[50%] bg-earth-300 rounded-full opacity-80"></div>
        
        {/* Highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/5"></div>
      </div>
      
      {/* Rotating overlay for animation */}
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ocean-200/10 animate-rotate-globe"></div>
      )}
      
      {/* Glass highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
    </div>
  );
}
