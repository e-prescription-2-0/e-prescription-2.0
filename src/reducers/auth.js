import { createSlice } from '@reduxjs/toolkit';

const storedUser = localStorage.getItem('authUser');

const initialState = {
    authUser : storedUser ? JSON.parse(storedUser) : null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchRegisteredUser : () => {},
        setAuthUserByRegister: (state, action) => {
            localStorage.setItem('authUser', JSON.stringify(action.payload))
            state.authUser = action.payload
       
        },
        fetchLoginUser : () => {},
        setAuthUserByLogin: (state, action) => {
            localStorage.setItem('authUser', JSON.stringify(action.payload))
            state.authUser = action.payload
       
        },
        fetchLogoutUser : () => {},
        clearAuthUser(state) {
            localStorage.removeItem('authUser');
            state.authUser = null; 
        }
    }
});

export const { 
    setAuthUserByRegister,
    setAuthUserByLogin,
    clearAuthUser,
    fetchRegisteredUser,
    fetchLoginUser,
    fetchLogoutUser
 } = authSlice.actions