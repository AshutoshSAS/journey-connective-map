
import React from 'react';
import { Navbar } from '@/components/navigation/navbar';
import { BottomNav } from '@/components/navigation/bottom-nav';
import { Button } from '@/components/ui/button';
import { Camera, Video, Music } from 'lucide-react';

const Create = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pb-16 pt-20">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Create Your Story</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Photo Upload Section */}
            <div className="bg-card rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera size={24} className="text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Upload Photos</h2>
              <p className="text-muted-foreground mb-6">
                Share your travel moments with beautiful filters and organization
              </p>
              <Button className="w-full">
                Select Photos
              </Button>
            </div>
            
            {/* Video Story Section */}
            <div className="bg-card rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video size={24} className="text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Auto Video Maker</h2>
              <p className="text-muted-foreground mb-6">
                Transform your photos into a captivating 15-second story with music
              </p>
              <Button className="w-full" variant="outline">
                Create Video
              </Button>
            </div>
          </div>
          
          <div className="mt-12 bg-muted/30 rounded-xl p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Music size={20} className="mr-2" />
              Coming Soon: Travel Vibes Music Library
            </h2>
            <p className="text-muted-foreground">
              Choose from our curated music library to match your travel mood - chill, adventure, or cultural vibes.
            </p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Create;
