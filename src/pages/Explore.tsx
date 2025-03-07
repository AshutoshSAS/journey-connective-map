
import React from 'react';
import { Navbar } from '@/components/navigation/navbar';
import { BottomNav } from '@/components/navigation/bottom-nav';

const Explore = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pb-16 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Explore the World</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder content */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-muted animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 bg-muted rounded animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-muted animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 bg-muted rounded animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-muted animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 bg-muted rounded animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon: Interactive Map</h2>
            <div className="bg-card rounded-lg shadow-md p-8 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Animated Journey Maps</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Visualize your travels with animated paths, pins, and shared group maps. Coming in Phase 2!
              </p>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Explore;
