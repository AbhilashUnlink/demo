// Other imports stays as before...
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { loginReducer } from "./login-redux/login.r";
import { loaderReducer } from "./loader-redux/loader.r";
import localStorage from "redux-persist/es/storage";

// configure which keuy we want to persist
const persistConfig: any = {
    key: "yogo",
    storage: localStorage,
    whitelist: ["login"],
};

const rootReducer = combineReducers({
    login: loginReducer,
    loader: loaderReducer,
});

const persistedReducer: any = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

});
// const rootReducer = combineReducers({
//     login: persistReducer(authPersistConfig, loginReducer),
//     loader: persistReducer(authPersistConfig, loaderReducer),
// });

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware: any) =>
//         getDefaultMiddleware({ serializableCheck: false }),
// });
