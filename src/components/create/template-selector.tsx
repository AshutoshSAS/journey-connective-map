
import React from 'react';
import { Button } from '@/components/ui/button';
import { Route, Building, Mountain } from 'lucide-react';
import { cn } from '@/lib/utils';

type TemplateSelectorProps = {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
};

export function TemplateSelector({ selectedTemplate, onSelectTemplate }: TemplateSelectorProps) {
  const templates = [
    {
      id: 'road-trip',
      name: 'Road Trip',
      description: 'Smooth transitions with map routes between destinations',
      icon: <Route size={20} />,
    },
    {
      id: 'city-explorer',
      name: 'City Explorer',
      description: 'Dynamic urban style with quick cuts and overlays',
      icon: <Building size={20} />,
    },
    {
      id: 'nature-escape',
      name: 'Nature Escape',
      description: 'Slow fades with ambient scenes and natural transitions',
      icon: <Mountain size={20} />,
    },
  ];

  return (
    <div className="space-y-3">
      {templates.map((template) => (
        <div 
          key={template.id}
          className={cn(
            "border rounded-lg p-4 transition-all cursor-pointer",
            selectedTemplate === template.id 
              ? "border-primary bg-primary/5 ring-1 ring-primary" 
              : "hover:border-primary/50"
          )}
          onClick={() => onSelectTemplate(template.id)}
        >
          <div className="flex items-center space-x-3">
            <div className={cn(
              "p-2 rounded-full",
              selectedTemplate === template.id 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted"
            )}>
              {template.icon}
            </div>
            <div>
              <h3 className="font-medium">{template.name}</h3>
              <p className="text-sm text-muted-foreground">{template.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
