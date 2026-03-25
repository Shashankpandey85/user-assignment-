# BuyerForeSight — User Directory

A React User Directory application built with **Vite + React 18**. Browse and search users fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com), with a detailed profile view for each user.

## Features

- 📋 User directory dashboard with search and sort
- 🔍 Filter users by name or email
- ↕️ Sort by name or company
- 👤 Detailed profile view per user
- 💀 Loading skeleton animation
- 📱 Responsive design (mobile-friendly)
- 🎨 Dark theme with green/cyan accent colours

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx    # User list view
│   │   └── DetailPage.jsx   # User detail view
│   ├── App.jsx              # Main app component
│   ├── App.css              # All styles
│   └── main.jsx             # React root
├── index.html               # Vite entry point
├── vite.config.js           # Vite configuration
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Installation & Running

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```