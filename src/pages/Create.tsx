
import React, { useState } from 'react';
import { Navbar } from '@/components/navigation/navbar';
import { BottomNav } from '@/components/navigation/bottom-nav';
import { toast } from "sonner";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

// New component imports
import { CreateHeader } from '@/components/create/create-header';
import { CreationSteps } from '@/components/create/creation-steps';
import { VideoActions } from '@/components/create/video-actions';
import { VideoPreview } from '@/components/create/video-preview';
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
  
  const handleClearPhotos = () => {
    setUploadedPhotos([]);
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
            <CreateHeader />
            
            <CreationSteps 
              uploadedPhotos={uploadedPhotos}
              selectedTemplate={selectedTemplate}
              selectedMusic={selectedMusic}
              onPhotoUpload={handlePhotoUpload}
              onRemovePhoto={handleRemovePhoto}
              onClearPhotos={handleClearPhotos}
              onTemplateSelect={handleTemplateSelect}
              onMusicSelect={handleMusicSelect}
            />
            
            <VideoActions 
              isCreatingVideo={isCreatingVideo}
              hasPhotos={uploadedPhotos.length > 0}
              onCreateVideo={handleCreateVideo}
              onSaveAsDraft={handleSaveAsDraft}
            />
            
            <VideoPreview 
              isPlaying={isPreviewPlaying}
              photos={uploadedPhotos}
              template={selectedTemplate}
              music={selectedMusic}
            />
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
