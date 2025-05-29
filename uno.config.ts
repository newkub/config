import { defineConfig, presetIcons, presetWind4, transformerVariantGroup, presetWebFonts } from "unocss";
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';

export default defineConfig({
    presets: [
        presetWind4(),
        presetIcons({
            extraProperties: {
                display: "inline-block",
                "vertical-align": "middle",
            },
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
    transformers: [transformerVariantGroup()],
    theme: {
        colors: {
            Background: 'var(--background-light)',
            Text: 'var(--text-light)',
            Alert: 'var(--alert-light)',
            Brand: 'var(--brand-light)',
            Error: 'var(--error-light)',
            Success: 'var(--success-light)',
        },
    },
    shortcuts: [
        ['btn', 'px-4 py-2 rounded-lg font-medium transition-colors duration-300'],
        ['btn-primary', 'bg-Brand text-white hover:bg-Brand/90'],
        ['btn-secondary', 'bg-Background text-Text border border-gray-300 hover:bg-gray-100'],
        ['card', 'bg-white dark:bg-gray-800 rounded-xl shadow-md p-4'],
        ['input-field', 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-Brand'],
        ['tag', 'px-2 py-0.5 text-xs rounded-full bg-gray-200 dark:bg-gray-700'],
        ['section-container', 'container mx-auto px-4 py-8'],
        ['flex-center', 'flex items-center justify-center'],
    ],
});