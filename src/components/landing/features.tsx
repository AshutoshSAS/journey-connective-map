
import React from 'react';
import { Camera, Map, Video, Globe, Users, Compass } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

function FeatureCard({ icon, title, description, color, delay = 0 }: FeatureCardProps) {
  return (
    <div 
      className="relative group rounded-2xl bg-card p-6 transition-all duration-300 hover:shadow-soft-xl animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 rounded-2xl ${color} opacity-5 transition-opacity duration-300 group-hover:opacity-10`}></div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: <Camera className="h-6 w-6 text-primary" />,
      title: "Create & Share Stories",
      description: "Craft beautiful photo stories with captions, locations, and emotions to share your unique travel experiences.",
      color: "bg-primary",
      delay: 0,
    },
    {
      icon: <Map className="h-6 w-6 text-terracotta-500" />,
      title: "Interactive Maps",
      description: "Plot your adventures on interactive maps with routes, photos, and recommendations for fellow travelers.",
      color: "bg-terracotta-500",
      delay: 100,
    },
    {
      icon: <Video className="h-6 w-6 text-accent" />,
      title: "Auto Video Creator",
      description: "Turn your photos into stunning videos with AI-powered editing, music, and transitions.",
      color: "bg-accent",
      delay: 200,
    },
    {
      icon: <Globe className="h-6 w-6 text-ocean-500" />,
      title: "Destination Discovery",
      description: "Find hidden gems and popular spots through curated recommendations and real traveler insights.",
      color: "bg-ocean-500",
      delay: 300,
    },
    {
      icon: <Users className="h-6 w-6 text-sage-600" />,
      title: "Travel Communities",
      description: "Connect with like-minded travelers, join groups, and plan future adventures together.",
      color: "bg-sage-600",
      delay: 400,
    },
    {
      icon: <Compass className="h-6 w-6 text-secondary" />,
      title: "Collaborative Planning",
      description: "Create shared itineraries, exchange tips, and coordinate travel plans with friends and community.",
      color: "bg-secondary",
      delay: 500,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Share your adventure, <span className="text-primary">your way</span></h2>
          <p className="text-lg text-muted-foreground">
            WanderLens combines the best of social media and travel tools to create a community for explorers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
