import { useDispatch } from 'react-redux';
import { addAnecdoteHelper } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
	const dispatch = useDispatch();
	const addAnecdote = (event) => {
		event.preventDefault();
		const content = event.target.content.value;
		event.target.content.value = '';
		dispatch(addAnecdoteHelper(content));
	};

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={(event) => addAnecdote(event)}>
				<div>
					<input name='content' />
				</div>
				<button>create</button>
			</form>
		</div>
	);
};

export default AnecdoteForm;
