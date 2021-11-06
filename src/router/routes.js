import Login from '../components/Login';
import Home from '../components/Home';

export const privateRoutes = [{ path: '/home', component: Home, exact: true }];

export const publicRoutes = [{ path: '/login', component: Login, exact: true }];
