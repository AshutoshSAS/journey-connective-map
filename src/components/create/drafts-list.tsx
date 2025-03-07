
import React from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Video, Clock } from 'lucide-react';
import { toast } from "sonner";

export function DraftsList() {
  // Mock data for drafts
  const mockDrafts = [
    {
      id: 'draft-1',
      title: 'Summer in Barcelona',
      date: 'May 4, 2025',
      photoCount: 7,
      template: 'city-explorer',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 'draft-2',
      title: 'Thailand Adventures',
      date: 'April 22, 2025',
      photoCount: 12,
      template: 'nature-escape',
      thumbnail: '/placeholder.svg'
    }
  ];
  
  const handleDeleteDraft = (draftId: string) => {
    toast("Draft deleted", {
      description: "Your draft has been removed"
    });
  };
  
  const handleEditDraft = (draftId: string) => {
    toast("Opening draft", {
      description: "Loading your draft..."
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Your Drafts</h2>
      
      {mockDrafts.length === 0 ? (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No Drafts Yet</h3>
          <p className="text-muted-foreground">
            When you save a story as draft, it will appear here
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {mockDrafts.map((draft) => (
            <div key={draft.id} className="border rounded-lg overflow-hidden">
              <div className="flex items-center">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img 
                    src={draft.thumbnail} 
                    alt={draft.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Video size={20} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1 p-4">
                  <h3 className="font-medium">{draft.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground">
                    <p>Started {draft.date}</p>
                    <span className="hidden sm:inline mx-2">•</span>
                    <p>{draft.photoCount} photos</p>
                  </div>
                </div>
                
                <div className="pr-4 flex flex-col sm:flex-row gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEditDraft(draft.id)}
                  >
                    <Edit size={16} className="mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleDeleteDraft(draft.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
