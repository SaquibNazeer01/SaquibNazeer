import React, { useState, useEffect } from 'react';
import { Palette, Moon, Sun, Sparkles, Check } from 'lucide-react';

type ColorTheme = 'cyber' | 'hacker' | 'ocean' | 'nebula' | 'amber';
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
    label: 'Cyber Cyan',
    colors: {
      dark: { primary: '6 182 212', secondary: '217 70 239' }, // Cyan-500, Fuchsia-500
      light: { primary: '8 145 178', secondary: '192 38 211' }  // Cyan-600, Fuchsia-600
    }
  },
  hacker: { 
    label: 'Matrix Emerald',
    colors: {
      dark: { primary: '16 185 129', secondary: '168 85 247' }, // Emerald-500, Purple-500
      light: { primary: '5 150 105', secondary: '147 51 234' }  // Emerald-600, Purple-600
    }
  },
  ocean: { 
    label: 'Deep Ocean',
    colors: {
      dark: { primary: '59 130 246', secondary: '20 184 166' }, // Blue-500, Teal-500
      light: { primary: '37 99 235', secondary: '13 148 136' }  // Blue-600, Teal-600
    }
  },
  nebula: { 
    label: 'Nebula Purple',
    colors: {
      dark: { primary: '168 85 247', secondary: '236 72 153' }, // Purple-500, Pink-500
      light: { primary: '147 51 234', secondary: '219 39 119' }  // Purple-600, Pink-600
    }
  },
  amber: {
    label: 'Solar Amber',
    colors: {
      dark: { primary: '245 158 11', secondary: '239 68 68' }, // Amber-500, Red-500
      light: { primary: '217 119 6', secondary: '220 38 38' }  // Amber-600, Red-600
    }
  }
};

const ThemeController: React.FC = () => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>('cyber');
  const [mode, setMode] = useState<Mode>('dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[colorTheme] || themes.cyber;
    const colors = theme.colors[mode];

    // Apply Mode Attribute for CSS selectors
    root.setAttribute('data-mode', mode);

    // Apply Color Variables based on active mode
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);

    // Apply Surface/Text Variables
    if (mode === 'dark') {
      root.style.setProperty('--color-bg', '3 7 18');        // slate-950
      root.style.setProperty('--color-surface', '15 23 42');  // slate-900
      root.style.setProperty('--color-surface-card', '20 29 51'); // slate-850
      root.style.setProperty('--color-text-main', '248 250 252'); // slate-50
      root.style.setProperty('--color-text-muted', '148 163 184'); // slate-400
      root.classList.add('dark');
    } else {
      root.style.setProperty('--color-bg', '248 250 252');  // slate-50
      root.style.setProperty('--color-surface', '255 255 255'); // white
      root.style.setProperty('--color-surface-card', '241 245 249'); // slate-100
      root.style.setProperty('--color-text-main', '15 23 42');   // slate-900
      root.style.setProperty('--color-text-muted', '71 85 105'); // slate-600
      root.classList.remove('dark');
    }

  }, [colorTheme, mode]);

  return (
    <div className="fixed top-24 right-6 z-40">
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-surface/90 border border-primary/30 rounded-2xl text-primary hover:bg-surface transition-all duration-300 backdrop-blur-xl shadow-glass hover:scale-110 group cursor-pointer"
          aria-label="Theme Settings"
        >
          <Palette className="w-5 h-5 group-hover:rotate-45 transition-transform" />
        </button>

        <div className={`absolute top-14 right-0 bg-surface/95 border border-primary/30 rounded-3xl p-5 min-w-[240px] shadow-2xl backdrop-blur-2xl transition-all duration-300 origin-top-right ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        }`}>
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-muted/15">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Appearance
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="flex bg-background/80 rounded-xl p-1 mb-4 border border-muted/20">
            <button
              onClick={() => setMode('light')}
              className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-all text-xs font-mono font-semibold ${
                mode === 'light' 
                  ? 'bg-surface shadow-md text-primary font-bold border border-primary/20' 
                  : 'text-muted hover:text-main'
              }`}
            >
              <Sun className="w-3.5 h-3.5 mr-1.5" />
              <span>Light</span>
            </button>
            <button
              onClick={() => setMode('dark')}
              className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-all text-xs font-mono font-semibold ${
                mode === 'dark' 
                  ? 'bg-surface shadow-md text-primary font-bold border border-primary/20' 
                  : 'text-muted hover:text-main'
              }`}
            >
              <Moon className="w-3.5 h-3.5 mr-1.5" />
              <span>Dark</span>
            </button>
          </div>

          {/* Color Themes */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-mono uppercase text-muted tracking-wider mb-1">Color Palette</span>
            {Object.entries(themes).map(([key, value]) => {
              const isActive = colorTheme === key;
              const activeColor = value.colors[mode].primary;

              return (
                <button
                  key={key}
                  onClick={() => setColorTheme(key as ColorTheme)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all group ${
                    isActive 
                      ? 'bg-primary/15 text-primary font-bold border border-primary/30 shadow-glow-sm' 
                      : 'text-muted hover:text-main hover:bg-background/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div 
                      className={`w-3.5 h-3.5 rounded-full transition-transform ${isActive ? 'scale-125 ring-2 ring-primary/40' : 'group-hover:scale-110'}`}
                      style={{ backgroundColor: `rgb(${activeColor})` }}
                    />
                    <span>{value.label}</span>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-primary" />}
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