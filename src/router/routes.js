import Login from '../components/Login';
import Home from '../components/Home';
import Detail from '../components/Detail';

export const privateRoutes = [
  { path: '/home', component: Home, exact: true },
  { path: '/detail/:id', component: Detail, exact: true },
];

export const publicRoutes = [{ path: '/login', component: Login, exact: true }];
