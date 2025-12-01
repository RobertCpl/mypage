# Services

## Cel

Sekcja „Moje usługi” ma w czytelny i wizualnie mocny sposób zaprezentować cztery główne obszary, w których pomagam klientom: frontend, backend, wdrożenia/utrzymanie oraz administracja systemów.  
Układ, typografia i spacing są spójne z istniejącymi sekcjami `Hero` i `About` – korzystamy z tego samego kontenera (`max-w-[1200px]`), podobnych paddingów (`px-4 py-16`, `lg:py-20`) oraz tej samej hierarchii nagłówków.  
Projekt zakłada kolorowe kafelki 2×2 (desktop) w stylu z załączonego zrzutu ekranu, przy jednoczesnym zachowaniu dobrego kontrastu i czytelności na urządzeniach mobilnych.

## Zawartość

- **Nagłówek sekcji**
  - Tytuł w UI: „Moje usługi”.
  - Podtytuł (lead), 1–2 zdania, wyśrodkowany tekst z klasami w stylu `text-muted-foreground`, `max-w-[640px]`, `mx-auto`, np.:  
    „Łączę doświadczenie w tworzeniu aplikacji webowych z praktyczną administracją systemami, aby dowozić kompletne i stabilne rozwiązania.”

- **Kafelki usług (2×2 na desktopie, 1 kolumna na mobile)**
  - **Aplikacje frontendowe**
    - **Ikona**: prosty piktogram procesora lub ekranu (np. z `lucide-react` – `Cpu` lub `Monitor`, albo SVG z katalogu `public/svg`).
    - **Tytuł**: „Aplikacje frontendowe”.
    - **Opis** (propozycja):  
      „Tworzę nowoczesne, w pełni responsywne aplikacje frontendowe, które świetnie wyglądają i działają na każdym urządzeniu.”
    - **Kolor tła**: ciepły, energetyczny odcień zbliżony do zrzutu, np. `bg-[#ff5f45]` (tekst biały).
  - **Aplikacje backendowe**
    - **Ikona**: telefon / urządzenie mobilne (`Smartphone`, `Phone`) lub prosty kontur serwera.
    - **Tytuł**: „Aplikacje backendowe”.
    - **Opis** (propozycja):  
      „Projektuję nowoczesne aplikacje backendowe, w których znajduje się pełna logika biznesowa systemu.”
    - **Kolor tła**: ciemny, stonowany, np. `bg-slate-900` lub `bg-[#242a3b]` (tekst biały).
  - **Wdrożenie i utrzymanie aplikacji**
    - **Ikona**: okno przeglądarki lub panel aplikacji (np. `LayoutPanelTop`).
    - **Tytuł**: „Wdrożenie i utrzymanie aplikacji”.
    - **Opis** (propozycja):  
      „Zajmuję się wdrażaniem i utrzymaniem aplikacji, dbając o ich stabilne i bezawaryjne działanie.”
    - **Kolor tła**: intensywny niebieski, np. `bg-[#1023b8]` (tekst biały).
  - **Administracja systemów**
    - **Ikona**: gwiazdka / odznaka (`Star`, `Shield`) symbolizująca niezawodność i opiekę.
    - **Tytuł**: „Administracja systemów”.
    - **Opis** (propozycja):  
      „Administruję serwerami, usługami i infrastrukturą potrzebną do działania systemów.”
    - **Kolor tła**: jaśniejszy, przyjazny niebieski, np. `bg-[#4d8fe9]` (tekst biały).

- **Spójność z innymi sekcjami**
  - Zaokrąglone rogi i cienie w duchu `Hero`/`About`, np. `rounded-3xl`, `shadow-lg`, `border border-border/40`.
  - Teksty opisowe w układzie `space-y-2` z `leading-relaxed` i maksymalną szerokością akapitów ~320–360px wewnątrz kafelka.

## Layout desktop (≥ lg)

- **Struktura sekcji**
  - Zewnętrzny element: `section` z `id="services"` i klasami `flex w-full justify-center bg-background`.
  - Wewnątrz: kontener `div` z `mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-20`.
  - Nagłówek sekcji wyśrodkowany (`text-center mb-12`) z hierarchią typografii zbliżoną do `About` (`text-2xl md:text-3xl`, `font-semibold`).

- **Siatka kafelków**
  - Główny wrapper kafelków:  
    `div` z klasami typu: `grid gap-0 overflow-hidden rounded-3xl shadow-lg border border-border/40`.
  - Na szerokich ekranach: `md:grid-cols-2 md:grid-rows-2` – otrzymujemy układ 2×2 jak na zrzucie.
  - Kafelki w kolejności: lewy-górny (frontend), prawy-górny (backend), lewy-dolny (wdrożenie/utrzymanie), prawy-dolny (administracja).

