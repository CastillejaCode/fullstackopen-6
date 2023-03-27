import { useDispatch } from 'react-redux';
import { addAnecdoteHelper } from '../reducers/anecdoteReducer';
import { addNotification, removeNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const addAnecdote = async (event) => {
		event.preventDefault();
		const content = event.target.content.value;
		event.target.content.value = '';
		const response = await anecdoteService.createNew(content);
		dispatch(addAnecdoteHelper(response));

		dispatch(addNotification(content));
		setTimeout(() => dispatch(removeNotification()), 5000);
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
