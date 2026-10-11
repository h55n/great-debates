# The Great Debates

An independent static editorial website with 113 historical entries. Uses HTML, CSS and browser-native JavaScript. No runtime dependencies or server are needed in production.

## Run locally

Node 18 or later:

```
npm start
```

Open http://localhost:4173.

## Build and deploy

```
npm run build
```

Deploy the contents of `dist/` to a static host. `vercel.json` declares the build and single-page fallback. Equivalent hosts must rewrite unknown paths to `index.html`. Direct debate URLs use `/debate/<slug>`.

## Content

`public/debates.json` holds all 113 entries, their chronology, sides and positions, neutral summary, significance, historical-record qualification and sources. Entry numbers are editorial order, not objective rankings. The home features four expanded entries. Every entry has a dedicated page. Historical dialogues, coercive disputations, trials and uncertain accounts are labeled as such. No fabricated quotation or placeholder is included.

The current source set was recovered from an earlier study and corrected where possible. An independent per-entry QA fact sheet has been applied, correcting known errors and removing disputed causal claims, numbers and quotations. Some inherited citations lead to institutional index pages or inaccessible records rather than a complete transcript. Do not advertise the archive as a complete transcript repository.

## Interaction

Archive search, era filters, sorting, empty-state reset, chronological timeline, sources opening in a new tab, internal navigation, browser back/forward and entry pagination. Controls alter the local presentation only. No analytics, account system, forms, newsletter subscription or backend is implied.

## Assets and licenses

Only rights-cleared assets from the supplied build bundle are included. Local OFL fonts: Instrument Serif and Inter Tight. The Met CC0 drawings and damask derivatives; Michelangelo's Creation of Adam PD-Art reproduction. The reader-ink PNG is an editorial ink derivative of the credited Met drawing. Artwork is not presented as a likeness of any debate participant. Attribution is available on the project page and in `ASSET-LICENSES.md`. No paid Dualite typography, original site cut-outs or screenshot comps are shipped.

## Validation

`npm test` checks data continuity, all required fields, unique route slugs and sources. Browser QA uses a locally installed Playwright tool (not needed for production) with system Chrome. The application has been tested at 320, 390 and 1440 pixels, with 113 dedicated route checks, archive interactions and overflow checks.
