## Stack technologiczny projektu `newstack`

- **Next.js 16 (App Router)**  
  - Framework bazowy dla całej aplikacji (`next`), wykorzystuje katalog `app/` (RSC – React Server Components).  
  - Służy do routingu, SSR/SSG, obsługi assetów oraz konfiguracji (np. `layout.tsx`, `page.tsx`, `next.config.ts`).

- **React 19**  
  - Biblioteka UI (`react`, `react-dom`) – komponenty w `app/` oraz `components/` są pisane w React + TypeScript.  
  - Współpracuje z trybem server/client komponentów Next.js.

- **TypeScript 5**  
  - Język bazowy całego projektu (typowanie komponentów, propsów, utili).  
  - Konfiguracja w `tsconfig.json`.

- **Styling: Tailwind CSS 4 + narzędzia pomocnicze**  
  - Używamy Tailwinda v4 (`tailwindcss`, `@tailwindcss/postcss`) zdefiniowanego w `app/globals.css`.  
  - **class-variance-authority (`cva`)** – budowanie wariantów stylistycznych (np. przycisków).  
  - **tailwind-merge** – scalanie klas Tailwind bez duplikatów.  
  - **clsx** – kondycjonowanie klas CSS.

- **UI: shadcn/ui + Radix UI + ikony**  
  - Konfiguracja shadcn w `components.json` (styl `new-york`, aliasy: `@/components`, `@/components/ui`, `@/lib/utils` itd.).  
  - Komponenty bazują na **Radix UI** (`@radix-ui/react-dialog`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-slot`).  
  - Ikony z **lucide-react** (`lucide-react`), wykorzystywane w komponentach UI i nawigacji.  
  - Własne komponenty UI znajdują się w `components/ui/` (np. `button.tsx`, `navigation-menu.tsx`, `sheet.tsx`).

- **Data fetching: @tanstack/react-query 5**  
  - Biblioteka do obsługi zapytań i cache danych (`@tanstack/react-query`).  
  - Powinna być używana wszędzie tam, gdzie pobieramy dane „klienckie” (HTTP, API), zapewnia caching, refetch, obsługę błędów.

- **Animacje i efekty**  
  - **tw-animate-css** w devDependencies – narzędzie wspierające efekty animacji z Tailwind/TW plugins (do użycia przy rozbudowie UI).

- **Jakość kodu i narzędzia developerskie**  
  - **ESLint 9** z `eslint-config-next` – linting dla Next/React/TypeScript.  
  - Skrypty: `npm run dev` (serwer dev), `npm run build`, `npm run start`, `npm run lint`.

## Jak używać tego pliku jako kontekstu

- **Pytania o stack** – możesz odwoływać się do nazw paczek i ich roli z powyższej listy (np. „jak najlepiej użyć `@tanstack/react-query` w tym projekcie?”).  
- **Pytania o UI** – korzystamy z kombinacji shadcn/ui + Radix + Tailwind; nowe komponenty powinny trzymać się istniejącego wzorca (`components/ui/*`, `@/lib/utils`).  
- **Pytania o architekturę** – aplikacja jest oparta o Next.js App Router (folder `app/`) z komponentami współdzielonymi w `components/` i utilami w `lib/`.  
- W kolejnych zadaniach możesz po prostu napisać, do której części stacku się odnosisz (np. „zrób to poprzez react-query”, „użyj shadcn Buttona”), a będziemy to traktować jako odniesienie do tego dokumentu.


