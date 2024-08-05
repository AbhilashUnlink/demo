import { useApi } from "@/utils/Api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const loginThunk: any = createAsyncThunk(
    'business/login',
    async ({ form, router }: any, { rejectWithValue }: any) => {
        try {
            const response = await useApi().post("business/login", form);
            if (response.success) {
                router.push('/dashboard')
                return response.data
            }
        } catch (err: any) {
            return rejectWithValue(err.response.data)
        }
    },
)
export const registerThunk: any = createAsyncThunk(
    'business',
    async ({ form, router }: any, { rejectWithValue }: any) => {
        try {
            const response = await useApi().post("business", form);
            if (response.success) {
                router.push('/login')
                return response.data
            }
        } catch (err: any) {
            return rejectWithValue(err.response.data)
        }
    },
)

const initialState = {
    data: {
        business: {
            id: "",
            name: "",
            email: "",
            role: ""
        },
        accessToken: ""
    },
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setAuthState: (state, { payload }: any) => {
            state.data = payload;
        },
        setLogout: (state) => {
            state.data = {
                business: {
                    id: "",
                    name: "",
                    email: "",
                    role: ""
                },
                accessToken: ""
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {

            })
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.data = payload;

            })
            .addCase(loginThunk.rejected, (state) => {

            })
    },
});

export const { setAuthState, setLogout } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;