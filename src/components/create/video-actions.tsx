
import React from 'react';
import { Button } from '@/components/ui/button';
import { Video, Save } from 'lucide-react';
import { toast } from "sonner";

type VideoActionsProps = {
  isCreatingVideo: boolean;
  hasPhotos: boolean;
  onCreateVideo: () => void;
  onSaveAsDraft: () => void;
};

export function VideoActions({
  isCreatingVideo,
  hasPhotos,
  onCreateVideo,
  onSaveAsDraft
}: VideoActionsProps) {
  return (
    <div className="flex flex-col space-y-3 pt-4">
      <Button 
        onClick={onCreateVideo} 
        disabled={isCreatingVideo || !hasPhotos}
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
        onClick={onSaveAsDraft}
        className="w-full"
        disabled={!hasPhotos}
      >
        <Save size={18} className="mr-2" />
        Save as Draft
      </Button>
    </div>
  );
}
