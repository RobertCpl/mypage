This is a `newstack` Next.js project using the App Router, TypeScript, Tailwind CSS 4 and shadcn/ui.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` with your browser to see the result.

The main entry for the marketing page is `app/page.tsx`, which składa się z sekcji:

- `Hero`
- `About`
- `Services`
- `Projects`
- `Blog`
- `ContactSection` (formularz kontaktowy)

## Blog (Markdown)

Blog jest oparty o pliki Markdown w repozytorium:

- wpisy: `content/blog/*.md`
- lista: `/blog`
- pojedynczy wpis: `/blog/[slug]`

Szczegóły (format frontmatter, obrazki, drafty, pliki w kodzie): `BLOG.md`.

## Formularz kontaktowy

Sekcja kontaktowa znajduje się w:

- komponent: `components/contact.tsx` (`ContactSection`)
- endpoint API: `app/api/contact/route.ts`

### Pola formularza

- Imię
- E-mail
- Wiadomość

Formularz korzysta z:

- `@tanstack/react-form` – zarządzanie stanem i walidacją
- komponentów shadcn/ui: `Input`, `Textarea`, `Label`, `Button`

### Konfiguracja SMTP

Aby formularz wysyłał e‑maile, ustaw następujące zmienne środowiskowe (np. w `.env.local`):

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=twoj_login_smtp
SMTP_PASS=twoje_haslo_smtp
CONTACT_TARGET_EMAIL=adres_docelowy@twojadomena.pl
```

Uwagi:

- `CONTACT_TARGET_EMAIL` – adres, na który będą trafiały wiadomości z formularza. Jeśli nie zostanie ustawiony, zostanie użyty `SMTP_USER`.
- Dla portu `465` transport ustawi tryb `secure` automatycznie.

### Ręczne testowanie

1. Uruchom aplikację: `npm run dev`.
2. Otwórz stronę i przejdź do sekcji „Kontakt”.
3. Sprawdź scenariusze:
   - Wysyłka pustych pól – powinny pojawić się błędy walidacji po stronie frontu.
   - Błędny email – komunikat o niepoprawnym adresie.
   - Za krótka wiadomość – komunikat o minimalnej długości.
   - Poprawne dane – formularz powinien:
     - wyłączyć przycisk podczas wysyłania,
     - po sukcesie pokazać komunikat sukcesu,
     - wysłać e‑mail na `CONTACT_TARGET_EMAIL`.

