import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  const { ref, isVisible } = useScrollReveal();

  let translateClass = 'translate-y-10';
  if (direction === 'down') translateClass = '-translate-y-10';
  if (direction === 'left') translateClass = 'translate-x-10';
  if (direction === 'right') translateClass = '-translate-x-10';
  if (direction === 'none') translateClass = 'translate-y-0 translate-x-0';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translateClass}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};