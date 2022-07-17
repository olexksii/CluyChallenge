import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuthenticated } from '../../redux/slices/auth';
import { PATH_HOME, PATH_LOGIN } from '../../util/constants/paths';

interface RouteControllerProps {
	redirect?: string;
}

export const ProtectedRoute = ({ redirect = PATH_LOGIN }: RouteControllerProps) => {
	const auth = useSelector(selectAuthenticated);

	if (!auth) {
		return <Navigate to={redirect} replace />;
	}
	return <Outlet />;
};

export const UnProtectedRoute = ({ redirect = PATH_HOME }: RouteControllerProps) => {
	const auth = useSelector(selectAuthenticated);

	if (auth) {
		return <Navigate to={redirect} replace />;
	}
	return <Outlet />;
};
