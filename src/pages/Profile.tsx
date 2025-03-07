
import React from 'react';
import { Navbar } from '@/components/navigation/navbar';
import { ProfileHeader } from '@/components/profile/profile-header';
import { StoryCard } from '@/components/stories/story-card';
import { BottomNav } from '@/components/navigation/bottom-nav';

const Profile = () => {
  // Mock user data
  const user = {
    name: "Alex Morgan",
    username: "alexmorgan",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    bio: "Travel photographer and adventure seeker. Exploring the world one snapshot at a time. Based in San Francisco, but rarely home.",
    location: "San Francisco, CA",
    website: "alexmorgan.photo",
    followersCount: 5283,
    followingCount: 492,
    storiesCount: 127,
    isCurrentUser: true,
  };

  // Mock stories data
  const stories = [
    {
      id: "1",
      title: "Sunset Sailing in Santorini",
      description: "Experiencing the breathtaking sunset views from a catamaran in the Aegean Sea. The colors of Santorini are unmatched.",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1565861187762-74f175ab9523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      authorName: user.name,
      authorAvatar: user.avatar,
      date: "May 15, 2023",
      likes: 342,
      comments: 48,
      liked: true,
    },
    {
      id: "2",
      title: "Hidden Waterfalls of Bali",
      description: "Discovered this hidden gem after a 2-hour trek through dense jungle. The journey was challenging but the reward was worth every step.",
      location: "Ubud, Bali",
      image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      authorName: user.name,
      authorAvatar: user.avatar,
      date: "April 3, 2023",
      likes: 289,
      comments: 32,
    },
    {
      id: "3",
      title: "A Week in the Swiss Alps",
      description: "Crisp mountain air, charming villages, and endless hiking trails. Switzerland exceeded all expectations.",
      location: "Zermatt, Switzerland",
      image: "https://images.unsplash.com/photo-1508437029959-28af9221a8cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      authorName: user.name,
      authorAvatar: user.avatar,
      date: "March 18, 2023",
      likes: 475,
      comments: 64,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ProfileHeader user={user} />
        
        <div className="max-w-7xl mx-auto px-4 py-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Profile;
