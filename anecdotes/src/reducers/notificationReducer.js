import { createSlice } from '@reduxjs/toolkit';

const initialState = null;
const notifcationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		addNotification(state, action) {
			return action.payload;
		},
		removeNotification(state, action) {
			return null;
		},
	},
});

export const { addNotification, removeNotification, addNotificationVote } = notifcationSlice.actions;

export const setNotification = (message, seconds) => {
	return (dispatch) => {
		dispatch(addNotification(message));
		setTimeout(() => dispatch(removeNotification()), seconds * 1000);
	};
};
export default notifcationSlice.reducer;
