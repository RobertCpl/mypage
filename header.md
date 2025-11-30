## Specyfikacja komponentu `Header` (strona "O mnie")

### 1. Cel i ogólny opis
- **Cel**: Stworzenie górnego paska nawigacji dla strony "O mnie".
- **Struktura**: Header podzielony na **dwie główne sekcje**:
  - **Lewa**: logo (obraz lub tekst).
  - **Prawa**: menu nawigacyjne z linkami do sekcji strony.
- **Kontekst technologiczny**: Next.js (App Router), **komponent `Header` jako komponent serwerowy** (bez `"use client"`), z wydzielonymi komponentami klienckimi dla części interakcyjnych (np. mobilne menu) wykorzystującymi komponenty **shadcn/ui**.

---

### 2. Wymagania ogólne dla `Header`
- **Pozycja**:
  - Header ma być **przyklejony do górnej krawędzi okna przeglądarki**:
    - CSS: `position: sticky; top: 0; z-index: wysoki (np. 50–50+)`.
- **Padding**:
  - **Pionowy padding**: `padding-top: 12px; padding-bottom: 12px;`
  - **Poziomy padding**:
    - Desktop: np. `padding-left/right: 24px–32px`.
    - Mobile: można zmniejszyć (np. `16px`), ale nie jest to obowiązkowe – ważna spójność.
- **Tło**:
  - Header powinien mieć **jednolite tło** (np. kolor tła strony) + opcjonalny **delikatny border dolny** (`border-bottom`) dla odcięcia od treści.
- **Szerokość treści**:
  - Sama treść (logo + menu) powinna być **wyśrodkowana w kontenerze o maksymalnej szerokości** (np. `max-width: 1200–1280px; margin: 0 auto;`).

Przykładowy układ kontenera (utility classes, np. Tailwind lub własne):
- `w-full`, `max-w-[1200px]`, `mx-auto`, `flex`, `items-center`, `justify-between`, `gap-4`.

---

### 3. Menu – elementy i zachowanie
- **Elementy menu** (w podanej kolejności):
  - **Home**
  - **O mnie**
  - **Portfolio**
  - **Usługi**
  - **Kontakt**
  - **Blog**
- **Typ**:
  - Strona jest **one-page**, więc każdy element to **link przewijający do odpowiedniej sekcji** na tej samej stronie:
    - Linki kotwiczne oparte o identyfikatory sekcji, np.:
      - `Home` → `#home`
      - `O mnie` → `#about`
      - `Portfolio` → `#portfolio`
      - `Usługi` → `#services`
      - `Kontakt` → `#contact`
      - `Blog` → `#blog`
    - Preferowane jest użycie:
      - `next/link` z `href` typu `#id` **i** handlerem `onClick`, który:
        - wywołuje `event.preventDefault()`,
        - znajduje sekcję po `id`,
        - przewija do niej za pomocą `element.scrollIntoView({ behavior: "smooth", block: "start" })`,
      - lub zwykłego `<button>`/`<span>` z identyczną logiką `scrollIntoView`.
- **Styl**:
  - Tekst czytelny, kontrastowy.
  - Stany:
    - **hover**: zmiana koloru tekstu lub podkreślenie.
    - **active/current**: wyróżnienie aktualnej sekcji (np. kolor, podkreślenie, mały pasek pod spodem).

---

### 4. Wersja desktop (≥ 768px)
- **Widoczność menu**:
  - Menu z linkami jest **widoczne w pełnej szerokości** po prawej stronie logo.
- **Rozmieszczenie**:
  - Logo po lewej, menu po prawej w jednej linii:
    - Kontener z `display: flex`, `justify-content: space-between`, `align-items: center`.
    - Między linkami w menu odstępy (np. `gap: 24px`).
- **Maksymalna szerokość**:
  - Cały header zawiera **wewnętrzny kontener o maksymalnej szerokości** (np. `max-width: 1200–1280px`), wyśrodkowany:
    - `margin-left: auto; margin-right: auto;`.
- **Zachowanie przy scrollu**:
  - Header cały czas przyklejony na górze (`position: sticky`), nie zmienia wysokości, opcjonalnie można dodać lekkie **tło półprzezroczyste** lub cień przy scrollu (opcjonalne, nie wymagane).

---

### 5. Wersja mobile (< 768px)
- **Tryb mobilny**:
  - Dla szerokości **poniżej 768px**:
    - Menu w formie **hamburgera** po prawej stronie.
    - **Logo** nadal po lewej stronie.
    - W jednej linii: **logo | ikona hamburgera**.
- **Zachowanie hamburger menu**:
  - Po kliknięciu ikony hamburgera:
    - Otwiera się **rozwijane menu** z tymi samymi linkami co na desktopie.
    - Menu rozwijane może być:
      - jako **panel wysuwany od dołu ekranu** (drawer z dołu),
      - lub **pełnoekranowe menu** z listą linków.
  - Po kliknięciu w dowolny link:
    - Menu powinno się **zamknąć**.
