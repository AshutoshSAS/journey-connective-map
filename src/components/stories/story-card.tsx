
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Heart, MessageCircle, Share2, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface StoryCardProps {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  likes: number;
  comments: number;
  liked?: boolean;
  className?: string;
}

export function StoryCard({
  id,
  title,
  description,
  location,
  image,
  authorName,
  authorAvatar,
  date,
  likes,
  comments,
  liked = false,
  className,
}: StoryCardProps) {
  const [isLiked, setIsLiked] = React.useState(liked);
  const [likeCount, setLikeCount] = React.useState(likes);
  
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    
    // Show appropriate toast
    if (!isLiked) {
      toast("Story added to your liked collection");
    }
  };
  
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast("Share link copied to clipboard");
  };
  
  return (
    <Link to={`/stories/${id}`}>
      <Card 
        className={cn(
          "overflow-hidden transition-all duration-300 hover:shadow-soft-xl h-full group",
          className
        )}
      >
        <div className="relative aspect-[4/3] img-hover-zoom">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Location tag */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium flex items-center gap-1 shadow-sm">
            <MapPin className="h-3 w-3 text-primary" />
            {location}
          </div>
          
          {/* Title overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-1 text-balance line-clamp-2">{title}</h3>
          </div>
        </div>
        
        <div className="p-4 space-y-4">
          {/* Author info */}
          <div className="flex items-center gap-3">
            <img 
              src={authorAvatar} 
              alt={authorName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{authorName}</p>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground line-clamp-2">{description}</p>
          
          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className={cn(
                  "px-2 gap-1",
                  isLiked && "text-primary hover:text-primary/90"
                )} 
                onClick={handleLike}
              >
                <Heart className={cn(
                  "h-4 w-4",
                  isLiked && "fill-current"
                )} />
                {likeCount}
              </Button>
              
              <Button variant="ghost" size="sm" className="px-2 gap-1">
                <MessageCircle className="h-4 w-4" />
                {comments}
              </Button>
              
              <Button variant="ghost" size="sm" className="px-2" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            
            <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
              Read more <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
