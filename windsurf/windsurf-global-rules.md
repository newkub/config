เวลาเขียน code อะไรให้ทำตามนี้

# my-setup
- OS => Windows
- Package Manager => Scoop
- Shell => PowerShell

# เวลาคุยกับผม
- เวลาผมสั่งอะไร อย่าทำเลย ให้ทำตามนี้เป็นข้อๆ แล้วบอกผมด้วยว่าคุณคิดอะไร
  - อ่านทุก file เข้าใจ context แล้วเก็บไว้ก่อน
  - ให้คิดก่อน พยายามเข้าใจสิ่งที่ผมสั่ง
  - ถ้าเห็นด้วยว่าผมให้ทำเลย ถ้าไม่เห็นด้วยว่าเสนอสิ่งที่เหมาะสมกว่า
- แล้วคุยเป็นภาษาไทยทุกครั้ง


# วิธีที่คุณจะทำงาน
- ถ้าผมสั่งอะไร ให้คิดก่อน import export ที่เกี่ยวข้องกัน ดูว่าต้องแก้อะไรตรงไหนตาม best practics ตามที่ควีจะเป็น อย่าทำตามผมทำทุกอย่าง
- เมื่อคุณจะทำอะไร ให้อธิบายความคุณของคุณให้ผมทราบถึงเหตุผลที่คุณทำ

# การเลือก Dependencies
- เลือกที่เป็น ESM เท่านั้น
- เลือกที่เป็น TypeScript-first หรือมี type definitions ที่ดี
- พิจารณาความนิยม การบำรุงรักษา และความเป็นปัจจุบัน
- คำนึงถึง bundle size และ performance
- หลีกเลี่ยงการใช้ dependencies ที่ไม่จำเป็น

# slash commands (ทำเมื่อผมบอกให้ทำ ถ้าไม่บอกไมต้องทำ)



## /commit

- ต้องการ git commit ทั้งหมด โดย commit ทีละ commit ไม่ต้องทำทั้งหมดทีเดียว
- stage เป็นกลุ่มๆตาม folder (ใช้ git add, git status, git diff)
- commit ตาม conventional commits ให้มี type, scope เช่น refactor(component): remove unused code



## /refactor

- refactor interface

ดูว่าเป็น project นี้เขียนด้วยอะไร ให้ทำตามนั้น
### /refactor-vue

ทำตามนี้ทุกข้อทำเป็นข้อๆหลังจากทำแล้วตรวจสอบว่าทำตามนี้หมดหรือยัง
- ตรวจดูทุกไฟล์ *.vue และเข้าไปอ่านจริงๆ
- ถ้ามี folder ใน components ให้สร้าง index.ts ใน folder นี้แล้วนำการ reexport ทุก component ทุกครั้ง
- ให้ script อยู่ด้านบน template เสมอ
- ใช้ script setup และ composition api ไม่ใช่ options api
- icon ใช้จาก iconify json mdi ผ่าน unocss
- ใช้ UnoCSS สำหรับ styling ทั้งหมด ไม่ใช้ CSS เลย
- ใช้ TypeScript interfaces สำหรับ props และ emits
- แยก UI และ logic ให้ชัดเจน แยก ui ที่ใช้ซ้ำไปใน components และแยก logic ที่ใช้ซ้ำไปไว้ใน composables
- ลบสิ่งเขียนซ้ำซ้อน
- จัดการ side effects ใน lifecycle hooks อย่างเหมาะสม
- ใช้ performance optimizations เมื่อจำเป็น (shallowRef, v-memo, v-once)
- กำหนดประเภทของ props และ emits อย่างชัดเจน
- ใช้ computed properties สำหรับข้อมูลที่ต้องประมวลผล
- ใช้ defineProps และ defineEmits สำหรับ type safety
- ใช้ watch และ watchEffect อย่างเหมาะสมพร้อม immediate และ deep options
- ให้ component names ตาม PascalCase และตั้งชื่อให้สื่อความหมาย
- ใช้ provide/inject สำหรับ deep component communication
- จัดการ error boundaries และ error handling
- ใช้ Suspense สำหรับ async components เมื่อเหมาะสม
- ใช้ teleport สำหรับ modal และ popup components
- ใช้ v-model สำหรับ two-way binding อย่างเหมาะสม


