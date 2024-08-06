'use client'
import { store } from "@/features/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from 'redux-persist/es/persistStore';
import { Toaster } from "react-hot-toast";

export default function ReduxProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    let persistor = persistStore(store);
    return <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Toaster position="top-center" />
            
            {children}
        </PersistGate>
    </Provider>;
}