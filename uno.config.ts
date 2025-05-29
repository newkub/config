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