- **Pojedynczy kafelek**
  - Struktura: `div` z `flex flex-col justify-between px-8 py-10 text-white`.
  - Górna część:
    - Ikona jako niewielki, prosty piktogram (np. `w-10 h-10`) w kolorze `text-white`.
    - Tytuł `h3` z klasami `mt-6 text-2xl font-semibold md:text-3xl`.
  - Dolna część:
    - Opis w `p` z klasami `mt-4 text-sm md:text-base max-w-[320px] leading-relaxed`.
  - Efekt hover: `transition-transform transition-shadow hover:-translate-y-1 hover:shadow-xl`, ewentualnie delikatne rozjaśnienie tła (`hover:bg-opacity-95` przez odpowiednie utility).

## Layout mobile (< lg)

- **Ułożenie kafelków**
  - Ta sama siatka `grid`, ale bez wymuszania 2×2 – domyślnie `grid-cols-1`.
  - Kafle wyświetlane jeden pod drugim, pełna szerokość sekcji, z zachowaniem kolejności: frontend → backend → wdrożenie → administracja.
  - Zaokrąglone rogi na całym bloku (`rounded-3xl`) mogą zostać, ale dodatkowo można dodać wewnętrzny `gap-4`, aby kafelki nie wyglądały „sklejone” na małych ekranach.

- **Typografia i spacing**
  - Padding w kafelkach zmniejszony na mobile: `px-6 py-8`.
  - Nagłówki w kafelkach: `text-xl` na mobile, z przejściem do `md:text-2xl` na większych szerokościach.
  - Opisy: `text-sm` z `leading-relaxed`, zachowujące czytelność na małych ekranach.

- **Ikony i wyrównanie**
  - Ikony mogą być wyśrodkowane (np. `mx-auto`) lub wyrównane do lewej – sugerowane jest wyrównanie do lewej, aby zachować spójność z sekcją `About`.
  - Tekst w kafelkach zasadniczo wyrównany do lewej, ale cała sekcja (nagłówek + lead) wyśrodkowana (`text-center`).

## Integracja ze stylistyką projektu

- **Kolorystyka**
  - Kolorowe tła kafelków nawiązują do zrzutu, ale cała sekcja jest osadzona na `bg-background`, tak jak inne sekcje.
  - Tekst na kafelkach jest biały (`text-white`), a w razie potrzeby można dodać delikatny overlay (`bg-black/5`), by zwiększyć kontrast.

- **Dostępność**
  - Kontrast tekstu do tła sprawdzony pod kątem WCAG – w razie zbyt niskiego kontrastu odcienie kolorów będą lekko przyciemnione.
  - Ikony są jedynie wsparciem wizualnym, pełny kontekst zapewnia tytuł i opis.

- **Responsywne odstępy**
  - Spójne użycie `py-16` na mobile i `lg:py-20` na desktopie, oraz `px-4` dla kontenera, tak jak w `Hero` i `About`.

## Implementacja techniczna

- **Komponent sekcji**
  - Nazwa komponentu: `Services`.
  - Lokalizacja: `newstack/components/services.tsx`.
  - Struktura:
    - `section` z `id="services"` i wrapperem kontenera (`max-w-[1200px]`, `px-4`, `py-16`, `lg:py-20`).
    - Nagłówek sekcji z tytułem „Moje usługi” i krótkim leadem.
    - Siatka `grid` z czterema kafelkami, layout i kolory zgodne z opisem powyżej.
  - Ikony mogą być zaimportowane z `lucide-react` (np. `Cpu`, `Smartphone`, `LayoutPanelTop`, `Star`) lub jako lokalne SVG/`next/image`, w zależności od preferencji projektu.

- **Integracja na stronie głównej**
  - Zaimportować `Services` w `newstack/app/page.tsx`.
  - Umieścić sekcję pod `About`, tak aby kolejność sekcji była: `Hero` → `About` → `Services` → (kolejne sekcje, jeśli występują).

## Sekcja Blog – uwagi techniczne

- Sekcja `Blog` jest zaimplementowana jako komponent `Blog` w `newstack/components/blog.tsx`, korzystający z tego samego kontenera (`max-w-[1200px]`, `px-4`, `py-16 lg:py-20`) i tokenów kolorów co `Services`/`About`.
- Dane wpisów blogowych są obecnie trzymane lokalnie jako statyczna tablica typu `BlogPost` (id, title, category, imageSrc, slug, excerpt, publishedAt), dzięki czemu w przyszłości można łatwo podpiąć zewnętrzne API (np. Strapi) lub `@tanstack/react-query` bez zmiany struktury UI.
- Każdy wpis prezentowany jest jako karta z obrazkiem (`next/image`), kategorią, tytułem i krótkim opisem; layout jest responsywny (1 kolumna na mobile, 2–3 kolumny na większych ekranach), spójny z resztą projektu.


