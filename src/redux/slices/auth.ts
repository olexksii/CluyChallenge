import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface AuthState {
	signedIn: boolean;
	username: string;
}

const initialState: AuthState = {
	signedIn: false,
	username: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
});

export const selectUsername = (state: RootState) => state.auth.username;
export const selectAuthenticated = (state: RootState) => state.auth.signedIn;

export default authSlice.reducer;
