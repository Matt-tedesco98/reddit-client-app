import { createSlice} from "@reduxjs/toolkit";
import { getSubreddits} from "../../api/reddit";

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false,
};

const subRedditSlice = createSlice({
    name: "subReddit",
    initialState,
    reducers: {
        startGetSubreddits(state) {
            state.isloading = true;
            state.error = false;
        },
        getSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payloadType;
        },
        getSubredditsError(state) {
            state.isLoading = false;
            state.error = true;
        },
    },
});

export const {
    getSubredditFailed,
    getSubredditSuccess,
    startGetSubreddits,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(getSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditSuccess(subreddits));
    } catch (error) {
        dispatch(getSubredditFailed());
    }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;