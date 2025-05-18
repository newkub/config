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

