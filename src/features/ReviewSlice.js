import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    reviews: {},
}

export const ReviewSlice = createSlice({
    name: 'ReviewSlice',
    initialState,
    reducers: {
        addReview: (state, action) => {
            const { userId, movieId, name, review, timestamp } = action.payload;
            const reviewId = nanoid();
            if (!state.reviews[movieId]) {
                state.reviews[movieId] = {};
            }
            state.reviews[movieId][reviewId] = ({ userId, name, review, timestamp, likedBy: [], dislikedBy: [] });
        },
        toggleLike: (state, action) => {
            const { reviewId, movieId, userId } = action.payload;
            const review = state.reviews[movieId][reviewId];
            const index1 = review.likedBy.indexOf(userId);
            const index2 = review.dislikedBy.indexOf(userId);

            if (index2 !== -1) {
                review.dislikedBy.splice(index2, 1);
                review.likedBy.push(userId);
            }
            else if (index1 === -1) {
                review.likedBy.push(userId);
            }
            else {
                review.likedBy.splice(index1, 1);
            }
        },
        toggleDislike: (state, action) => {
            const { reviewId, movieId, userId } = action.payload;
            const review = state.reviews[movieId][reviewId];
            const index1 = review.likedBy.indexOf(userId);
            const index2 = review.dislikedBy.indexOf(userId);

            if (index1 !== -1) {
                review.likedBy.splice(index1, 1);
                review.dislikedBy.push(userId);
            }
            else if (index2 === -1) {
                review.dislikedBy.push(userId);
            }
            else {
                review.dislikedBy.splice(index2, 1);
            }
        },
        deleteReview: (state, action) => {
            const { movieId, reviewId } = action.payload;
            delete state.reviews[movieId][reviewId];

            if (Object.keys(state.reviews[movieId]).length === 0) {
                delete state.reviews[movieId];
            }
        },
        updateReview: (state, action) => {
            const { movieId, reviewId, newReview } = action.payload;
            state.reviews[movieId][reviewId].review = newReview;
        },
        setReviewsToDB: (state, action) => {
            state.reviews = action.payload;
        }
    }
})

export const { addReview, toggleDislike, toggleLike, deleteReview, updateReview, setReviewsToDB } = ReviewSlice.actions;
export default ReviewSlice.reducer;