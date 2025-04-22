import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Hero from "./components/Hero.jsx";
import "./index.css";
import Trending from "./components/Trending.jsx";
import Theatres from "./components/Theatres.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import RecommendedMovies from "./components/RecommendedMovies.jsx";
import PrivacyPolicy from "./components/PrivactPolicy.jsx";
import TermsOfService from "./components/TermsOfService.jsx";
import MovieComponent from "./components/MovieComponent.jsx";
import Upcoming from "./components/Upcoming.jsx";
import FAQ from "./components/FAQ.jsx";
import TrendingMovies from "./components/TrendingMovies.jsx";
import UpcomingMovies from "./components/UpcomingMovies.jsx";
import InCinemasMovies from "./components/InCinemasMovies.jsx";
import MovieSearchResults from "./components/MovieSearchResults.jsx";
import TopRated from "./components/TopRated.jsx";
import WatchList from "./components/Watchlist.jsx";
import FavoriteList from "./components/FavoriteList.jsx";
import PersonProfile from "./components/PersonProfile.jsx";
import GenreFilteredMoviesCards from "./components/GenreFilteredMoviesCards.jsx";
import RecentlyViewedMovies from "./components/RecentlyViewedMovies.jsx";
import MyProfile from "./components/MyProfile.jsx";
import AuthError from "./components/AuthError.jsx";
import Blog from "./components/Blog.jsx";
import Cookies from "./components/Cookies.jsx";
import EmailVerification from "./components/EmailVerification.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import CheckInbox from "./components/CheckInbox.jsx";
import Settings from "./components/Settings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <Trending />
            <Theatres />
            <Upcoming />
            <FAQ />
          </>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/recommended-movies",
        element: <RecommendedMovies />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <TermsOfService />,
      },
      {
        path: "/movie/:id/:title",
        element: <MovieComponent />,
      },
      {
        path: "/trending-movies",
        element: <TrendingMovies />,
      },
      {
        path: "/upcoming-movies",
        element: <UpcomingMovies />,
      },
      {
        path: "/in-theatres",
        element: <InCinemasMovies />,
      },
      {
        path: "/search-results/:query",
        element: <MovieSearchResults />,
      },
      {
        path: "/top-rated-movies",
        element: <TopRated />,
      },
      {
        path: "/watchlist",
        element: <WatchList />,
      },
      {
        path: "/favorites",
        element: <FavoriteList />,
      },
      {
        path: "/profile/:ID/:name",
        element: <PersonProfile />,
      },
      {
        path: "/movies/genre/:genreId",
        element: <GenreFilteredMoviesCards />,
      },
      {
        path: "/recently-viewed",
        element: <RecentlyViewedMovies />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/auth-error",
        element: <AuthError />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cookie-policy",
        element: <Cookies />,
      },
      {
        path:'/email-verify',
        element:<EmailVerification/>
      },
      {
        path:'/check-inbox',
        element:<CheckInbox/>
      },
      {
        path:'/reset-password',
        element:<ResetPassword/>
      },
      {
        path:'/my-settings',
        element:<Settings/>
      }
    ],
  },
  {
    path: "/home",
    element: <Navigate to="/" />,
  },
  {
    path:"*",
    element:<Navigate to="/"/>
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
