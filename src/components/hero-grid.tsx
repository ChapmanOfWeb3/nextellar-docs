import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import NavigationBar from './navigation';

export default function HeroGrid() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen relative w-full bg-white dark:bg-black transition-colors duration-300 px-4 sm:px-4 md:px-4 lg:px-0 py-10 md:py-10 lg:py-6">
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      <div className="w-full h-[66px] max-h-[66px] lg:h-[105px] lg:max-h-[105px]">
        <div className="fixed inset-x-0 top-6 z-40">
          <div className="w-full h-[66px] lg:h-[105px] flex items-stretch justify-center lg:justify-between lg:gap-7 px-4 sm:px-4 md:px-4 lg:px-0 bg-white dark:bg-black">
            <div className="py-6 hidden lg:block w-56 min-w-56 border border-[#00000099] bg-white dark:bg-black dark:border-[#FFFFFF99] transition-colors duration-300" />
            <NavigationBar />
            <div className="py-6 hidden lg:block w-56 min-w-56 border border-[#00000099] bg-white dark:bg-black dark:border-[#FFFFFF99] transition-colors duration-300" />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="w-1/4 h-full ">
          <div
            className="w-40 h-40 
         bg-[repeating-linear-gradient(135deg,_#9ca3af_0,_#9ca3af_1px,_transparent_1px,_transparent_10px)]"
          ></div>

          <div className="w-80 h-80 border border-[#00000080] bg-white relative">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white dark:bg-black"></div>
          </div>
        </div>
        <div className="w-1/2 h-full"></div>
        <div className="w-1/4 h-full"></div>
      </div>
    </div>
  );
}
