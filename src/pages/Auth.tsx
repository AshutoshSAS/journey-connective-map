
import React from 'react';
import { AuthForm } from '@/components/auth/auth-form';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Back to home link */}
      <Button 
        asChild 
        variant="ghost" 
        className="absolute top-4 left-4 gap-2 text-muted-foreground hover:text-foreground"
      >
        <Link to="/">
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </Button>
      
      <div className="w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
