import React, { useState, useEffect } from 'react';
import { Palette, Moon, Sun } from 'lucide-react';

type ColorTheme = 'cyber' | 'hacker' | 'ocean' | 'nebula';
type Mode = 'light' | 'dark';

interface ThemeConfig {
  label: string;
  colors: {
    dark: { primary: string; secondary: string };
    light: { primary: string; secondary: string };
  };
}

const themes: Record<ColorTheme, ThemeConfig> = {
  cyber: { 
    label: 'Cyber',
    colors: {
      dark: { primary: '6 182 212', secondary: '217 70 239' }, // Cyan-500, Fuchsia-500
      light: { primary: '8 145 178', secondary: '192 38 211' }  // Cyan-600, Fuchsia-600
    }
  },
  hacker: { 
    label: 'Hacker',
    colors: {
      dark: { primary: '34 197 94', secondary: '168 85 247' }, // Green-500, Purple-500
      light: { primary: '22 163 74', secondary: '147 51 234' }  // Green-600, Purple-600
    }
  },
  ocean: { 
    label: 'Ocean',
    colors: {
      dark: { primary: '59 130 246', secondary: '20 184 166' }, // Blue-500, Teal-500
      light: { primary: '37 99 235', secondary: '13 148 136' }  // Blue-600, Teal-600
    }
  },
  nebula: { 
    label: 'Nebula',
    colors: {
      dark: { primary: '139 92 246', secondary: '236 72 153' }, // Violet-500, Pink-500
      light: { primary: '124 58 237', secondary: '219 39 119' }  // Violet-600, Pink-600
    }
  },
};

const ThemeController: React.FC = () => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>('cyber');
  const [mode, setMode] = useState<Mode>('dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[colorTheme];
    const colors = theme.colors[mode];

    // Apply Mode Attribute for CSS selectors
    root.setAttribute('data-mode', mode);

    // Apply Color Variables based on active mode
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);

    // Apply Surface/Text Variables
    if (mode === 'dark') {
      root.style.setProperty('--color-bg', '2 6 23');      // slate-950
      root.style.setProperty('--color-surface', '15 23 42'); // slate-900
      root.style.setProperty('--color-text-main', '248 250 252'); // slate-50
      root.style.setProperty('--color-text-muted', '148 163 184'); // slate-400
      root.classList.add('dark');
    } else {
      root.style.setProperty('--color-bg', '248 250 252'); // slate-50
      root.style.setProperty('--color-surface', '255 255 255'); // white
      root.style.setProperty('--color-text-main', '15 23 42');   // slate-900
      root.style.setProperty('--color-text-muted', '71 85 105'); // slate-600 (Darker for better contrast)
      root.classList.remove('dark');
    }

  }, [colorTheme, mode]);

  return (
    <div className="fixed top-24 right-6 z-40">
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-surface/80 border border-primary/30 rounded-full text-primary hover:bg-surface transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgb(var(--color-primary)/0.3)] hover:rotate-90 group"
          aria-label="Theme Settings"
        >
          <Palette className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        <div className={`absolute top-14 right-0 bg-surface/95 border border-primary/20 rounded-xl p-4 min-w-[200px] shadow-2xl backdrop-blur-md transition-all duration-300 origin-top-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
          
          {/* Mode Switcher */}
          <div className="flex bg-background/50 rounded-lg p-1 mb-4 border border-muted/20">
            <button
              onClick={() => setMode('light')}
              className={`flex-1 flex items-center justify-center py-2 rounded-md transition-all ${mode === 'light' ? 'bg-surface shadow-md text-primary font-bold' : 'text-muted hover:text-main'}`}
            >
              <Sun className="w-4 h-4 mr-2" />
              <span className="text-xs uppercase">Light</span>
            </button>
            <button
              onClick={() => setMode('dark')}
              className={`flex-1 flex items-center justify-center py-2 rounded-md transition-all ${mode === 'dark' ? 'bg-surface shadow-md text-primary font-bold' : 'text-muted hover:text-main'}`}
            >
              <Moon className="w-4 h-4 mr-2" />
              <span className="text-xs uppercase">Dark</span>
            </button>
          </div>

          <div className="h-px bg-muted/20 mb-4" />

          {/* Color Themes */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Color Interface</span>
            {Object.entries(themes).map(([key, value]) => {
                const isActive = colorTheme === key;
                const activeColor = value.colors[mode].primary;
                return (
                  <button
                    key={key}
                    onClick={() => setColorTheme(key as ColorTheme)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all group ${isActive ? 'bg-primary/10 text-primary font-bold' : 'text-muted hover:text-main hover:bg-background/50'}`}
                  >
                    <div 
                      className={`w-3 h-3 rounded-full shadow-[0_0_5px_currentColor] transition-transform ${isActive ? 'scale-125' : 'group-hover:scale-125'}`}
                      style={{ backgroundColor: `rgb(${activeColor})`, color: `rgb(${activeColor})` }}
                    />
                    <span className="font-mono uppercase tracking-wider">{value.label}</span>
                  </button>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeController;