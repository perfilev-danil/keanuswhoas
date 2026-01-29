# The Keanu Reeves's Whoas Base 🎬

<div align="center">
  <img src="https://img.shields.io/badge/Keanu-Reeves-blue?style=for-the-badge" alt="Keanu Reeves">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</div>

A web application for browsing iconic **"Whoa"** moments from Keanu Reeves movies using the public API.

[Live Demo](#) · [API](#)

---

## ✨ Features

### 🎥 Movie Browsing

- Search movies by name with **debounced input** to avoid excessive API calls
- Browse all "whoa" clips from selected movies
- **Sidebar navigation** with active link highlighting

### ❤️ Favorites System

- Save favorite clips with **one click**
- Real-time counter showing total favorites in header
- Persistent storage using **Redux state management**

### 🎬 Video Playback

- Play/pause videos directly on their cards
- **Responsive video player** with smooth controls

### 📱 Responsive Design

- Fixed navigation (header, sidebar, footer) with scrollable main content
- Mobile-friendly layout adapting to all screen sizes

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/perfilev-danil/keanuswhoas
cd keanu-whoas
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:5173

## 🛠️ Technologies

- React - UI Library
- Vite - Build Tool & Dev Server
- Redux Toolkit - State Management
- RTK Query - Data Fetching & Caching
- JavaScript (ES6+)
- CSS3 with BEM - Styling Methodology

## Performance Optimizations

- React.memo for component memoization
- useMemo & useCallback hooks to prevent unnecessary re-renders
- Custom debounce hook for search input
- Efficient Redux state updates

## 📄 License

Distributed under the MIT License.

<div align="center"> Whoa... ✨ Made with ❤️ by Danil Perfilev </div>
