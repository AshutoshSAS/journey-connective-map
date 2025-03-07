
import React from 'react';
import { Navbar } from '@/components/navigation/navbar';
import { BottomNav } from '@/components/navigation/bottom-nav';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, MessageSquare, Map } from 'lucide-react';

const Squads = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pb-16 pt-20">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold">Travel Squads</h1>
            <Button>
              <UserPlus size={18} className="mr-2" />
              Create New Squad
            </Button>
          </div>
          
          <div className="bg-card rounded-xl shadow-md p-6 text-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Connect with Fellow Travelers</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Create small groups (up to 10 people) for trip planning or shared interests.
              Chat with pinned locations and photo sharing.
            </p>
            <Button className="mx-2">Browse Squads</Button>
            <Button variant="outline" className="mx-2">Learn More</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MessageSquare size={20} className="mr-2 text-primary" />
                <h3 className="text-lg font-medium">Squad Chat</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Share photos, videos, and plan your adventures together with your travel squad.
              </p>
              <div className="h-32 bg-card/50 rounded-lg flex items-center justify-center text-muted-foreground">
                Coming Soon
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Map size={20} className="mr-2 text-primary" />
                <h3 className="text-lg font-medium">Shared Group Maps</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Collaborate on trip maps with friends. Add notes like "Best street food here!"
              </p>
              <div className="h-32 bg-card/50 rounded-lg flex items-center justify-center text-muted-foreground">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Squads;
