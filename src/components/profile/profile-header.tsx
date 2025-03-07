
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Map, Camera, Edit, Settings, Users, Bookmark } from 'lucide-react';
import { Globe as GlobeComponent } from '@/components/ui/globe';
import { cn } from '@/lib/utils';

interface ProfileHeaderProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    cover: string;
    bio: string;
    location: string;
    website?: string;
    followersCount: number;
    followingCount: number;
    storiesCount: number;
    isCurrentUser?: boolean;
    isFollowing?: boolean;
  };
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="w-full">
      {/* Cover Photo */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img 
          src={user.cover} 
          alt={`${user.name}'s cover`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        
        {user.isCurrentUser && (
          <Button 
            size="icon" 
            variant="secondary" 
            className="absolute top-4 right-4 bg-white/80 hover:bg-white/100"
          >
            <Edit className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {/* Profile Info */}
      <div className="relative px-4 md:px-8 pb-4 -mt-24">
        <div className="bg-card rounded-xl shadow-soft-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
              {/* Avatar */}
              <div className="relative -mt-20 md:-mt-24">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 border-card shadow-md">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {user.isCurrentUser && (
                  <Button 
                    size="icon" 
                    className="absolute bottom-2 right-2 rounded-full h-8 w-8"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              {/* User Info */}
              <div className="flex-1 space-y-3">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
                  <p className="text-muted-foreground">@{user.username}</p>
                </div>
                
                <p className="max-w-2xl">{user.bio}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                  {user.location && (
                    <div className="flex items-center gap-1">
                      <Map className="h-4 w-4" />
                      <span>{user.location}</span>
                    </div>
                  )}
                  
                  {user.website && (
                    <a 
                      href={user.website.startsWith('http') ? user.website : `https://${user.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline flex items-center gap-1"
                    >
                      <Globe className="h-4 w-4" />
                      <span>{user.website.replace(/^https?:\/\/(www\.)?/, '')}</span>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="w-full md:w-auto flex md:flex-col gap-2 mt-4 md:mt-0">
                {user.isCurrentUser ? (
                  <>
                    <Button className="flex-1 md:flex-auto gap-1">
                      <Edit className="h-4 w-4" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      className="flex-1 md:flex-auto"
                      variant={user.isFollowing ? "outline" : "default"}
                    >
                      {user.isFollowing ? "Following" : "Follow"}
                    </Button>
                    <Button variant="outline" className="flex-1 md:flex-auto">
                      Message
                    </Button>
                  </>
                )}
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex gap-6 sm:gap-10 mt-6 border-t pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold">{user.storiesCount}</p>
                <p className="text-sm text-muted-foreground">Stories</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{user.followersCount}</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{user.followingCount}</p>
                <p className="text-sm text-muted-foreground">Following</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">52</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="stories">
            <div className="border-t">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent px-6">
                <TabsTrigger 
                  value="stories"
                  className={cn(
                    "rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
                  )}
                >
                  <Camera className="h-4 w-4" />
                  Stories
                </TabsTrigger>
                <TabsTrigger 
                  value="map"
                  className={cn(
                    "rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
                  )}
                >
                  <Map className="h-4 w-4" />
                  Map
                </TabsTrigger>
                <TabsTrigger 
                  value="saved"
                  className={cn(
                    "rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
                  )}
                >
                  <Bookmark className="h-4 w-4" />
                  Saved
                </TabsTrigger>
                <TabsTrigger 
                  value="community"
                  className={cn(
                    "rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
                  )}
                >
                  <Users className="h-4 w-4" />
                  Community
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="stories" className="p-6">
              <div className="flex items-center justify-center py-10">
                <div className="text-center max-w-md">
                  <Camera className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No stories yet</h3>
                  <p className="text-muted-foreground mb-6">
                    {user.isCurrentUser 
                      ? "Share your first travel story with the WanderLens community!"
                      : `${user.name} hasn't shared any stories yet.`}
                  </p>
                  {user.isCurrentUser && (
                    <Button>
                      <Camera className="h-4 w-4 mr-2" />
                      Create a Story
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="map" className="pt-10 pb-16 px-6">
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="relative">
                  <GlobeComponent size="xl" />
                  
                  {/* Pin examples on the globe */}
                  <div className="absolute top-[20%] left-[55%] w-2 h-2 bg-primary rounded-full shadow-lg animate-pulse-soft"></div>
                  <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-primary rounded-full shadow-lg animate-pulse-soft"></div>
                  <div className="absolute top-[70%] left-[60%] w-2 h-2 bg-primary rounded-full shadow-lg animate-pulse-soft"></div>
                </div>
                
                <div className="text-center max-w-lg">
                  <h3 className="text-xl font-semibold mb-2">Interactive Travel Map</h3>
                  <p className="text-muted-foreground mb-6">
                    Visualize your adventures around the world with pins, routes, and photos attached to each location.
                  </p>
                  <Button>Explore Full Map</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="saved">
              <div className="flex items-center justify-center py-12">
                <div className="text-center max-w-md">
                  <Bookmark className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Your saved collection</h3>
                  <p className="text-muted-foreground mb-6">
                    Save stories, destinations, and travel tips to access them later.
                  </p>
                  <Button variant="outline">
                    Browse Stories
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="flex items-center justify-center py-12">
                <div className="text-center max-w-md">
                  <Users className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Community Connections</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with fellow travelers, join groups, and collaborate on trips.
                  </p>
                  <Button variant="outline">
                    Find Travelers
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