### /refactor-react
- ตรวจดูทุกไฟล์ *.jsx, *.tsx และเข้าไปอ่านจริงๆ
- ใช้ functional components และ React Hooks ไม่ใช้ class components
- icon ใช้จาก iconify json mdi ผ่าน UnoCSS หรือ React Icons
- ใช้ UnoCSS หรือ Tailwind สำหรับ styling ทั้งหมด ไม่ใช้ CSS เลย
- ใช้ TypeScript interfaces สำหรับ props และ event handlers
- แยก UI และ logic ให้ชัดเจน แยก ui ที่ใช้ซ้ำไปใน components และแยก logic ที่ใช้ซ้ำไปไว้ใน custom hooks
- ลบสิ่งเขียนซ้ำซ้อน
- จัดการ side effects ใน useEffect อย่างเหมาะสม
- ใช้ performance optimizations เมื่อจำเป็น (useMemo, useCallback, memo)
- กำหนดประเภทของ props และ state อย่างชัดเจน
- ใช้ useMemo สำหรับข้อมูลที่ต้องประมวลผล
- ใช้ React.FC และ type props อย่างชัดเจนสำหรับ type safety
- ใช้ useEffect อย่างเหมาะสมพร้อม dependency array
- ให้ component names ตาม PascalCase และตั้งชื่อให้สื่อความหมาย
- ใช้ Context API สำหรับ deep component communication
- จัดการ error boundaries และ error handling
- ใช้ Suspense และ React.lazy สำหรับ code splitting เมื่อเหมาะสม
- ใช้ createPortal สำหรับ modal และ popup components
- ใช้ controlled components สำหรับ form elements อย่างเหมาะสม

### /refactor-ts 
- ใช้ ESM เป็นหลัก ไม่ใช้ CommonJS
- ใช้ TypeScript strict mode และ noImplicitAny
- ใช้ type inference เมื่อเป็นไปได้เพื่อลดความซับซ้อน
- ใช้ interface สำหรับ object shapes ที่ขยายได้และ type สำหรับ union types
- ใช้ discriminated unions แทน class hierarchies ที่ซับซ้อน
- ใช้ optional chaining (?.) และ nullish coalescing (??) เพื่อโค้ดที่กระชับ
- ใช้ type guards เพื่อความปลอดภัยในการทำงาน
- ใช้ const assertions (as const) สำหรับ literal types และ immutable data
- ใช้ utility types (Pick, Omit, Partial, Record) เพื่อลดการเขียนซ้ำ
- ใช้ readonly modifiers สำหรับข้อมูลที่ไม่ควรเปลี่ยนแปลง
- แยก types ที่ใช้ร่วมกันไปไว้ใน types/ directory
- ใช้ generics อย่างประหยัด เฉพาะเมื่อจำเป็นจริงๆ
- ใช้ satisfies operator สำหรับ type checking ที่ยืดหยุ่น
- ระบุ return types เฉพาะเมื่อ inference ไม่ชัดเจน
- เลือกใช้ Records และ Maps แทน index signatures เมื่อเหมาะสม
- ใช้ exhaustiveness checking ด้วย never type
- ใช้ template literal types สำหรับ string manipulation ที่ type-safe
- ใช้ mapped types สำหรับการสร้าง types ที่เกี่ยวข้องกัน
- ใช้ conditional types สำหรับ advanced type transformations
- ใช้ unknown แทน any เมื่อต้องการความปลอดภัยมากขึ้น
- ใช้ async/await แทน Promise chains เพื่อความอ่านง่าย
- จัดกลุ่ม imports ให้เป็นระเบียบ (built-ins, external, internal)
- ใช้ namespaces อย่างเหมาะสมเพื่อป้องกัน naming collisions
- ใช้ modules pattern เพื่อ encapsulation ที่ดีขึ้น
- ใช้ barrel files (index.ts) เพื่อการ export ที่สะอาด
- ใช้ branded types สำหรับ type-level validation
- ใช้ private/protected modifiers เพื่อควบคุมการเข้าถึง
- ใช้ abstract classes เมื่อต้องการ shared implementation ที่ต้องขยาย
- ใช้ tuple types สำหรับ fixed-length arrays ที่มีความหมายเฉพาะ

## /review

อ่านทุกไฟล์ วิเคราะห์ว่าดีไหมในด้านต่างๆต่อไปนี้ แล้วตอบผมว่าควรปรับปรุงอะไร

- modern ไหม
- simplicity ไหม
- type safety ไหม
- performance ไหม
- maintainability ไหม
- scalability ไหม
- security ไหม
- accessibility ไหม
- error handling ไหม
- reuseable ไหม
- code quality ไหม
- code duplication ไหม


## /fix
- run lint ใน package.json และแก้ไข errors ทั้งหมดจนไม่มีเหลือ
- run build ใน package.json และแก้ไข errors ทั้งหมดจนไม่มีเหลือ

## /test
- run test ใน package.json ให้หน่อย ถ้าแก้ถูกต้องที่ควรจะเป็นจะ test ผ่านหมด

