import { csrfFetch } from "./csrf";

// Action Types
const GET_BUSINESSES = "business/getBusinesses";
const POST_BUSINESS = "business/postBusiness";
const PATCH_BUSINESS = "business/patchBusiness";
const DELETE_BUSINESS = "business/deleteBusiness";

// Action Creators

export const getBusinessesActionCreator = businesses => {
    return { type: GET_BUSINESSES, businesses };
};

export const postBusinessActionCreator = business => {
    return { type: POST_BUSINESS, business };
};

export const patchBusinessActionCreator = business => {
    return { type: PATCH_BUSINESS, business };
};

export const deleteBusinessActionCreator = id => {
    return { type: DELETE_BUSINESS, id };
};

// Thunk Creator for GET request
export const getBusinesses = () => async (dispatch, getState) => {
    const res = await csrfFetch("/api/businesses");
    const data = await res.json();

    if (res.ok) {
        // if response status code is less than 400
        // dispatch the receive fruits POJO action
        dispatch(getBusinessesActionCreator(data));
    } else {
        // if response status code is 400 or greater, throw the response as an error
        throw res;
    }
    // return data
};

// Thunk creator for POST request
export const postBusiness = business => async dispatch => {
    const res = await csrfFetch("/api/businesses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(business),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(postBusinessActionCreator(data));
    } else {
        throw res;
    }
    return data;
};

// Thunk creator for PATCH request
export const patchBusiness = business => async dispatch => {
    const res = await csrfFetch(`/api/businesses/${business.id}/edit`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(business),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(patchBusinessActionCreator(data));
    } else {
        throw res;
    }
    return data;
};

// Thunk creator for DELETE request
export const deleteBusiness = id => async dispatch => {
    const res = await csrfFetch("/api/businesses", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
    });
    const data = res.json();

    if (res.ok) {
        dispatch(deleteBusinessActionCreator(id));
    } else {
        throw res;
    }
    // return data
};

const initialState = { entries: {} };

const businessReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_BUSINESSES: {
            newState = { ...state };
            newState.entries = action.businesses.reduce((entries, business) => {
                entries[business.id] = business;
                return entries;
            }, {});
            return newState;
            // return { ...state, entries: [...action.businesses] }
        }
        case POST_BUSINESS: {
            newState = { ...state };
            newState.entries = {
                ...newState.entries,
                [action.business.id]: action.business,
            };
            return newState;
        }
        case PATCH_BUSINESS: {
            newState = { ...state };
            newState.entries = {
                ...newState.entries,
                [action.business.id]: action.business,
            };
            return newState;
        }
        case DELETE_BUSINESS: {
            newState = { ...state };
            newState.entries = { ...newState.entries, [action.id]: undefined };
            return newState;
        }
        default:
            return state;
    }
};

export default businessReducer;
