
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ImagePlus, Camera } from 'lucide-react';

type PhotoUploaderProps = {
  onPhotoUpload: (photos: string[]) => void;
};

export function PhotoUploader({ onPhotoUpload }: PhotoUploaderProps) {
  const [dragging, setDragging] = useState(false);
  
  // Sample images for demo purposes
  const sampleImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg'
  ];
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    // In a real app, we would process and upload the files
    // Here we'll just use the sample images
    onPhotoUpload(sampleImages);
    
    // Reset the input
    e.target.value = '';
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };
  
  const handleDragLeave = () => {
    setDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    
    // In a real app, we would process and upload the dropped files
    // Here we'll just use the sample images
    onPhotoUpload(sampleImages);
  };
  
  const handleSampleUpload = () => {
    // Add sample photos for demo
    onPhotoUpload(sampleImages);
  };

  return (
    <div>
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragging ? 'border-primary bg-primary/5' : 'border-border'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="p-3 rounded-full bg-primary/10">
            <ImagePlus size={24} className="text-primary" />
          </div>
          <div>
            <p className="font-medium mb-1">Drag photos here or click to upload</p>
            <p className="text-sm text-muted-foreground">
              Supported formats: JPG, PNG, HEIC
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" onClick={() => document.getElementById('photo-upload')?.click()}>
              <ImagePlus size={16} className="mr-2" /> Select from Device
            </Button>
            <Button variant="outline" onClick={handleSampleUpload}>
              <Camera size={16} className="mr-2" /> Use Sample Photos
            </Button>
          </div>
          <input 
            type="file" 
            id="photo-upload" 
            className="hidden" 
            accept="image/*" 
            multiple 
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}
