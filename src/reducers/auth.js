import { createSlice } from '@reduxjs/toolkit';

const storedUser = localStorage.getItem('authUser');

const initialState = {
    authUser : storedUser ? JSON.parse(storedUser) : null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action) => {
            localStorage.setItem('authUser', JSON.stringify(action.payload))
            state.authUser = action.payload
       
        },
        clearAuthUser(state) {
            localStorage.removeItem('authUser');
            state.authUser = null; 
        }
    }
});

export const { setAuthUser,clearAuthUser } = authSlice.actions