
import React from 'react';
import { Navbar } from '@/components/navigation/navbar';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { CallToAction } from '@/components/landing/cta';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <footer className="py-10 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">WanderLens</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About Us</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Press</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Guidelines</a></li>
                <li><a href="#" className="hover:text-foreground">Safety Center</a></li>
                <li><a href="#" className="hover:text-foreground">Groups</a></li>
                <li><a href="#" className="hover:text-foreground">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Travel Stories</a></li>
                <li><a href="#" className="hover:text-foreground">Auto Video Maker</a></li>
                <li><a href="#" className="hover:text-foreground">Interactive Maps</a></li>
                <li><a href="#" className="hover:text-foreground">Trip Planning</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Cookies</a></li>
                <li><a href="#" className="hover:text-foreground">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-10 pt-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} WanderLens. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
