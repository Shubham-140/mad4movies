# 🎬 Mad4Movies

Mad4Movies is a full-featured React-based movie recommendation web application built with Appwrite, TMDb API, and various modern frontend tools. It helps users discover, explore, and track movies they love — all with a clean and responsive UI.

---

## 🚀 Features

### 🔍 Homepage – Search, Filters & Recommendations
- Showcases trending/popular movies with poster, title, rating & genres.
- Search movies by title (debounced for performance).
- Filters:
  - Genre (Action, Comedy, etc.)
  - Release Year
  - IMDb Rating (slider from 0 to 10)
- Personalized recommendations based on user activity.
- Lazy loading for better performance.

### 🎥 Movie Details Page
- Full details including poster, synopsis, release date, cast & crew.
- Embedded YouTube trailer.
- IMDb & Rotten Tomatoes ratings.
- Related movies based on genre/director.
- Genre clickable navigation (e.g., clicking "Sci-Fi" shows more Sci-Fi movies).
- Streaming platforms availability.

### 👤 User Features (Requires Authentication)
- User sign-up/login using **Appwrite Auth**.
- Email verification & forgot/reset password with proper flow.
- Save movies to **Watchlist** or **Favorites**.
- Rate movies (out of 5 stars).
- "Watched" movie tracking.
- Profile page showing:
  - Watchlist
  - Favorites
  - Watched movies
  - Reviews

### 🗣️ Community Section
- Post reviews & discussions.
- Like & comment on posts.
- Trending discussions based on activity.

### 🧾 FAQ + Add Question Feature
- FAQ section with ability for users to ask new questions (AddFAQ component).

### 🎭 Cast & Crew Pages
- Dedicated page for each actor/producer:
  - Basic info
  - Top movies
  - Related content

### 🎨 Advanced UI/UX
- Dark mode & theme switching.
- Animations with Framer Motion.
- Fully responsive design.
- Hero section with slider for “GOAT” movies.

### 🛡️ Legal & Informational Pages
- Contact Us
- Privacy Policy
- Cookie Policy

---

## 🧰 Tech Stack

- **React 19** with Vite
- **Appwrite** (Auth & DB)
- **TMDb API** for movie data
- **Redux Toolkit** for state management
- **Framer Motion** for animations
- **Tailwind CSS + styled-components**
- **React Router v7**
- **React Query** for optimized API requests
- **Lucide React Icons** + **React Icons**
- **Responsive UI** with `react-responsive`

---
