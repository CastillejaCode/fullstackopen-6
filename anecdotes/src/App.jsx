import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { setAnecdotes } from './reducers/anecdoteReducer';
import anecdoteService from './services/anecdotes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		anecdoteService.getAll().then((anecdotes) => dispatch(setAnecdotes(anecdotes)));
	}, []);

	return (
		<div>
			<Notification />
			<Filter />
			<AnecdoteList />
			<AnecdoteForm />
		</div>
	);
};

export default App;
