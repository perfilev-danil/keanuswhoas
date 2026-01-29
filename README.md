The Keanu Reeves's Whoas Base 🎬

<div align="center">
https://img.shields.io/badge/Keanu-Reeves-blue?style=for-the-badge
https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white

A web application for browsing iconic "Whoa" moments from Keanu Reeves movies using the public API

Live Demo · API

</div>
✨ Features
🎥 Movie Browsing
Search movies by name with debounced input to avoid excessive API calls

Browse all "whoa" clips from selected movies

Sidebar navigation with active link highlighting

❤️ Favorites System
Save favorite clips with one click

Real-time counter showing total favorites in header

Persistent storage using Redux state management

🎬 Video Playback
Play/pause videos directly on their cards

📱 Responsive Design
Fixed navigation (header, sidebar, footer) with scrollable main content

Mobile-friendly layout adapting to all screen sizes

🚀 Quick Start
Prerequisites
Node.js 16.0 or higher

npm or yarn package manager

Installation
Clone the repository

bash
git clone https://github.com/perfilev-danil/keanuswhoas
cd keanu-whoas
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open your browser and navigate to http://localhost:5173

🛠️ Technologies
React - UI Library

Vite - Build Tool & Dev Server

Redux Toolkit - State Management

RTK Query - Data Fetching & Caching

JavaScript - (ES6+)

CSS3 with BEM - Styling Methodology

🔧 API Integration
The app uses the public Whoa API:

Endpoints
GET /movies - Fetch all available Keanu Reeves movies

GET /random?movie=<movie_name> - Get all "whoa" clips for a specific movie

⚡ Performance Optimizations
React.memo for component memoization

useMemo & useCallback hooks to prevent unnecessary re-renders

Custom debounce hook for search input

Efficient Redux state updates

📄 License
Distributed under the MIT License.

🙏 Acknowledgments
Keanu Reeves for the iconic moments

Whoa API for providing the data

React and Redux communities for amazing tools

<div align="center">
Whoa... ✨

Made with ❤️ by [Your Name]

</div>
