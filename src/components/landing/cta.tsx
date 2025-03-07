
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary)/0.1),transparent_70%)]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative">
        <div className="glass-card p-10 md:p-16 text-center animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Begin your journey with{' '}
            <span className="text-primary">WanderLens</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of travelers sharing their experiences, discovering new destinations, 
            and connecting with a global community of explorers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/auth/register">
                Create your account
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/explore">
                Explore stories first
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
