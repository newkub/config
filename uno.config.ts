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
            colorBackground: 'var(--background-light)',
            colorText: 'var(--text-light)',
            colorAlert: 'var(--alert-light)',
            colorBrand: 'var(--brand-light)',
            colorError: 'var(--error-light)',
            colorSuccess: 'var(--success-light)',
        },
    },
    shortcuts: [],
});