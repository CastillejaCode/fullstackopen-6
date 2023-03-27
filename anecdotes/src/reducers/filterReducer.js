import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterAction(state, action) {
			return action.payload;
		},
	},
});

// const filterReducer = (state = '', action) => {
// 	switch (action.type) {
// 		case 'FILTER':
// 			return action.payload.filter;
// 		default:
// 			return state;
// 	}
// };

// export const filterAction = (filter) => {
// 	return {
// 		type: 'FILTER',
// 		payload: {
// 			filter,
// 		},
// 	};
// };

export const { filterAction } = filterSlice.actions;
export default filterSlice.reducer;