- **Animacje**:
  - Delikatna animacja otwierania/zamykania (fade/slide) dla lepszego UX.

---

### 6. Wykorzystanie komponentów shadcn/ui

#### 6.1. Struktura wysokiego poziomu (server + client)
- **Komponent główny `Header` (SERVER COMPONENT)**:
  - Nazwa robocza: `SiteHeader` lub `Header`.
  - **Bez** `"use client"` – renderowany po stronie serwera.
  - Odpowiada za layout, logo oraz włączenie odpowiednich podkomponentów (desktop menu + mobilne menu).

Przykładowy szkic:

```tsx
// app/(site)/_components/header.tsx – komponent serwerowy
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:py-3">
        {/* Logo po lewej */}
        <div className="flex items-center gap-2">
          {/* tutaj komponent/obraz logo */}
        </div>

        {/* Menu desktop (server lub client, ale bez wymaganego stanu) */}
        <div className="hidden md:block">
          <DesktopNav />
        </div>

        {/* Hamburger mobile – osobny komponent kliencki */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
```

- **Komponent `DesktopNav`**:
  - Może być komponentem serwerowym lub klienckim (w zależności od potrzeby np. podświetlania aktywnego linku).
  - Korzysta z komponentów `NavigationMenu` z shadcn/ui (jak wcześniej opisano).

- **Komponent `MobileNav` (CLIENT COMPONENT)**:
  - Odpowiada za stan otwarcia/zamknięcia hamburger menu.
  - **Musi** być oznaczony jako klientowy:

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          {/* ikona hamburgera */}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          {/* opcjonalnie logo / tytuł w panelu */}
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-4">
          {/* lista linków: Home, O mnie, Portfolio, Usługi, Kontakt, Blog */}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
```

#### 6.2. Konkretnie użyte komponenty shadcn/ui
- **Do menu desktop**:
  - `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuLink`.
- **Do menu mobilnego (hamburger)**:
  - `Sheet`, `SheetTrigger`, `SheetContent`, `SheetHeader` (zamiast np. własnego modala/drawera).
  - `Button` (z pamięci: preferowane użycie `shadcn` `Button` dla ikony hamburgera).
- **Dodatkowe komponenty (opcjonalne)**:
  - `Separator` (jeśli potrzebny w mobilnym menu).
  - `ScrollArea` (jeśli menu byłoby wysokie na mniejszych ekranach).

---

### 7. Zachowanie nawigacji (logika)
- **Linki**:
  - Linki powinny wykorzystywać `next/link` lub zwykłe `<a>` z `href="#sekcja"` – kluczowe jest, że **nie przechodzą do podstron**, tylko przewijają do sekcji (one-page).
  - Każdy link powinien być łatwy do modyfikacji (np. tablica obiektów z nazwą i `href` typu `#id`).
  - Wymagany jest **płynny scroll do sekcji** z użyciem **`scrollIntoView`**:
    - W handlerze `onClick` linku należy:
      - zablokować domyślne przejście przeglądarki (np. `event.preventDefault()`),
      - znaleźć element docelowy po `id` (np. `document.getElementById("about")`),
      - wywołać `target?.scrollIntoView({ behavior: "smooth", block: "start" });`.
    - Globalne `scroll-behavior: smooth;` w CSS może być użyte jako uzupełnienie, ale **podstawowym mechanizmem ma być `scrollIntoView`**.
- **Aktywny link**:
  - W miarę możliwości wyróżnić **aktywną sekcję** (np. na podstawie aktualnego `pathname` lub intersection observer dla sekcji).
- **Zamykanie menu mobilnego**:
  - Po kliknięciu linku:
    - Wywołać logikę zamknięcia komponentu `Sheet` (np. sterowanie stanem `open`).

---

### 8. Podsumowanie wymagań
- **Layout**:
  - Dwie sekcje: logo (lewa) + menu (prawa).
  - Sticky na górze (`position: sticky; top: 0;`).
  - Pionowy padding **12px** (top i bottom).
  - Wewnętrzny kontener z **maksymalną szerokością** i wyśrodkowaniem.
- **Menu**:
  - Linki: **Home, O mnie, Portfolio, Usługi, Kontakt, Blog**.
  - Desktop (≥ 768px): pełne menu poziome po prawej stronie logo.
  - Mobile (< 768px): hamburger menu, rozwijane po kliknięciu.
- **Technologia**:
  - Next.js, **komponent `Header` jako komponent serwerowy** (bez `"use client"`).
  - Interaktywne elementy (np. hamburger `MobileNav`) jako **osobne komponenty klienckie** z `"use client"`.
  - Wykorzystanie komponentów **shadcn/ui**: `NavigationMenu` (desktop), `Sheet` + `Button` (mobile), inne pomocnicze w razie potrzeby.


