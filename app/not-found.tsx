'use client';
import { useRouter } from 'next/navigation';
import { useTheme } from './lib/hooks/useTheme';
import { alice, vastago } from './fonts';
import DxButton from '@/components/danielxie/dxButton';

export default function Custom404() {
  const router = useRouter();
  const { isDark } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${isDark ? 'bg-claude-grey' : 'bg-[#e8e6d9]'} ${alice.variable} ${vastago.variable}`}>
      <div className="text-center px-6">
        <h1 className={`text-6xl font-bold mb-4 ${isDark ? 'text-[#d1cfbf]' : 'text-gray-900'} font-alice`}>404</h1>
        <p className={`text-xl mb-8 ${isDark ? 'text-[#d1cfbf]' : 'text-gray-700'} font-vastago`}>
          Oops! The page you are looking for doesn&apos;t exist.
        </p>
        <DxButton 
          onClick={() => router.push('/')}
          bgColor={isDark ? 'bg-[#d1cfbf]' : 'bg-claude-orange'}
          textColor={isDark ? 'text-claude-grey' : 'text-white'}
          hoverColor={isDark ? 'hover:bg-[#c1bfaf]' : 'hover:bg-claude-orange/90'}
          shadow="shadow-md"
          padding="px-8 py-3"
          rounded="rounded-full"
        >
          Go Home
        </DxButton>
      </div>
    </div>
  );
}
