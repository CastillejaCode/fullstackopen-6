import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { addNotification, removeNotification } from '../reducers/notificationReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const addAnecdote = async (event) => {
		event.preventDefault();
		const content = event.target.content.value;
		event.target.content.value = '';
		dispatch(createAnecdote(content));
		dispatch(setNotification(`you added "${content}"`, 5));
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
