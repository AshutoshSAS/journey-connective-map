
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui/logo';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

type AuthMode = 'login' | 'register';

export function AuthForm() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    userType: 'traveler',
    interests: [] as string[],
  });
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'login') {
      handleLogin();
    } else {
      if (step === 1) {
        // Validate first step
        if (!formData.email || !formData.password || !formData.name || 
            formData.password !== formData.confirmPassword) {
          toast.error("Please complete all fields correctly");
          return;
        }
        setStep(2);
      } else if (step === 2) {
        // Handle registration
        handleRegister();
      }
    }
  };
  
  const handleLogin = async () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Login successful!");
      navigate('/profile');
      setLoading(false);
    }, 1500);
  };
  
  const handleRegister = async () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setStep(3); // Show success
      setLoading(false);
    }, 1500);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const interests = [...prev.interests];
      if (interests.includes(interest)) {
        return { ...prev, interests: interests.filter(i => i !== interest) };
      } else {
        return { ...prev, interests: [...interests, interest] };
      }
    });
  };
  
  const interests = [
    'Nature', 'City', 'Food', 'Culture', 'Adventure', 
    'Relaxation', 'Photography', 'Nightlife', 'History',
  ];
  
  const userTypes = [
    { value: 'traveler', label: 'Traveler' },
    { value: 'photographer', label: 'Photographer' },
    { value: 'localGuide', label: 'Local Guide' },
  ];
  
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        
        {mode === 'register' && step === 3 ? (
          // Success state
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10" />
              </div>
            </div>
            <h2 className="text-2xl font-bold">Registration Complete!</h2>
            <p className="text-muted-foreground">Your WanderLens account has been created successfully.</p>
            <Button 
              className="w-full" 
              onClick={() => navigate('/profile')}
            >
              Continue to your profile
            </Button>
          </div>
        ) : (
          // Login/Register forms
          <Tabs 
            defaultValue={mode} 
            onValueChange={(value) => setMode(value as AuthMode)}
            className="space-y-6"
          >
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-login">Email</Label>
                  <Input
                    id="email-login"
                    name="email"
                    placeholder="hello@example.com"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password-login">Password</Label>
                    <Button variant="link" type="button" className="px-0 h-auto text-xs">
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="password-login"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : "Log in"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 ? (
                  // Step 1: Basic information
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name-register">Full Name</Label>
                      <Input
                        id="name-register"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-register">Email</Label>
                      <Input
                        id="email-register"
                        name="email"
                        placeholder="hello@example.com"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-register">Password</Label>
                      <Input
                        id="password-register"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                  </>
                ) : (
                  // Step 2: Travel preferences
                  <>
                    <div className="space-y-2">
                      <Label>I am a...</Label>
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {userTypes.map((type) => (
                          <Button
                            key={type.value}
                            type="button"
                            variant={formData.userType === type.value ? "default" : "outline"}
                            className="justify-center"
                            onClick={() => setFormData({ ...formData, userType: type.value })}
                          >
                            {type.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Travel Interests</Label>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {interests.map((interest) => (
                          <Button
                            key={interest}
                            type="button"
                            variant={formData.interests.includes(interest) ? "default" : "outline"}
                            className="text-sm"
                            onClick={() => handleInterestToggle(interest)}
                          >
                            {interest}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                <div className="flex gap-3">
                  {step === 2 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                  )}
                  <Button 
                    type="submit" 
                    className="flex-1"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {step === 1 ? 'Next' : 'Creating account...'}
                      </>
                    ) : (
                      step === 1 ? 'Next' : 'Create account'
                    )}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </Card>
  );
}
