import { useSelector } from 'react-redux';
import { selectUsername } from '../redux/slices/auth';

export const HomeView = () => {
	const username = useSelector(selectUsername);

	return (
		<div>
			<h1>Hello {username}</h1>
			<button>Logout</button>
		</div>
	);
};
