
import React, { useState } from 'react';
import { Navbar } from '@/components/navigation/navbar';
import { BottomNav } from '@/components/navigation/bottom-nav';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  Video, 
  Music, 
  ImagePlus, 
  Trash2, 
  Save, 
  Undo, 
  Play,
  PauseCircle,
  Clock,
  Route,
  Buildings,
  Mountain,
  SlidersHorizontal
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import { VideoCreator } from '@/components/create/video-creator';
import { MusicSelector } from '@/components/create/music-selector';
import { TemplateSelector } from '@/components/create/template-selector';
import { PhotoUploader } from '@/components/create/photo-uploader';
import { DraftsList } from '@/components/create/drafts-list';

const Create = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [selectedTemplate, setSelectedTemplate] = useState("road-trip");
  const [selectedMusic, setSelectedMusic] = useState("");
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [isCreatingVideo, setIsCreatingVideo] = useState(false);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  
  const handlePhotoUpload = (photos: string[]) => {
    setUploadedPhotos([...uploadedPhotos, ...photos]);
    toast("Photos uploaded successfully", {
      description: `${photos.length} photos added to your story`
    });
  };
  
  const handleRemovePhoto = (index: number) => {
    const newPhotos = [...uploadedPhotos];
    newPhotos.splice(index, 1);
    setUploadedPhotos(newPhotos);
  };
  
  const handleMusicSelect = (musicId: string) => {
    setSelectedMusic(musicId);
    toast("Music selected", {
      description: "Music will be added to your story"
    });
  };
  
  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    toast("Template applied", {
      description: `${templateId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} template selected`
    });
  };
  
  const handleCreateVideo = () => {
    if (uploadedPhotos.length === 0) {
      toast("No photos selected", {
        description: "Please upload at least one photo to create a story"
      });
      return;
    }
    
    setIsCreatingVideo(true);
    
    // Simulate video creation process
    setTimeout(() => {
      setIsCreatingVideo(false);
      setIsPreviewPlaying(true);
      toast("Video created!", {
        description: "Your 15-second story is ready to view and share"
      });
    }, 3000);
  };
  
  const handleSaveAsDraft = () => {
    toast("Draft saved", {
      description: "Your story has been saved as a draft"
    });
  };

  return (
    <div className="min-h-screen pb-16">
      <Navbar />
      <main className="pt-20">
        <Tabs defaultValue="create" onValueChange={setActiveTab} className="w-full">
          <div className="px-4 border-b sticky top-[72px] bg-background/95 backdrop-blur-sm z-10">
            <TabsList className="w-full mb-2">
              <TabsTrigger value="create" className="flex-1">Create Story</TabsTrigger>
              <TabsTrigger value="drafts" className="flex-1">Drafts</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="create" className="px-4 py-6 space-y-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">Auto Video Maker 2.0</h1>
              <p className="text-muted-foreground">Create a 15-second travel story with just a few clicks</p>
            </div>
            
            {/* Step 1: Upload Photos */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <ImagePlus size={18} />
                Step 1: Add Photos
              </h2>
              
              <PhotoUploader onPhotoUpload={handlePhotoUpload} />
              
              {uploadedPhotos.length > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Your Photos ({uploadedPhotos.length})</h3>
                    <Button variant="ghost" size="sm" className="text-destructive" onClick={() => setUploadedPhotos([])}>
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
                          onClick={() => handleRemovePhoto(index)}
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
                onSelectTemplate={handleTemplateSelect} 
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
                onSelectMusic={handleMusicSelect} 
              />
            </div>
            
            {/* Create and Save buttons */}
            <div className="flex flex-col space-y-3 pt-4">
              <Button 
                onClick={handleCreateVideo} 
                disabled={isCreatingVideo || uploadedPhotos.length === 0}
                className="w-full"
                size="lg"
              >
                {isCreatingVideo ? (
                  <>
                    <span className="mr-2 animate-spin">⏳</span>
                    Creating Your Story...
                  </>
                ) : (
                  <>
                    <Video size={18} className="mr-2" />
                    Create My Story
                  </>
                )}
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleSaveAsDraft}
                className="w-full"
                disabled={uploadedPhotos.length === 0}
              >
                <Save size={18} className="mr-2" />
                Save as Draft
              </Button>
            </div>
            
            {/* Video Preview */}
            {isPreviewPlaying && (
              <div className="mt-8 space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Play size={18} />
                  Preview
                </h2>
                
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <VideoCreator 
                      photos={uploadedPhotos} 
                      template={selectedTemplate}
                      music={selectedMusic}
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
            )}
          </TabsContent>
          
          <TabsContent value="drafts" className="px-4 py-6">
            <DraftsList />
          </TabsContent>
        </Tabs>
      </main>
      <BottomNav />
    </div>
  );
};

export default Create;
