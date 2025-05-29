import { defineConfig, presetIcons, presetMini, transformerVariantGroup, presetWebFonts, transformerCompileClass } from "unocss";
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';

export default defineConfig({
    presets: [
        presetMini(),
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
            background: 'hsl(var(--background-light))',
            text: 'hsl(var(--text-light))',
            brand: {
                brand: 'hsl(var(--brand-light))',
                error: 'hsl(var(--brand-dark))',
                success: 'hsl(var(--brand-dark))',
            },
            alert: {
                alert: 'hsl(var(--alert-light))',
                error: 'hsl(var(--alert-dark))',
            },
            error: {
                error: 'hsl(var(--error-light))',
                dark: 'hsl(var(--error-dark))',
            },
            success: {
                light: 'hsl(var(--success-light))',
                dark: 'hsl(var(--success-dark))',
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