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
			customIcon: {
				"tsconfig.json": "vscode-icons:file-type-typescript",
				"vite.config.ts": "vscode-icons:file-type-vite",

