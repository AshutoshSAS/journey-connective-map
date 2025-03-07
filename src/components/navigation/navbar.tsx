
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Compass, 
  BookOpen, 
  Users, 
  Search, 
  Menu, 
  X,
  LogIn,
  User,
} from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

function NavItem({ href, label, icon, active }: NavItemProps) {
  return (
    <Link 
      to={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 group",
        active 
          ? "bg-primary/10 text-primary font-medium" 
          : "hover:bg-muted text-muted-foreground hover:text-foreground"
      )}
    >
      <span className={cn(
        "transition-colors duration-200",
        active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
      )}>
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
}

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-6",
      scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavItem 
            href="/" 
            label="Home" 
            icon={<Globe size={18} />} 
            active={location.pathname === '/'} 
          />
          <NavItem 
            href="/explore" 
            label="Explore" 
            icon={<Compass size={18} />} 
            active={location.pathname === '/explore'} 
          />
          <NavItem 
            href="/stories" 
            label="Stories" 
            icon={<BookOpen size={18} />} 
            active={location.pathname === '/stories'} 
          />
          <NavItem 
            href="/community" 
            label="Community" 
            icon={<Users size={18} />} 
            active={location.pathname === '/community'} 
          />
        </nav>
        
        {/* Search and auth buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search size={20} />
          </Button>
          <Button asChild variant="ghost">
            <Link to="/auth/login">
              <LogIn size={18} className="mr-2" />
              Log in
            </Link>
          </Button>
          <Button asChild>
            <Link to="/auth/register">
              <User size={18} className="mr-2" />
              Sign up
            </Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md transition-all duration-300 ease-in-out z-40",
        mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col p-6 space-y-4">
          <NavItem 
            href="/" 
            label="Home" 
            icon={<Globe size={20} />} 
            active={location.pathname === '/'} 
          />
          <NavItem 
            href="/explore" 
            label="Explore" 
            icon={<Compass size={20} />} 
            active={location.pathname === '/explore'} 
          />
          <NavItem 
            href="/stories" 
            label="Stories" 
            icon={<BookOpen size={20} />} 
            active={location.pathname === '/stories'} 
          />
          <NavItem 
            href="/community" 
            label="Community" 
            icon={<Users size={20} />} 
            active={location.pathname === '/community'} 
          />
          
          <div className="h-px w-full bg-border my-2"></div>
          
          <Button asChild variant="outline" className="w-full justify-start" size="lg">
            <Link to="/auth/login">
              <LogIn size={20} className="mr-2" />
              Log in
            </Link>
          </Button>
          <Button asChild className="w-full justify-start" size="lg">
            <Link to="/auth/register">
              <User size={20} className="mr-2" />
              Sign up
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