## /setup

ถ้าบอกว่า /setup ให้ setup ทั้งหมด แต่ถ้าบอกว่า /setup-* ให้ setup เฉพาะอันนั้นๆ

### setup-gitignore

```gitignore
# Turborepo
.turbo

dist
cache
# Bun
node_modules
.bun.lockb

# TypeScript
*.map

# Environment variables
.env
.env.local

# Logs
logs
*.log

# Editor directories and files

.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

### setup-release-it
- package.json

```json [package.json]
{
  "scripts": {
    "release": "release-it"
  }
}
```

- .release-it.json

```json
{
  "git": {
    "tagName": "v${version}"
  },
  "npm": {
    "tag": "latest"
  },
}
```

### setup vitest

```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest watch",
    "test:coverage": "vitest --coverage",
    "test:ui": "vitest --ui"
  }
}
```

- vitest.config.ts

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'bun',
    coverage: {
      provider: 'v8',
    },
  },
});
```

### setup-tsdown
- package.json

```json
{
  "scripts": {
    "build": "tsdown --dts"
  }
}
```

### setup-bun
- package.json

```json
{
  "scripts": {
    "dev": "bun run src/index.ts",
    "build": "bun run src/index.ts",
    "start": "bun run dist/index.js",
  }
}
```

## setup-ts

- tsconfig.json

```json [tsconfig.json]
{
  "compilerOptions": {
    // Language and Environment
    "target": "ESNext",
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    
    // Modules
    "module": "ESNext",
    "moduleResolution": "NodeNext",
    "resolveJsonModule": true,
    "isolatedModules": true,
    
    // Emit
    "outDir": "dist",
    "rootDir": "src",
    "sourceMap": true,
    "declaration": true,
    "incremental": true,
    "composite": true,
    
    // Type Checking
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "useUnknownInCatchVariables": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    
    // Completeness
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    
    // Interop Constraints
    "esModuleInterop": true
  },
  "include": ["src/**/*", "tests/**/*", "uno.config.ts", "vite.config.ts"],
  "exclude": ["node_modules", "dist"]
}
```

### setup-leftlook
- package.json

```json [package.json]
{
  "scripts": {
    "prepare": "bunx lefthook install",
  }
}
```
- leftlook.yml

```yml [leftlook.yml]
pre-commit:
  parallel: true
  commands:
    build:
      run: bun run build
    lint:
      glob: "*.{js,ts,vue}"
      run: bunx biome lint --write {staged_files}
    format:
      glob: "*.{js,ts,vue,json,md,yaml,yml}"
      run: bunx biome format --write {staged_files}

pre-push:
  parallel: true
  commands:
    lint:
      glob: "*.{js,ts,vue}"
      run: bunx biome lint {staged_files} && bunx vue-tsc --noEmit
```

### /setup-unocs
- ดูว่าใช้ framework อะไร แล้วติดตั้ง unocss และ unocss reset
- unocss config ใช้ตามนี้

```ts [uno.config.ts]
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import {
	defineConfig,
	presetIcons,
	presetMini,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [
		presetMini(),
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
			provider: "none",
			fonts: {
				sans: "Roboto",
				mono: "Fira Code",
			},
			processors: createLocalFontProcessor({
				cacheDir: "node_modules/.cache/unocss/fonts",
				fontAssetsDir: "public/assets/fonts",
				fontServeBaseUrl: "/assets/fonts",
			}),
		}),
	],
	transformers: [transformerVariantGroup(), transformerDirectives()],
	theme: {
		colors: {
			background: "var(--background)",
			brand: "var(--brand)",
			text: "var(--text)",
			alert: "var(--alert)",
			error: "var(--error)",
			success: "var(--success)",
			surface: "var(--surface)",
			border: "var(--border)",
		},
		spacing: {
			sm: "var(--spacing-unit)",
			DEFAULT: "calc(var(--spacing-unit) * 2)",
			lg: "calc(var(--spacing-unit) * 4)",
		},
		borderRadius: {
			sm: "var(--border-radius-sm)",
			DEFAULT: "var(--border-radius-md)",
			lg: "var(--border-radius-lg)",
		},
		boxShadow: {
			sm: "var(--shadow-sm)",
			DEFAULT: "var(--shadow-md)",
			lg: "var(--shadow-lg)",
		},
		transitionDuration: {
			DEFAULT: "var(--transition-duration)",
			fast: "150ms",
			slow: "var(--transition-duration-slow)",
		},
		transitionTimingFunction: {
			DEFAULT: "var(--transition-timing)",
			ease: "var(--transition-timing-ease)",
			linear: "var(--transition-timing-linear)",
		},
	},
});
```
