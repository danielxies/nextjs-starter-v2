'use client'

import { useTheme } from './lib/hooks/useTheme';
import { alice, vastago } from './fonts';

export default function Loading() {
  const { isDark } = useTheme();
  
  return (
    <div className={`flex items-center justify-center min-h-screen ${isDark ? 'bg-claude-grey' : 'bg-[#e8e6d9]'} ${alice.variable} ${vastago.variable}`}>
      <div className="flex flex-col items-center">
        <div className="flex gap-2 mb-4">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className={`w-3 h-3 rounded-full ${isDark ? 'bg-[#d1cfbf]' : 'bg-claude-orange'} animate-bounce`}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <p className={`text-lg font-vastago ${isDark ? 'text-[#d1cfbf]' : 'text-gray-800'} text-claude-orange`}>
          Loading...
        </p>
      </div>
    </div>
  );
} 