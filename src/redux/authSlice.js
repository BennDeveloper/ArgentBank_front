import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isConnected:false,
        token:null,
        errorMessage:null,
    },
    reducers: {
    }
})