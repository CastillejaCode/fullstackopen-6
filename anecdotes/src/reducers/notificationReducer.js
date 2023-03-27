import { createSlice } from '@reduxjs/toolkit';

const initialState = null;
const notifcationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		addNotification(state, action) {
			return `You added "${action.payload}"`;
		},
		addNotificationVote(state, action) {
			return `You voted for "${action.payload}"`;
		},
		removeNotification(state, action) {
			return null;
		},
	},
});

export const { addNotification, removeNotification, addNotificationVote } = notifcationSlice.actions;
export default notifcationSlice.reducer;
