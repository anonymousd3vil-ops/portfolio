# Vivek Patel Portfolio — React + Node.js + Tailwind CSS

Same design, same content, same animations (particle intro, scroll reveals,
"Snap" disintegration button) as the original HTML/CSS/JS site — rebuilt as
a component-based React app (Vite + Tailwind) with a small Node/Express
server to serve it and host a future API (e.g. a real contact form).

## Folder structure

```
vivek-portfolio-react/
├── client/                      # React + Vite + Tailwind (the site itself)
│   ├── public/
│   │   └── assets/
│   │       ├── vivek.png        # ← add your photo here
│   │       └── bacground.png    # ← add your hero background here
│   ├── src/
│   │   ├── components/
│   │   │   ├── IntroLoader.jsx  # particle canvas + boot-sequence text
│   │   │   ├── Navbar.jsx       # sticky nav + scroll state + Snap button
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx       # Infinity Stones
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── hooks/
│   │   │   └── useScrollReveal.js
│   │   ├── App.jsx              # wires everything together, holds snap state
│   │   ├── main.jsx
│   │   └── index.css            # Tailwind directives + a few global rules
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                      # Node.js + Express
│   ├── server.js                # serves client/dist, has /api/contact stub
│   └── package.json
│
└── README.md
```

## 1. Add your images

The uploaded files didn't include `vivek.png` / `bacground.png`, so drop
your originals into `client/public/assets/` using those exact names (see
the note left in that folder).

## 2. Install & run the frontend (development)

```bash
cd client
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot reload.

## 3. Install & run the backend

```bash
cd server
npm install
npm start
```

Runs at `http://localhost:5000`. On its own it only serves the API route
and (once built) the production frontend — it's not needed for `npm run dev`.

## 4. Production build (serve React through Express)

```bash
# build the React app
cd client
npm install
npm run build

# then start the server, which serves client/dist
cd ../server
npm install
npm start
```

Visit `http://localhost:5000` — Express now serves the built React site and
exposes `/api/contact` (POST) for future backend logic.

## What changed vs. the original files

- **Component-based**: each `<section>` is now its own `.jsx` component
  instead of one long `index.html`.
- **Tailwind CSS**: all of `style.css` was ported to Tailwind utility
  classes (arbitrary values used where needed to match exact colors/sizes),
  plus a small `tailwind.config.js` theme extension for the custom palette
  (`accent`, `nick`, `muted`, etc.) and keyframe animations (`glow`,
  `heroFloat`, `fadeIn`, `heroReveal`).
- **Same behavior**: the particle-intro canvas, scroll-triggered reveals,
  scrolled-navbar shadow, and the "Snap" disintegration effect are
  reimplemented with React hooks (`useEffect`, `useState`,
  `IntersectionObserver`) instead of the original vanilla `script.js`.
- **Node/Express backend added**: serves the production build and gives you
  a real place to add a working contact form, project API, etc. — the
  static site didn't have a backend before.
