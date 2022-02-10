import { csrfFetch } from "./csrf";

// Action Types
const GET_REVIEWS = "review/getReviews";
const POST_REVIEW = "review/postReview";
const PATCH_REVIEW = "review/patchReview";
const DELETE_REVIEW = "review/deleteReview";

// Action Creators

export const getReviewsActionCreator = reviews => {
    return { type: GET_REVIEWS, reviews };
};

export const postReviewActionCreator = review => {
    return { type: POST_REVIEW, review };
};

export const patchReviewActionCreator = review => {
    return { type: PATCH_REVIEW, review };
};

export const deleteReviewActionCreator = id => {
    return { type: DELETE_REVIEW, id };
};

// Thunk Creator for GET request
export const getReviews = () => async (dispatch, getState) => {
    const res = await csrfFetch("/api/reviews");
    const data = await res.json();

    if (res.ok) {
        // if response status code is less than 400
        // dispatch the receive fruits POJO action
        dispatch(getReviewsActionCreator(data));
    } else {
        // if response status code is 400 or greater, throw the response as an error
        throw res;
    }
    // return data
};

// Thunk creator for POST request
export const postReview = review => async dispatch => {
    const res = await csrfFetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(postReviewActionCreator(data));
    } else {
        throw res;
    }
    return data;
};

// Thunk creator for PATCH request
export const patchReview = review => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${review.id}/edit`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(patchReviewActionCreator(data));
    } else {
        throw res;
    }
    return data;
};

// Thunk creator for DELETE request
export const deleteReview = id => async dispatch => {
    const res = await csrfFetch("/api/reviews", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
    });
    const data = res.json();

    if (res.ok) {
        dispatch(deleteReviewActionCreator(data));
    } else {
        throw res;
    }
    // return data
};

const initialState = { entries: {} };

const reviewReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_REVIEWS: {
            newState = { ...state };
            newState.entries = action.reviews.reduce((entries, review) => {
                entries[review.id] = review;
                return entries;
            }, {});
            return newState;
            // return { ...state, entries: [...action.reviews] }
        }
        case POST_REVIEW: {
            newState = { ...state };
            newState.entries = {
                ...newState.entries,
                [action.review.id]: action.review,
            };
            return newState;
        }
        case PATCH_REVIEW: {
            newState = { ...state };
            newState.entries = {
                ...newState.entries,
                [action.review.id]: action.review,
            };
            return newState;
        }
        case DELETE_REVIEW: {
            newState = { ...state };
            newState.entries = { ...newState.entries, [action.id]: undefined };
            const newestState = { ...newState };
            return newestState;
        }
        default:
            return state;
    }
};

export default reviewReducer;
