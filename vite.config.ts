import UnoCSS from "unocss/vite";
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import checker from 'vite-plugin-checker';
import TurboConsole from 'unplugin-turbo-console/vite'

export default defineConfig({
    plugins: [
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
        TurboConsole(),
    ],
});