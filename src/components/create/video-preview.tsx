
import React from 'react';
import { Play, Undo } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VideoCreator } from '@/components/create/video-creator';

type VideoPreviewProps = {
  isPlaying: boolean;
  photos: string[];
  template: string;
  music: string;
};

export function VideoPreview({ isPlaying, photos, template, music }: VideoPreviewProps) {
  if (!isPlaying) return null;
  
  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Play size={18} />
        Preview
      </h2>
      
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <VideoCreator 
            photos={photos} 
            template={template}
            music={music}
          />
        </div>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
          <Button size="sm" variant="secondary" className="rounded-full">
            <Undo size={16} className="mr-2" />
            Edit
          </Button>
          <Button size="sm" className="rounded-full">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}
