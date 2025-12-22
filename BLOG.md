# Blog (Markdown) — dokumentacja

Ta aplikacja ma prosty blog oparty o **pliki Markdown** w repozytorium. Wpisy są renderowane przez **App Router** Next.js.

## Gdzie trzymać wpisy

- **Katalog wpisów**: `frontend/content/blog/`
- **Nazwa pliku = slug**: `frontend/content/blog/<slug>.md`
- Przykład: `frontend/content/blog/moj-pierwszy-wpis.md` będzie dostępny pod: `/blog/moj-pierwszy-wpis`

## Format wpisu (frontmatter)

Każdy plik `.md` musi zaczynać się frontmatter w YAML:

```md
---
title: "Tytuł wpisu"
publishedAt: "2024-12-22" # najlepiej YYYY-MM-DD
category: "DevOps"
excerpt: "Krótki opis na listę wpisów i do meta description."
cover: "/hero/background.jpg" # ścieżka do pliku z frontend/public/
draft: true # opcjonalne, ukrywa wpis na listach
---

Treść wpisu...
```

Wymagane pola (`string`, niepuste):
- `title`
- `publishedAt`
- `category`
- `excerpt`
- `cover`

Opcjonalne:
- `draft` (boolean) — domyślnie wpis jest publikowany; `draft: true` ukrywa go na listach.

## Routing

- **Lista wpisów**: `frontend/app/blog/page.tsx` → `/blog`
- **Pojedynczy wpis**: `frontend/app/blog/[slug]/page.tsx` → `/blog/[slug]`

Strona wpisu:
- generuje statyczne ścieżki przez `generateStaticParams()` (na podstawie plików),
- ustawia meta (`title`, `description`, OpenGraph) przez `generateMetadata()` na podstawie frontmatter,
- zwraca `404` przez `notFound()` gdy plik nie istnieje.

## Render Markdown

Renderowanie Markdown jest w `frontend/app/blog/[slug]/page.tsx` przy użyciu:
- `react-markdown`
- `remark-gfm` (m.in. listy, tabele, strikethrough)

Zmapowane są podstawowe elementy (nagłówki, listy, linki, blockquote, code), aby wpisy wyglądały spójnie bez dodatkowych pluginów typografii.

## Obrazki

### Cover (na kartach i na stronie wpisu)

Pole `cover` w frontmatter powinno wskazywać na obraz w `frontend/public/`, np.:
- `cover: "/hero/background.jpg"`

### Obrazki w treści Markdown

W Markdown używaj standardowej składni:

```md
![Alt text](/images/posts/moj-obrazek.jpg)
```

Ważne:
- `img` w Markdown jest renderowany przez `next/image` (mapowanie w `react-markdown`), więc **najprościej trzymaj pliki w `frontend/public/`**.
- Obecny `frontend/next.config.ts` **nie ma** ustawionych zdalnych domen (`images.remotePatterns`), więc zewnętrzne URL-e obrazków nie są rekomendowane bez dopisania konfiguracji.

## Warstwa dostępu do wpisów (filesystem)

Logika czytania wpisów jest w `frontend/lib/blog.ts`:
- `getPostSlugs()` — lista slugów na podstawie nazw plików w `content/blog`
- `getAllPosts({ limit?, includeDrafts? })` — lista wpisów (bez treści), sortowanie po `publishedAt` malejąco
- `getPostBySlug(slug)` — pojedynczy wpis (frontmatter + treść)

Uwagi:
- `draft: true` ukrywa wpis na listach (chyba że użyjesz `includeDrafts: true`).
- `CONTENT_DIR` jest wyliczane względem `process.cwd()` — uruchamiaj Next.js z katalogu `frontend/`.

## Sekcja „Ostatnie wpisy” na stronie głównej

Sekcja na homepage jest w:
- `frontend/components/blog.tsx` — pobiera `getAllPosts({ limit: 3 })`
- `frontend/app/page.tsx` — renderuje `<Blog />`


