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
        dark: {
            
        },
        colors: {
            Background: 'hsl(var(--background-light))',
            Text: 'hsl(var(--text-light))',
            Alert: 'hsl(var(--alert-light))',
            Brand: 'hsl(var(--brand-light))',
            Error: 'hsl(var(--error-light))',
            Success: 'hsl(var(--success-light))',
        },
    },
    shortcuts: [],
});