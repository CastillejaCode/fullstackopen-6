import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
	const dispatch = useDispatch();
	const anecdotes = useSelector(({ anecdotes, filter }) => {
		if (filter !== '') {
			return anecdotes.filter((a) => a.content.includes(filter)).sort((a, b) => b.votes - a.votes);
		}
		return [...anecdotes].sort((a, b) => b.votes - a.votes);
	});

	const vote = (id) => {
		dispatch(voteAnecdote(id));
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default AnecdoteList;
