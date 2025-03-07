
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from '@/components/ui/globe';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Camera, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className="space-y-8 max-w-xl">
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
                A new way to explore the world
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in [animation-delay:200ms]">
                Share your journey, 
                <span className="text-primary"> inspire</span> travelers
              </h1>
              <p className="text-xl text-muted-foreground mt-4 animate-fade-in [animation-delay:400ms]">
                Connect with a global community of explorers. Share stories, discover hidden gems, and plan your next adventure together.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:600ms]">
              <Button asChild size="lg" className="group">
                <Link to="/auth/register">
                  Join WanderLens
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/explore">
                  Explore stories
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 animate-fade-in [animation-delay:800ms]">
              <div className="space-y-1">
                <p className="text-3xl font-bold">120k+</p>
                <p className="text-sm text-muted-foreground">Travelers</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold">85k+</p>
                <p className="text-sm text-muted-foreground">Stories</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold">150+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>
          
          {/* Right column: Globe and images */}
          <div className="relative perspective lg:h-[600px]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float">
              <Globe size="lg" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-[30%] left-[20%] glass-card p-3 animate-float [animation-delay:200ms] shadow-soft-xl">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Bali, Indonesia</span>
              </div>
            </div>
            
            <div className="absolute top-[15%] right-[15%] glass-card p-3 animate-float [animation-delay:400ms] shadow-soft-xl">
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Share stories</span>
              </div>
            </div>
            
            <div className="absolute bottom-[25%] right-[20%] glass-card p-3 animate-float [animation-delay:500ms] shadow-soft-xl">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Connect globally</span>
              </div>
            </div>
            
            {/* Images */}
            <div className="absolute top-[60%] left-[10%] w-36 h-48 rounded-xl overflow-hidden shadow-soft-xl rotate-6 animate-float [animation-delay:600ms]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">Alps, Switzerland</div>
              <img 
                src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute top-[20%] right-[5%] w-32 h-40 rounded-xl overflow-hidden shadow-soft-xl -rotate-3 animate-float [animation-delay:300ms]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">Kyoto, Japan</div>
              <img 
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Temple in Kyoto"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute bottom-[15%] right-[10%] w-40 h-28 rounded-xl overflow-hidden shadow-soft-xl rotate-3 animate-float [animation-delay:700ms]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">Santorini, Greece</div>
              <img 
                src="https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Santorini, Greece"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
