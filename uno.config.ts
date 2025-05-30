import { defineConfig, presetIcons, presetMini, transformerVariantGroup, presetWebFonts, transformerCompileClass, presetWind4 } from "unocss";
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';

export default defineConfig({
    presets: [
        presetWind4(),
        presetTagify
        presetIcons({
            collections: {
                mdi: () =>
                    import("@iconify-json/mdi/icons.json").then((i) => i.default),
            },
        }),
        presetWebFonts({
            provider: 'none',
            fonts: {
                sans: 'Roboto',
                mono: 'Fira Code',
            },
            processors: createLocalFontProcessor({
                cacheDir: 'node_modules/.cache/unocss/fonts',
                fontAssetsDir: 'public/assets/fonts',
                fontServeBaseUrl: '/assets/fonts'
            })
        }),
    ],
    transformers: [
        transformerVariantGroup(),
        transformerCompileClass()
    ],
    theme: {
        
        colors: {
            background: 'hsl(var(--background))',
            text: 'hsl(var(--text))',
            brand: {
                brand: 'hsl(var(--brand))',
                error: 'hsl(var(--brand-error))',
                warning: 'hsl(var(--brand-warning))',
                success: 'hsl(var(--brand-success))',
            },
           
           
        },
        breakpoints: {
            sm: '320px',
            md: '640px',
            lg: '768px',
            xl: '1024px',
            '2xl': '1280px',
        },
    },
    shortcuts: [],
});