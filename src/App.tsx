import { Route, Routes } from 'react-router-dom';
import { PATH_LOGIN, PATH_SIGNUP } from './util/constants/paths';
import { HomeView } from './views/HomeView';
import { LoginView } from './views/LoginView/LoginView';
import { SignupView } from './views/SignupView/SignupView';
import { UnProtectedRoute, ProtectedRoute } from './components/RouteController/RouteController';

function App() {
	return (
		<Routes>
			<Route element={<UnProtectedRoute />}>
				<Route path={PATH_LOGIN} element={<LoginView />} />
				<Route path={PATH_SIGNUP} element={<SignupView />} />
			</Route>
			<Route element={<ProtectedRoute />}>
				<Route path="*" element={<HomeView />} />
			</Route>
		</Routes>
	);
}

export default App;
