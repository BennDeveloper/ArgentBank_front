import { combineReducers, configureStore } from "@reduxjs/toolkit";


export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            auth: null
        })
    }
)