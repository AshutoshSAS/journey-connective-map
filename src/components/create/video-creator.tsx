
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type VideoCreatorProps = {
  photos: string[];
  template: string;
  music: string;
};

export function VideoCreator({ photos, template, music }: VideoCreatorProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [transition, setTransition] = useState('fade'); // fade, slide, zoom
  
  useEffect(() => {
    // Set transition type based on template
    switch (template) {
      case 'road-trip':
        setTransition('slide');
        break;
      case 'city-explorer':
        setTransition('zoom');
        break;
      case 'nature-escape':
        setTransition('fade');
        break;
      default:
        setTransition('fade');
    }
    
    // Auto-advance photos every 3 seconds
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => {
        return prevIndex >= photos.length - 1 ? 0 : prevIndex + 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [template, photos.length]);
  
  // If no photos, show placeholder
  if (photos.length === 0) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Upload photos to preview</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000",
            {
              'opacity-100 scale-100 translate-x-0': index === currentPhotoIndex,
              'opacity-0 scale-110 translate-x-full': transition === 'slide' && index !== currentPhotoIndex,
              'opacity-0 scale-110': transition === 'zoom' && index !== currentPhotoIndex,
              'opacity-0': transition === 'fade' && index !== currentPhotoIndex,
            }
          )}
        >
          <img
            src={photo}
            alt={`Story photo ${index + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Template specific overlays */}
          {template === 'road-trip' && (
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/50 text-white rounded-full text-sm">
              {index + 1}/{photos.length}
            </div>
          )}
          
          {template === 'city-explorer' && (
            <div className="absolute top-0 left-0 w-full h-1 bg-primary">
              <div 
                className="h-full bg-white" 
                style={{ width: `${((index + 1) / photos.length) * 100}%` }}
              ></div>
            </div>
          )}
        </div>
      ))}
      
      {/* Music indicator */}
      {music && (
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/50 text-white rounded-full text-sm flex items-center space-x-1">
          <span className="w-2 h-2 bg-primary rounded-full block animate-pulse"></span>
          <span>{music.charAt(0).toUpperCase() + music.slice(1)} Music</span>
        </div>
      )}
    </div>
  );
}
