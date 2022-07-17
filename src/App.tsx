import { Route, Routes } from 'react-router-dom';
import { PATH_LOGIN } from './util/constants/paths';
import { HomeView } from './views/HomeView';
import { LoginView } from './views/LoginView/LoginView';
import { UnProtectedRoute, ProtectedRoute } from './components/RouteController/RouteController';

function App() {
	return (
		<Routes>
			<Route element={<UnProtectedRoute />}>
				<Route path={PATH_LOGIN} element={<LoginView />} />
			</Route>
			<Route element={<ProtectedRoute />}>
				<Route path="*" element={<HomeView />} />
			</Route>
		</Routes>
	);
}

export default App;
