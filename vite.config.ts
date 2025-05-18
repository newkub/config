// vite.config.ts
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";
import UnpluginUnused from 'unplugin-unused/vite'
import TurboConsole from 'unplugin-turbo-console/vite'

export default defineConfig({
	plugins: [
		UnoCSS(),
		UnpluginUnused(),
		TurboConsole(),
		groupIconVitePlugin({