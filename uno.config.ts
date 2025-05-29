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
            background: 'var(--background-light)',
            text: 'var(--text-light)',
            alert: 'var(--alert-light)',
            error: 'var(--error-light)',
            success: 'var(--success-light)',
        },
    },
    shortcuts: [],
});