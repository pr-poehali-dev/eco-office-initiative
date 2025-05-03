
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  strokeWidth?: number;
  fallback?: string;
  className?: string;
}

const Icon = ({ 
  name, 
  size = 24, 
  strokeWidth = 2, 
  fallback = "CircleAlert", 
  className,
  ...props 
}: IconProps) => {
  const IconComponent = (LucideIcons as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[name] || 
                        (LucideIcons as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found and fallback "${fallback}" also not found.`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={cn("", className)}
      {...props}
    />
  );
};

export default Icon;
