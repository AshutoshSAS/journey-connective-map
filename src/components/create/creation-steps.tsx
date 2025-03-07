
import React from 'react';
import { ImagePlus, SlidersHorizontal, Music } from 'lucide-react';
import { PhotoUploader } from '@/components/create/photo-uploader';
import { TemplateSelector } from '@/components/create/template-selector';
import { MusicSelector } from '@/components/create/music-selector';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

type CreationStepsProps = {
  uploadedPhotos: string[];
  selectedTemplate: string;
  selectedMusic: string;
  onPhotoUpload: (photos: string[]) => void;
  onRemovePhoto: (index: number) => void;
  onClearPhotos: () => void;
  onTemplateSelect: (templateId: string) => void;
  onMusicSelect: (musicId: string) => void;
};

export function CreationSteps({
  uploadedPhotos,
  selectedTemplate,
  selectedMusic,
  onPhotoUpload,
  onRemovePhoto,
  onClearPhotos,
  onTemplateSelect,
  onMusicSelect
}: CreationStepsProps) {
  return (
    <>
      {/* Step 1: Upload Photos */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <ImagePlus size={18} />
          Step 1: Add Photos
        </h2>
        
        <PhotoUploader onPhotoUpload={onPhotoUpload} />
        
        {uploadedPhotos.length > 0 && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Your Photos ({uploadedPhotos.length})</h3>
              <Button variant="ghost" size="sm" className="text-destructive" onClick={onClearPhotos}>
                <Trash2 size={14} className="mr-1" /> Clear All
              </Button>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {uploadedPhotos.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-md overflow-hidden group">
                  <img src={photo} alt={`Upload ${index}`} className="w-full h-full object-cover" />
                  <Button 
                    variant="destructive" 
                    size="icon" 
                    className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => onRemovePhoto(index)}
                  >
                    <Trash2 size={12} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Step 2: Choose Template */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <SlidersHorizontal size={18} />
          Step 2: Choose Template
        </h2>
        
        <TemplateSelector 
          selectedTemplate={selectedTemplate} 
          onSelectTemplate={onTemplateSelect} 
        />
      </div>
      
      {/* Step 3: Add Music */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Music size={18} />
          Step 3: Add Music
        </h2>
        
        <MusicSelector 
          selectedMusic={selectedMusic} 
          onSelectMusic={onMusicSelect} 
        />
      </div>
    </>
  );
}
