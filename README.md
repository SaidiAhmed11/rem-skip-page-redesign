# REM Waste Skip Selection Page — React Redesign
📦 *Live Demo*: [Click here to try it out](https://rem-skip-page-redesign.vercel.app)  
🗂️ *GitHub Repo*: [github.com/SaidiAhmed11/rem-skip-page-redesign](https://github.com/SaidiAhmed11/rem-skip-page-redesign)

---
## 🎯 Project Overview

This project is a complete redesign and implementation of the "Choose your skip size" page from REM Waste. The aim was to provide a more modern, responsive, and user-friendly experience by integrating advanced UI/UX techniques, clean state management with Redux, and a cohesive visual theme inspired directly by REM Waste’s brand identity.

---
## 🛠️ Getting Started

To run this project locally:

1. Clone the repo

   ```bash
   git clone https://github.com/SaidiAhmed11/rem-skip-page-redesign.git
   cd rem-skip-page-redesign
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm start
   ```

This will start the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
---
## 🎨 Design & Visual Approach

I started by analyzing the REM Waste brand and noticed their main color palette included:

- **Orange**: `#ff8a00`  
- **Yellow**: `#fde047`  
- **Creamy White**: `#fff7ed`  
- **Light Gray**: `#f2f2f2`  
- **Dark Shades**: `#202022`, `#1d1d1f`, `#2b2b2d`, `#111827`

Using these, I created a balanced UI that blends dark mode aesthetics with bright accent colors. Here's a breakdown of visual upgrades:

- Custom header and footer featuring REM Waste logo  
- Updated favicon with the company logo  
- Added a background image of a real skip for visual realism  
- Used hover effects like zoom on skip images, glowing orange buttons, and highlighted selections  
- Created reusable badges for skip restrictions (e.g. not allowed on road or heavy waste not allowed)  
- Card highlights with orange border and background when selected  

---

## 🧠 Functional Features & Logic

### ✅ Built a Stepper Form

- Created a multi-step form with a modern design  
- Only the "Select Skip" step is active (Step 2) as per the challenge requirements  

### 📦 Skip Cards Redesign

- Dynamic layout with skip image, name, size, price, and measurement badges  
- Hovering zoom effect + orange buttons animate to simulate waste throwing  
- Selection is visually emphasized using color, borders, and background  

### ♻️ Redux Toolkit Integration

- Used `@reduxjs/toolkit` with `createAsyncThunk` to fetch skip data based on user location (e.g. postcode and area)  
- Centralized state management (selected skip, form steps, fetched skips)  
- Redux slice also integrates `localStorage` to persist skip selection across reloads  

### 📚 Modal Skip Info

- Replaced original top-right badge with an Info button on each card  
- Clicking it opens a modal with:  
  - Description  
  - Image  
  - Full measurements table  
  - Select/Unselect ability (if skip is allowed)  
- If skip is disabled (not allowed on road + no heavy waste), card is dimmed and info modal is not clickable  

### 🧾 All Skips Info Modal

- A sticky "Skips Info" button in the header opens a global modal with info for all skip types  
- Scroll-locked page (background doesn’t scroll when modal is open)  
- Click outside to close modal + a large orange "Close" button inside  
- All content is keyboard- and screen-reader-friendly  

---

## 🧩 Technologies & Packages Used

### ⚛️ Frontend Stack

- React 18  
- Tailwind CSS 3 — for fast and responsive styling  
- Redux Toolkit — async state with `createAsyncThunk`  
- Lucide React — modern SVG icons  
- Axios — API requests  
- React Redux — store access  

---

### 📦 Dev Tools

```json
"devDependencies": {
  "eslint": "^9.28.0",
  "eslint-plugin-react": "^7.37.5",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-jsx-a11y": "^6.10.2",
  "eslint-config-prettier": "^10.1.5",
  "eslint-plugin-tailwindcss": "^3.18.0",
  "prettier": "^3.5.3",
  "tailwindcss": "^3.3.2",
  "postcss": "^8.4.21",
  "autoprefixer": "^10.4.14"
}
```
---
### 📦 Runtime Dependencies

All runtime packages used in this project:

```json
"dependencies": {
  "@reduxjs/toolkit": "^2.8.2",
  "axios": "^1.9.0",
  "lucide-react": "^0.514.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-redux": "^9.2.0",
  "react-scripts": "5.0.1",
  "tailwindcss": "^3.x"
}

```
🧠 Developer Notes

Codebase is heavily commented with friendly, human-readable explanations for maintainability.

Used **ESLint** and **Prettier** to keep the codebase clean, readable, and consistent across the team.

UX was carefully designed to help users clearly understand skip selection options and restrictions.

All modal dialogs, buttons, and navigation components are fully accessible (keyboard and screen reader compatible).

**localStorage** ensures the selected skip persists on reload, even if the page is refreshed.

---

🔗 External Resources

Skip images and measurements sourced from the official REM Waste site:  
[https://www.renewableenergymarketing.net/skip-hire/](https://www.renewableenergymarketing.net/skip-hire/)

---

🚀 Final Words

This redesign was crafted with care to elevate the customer experience, modernize the frontend architecture, and make it easier for future teams to collaborate and extend functionality.

If you have any feedback or suggestions, we'd love to hear from you!
