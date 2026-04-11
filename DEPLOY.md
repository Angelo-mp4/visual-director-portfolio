# Deploying Your Portfolio

## Option 1 — Vercel (Recommended, free, 2 minutes)

1. Push your project to GitHub (create a free account at github.com)
2. Go to vercel.com → Sign in with GitHub → "Add New Project"
3. Select your repository → click **Deploy**
4. Done. Your site is live at `https://your-project.vercel.app`

Every time you push to GitHub, Vercel auto-redeploys.

---

## Option 2 — Netlify (also free)

1. Run `npm run build` in your project folder — creates a `/build` folder
2. Go to netlify.com → "Add new site" → "Deploy manually"
3. Drag-and-drop the `/build` folder into the Netlify drop zone
4. Done. Your site is live.

---

## Option 3 — GitHub Pages

1. Install gh-pages:
   ```
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://YOUR-GITHUB-USERNAME.github.io/visual-director-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Run:
   ```
   npm run deploy
   ```

---

## Before deploying — checklist

- [ ] Replace all `VIDEO_ID` placeholders in `src/data/projects.js` with real YouTube embed IDs
- [ ] Add your portrait to `/public/images/portrait.jpg`
- [ ] Add concert/poster photos to `/public/images/`
- [ ] Test locally: `npm start`
- [ ] Build: `npm run build` — check there are no errors

---

## React Concepts Summary (for reference)

| Concept | Where used in this project |
|---|---|
| JSX | Every component — HTML-like syntax in .js files |
| Function Components | Home, About, Work, Contact, Navbar, PhotoGallery, ContactDetail |
| Class Component | `SkillsCard.js` — constructor, this.state, setState, componentDidMount |
| State | `useState` in Work (filter), Contact (form), PhotoGallery (open/idx) |
| Props | PhotoGallery receives `photos`, `cover`, `title`; SkillsCard receives `categories`; ContactDetail receives `label`, `value`, etc. |
| PropTypes | PhotoGallery.propTypes, SkillsCard.propTypes, ContactDetail.propTypes |
| Hooks | `useState`, `useEffect`, `useCallback`, `useRef` |
| Routing | React Router v6: `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>` |
| Styling | External CSS files, inline styles (`style={{}}`), CSS custom properties |
| Deploying | Vercel / Netlify / GitHub Pages (see above) |
