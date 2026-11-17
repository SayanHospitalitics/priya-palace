---
name: split-screen-components
description: Break a screen file (e.g. src/screens/Screen.jsx) into small React components placed in src/components/<ScreenName>/. Use when the user asks to split, componentize, or break a screen/page UI into components, or adds a new large screen file.
---

# Split a screen into components

Goal: turn one big screen file into small components **without changing the UI at all**.

## Folder layout (required)

Screens stay flat in `src/screens/`. All their components live under `src/components/`, grouped in a folder named after the screen:

```
src/
  screens/
    <Name>.jsx               # composes components, calls useLegacyPage(meta), exports meta
  components/
    <Name>/                  # screen-wise folder, one per screen
      Header.jsx
      Banner.jsx
      ...                    # one file per section / logical block
    Shared/                  # only components used by 2+ screens
```

Example: `src/screens/Screen.jsx` → `src/components/Screen/Header.jsx`, `src/components/Screen/Banner.jsx`.

- For screens grouped in a folder (e.g. `src/screens/rooms-and-suites/rooms/Screen.jsx`), mirror it: `src/components/rooms-and-suites/rooms/RoomsSection.jsx`.
- Header, footer, page title, preloader and menus used by several screens go in `src/components/Shared/` (pass differences like logos as props).
- Every new screen must also be registered in the `routes` map in `src/App.tsx`, and linked from the navbar (`Shared/navLinks.js`).
- If the user asks for a flat screen with no folder (e.g. `src/screens/ContactScreen.tsx`), put its components in `src/components/ContactScreen/` and use the same extension (`.tsx`) for them.
- Do NOT create a `src/screens/<Name>/` folder or a nested `components/` folder.
- The screen imports like `import Header from '../components/<Name>/Header'`.
- `import Screen from './screens/Screen'` must keep working.

## Rules

1. **Do not change the rendered UI, text or image paths** - only split the code. Styling is Tailwind utility classes only; the only CSS file is `src/index.css` (global colours/fonts in `@theme`). Never add other CSS files or inline `<style>`.
2. Split by top-level blocks: preloader, header, each `<section>`, footer, scroll-to-top. Split big blocks further (e.g. a header with a side menu and search popup) when over ~100 lines. Sub-components of one block stay in the same screen folder.
3. One component per file, PascalCase filename = component name, `export default function Name()`.
4. Keep `meta` and the `useLegacyPage(meta)` call in the screen file only.
5. Keep any `import` needed by the moved JSX (images, hooks) in the component that uses it; fix relative paths.
6. Repeated blocks (room cards, news posts, testimonials) may become a data array + `.map`, but only if the rendered HTML stays identical.
7. After splitting: delete leftover old files, grep for stale imports, run `npx vite build`, and confirm no unresolved imports.
8. Tell the user to close stale editor tabs of deleted files so they aren't written back.

## Steps

1. Read the screen file; list top-level blocks with line ranges.
2. Create `src/components/<Name>/` and write each component from its exact line range.
3. Update `src/screens/<Name>.jsx` to import and render them in the original order inside the original wrapper.
4. Build, then report the tree.
