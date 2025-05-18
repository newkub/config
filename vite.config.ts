import UnoCSS from "unocss/vite";
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import vueDevTools from "vite-plugin-vue-devtools";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";
import AutoImport from "unplugin-auto-import/vite";
import UnpluginUnused from 'unplugin-unused/vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        vueDevTools(),
        AutoImport(),
        tsconfigPaths(),
        checker({
            typescript: true,
            vueTsc: true,
            biome: {
                command: "lint",
            },
            overlay: false,
        }),
        UnoCSS(),
        ViteImageOptimizer({}),
        UnpluginUnused(),
        groupIconVitePlugin({
            customIcon: {
                "tsconfig.json": "vscode-icons:file-type-typescript",
                "vite.config.ts": "vscode-icons:file-type-vite",
                ".env": "vscode-icons:file-type-dotenv",
                ".mdx": "vscode-icons:file-type-light-mdx",
                html: "vscode-icons:file-type-html",
                json: "vscode-icons:file-type-json2",
                jsx: "logos:react",
                css: "logos:css-3",
                js: "logos:javascript",
                ts: "vscode-icons:file-type-typescript",
                md: "logos:markdown",
                pnpm: "logos:pnpm",
                npm: "logos:npm-icon",
                yarn: "logos:yarn",
                bun: "logos:bun",
                vue: "logos:vue",
                svelte: "logos:svelte-icon",
                angular: "logos:angular-icon",
                next: "logos:nextjs-icon",
                nuxt: "logos:nuxt-icon",
                toml: "logos:toml",
                solid: "logos:solidjs-icon",
                rollup: "logos:rollupjs",
                