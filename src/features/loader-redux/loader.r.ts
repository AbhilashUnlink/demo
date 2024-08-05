import {  createSlice } from "@reduxjs/toolkit";

const initialState = {loader:false};

export const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        startLoader: (state: any) => {
            state.loader = true;
        },
        stopLoader: (state: any) => {
            state.loader = false;
        },
    }
});

export const { startLoader, stopLoader } = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;