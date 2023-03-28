import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAnecdotes, updateAnecdote } from './requests';
import { useReducer } from 'react';
import CounterContext from './CounterContext';

const notificationReducer = (state, action) => {
	switch (action.type) {
		case 'TRUE':
			return action.payload;
		case 'FALSE':
			return false;
		case 'TOO_SHORT':
			return 'too short of an anecdote, minimum length of 5 characters!';
	}
};

const App = () => {
	const [notification, notificationDispatch] = useReducer(notificationReducer, false);

	const queryClient = useQueryClient();
	const updateAnecdoteMutation = useMutation(updateAnecdote, {
		onSuccess: () => queryClient.invalidateQueries('anecdotes'),
	});

	const result = useQuery('anecdotes', getAnecdotes, {
		refetchOnWindowFocus: false,
	});
	console.log(result);

	if (result.isLoading) {
		return <div>Loading...</div>;
	}
	const anecdotes = result.data;

	const handleVote = (anecdote) => {
		console.log('vote');
		updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
		notificationDispatch({ type: 'TRUE', payload: `You voted for "${anecdote.content}"` });
		setTimeout(() => notificationDispatch({ type: 'FALSE' }), 5000);
	};

	return (
		<CounterContext.Provider value={[notification, notificationDispatch]}>
			<h3>Anecdote app</h3>

			<Notification />
			<AnecdoteForm />

			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => handleVote(anecdote)}>vote</button>
					</div>
				</div>
			))}
		</CounterContext.Provider>
	);
};

export default App;
