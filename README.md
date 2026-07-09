# HAPPI LOGISTICS Website

Professionelle Unternehmenswebsite auf Basis von Next.js 15, React 19, TypeScript, Tailwind CSS, next-intl, Framer Motion, React Hook Form, Zod und Prisma.

## Enthalten

- App Router mit `de` und `en` Locale-Struktur
- Startseite mit Hero, Kennzahlen, Leistungen, Fahrzeugen, Bewertungen, Ablauf, FAQ und Kontakt
- 15 dynamische Leistungsseiten
- 13 dynamische Standort-Landingpages
- Über uns, Referenzen, Karriere, Blog, FAQ, Kontakt, Angebot, Kundenportal und Admin
- Mehrstufiges Angebotsformular mit Zod-Validierung
- Kontaktformular mit Zod-Validierung
- SEO-Metadaten, OpenGraph, Twitter Cards, LocalBusiness Schema, Service Schema, robots.txt und sitemap.xml
- Prisma Schema für Kunden, Angebote, Aufträge, Blog und Karriere

## Installation

```bash
npm install
npm run dev
```

Die lokale Seite läuft danach unter:

```bash
http://localhost:3000/de
```

## Datenbank

Eine PostgreSQL-Verbindung wird über `.env` gesetzt:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/happi_logistics"
```

Danach:

```bash
npm run prisma:generate
npm run prisma:migrate
```

## Deployment

Das Projekt ist für Vercel vorbereitet. Vor dem Deployment `DATABASE_URL` und spätere Cloudinary-Variablen in Vercel hinterlegen.
