import { useMutation, useQueryClient } from 'react-query';
import { createAnecdote } from '../requests';
import { useContext } from 'react';
import CounterContext from '../CounterContext';

const AnecdoteForm = () => {
	const [notification, dispatch] = useContext(CounterContext);

	const queryClient = useQueryClient();
	const newAnecdoteMutation = useMutation(createAnecdote, {
		onSuccess: () => queryClient.invalidateQueries('anecdotes'),
		onError: () => dispatch({ type: 'TOO_SHORT' }),
	});

	const onCreate = (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		event.target.anecdote.value = '';
		console.log('new anecdote');
		newAnecdoteMutation.mutate({ content, votes: 0 });

		content < 5 ? '' : dispatch({ type: 'TRUE', payload: `You have added "${content}"` });
		setTimeout(() => dispatch({ type: 'FALSE' }), 5000);
	};

	return (
		<div>
			<h3>create new</h3>
			<form onSubmit={onCreate}>
				<input name='anecdote' />
				<button type='submit'>create</button>
			</form>
		</div>
	);
};

export default AnecdoteForm;
