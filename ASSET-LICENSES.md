# Dualite design assets - 11 October 2026

## Use safely

- `paintings/` and `textures/`: verified public-domain / CC0 source originals and labeled derivatives. These can be used in the public debates website, subject to the PD-Art jurisdiction caveat below.
- `fonts/website-fonts.css`: Instrument Serif (regular/italic) + Inter Tight (400/500/700 and 400 italic). SIL OFL 1.1 allows website use, but these are NOT public domain or CC0. License texts included. These are substitutes, not the exact paid display/UI fonts.
- `live-site/` and `references/`: exact recovered files, NOT rights-cleared. Do not deploy them. Private reference only.

## Exact typography from live CSS

Source: https://dualite.dev/

Display: **Perfectly Nineties Regular**, **Perfectly Nineties Regular Italic**. UI: **Neue Montreal Regular**, **Neue Montreal Medium**, **Neue Montreal Bold** (italic declarations also exist). These names come from actual @font-face declarations, not visual guesses. Paid font binaries are deliberately NOT redistributed.

Official licensing: https://jenwagner.co/products/perfectly-nineties-a-nostalgic-serif/ and https://pangrampangram.com/products/neue-montreal . Perfectly Nineties requires a web license for embedded website use. Neue Montreal is commercial; a free trial is not public-site permission.

Exact declarations and WOFF2 source URLs: `fonts/exact-live-font-faces.REFERENCE.txt`. Other loaded families include Inter, Hanken Grotesk, Instrument Sans, Fragment Mono, Space Grotesk, JetBrains Mono; the exact 84 open-font resource files are in `fonts/live-open-fonts/`. Loaded declaration does not establish that every family is used visibly.

Free substitute family pages: https://fonts.google.com/specimen/Instrument+Serif and https://fonts.google.com/specimen/Inter+Tight . Exact downloaded source URLs: `fonts/index.json`.

## Comp art: exact versus substitute

| Comp/section | Exact recovery | Rights / identity |
|---|---|---|
| 1, seated reader | references/pC6wv63RktJx8IvHALRzmZ2K90.webp, 2454 x 2877 | Exact pixels, title/artist/source UNIDENTIFIED. Not cleared. The Rawpixel bearded reader search result was visually different and is NOT this source. |
| 2, reaching hands | references/MrzbGkWjxDhxrYPy9KozED1mELw.webp (763 x 481) and RJ9hesLLw58wHPMEzrtVtuqP2Rs.webp (685 x 481) | Michelangelo, The Creation of Adam. Original PD source downloaded separately; Dualite's edited cut-outs are not licensed independently. |
| 3, colored damask | references/cJsiq0q9niRWGtJQLVeGVlbzw.webp and blue/purple counterparts | Exact 2556 x 1712 files. Original textile/source unidentified; not cleared. Use Met derivatives below instead. |
| 4, rider | references/gV9CAG0ScGdHXiu1ySA6CI6mLU.png, 2200 x 3136 | Exact transparent figure recovered, original artist/title unidentified. It is NOT confirmed as Tiepolo, Alexander or Napoleon. |
| Outer cream marble and sage backdrop | exact current site backdrops in live-site/ | Comp texture identity not proven. Use CC0 cream marble/paper and sage textile substitute. |

## Public-domain paintings / drawings

- `paintings/michelangelo-creation-of-adam.png`: **The Creation of Adam**, Michelangelo (1475-1564), between 1508 and 1512. 3641 x 2361 full original; `creation-of-adam-web.jpg` is web-ready JPEG derivative. Source: https://commons.wikimedia.org/wiki/File:The_Creation_of_Adam_(1).png . Image: https://upload.wikimedia.org/wikipedia/commons/a/ae/The_Creation_of_Adam_%281%29.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original . PD-old / PD-Art, not CC0. Wikimedia says faithful 2D reproductions are PD in the US; other jurisdictions may restrict photographic reuse. Highest original for this selected verified file, not claimed highest-resolution reproduction anywhere.
- `paintings/met-459470-seated-saint-reading.jpg`: **A Seated Saint Reading from a Book**, attributed to Francesco Botticini. CC0/Open Access, public domain verified through Met API `isPublicDomain=true`. A substitute for comp 1, not a match. Source: https://www.metmuseum.org/art/collection/search/459470 . Image: https://images.metmuseum.org/CRDImages/rl/original/DP358993.jpg . Original API image.
- `paintings/met-459412-warrior-on-horseback.jpg`: **A Warrior on Horseback**, The Veneto, second quarter 15th century. CC0/Open Access, public domain verified through Met API. Substitute for comp 4, not a match. Source: https://www.metmuseum.org/art/collection/search/459412 . Image: https://images.metmuseum.org/CRDImages/rl/original/DP-13665-017.jpg . Original API image. This is a drawing, not the comp's colored cut-out.

## CC0 textures

- `textures/met-236195-furnishing-damask.jpg`: **Furnishing damask**, probably Italian, 1700-1725. CC0/Met Open Access, 961 x 4000. https://www.metmuseum.org/art/collection/search/236195 ; https://images.metmuseum.org/CRDImages/es/original/DP169353.jpg . Substitute only.
- `textures/met-217363-crimson-silk-damask.jpg`: **Crimson Silk Damask**, Spanish or Italian. CC0/Met Open Access, 2114 x 4000. https://www.metmuseum.org/art/collection/search/217363 ; https://images.metmuseum.org/CRDImages/es/original/DP-19257-008.jpg . Substitute only.
- `textures/met-220544-fragment-of-silk-damask.jpg`: **Fragment of silk damask**, French, 1725-30. CC0/Met Open Access, 1713 x 2937. https://www.metmuseum.org/art/collection/search/220544 ; https://images.metmuseum.org/CRDImages/es/original/46079.jpg . Source of sage/oxblood/indigo/plum-damask-web.jpg, cropped and recolored substitutes, NOT seamless tiles. Use as `background-size: cover`, not a repeated tile.
- `textures/Marble012_4K-JPG_Color.jpg`: ambientCG **Marble 012**, CC0, 4096 x 4096. https://ambientcg.com/view?id=Marble012 ; downloaded package https://ambientcg.com/get?file=Marble012_4K-JPG.zip . `cream-marble-web.jpg` is recolored derivative.
- `textures/Paper001_4K-JPG_Color.jpg`: ambientCG **Paper 001**, CC0, 4096 x 4096. https://ambientcg.com/view?id=Paper001 ; downloaded package https://ambientcg.com/get?file=Paper001_4K-JPG.zip . `cream-paper-web.jpg` is recolored derivative.
- ambientCG rights: https://docs.ambientcg.com/license/ . Met rights: https://www.metmuseum.org/policies/image-resources . API originals and public-domain flags inspected directly for each Met item.

## Scope and checks

671 unique image originals downloaded from the site's publicly listed pages. See `live-site/asset-manifest.md` for every file's source URL and page/section mapping, plus `index.json` for dimensions. No claim of exhaustive hidden/runtime assets, videos, embedded third-party imagery or unreachable resources. No paid font files included. The four comp art styles are covered, but exact reader/rider/damask source identification is unresolved; do not treat recovered site files as an all-clear.

Images were opened and visually checked via contact sheets and full-size reader/rider cut-outs. Met drawings are genuine substitutes, not visually exact equivalents. No copyrighted Studio Maydit comps or implementation code is included in the deployable bundle.
