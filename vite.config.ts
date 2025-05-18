import UnoCSS from "@unocss/vite";
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import vueDevTools from "vite-plugin-vue-devtools";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";
import AutoImport from "unplugin-auto-import/vite";
import UnpluginUnused from 'unplugin-unused/vite';

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