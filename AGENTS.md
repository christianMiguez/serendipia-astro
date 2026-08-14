## Project

Espacio Serendipia — sitio de un multiespacio de bienestar en el Cerro de Montevideo. Objetivo: SEO + vidriera de servicios/actividades. Español (es), voseo uruguayo. Tema `light:only` (sin dark mode) en `src/config.yaml` → `ui.theme`.

Basado en el starter AstroWind (https://github.com/arthelokyo/astrowind): Astro 6 `output: 'static'` + Tailwind CSS v4 (CSS-first) + MDX. Node >= 22.12.0. Producción: https://serendipia.uy (Vercel).

## Commands

```
npm install
npm run dev        # localhost:4321
npm run build      # → dist/
npm run preview
npm run check      # astro check && eslint . && prettier --check .   (respeta este orden)
npm run fix        # eslint --fix . && prettier -w .
```

Servidor dev en background (opencode): `astro dev --background`, gestionar con `astro dev stop | status | logs`.

No hay suite de tests.

`vercel.json` usa `cleanUrls` + `trailingSlash:false` — mantener sincronizado con `src/config.yaml` → `site.trailingSlash`.

## Dónde está cada cosa (fuentes de verdad)

- **Config del sitio/SEO/blog/i18n/tema: `src/config.yaml`** — NO `astro.config.ts`. La integración custom `vendor/integration/` la parsea y expone `SITE`, `METADATA`, `I18N`, `APP_BLOG`, `UI`, `ANALYTICS` vía el módulo virtual `astrowind:config` (`import { SITE } from 'astrowind:config'`). Editar `src/config.yaml` para nombre del sitio, URL, metadata default, postsPerPage, patrón de permalink, tema.
- **Navegación (header/footer): `src/navigation.ts`** — `headerData` y `footerData` con los slugs en español. Tratar estos slugs (/nosotros, /servicios/salud-mental, /servicios/area-educativa, /servicios/area-holistica, /consultorios, /profesionales, /contacto) como fuente de verdad al crear páginas.
- **Colección de contenido `post`: `src/data/post/*.md(x)`** (schema en `src/content.config.ts`).
- **Build/integraciones: `astro.config.ts`** (Tailwind vía @tailwindcss/vite, mdx, icon, compress, sitemap, integración astrowind, plugins remark/rehype).

## Blog / posts

- Loader: `src/data/post/*.md(x)` → schema Zod en `src/content.config.ts`. Frontmatter obligatorio: `title`. Opcional: `publishDate`, `updateDate`, `draft`, `excerpt`, `image`, `category`, `tags`, `author`, `metadata` (SEO por post: `canonical`, `robots`, `openGraph`, `twitter`).
- Patrón de permalink en `src/config.yaml` → `apps.blog.post.permalink: '/%slug%'`, así que **los posts se sirven en la raíz** (p.ej. `/yoga`), NO bajo `/blog/`. La _lista_ del blog vive en `/blog` (`apps.blog.list.pathname`). No mover los posts bajo /blog sin cambiar el permalink.
- Resolver URL de un post: `getPermalink(post.id, 'post')` desde `~/utils/permalinks`.
- Los `title` son strings SEO long-tail con `| Espacio Serendipia`; el template de `<title>` viene de `src/config.yaml` → `metadata.title.template`.

## Componentes reutilizables — reutilizar, no reinventar

- **Botones / CTAs**: usar `src/components/ui/Button.astro` (props tipo `CallToAction` de `~/types`). `variant`: `primary | secondary | tertiary | link`. Pasar `type="submit"`/`"button"`/`"reset"` para un `<button>` real; si no, renderiza `<a>`. Reutilizar `Button` en vez de armar `<a>` con clases inline. (Varias páginas heredadas —p.ej. `src/pages/index.astro`— tienen anchors inline que NO usan Button; para trabajo nuevo, usar Button.)
- **Widgets** (bloques de página): `src/components/widgets/` — Hero/Hero2/HeroText, Features/Features2/Features3, Steps/Steps2, Content, Testimonials, Stats, Pricing, Brands, FAQs, Contact, CallToAction, BlogHighlightedPosts, BlogLatestPosts, Announcement, Note. Componer páginas con estos + primitivos UI (`Button`, `Headline`, `Form`, `Timeline`, `WidgetWrapper`) antes de escribir markup propio.
- **Layouts**: `Layout.astro` (base), `PageLayout.astro` (shell con Header/Footer), `MarkdownLayout.astro` (cuerpo del post), `LandingLayout.astro`.
- **Iconos**: `astro-icon`; set `tabler` (todos) y `flat-color-icons` (solo un subconjunto — ver `include` en `astro.config.ts`). Referenciar como `name="tabler:xxx"`. Para un flat-color nuevo, agregarlo al `include` en `astro.config.ts`.

## Estilos (Tailwind v4, CSS-first)

- No hay `tailwind.config.js`. El theme vive en `src/assets/styles/tailwind.css` vía `@theme`; utilidades custom (`btn`, `btn-primary`, `btn-secondary`, `btn-tertiary`, `bg-page`, `text-muted`, …) vía `@utility`.
- **Tokens de color/fuente son variables CSS en `src/components/CustomStyles.astro`** (`--aw-color-*`, `--aw-font-*`), expuestos como colores Tailwind en `tailwind.css`. Para cambiar paleta o fuentes, editar solo `CustomStyles.astro`. Colores semánticos disponibles: `primary`, `primary-strong`, `secondary`, `secondary-strong`, `accent`, `surface`, `border`, `text-heading`, `text-default`, `text-muted`, `salmon-soft`, `sage-soft`, `celeste-soft`, `cream`, `beige-soft`, `logo-blue/teal/green`, `success/warning/error`. Fuente: Nunito Variable (sans/serif/heading). Usar tokens — no hardcodear hex.
- Las utilidades `btn*` usan gradientes de los tokens del logo; reutilizarlas.

## Imágenes

- Locales: Astro/Sharp (importar desde `~/assets`).
- Remotas de CDN: por `src/components/common/Image.astro` con `unpic` (Unsplash/Cloudinary/Imgix autodetectados) — Astro no las descarga.
- `astro.config.ts` → `image.domains` solo autoriza `cdn.pixabay.com` para fallback a Sharp. Agregar un dominio ahí solo si una imagen remota debe caer al `<Image>` nativo (CDN no soportado por unpic).

## Convenciones

- Alias `~` → `./src` (tsconfig + vite). Importar con `~/...`.
- Prettier: printWidth 120, comillas simples, semis, 2 espacios, trailingComma es5, `prettier-plugin-astro` para `.astro`.
- ESLint: `@typescript-eslint/no-unused-vars` ignora `^_`; smart-tabs para indent mezclada. `.astro` parseado con `astro-eslint-parser` + parser ts.
- `export const prerender = true;` en páginas (static output; el blog requiere prerender).
- `trailingSlash: false` de punta a punta (config.yaml, astro.config, vercel.json).

## Legacy / scaffolding (demo AstroWind, NO del sitio en vivo)

Quedan como referencia de diseño. Las rutas en vivo usan los slugs en español de `src/navigation.ts`:

- `src/pages/homes/*`, `src/pages/landing/*`, `src/pages/about.astro`, `src/pages/services.astro`, `src/pages/pricing.astro`
- Copy demo del blog ("The Blog" / subtítulo AstroWind) en `src/pages/[...blog]/[...page].astro`
- Varias rutas del nav (p.ej. /nosotros, /servicios/*, /consultorios, /profesionales) aún no tienen archivo de página en `src/pages/`. Al crearlas, nombrar los archivos para coincidir con los slugs de navigation.ts.

## Docs Astro

https://docs.astro.build — relevantes: content collections, routing, styling (Tailwind v4), internationalization.
