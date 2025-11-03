import React, { useState } from 'react';
import { Palette, Copy, Check } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ColorPalette: React.FC = () => {
  const { primaryColor, setPrimaryColor } = useTheme();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const generateHarmonousColors = (baseColor: string) => {
    // Convertir hex en HSL pour les variations
    const hexToHsl = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }

      return [h * 360, s * 100, l * 100];
    };

    const hslToHex = (h: number, s: number, l: number) => {
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
      };
      return `#${f(0)}${f(8)}${f(4)}`;
    };

    const [h, s, l] = hexToHsl(baseColor);

    return {
      primary: baseColor,
      secondary: hslToHex((h + 60) % 360, s * 0.8, l),
      accent: hslToHex((h + 180) % 360, s * 0.9, l * 0.9),
      success: hslToHex(120, 60, 70),
      warning: hslToHex(35, 80, 75),
      error: hslToHex(0, 70, 70),
      light: hslToHex(h, s * 0.3, 95),
      dark: hslToHex(h, s * 0.8, 25)
    };
  };

  const colorPalette = generateHarmonousColors(primaryColor);

  const copyColor = async (color: string, name: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(name);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('Failed to copy color:', err);
    }
  };

  const predefinedColors = [
    '#f8bbd9', // baby pink
    '#e6b3ff', // lavande
    '#b3e5fc', // bleu ciel
    '#c8e6c9', // vert menthe
    '#ffe0b3', // pêche
    '#ffcdd2'  // rose corail
  ];

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 dark:border-rose-800/50">
      <div className="flex items-center space-x-2 mb-6">
        <Palette className="w-5 h-5 text-rose-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Générateur de Palette Dynamique</h3>
      </div>

      <div className="space-y-6">
        {/* Color Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Couleur principale
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-12 h-12 rounded-lg border-2 border-rose-200 dark:border-rose-700 cursor-pointer"
            />
            <input
              type="text"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg border border-rose-200 dark:border-rose-700 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white text-sm font-mono"
              placeholder="#f8bbd9"
            />
          </div>
        </div>

        {/* Predefined Colors */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Couleurs prédéfinies
          </label>
          <div className="flex flex-wrap gap-2">
            {predefinedColors.map((color) => (
              <button
                key={color}
                onClick={() => setPrimaryColor(color)}
                className={`w-8 h-8 rounded-lg border-2 transition-all duration-300 hover:scale-110 ${
                  primaryColor === color 
                    ? 'border-gray-400 shadow-lg' 
                    : 'border-rose-200 dark:border-rose-700'
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Generated Palette */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Palette harmonieuse générée
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.entries(colorPalette).map(([name, color]) => (
              <div key={name} className="group">
                <button
                  onClick={() => copyColor(color, name)}
                  className="w-full aspect-square rounded-lg border border-rose-200 dark:border-rose-700 transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden"
                  style={{ backgroundColor: color }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    {copiedColor === name ? (
                      <Check className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    ) : (
                      <Copy className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                </button>
                <div className="mt-2 text-center">
                  <div className="text-xs font-medium text-gray-700 dark:text-gray-300 capitalize">
                    {name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                    {color}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Cliquez sur une couleur pour la copier dans le presse-papiers
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;