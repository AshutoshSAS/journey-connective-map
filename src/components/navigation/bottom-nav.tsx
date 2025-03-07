
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Map, PlusSquare, Users, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    {
      href: '/',
      label: 'Home',
      icon: <Home size={20} />,
    },
    {
      href: '/explore',
      label: 'Explore',
      icon: <Map size={20} />,
    },
    {
      href: '/create',
      label: 'Create',
      icon: <PlusSquare size={24} />,
    },
    {
      href: '/squads',
      label: 'Squads',
      icon: <Users size={20} />,
    },
    {
      href: '/profile/me',
      label: 'Profile',
      icon: <User size={20} />,
    },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t z-40">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href || 
            (item.href !== '/' && location.pathname.startsWith(item.href));
            
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex flex-col items-center py-2 px-3 text-xs",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className={cn(
                "transition-colors",
                item.href === '/create' && "bg-primary text-primary-foreground p-1 rounded-lg mb-1"
              )}>
                {item.icon}
              </span>
              <span className="mt-1">{item.label}</span>
              {isActive && (
                <span className="absolute bottom-0 h-0.5 w-5 bg-primary rounded-t-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
