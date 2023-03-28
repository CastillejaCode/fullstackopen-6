import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { addNotificationVote, removeNotification } from '../reducers/notificationReducer';
import { saveVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
	const dispatch = useDispatch();
	const anecdotes = useSelector(({ anecdotes, filter }) => {
		if (filter !== '') {
			return anecdotes.filter((a) => a.content.includes(filter)).sort((a, b) => b.votes - a.votes);
		}
		return [...anecdotes].sort((a, b) => b.votes - a.votes);
	});

	const vote = (id, anecdote) => {
		console.log(id, anecdote);
		dispatch(saveVote(id, anecdote));
		dispatch(setNotification(`you voted for "${anecdote.content}"`, 3));
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default AnecdoteList;
