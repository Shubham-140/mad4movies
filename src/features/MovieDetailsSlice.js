import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: undefined,
    movieId: null,
    genreList: {
        "Action": 28,
        "Comedy": 35,
        "Sci-Fi": 878,
        "Drama": 18,
        "Horror": 27,
        "Romance": 10749,
        "Adventure": 12,
        "Thriller": 53,
        "Sport": 9805,
        "Animation": 16,
        "Crime": 80,
        "TV": 10770,
        "Reality": 10764,
        "Documentary": 99,
        "Fantasy": 14,
        "Mystery": 9648,
        "Musical": 10402,
        "War": 10752,
        "Western": 37,
        "History": 36,
        "Family": 10751
    },
    goatMovies: [155, 278, 438631, 157336, 475557, 27205],
    selectedGenre: [],
    movieResultData: [],
    runtime: ['', ''],
    rating: ['', ''],
    sortBy: '',
    watched: [],
    favorites: [],
    watchList: [],
    userRating: [],
    artist: null,
    selectedYear: ['', ''],
    sort: '',
    singleGenre: '',
    showGenre: false,
    showMovie: 'Everything',
    index: 0,
    recentlyViewed: [],
    showShare: false,
    urlQuery: '',
    favHydrate: false,
    movieDetailsHydrated: false,
}

export const MovieDetailsSlice = createSlice({
    name: 'MovieDetailsSlice',
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
        setMovieResultData: (state, action) => {
            state.movieResultData = action.payload;
        },
        setGenre: (state, action) => {
            state.selectedGenre = action.payload;
        },
        setRuntime1: (state, action) => {
            state.runtime[0] = action.payload;
        },
        setRuntime2: (state, action) => {
            state.runtime[1] = action.payload;
        },
        setRating1: (state, action) => {
            state.rating[0] = action.payload;
        },
        setRating2: (state, action) => {
            state.rating[1] = action.payload;
        },
        toggleWatchedMovies: (state, action) => {
            if (state.watched.includes(action.payload)) {
                const index = state.watched.findIndex((elem) => {
                    return elem === action.payload;
                })
                if (index !== -1) {
                    state.watched.splice(index, 1);
                }
            }
            else {
                state.watched.push(action.payload);
            }
        },
        toggleFavoriteMovies: (state, action) => {
            if (state.favorites.includes(action.payload)) {
                state.favorites = state.favorites.filter((elem) => {
                    return elem !== action.payload;
                })
            }
            else {
                state.favorites.push(action.payload);
            }
        },
        setFavMoviesToDB: (state, action) => {
            state.favorites = action.payload;
        },
        toggleWatchList: (state, action) => {
            if (state.watchList.includes(action.payload)) {
                state.watchList = state.watchList.filter((elem) => {
                    return elem !== action.payload;
                })
            }
            else {
                state.watchList.push(action.payload);
            }
        },
        setUserRating: (state, action) => {
            state.userRating = action.payload;
        },
        setArtist: (state, action) => {
            state.artist = action.payload;
        },
        setYear1: (state, action) => {
            state.selectedYear[0] = action.payload;
        },
        setYear2: (state, action) => {
            state.selectedYear[1] = action.payload;
        },
        applySort: (state, action) => {
            state.sort = action.payload;
        },
        setSingleGenre: (state, action) => {
            state.singleGenre = action.payload;
        },
        setShowGenre: (state, action) => {
            state.showGenre = action.payload;
        },
        setShowMovie: (state, action) => {
            state.showMovie = action.payload;
        },
        incrementIndex: (state) => {
            if (state.index === 5) {
                state.index = 0;
                return;
            }
            state.index = state.index + 1;
        },
        decrementIndex: (state) => {
            if (state.index === 0) {
                state.index = 5;
                return;
            }
            state.index = state.index - 1;
        },
        setRecentlyViewed: (state, action) => {
            const movie = Number(action.payload);

            if (state.recentlyViewed.includes(movie)) {
                state.recentlyViewed = state.recentlyViewed.filter((elem) => {
                    return elem !== movie;
                })
                state.recentlyViewed.unshift(movie);
            }
            else {
                if (state.recentlyViewed.length < 20) {
                    state.recentlyViewed.unshift(movie);
                }
                else {
                    state.recentlyViewed.pop();
                    state.recentlyViewed.unshift(movie);
                }
            }
        },
        setRecentlyViewedToDB: (state, action) => {
            state.recentlyViewed = action.payload;
        },
        setShowShare: (state, action) => {
            state.showShare = action.payload;
        },
        setMovieId: (state, action) => {
            state.movieId = action.payload;
        },
        setUrlQuery: (state, action) => {
            state.urlQuery = action.payload;
        },
        setWatchLaterMoviesToDB: (state, action) => {
            state.watchList = action.payload;
        },
        setWatchedMoviesToDB: (state, action) => {
            state.watched = action.payload;
        },
        setRatingsToDB: (state, action) => {
            state.userRating = action.payload;
        },
        setMovieDetailsHydated: (state, action) => {
            state.movieDetailsHydrated = action.payload;
        },
    }
})

export const { setMovie, setMovieResultData, setGenre, setRuntime1, setRuntime2, setRating1, setRating2, toggleWatchedMovies, toggleFavoriteMovies, toggleWatchList, setUserRating, setArtist, setYear1, setYear2, applySort, setSingleGenre, setShowGenre, setShowMovie, incrementIndex, decrementIndex, setRecentlyViewed, setShowShare, setMovieId, setUrlQuery, setFavMoviesToDB, setWatchLaterMoviesToDB, setWatchedMoviesToDB, setRatingsToDB, setRecentlyViewedToDB, setMovieDetailsHydated } = MovieDetailsSlice.actions;
export default MovieDetailsSlice.reducer;