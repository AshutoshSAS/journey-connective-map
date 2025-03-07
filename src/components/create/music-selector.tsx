
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, PauseCircle, Music, Waves, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';

type MusicSelectorProps = {
  selectedMusic: string;
  onSelectMusic: (musicId: string) => void;
};

export function MusicSelector({ selectedMusic, onSelectMusic }: MusicSelectorProps) {
  const [playingTrack, setPlayingTrack] = React.useState<string | null>(null);
  
  const musicTracks = [
    {
      id: 'chill',
      name: 'Beach Sunset',
      duration: '0:15',
      category: 'Chill',
      icon: <Waves size={18} />,
    },
    {
      id: 'adventure',
      name: 'Mountain Expedition',
      duration: '0:15',
      category: 'Adventure',
      icon: <Headphones size={18} />,
    },
    {
      id: 'cultural',
      name: 'Local Market',
      duration: '0:15',
      category: 'Cultural',
      icon: <Music size={18} />,
    },
  ];
  
  const handlePlayPause = (trackId: string) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
    }
  };

  return (
    <div className="space-y-3">
      {musicTracks.map((track) => (
        <div 
          key={track.id}
          className={cn(
            "border rounded-lg p-4 transition-all cursor-pointer",
            selectedMusic === track.id 
              ? "border-primary bg-primary/5 ring-1 ring-primary" 
              : "hover:border-primary/50"
          )}
          onClick={() => onSelectMusic(track.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={cn(
                "p-2 rounded-full",
                selectedMusic === track.id ? "bg-primary text-primary-foreground" : "bg-muted"
              )}>
                {track.icon}
              </div>
              <div>
                <h3 className="font-medium">{track.name}</h3>
                <p className="text-sm text-muted-foreground">{track.category} • {track.duration}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPause(track.id);
              }}
            >
              {playingTrack === track.id ? <PauseCircle size={20} /> : <Play size={20} />}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
