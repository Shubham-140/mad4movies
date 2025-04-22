import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    username: '',
    userId: '',
    ratings: {},
    age: null,
    country: '',
    gender: '',
    prefferedLanguage: '',
    favArtist: '',
    favMovie: '',
    favCharacter: '',
    photo: '',
    desc: 'I am Mad4Movies.',
    joinedOn: '',
    ratingHydrated: false,
}

export const CustomerDetailsSlice = createSlice({
    name: 'CustomerDetailsSlice',
    initialState,
    reducers: {
        setDesc: (state, action) => {
            state.desc = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        },
        setPrefferedLanguage: (state, action) => {
            state.prefferedLanguage = action.payload;
        },
        setFavArtist: (state, action) => {
            state.favArtist = action.payload;
        },
        setFavMovie: (state, action) => {
            state.favMovie = action.payload;
        },
        setFavCharacter: (state, action) => {
            state.favCharacter = action.payload;
        },
        setPhoto: (state, action) => {
            state.photo = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setJoinedOn: (state, action) => {
            state.joinedOn = action.payload;
        },
        setRatings: (state, action) => {
            const { movieId, rating } = action.payload;
            if (!state.ratings) state.ratings = {};
            state.ratings[movieId] = rating;
        },
        setIndividualRatingToDB: (state, action) => {
            state.ratings = action.payload;
        },
        setRatingratingHydrated: (state, action) => {
            state.ratingHydrated = action.payload;
        }
    }
})

export const { setDesc, setAge, setGender, setPrefferedLanguage, setFavArtist, setFavCharacter, setFavMovie, setPhoto, setCountry, setName, setUsername, setUserId, setJoinedOn, setRatings, setIndividualRatingToDB, setRatingratingHydrated } = CustomerDetailsSlice.actions;
export default CustomerDetailsSlice.reducer;