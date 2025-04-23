'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './lib/hooks/useTheme';
import { alice, vastago } from './fonts';
import { Sun, Moon, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import DxButton from '@/components/danielxie/dxButton';

export default function HomePage() {
  const { isDark, setIsDark } = useTheme();
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  // FAQ items
  const faqItems = [
    {
      question: "What is this template for?",
      answer: "This is a clean Next.js starter template with beautiful styling, custom fonts, and a dark/light mode toggle. It&apos;s designed to give you a head start on your next web project."
    },
    {
      question: "How do I customize this template?",
      answer: "You can easily customize colors in tailwind.config.ts, modify the components, and add your own pages. The template uses Tailwind CSS for styling and includes custom fonts already set up."
    },
    {
      question: "What fonts are included?",
      answer: "This template includes Alice, Vastago, VastagoThin, and Cooper fonts. You can see them being used throughout the template and can easily modify or add more in the fonts.ts file."
    },
    {
      question: "Is this template responsive?",
      answer: "Yes! This template is fully responsive and works great on mobile, tablet, and desktop devices."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className={`relative min-h-screen ${isDark ? 'bg-claude-grey' : 'bg-[#e8e6d9]'} ${alice.variable} ${vastago.variable}`}>
      {/* Header/Navigation */}
      <nav className={`fixed top-0 w-full px-6 py-4 z-50 ${isDark ? 'bg-claude-grey/95' : 'bg-[#e8e6d9]/95'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className={`${vastago.className} ${isDark ? 'text-claude-orange' : 'text-claude-orange'} text-xl font-semibold`}>Next.js Starter</span>
          </div>

          {/* Right Side - Theme Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg ${isDark ? 'text-claude-orange' : 'text-claude-orange'} transition-colors`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? 'text-[#d1cfbf]' : 'text-gray-900'} leading-tight mb-6 font-alice`}>
            Beautiful <span className={`italic ${isDark ? 'text-claude-orange' : 'text-claude-orange'} relative inline-block`}>
              Next.js
              <div className={`absolute -bottom-1 left-0 w-full h-0.5 ${isDark ? 'bg-claude-orange' : 'bg-claude-orange'}`}></div>
            </span> Starter.
            <br />
            Ready for <span className={`relative ${isDark ? 'text-claude-orange' : 'text-claude-orange'} inline-block`}>
              your project
              <div className={`absolute -bottom-1 left-0 w-full h-0.5 ${isDark ? 'bg-claude-orange' : 'bg-claude-orange'}`}></div>
            </span>.
          </h1>
          
          <p className={`text-xl ${isDark ? 'text-[#d1cfbf]' : 'text-gray-700'} mb-10 max-w-3xl mx-auto font-vastago text-claude-orange`}>
            A clean, beautiful starting point for your next web project with custom fonts, dark mode, 
            and beautiful styling. Jump right into building what matters.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-24">
            <DxButton 
              bgColor={isDark ? 'bg-[#d1cfbf]' : 'bg-claude-orange'}
              textColor={isDark ? 'text-[#1a1a1a]' : 'text-white'}
              hoverColor={isDark ? 'hover:bg-[#c1bfaf]' : 'hover:bg-claude-orange/90'}
              shadow="shadow-md"
              padding="px-8 py-3"
              rounded="rounded-full"
            >
              Get Started
            </DxButton>
          </div>
          
          {/* Placeholder for demo section */}
          <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-white'} rounded-xl shadow-lg overflow-hidden p-4 mb-24`}>
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Your content here</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mt-20 px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? 'text-[#d1cfbf]' : 'text-gray-900'} leading-tight mb-8 font-alice`}>
              Built with<br/>
              <span className={`relative inline-block ${isDark ? 'text-claude-orange/90' : 'text-claude-orange'}`}>
                modern tools
                <div className={`absolute -bottom-1 left-0 w-full h-0.5 ${isDark ? 'bg-claude-orange/90' : 'bg-claude-orange'}`}></div>
              </span> you&apos;ll love.
            </h2>
            
            <p className={`text-xl ${isDark ? 'text-[#d1cfbf]' : 'text-gray-700'} mb-12 max-w-3xl mx-auto font-vastago text-claude-orange`}>
              Leveraging Next.js, Tailwind CSS, and TypeScript to provide a solid foundation for your project.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {/* Card 1 */}
            <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-white'} rounded-xl shadow-md p-6`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#d1cfbf]' : 'text-gray-900'} font-alice`}>Dark Mode</h3>
              <p className={`${isDark ? 'text-[#d1cfbf]' : 'text-gray-700'} font-vastago text-claude-orange`}>
                Toggle between light and dark themes with a beautiful color scheme.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-white'} rounded-xl shadow-md p-6`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#d1cfbf]' : 'text-gray-900'} font-alice`}>Custom Fonts</h3>
              <p className={`${isDark ? 'text-[#d1cfbf]' : 'text-gray-700'} font-vastago text-claude-orange`}>
                Beautiful typography with premium fonts already set up and ready to use.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-white'} rounded-xl shadow-md p-6`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#d1cfbf]' : 'text-gray-900'} font-alice`}>Tailwind CSS</h3>
              <p className={`${isDark ? 'text-[#d1cfbf]' : 'text-gray-700'} font-vastago text-claude-orange`}>
                Utility-first CSS framework for rapidly building custom designs.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto my-32 px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#d1cfbf]' : 'text-gray-900'} leading-tight mb-8 font-alice`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-xl ${isDark ? 'text-[#d1cfbf]' : 'text-gray-700'} mb-12 max-w-3xl mx-auto font-vastago text-claude-orange`}>
              Everything you need to know about this starter template.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`mb-6 ${isDark ? 'border-b border-gray-800' : 'border-b border-gray-200'} pb-6`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className={`flex items-center justify-between w-full text-left ${isDark ? 'text-[#d1cfbf]' : 'text-gray-900'} focus:outline-none`}
                >
                  <span className="text-lg font-medium font-vastago text-claude-orange">{item.question}</span>
                  <span className="ml-2">
                    {openFaqIndex === index ? 
                      <Minus className={`w-5 h-5 ${isDark ? 'text-claude-orange' : 'text-claude-orange'}`} /> : 
                      <Plus className={`w-5 h-5 ${isDark ? 'text-claude-orange' : 'text-claude-orange'}`} />
                    }
                  </span>
                </button>
                
                {openFaqIndex === index && (
                  <div className={`mt-3 ${isDark ? 'text-[#d1cfbf]/80' : 'text-gray-700'} text-base font-vastago text-claude-orange`}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-claude-grey text-[#d1cfbf]/70' : 'bg-[#e8e6d9] text-gray-700'} py-12`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm font-vastago text-claude-orange">
              &copy; {new Date().getFullYear()} Next.js Starter Template. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}