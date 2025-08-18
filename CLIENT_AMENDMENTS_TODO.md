## Client Amendments To‑Do

Status legend: [x] Done · [ ] Pending · [~] Partial

### Global
- [x] Rename menu item to `Munyaradzwe Foundation` (`src/components/Navigation.tsx`)
- [x] Switch all WhatsApp links to +44 7376 712 695
  - `src/components/Footer.tsx`
  - `src/app/contact/page.tsx`
  - `src/app/african-sushi-wear/page.tsx`
  - `src/app/rujeko/page.tsx`
  - `src/app/foundation/page.tsx`
- [ ] USD/GBP display or selector for prices (needs approach and rates)

### Footer
- [x] Update tagline under logo: “A central and unifying platform celebrating African Identity, Creativity, and Community through fashion and philanthropy” (`src/components/Footer.tsx`)
- [x] Phone: +44 7376 712 695; WhatsApp link updated
- [x] Location: United Kingdom
- [x] Replace memorial line with “Dream, Create, Celebrate”

### Contact page
- [x] Update phone to +44 7376 712 695
- [x] Update location to United Kingdom
- [x] Update WhatsApp send actions to UK number (`src/app/contact/page.tsx`)

### Home (African Pride) `src/app/page.tsx`
- [x] Replace “Artisan Excellence” card with “RUJEKO RWAKO” and copy
- [x] Update “Tradition” card to “Kiki Delicacy – Catering with a Personal Touch” and use image `public/images/Kiki Delicacy/Kiki delicacy 7.jpg`
- [x] Update “Legacy” card text to “Legacy: The Impact of His Achievements”
- [ ] Swap “Legacy” image to “novus album cover” (needs exact image path)
- [ ] Integrate African Pride logos & Munyaradzwe logo from drive (needs assets/placement direction)
- [ ] Add Events poster/content (needs asset and placement)

### African Sushi Wear `src/app/african-sushi-wear/page.tsx`
- [x] Add Pricing & Delivery notes per client instructions
- [x] Add Creative Team entries: Mrs. Zivayi Mapanzure (Managing Director), Christabel Kiki Mapanzure (Fashion Designer)
- [x] Update CTA WhatsApp links to UK number
- [~] T‑Shirts pricing: base updated to $35 for an example item; “KUHADHIRA” and “zvichanaka chete” still need dedicated SKUs at $40
- [ ] Revert page look/slider to reference site and add model slider using drive images (needs design parity guidance and asset list)
- [ ] Create T‑Shirt categories (LOVE, CONSOLIDATION, FAITH, HOPE, VIBES ON VIBES, NOVUS AFRICA MAP) and populate from folder (needs extracted images and mapping)

### Rujeko `src/app/rujeko/page.tsx`
- [x] Add subtitle “By Kiki Mapanzure”; keep “Radiance Woven in Heritage”
- [x] Replace story section with provided RUJEKO content
- [x] Update WhatsApp links to UK number
- [ ] Replace banner image with Kiki wearing a silver dress (needs exact image path)
- [ ] Replace "Our Story" pictures with images from the “our story” folder (needs assets)
- [ ] Add RUJEKO RWAKO section (booking steps, services)
- [ ] Add fabric pricing per meter (Poly Cotton $10, 100% Cotton $15, Silk $8) with a neat table
- [ ] Add totem fabric descriptions (Nzou/Elephant, Mhofu/Shava/Eland, Shumba/Lion, Ngenya/Crocodile, Bambomukunda)

### Foundation `src/app/foundation/page.tsx`
- [x] Update hero title to “Welcome to the MUNYARADZWE Foundation” and intro paragraph
- [x] Update all WhatsApp links to UK number
- [ ] Optional: add team bios provided in `changes.txt`

### Assets/inputs needed to finish
- Home: exact file path for “novus album cover”; placements for African Pride & Munyaradzwe logos; Events poster image and where to show it
- Rujeko: banner (Kiki in silver dress) image path; “our story” image set; booking steps/services details; fabric pricing confirmation; totem write‑ups final copy
- African Sushi Wear: list of model images for slider; extracted T‑shirt images and category mapping; SKU identifiers for the two $40 T‑shirts
- Currency: preference for currency selector vs auto‑convert (and rate source)

### Notes
- All edited files pass lints. Changed files: `src/components/Navigation.tsx`, `src/components/Footer.tsx`, `src/app/page.tsx`, `src/app/african-sushi-wear/page.tsx`, `src/app/rujeko/page.tsx`, `src/app/foundation/page.tsx`, `src/app/contact/page.tsx`.


