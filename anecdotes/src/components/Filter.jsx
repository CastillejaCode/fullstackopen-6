import { useDispatch } from 'react-redux';
import { filterAction } from '../reducers/filterReducer';

const Filter = () => {
	const dispatch = useDispatch();

	const handleChange = (event) => {
		event.preventDefault();
		const filter = event.target.value;
		dispatch(filterAction(filter));
	};

	return (
		<div>
			<h2>filter</h2>
			<input
				type='text'
				onChange={handleChange}
			/>
		</div>
	);
};

export default Filter;
