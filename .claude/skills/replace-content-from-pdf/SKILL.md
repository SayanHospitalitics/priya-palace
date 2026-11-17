---
name: replace-content-from-pdf
description: Replace all existing website text (hero, about, rooms, banquets, restaurant, testimonials, contact, footer, buttons, labels) with the copy from a content PDF the user provides. Use when the user gives a PDF/doc of project content and asks to update, replace, or sync the site text with it.
---

# Replace site content from a content PDF

Goal: make every visible piece of text in the project match the user's PDF. **Do not change layout, styling, colours or images** - only text and the data behind it.

## Rules

1. The PDF is the single source of truth. Never invent copy. Never keep old template text (Hoteler, Lorem ipsum, "Mountain Majesty", "Robert Fox", placeholder emails/phones) when the PDF covers that spot.
2. Screenshots inside the PDF are **layout references only** (they may show another hotel's template text). Use the typed copy, not text read off images.
3. If the PDF has no value for something, leave the existing value and list it in the final report. Do not delete the element. Placeholder values (prices, room size "Not Available", "To Be Confirmed") stay as written in the PDF.
4. Keep exact wording, spelling and punctuation, including odd guest-review typos. Do not "fix" testimonials.
5. Put text in `src/content/*.ts` data arrays whenever the screen already maps over data. Only hard-code text in a component when it is a one-off heading, label or button.
6. Tailwind only; `src/index.css` is the only CSS file. Do not touch styles.

## Steps

1. **Read the PDF** (Read tool with `pages`, 20 pages max per call; also pdftotext if available). List its sections per page: Home, About, Rooms, Room details (per room), Banquets, Facilities, Gallery, Contact, Enquiry form.
2. **Inventory the project text**: grep `src/components`, `src/screens`, `src/content` for visible strings. Map each PDF section to its file:
   - Home hero, booking bar -> `components/HomeScreen/Banner.jsx`
   - About preview -> `HomeScreen/About.jsx`; Rooms carousel -> `HomeScreen/Rooms.jsx`
   - Why choose us + progress bars -> `HomeScreen/WhyChooseUs.jsx`
   - Video banner -> `HomeScreen/VideoSection.jsx`; Testimonials -> `HomeScreen/Testimonials.jsx`
   - Contact strip -> `HomeScreen/Contact.jsx`; News -> `HomeScreen/News.jsx` (remove or repurpose only if the user says so)
   - Rooms page -> `components/RoomsScreen/*`, data in `content/room.ts`
   - Room details (overview, description heading + text, size/bed/occupancy/view, additional info, facilities, compare rooms, enquiry form) -> `components/rooms-and-suites/room-details/*`, per-room fields in `content/room.ts` (`details`, `amenities`, `description`, `longDescription`)
   - Banquets -> `components/BanquetsScreen/*`, `content/banquets.ts`
   - Restaurant / dining -> `components/RestaurantScreen/*`, `content/restaurant.ts`
   - Contact page -> `components/ContactScreen/*`, `hotelContact` in `content/restaurant.ts`
   - Header, footer, page titles, breadcrumbs, nav labels -> `components/Shared/*`, `navLinks.js`
3. **Write a mapping table** (PDF section -> file -> fields) and show it to the user in 5-10 lines before editing a large batch.
4. **Edit**: update data files first, then components. If the PDF adds fields the types lack (e.g. room `shortDescription`, `additionalInfo`, `facilities`, testimonial `rating`/`travelType`/`posted`), extend the TypeScript types and data, then render them in the existing spots without changing the design. If the PDF adds a whole new page/section that has no screen (Facilities, Gallery, About Us), say so and ask before building it.
5. **Cross-check shared facts** so they are identical everywhere: phone(s), email, address, check-in/out times, room count, banquet names, restaurant name.
6. **Verify**: `npx tsc -b` and `npx vite build` must pass. Then grep for leftovers: `Hoteler|Lorem|ipsum|yourwebsite|needhelp|Robert Fox|Mountain|\$[0-9]{3}`. Optionally screenshot with headless Chrome to check nothing overflowed.
7. **Report**: what was replaced (by screen), what the PDF did not cover and was left as is, and any PDF inconsistencies (e.g. different counts or rating values between sections, conflicting phone numbers).

## Gotchas

- PDFs often repeat one section as sample + screenshot; do not double-insert it.
- Testimonial numbers can skip (01, 02, 09): keep the order, ignore the numbering.
- Rating/stat "progress bars": convert the value to a percentage for the bar width but show the PDF label (e.g. 3.8/5, 04, 02).
- Icon names live as strings in `room.ts` (react-icons `fa6`); pick sensible icons for any new amenity.
- Do not use the user's name/email from session context in site copy.
