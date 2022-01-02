import IRoute from "../interfaces/route";
import ChangePasswordPage from "../pages/auth/change";
import ForgotPasswordPage from "../pages/auth/forgot";
import LoginPage from "../pages/auth/login";
import LogoutPage from "../pages/auth/logout";
import RegisterPage from "../pages/auth/register";
import ResetPasswordPage from "../pages/auth/reset";
import NavBar from "../pages/NavBar";
import AllSports from "../pages/HomePage";
import SportCard from "../components/Card";


const routes: IRoute[] = [
    {
        path: '/o',
        exact: true,
        component: NavBar,
        name: 'NavBar',
        protected: true
    },
    {
        path: '/oo',
        exact: true,
        component: SportCard,
        name: 'SportCard',
        protected: true
    },
    {
        path: '/',
        exact: true,
        component: AllSports,
        name: 'AllSports',
        protected: true
    },
    {
        path: '/register',
        exact: true,
        component: RegisterPage,
        name: 'Register Page',
        protected: false
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage,
        name: 'Login Page',
        protected: false
    },
    {
        path: '/change',
        exact: true,
        component: ChangePasswordPage,
        name: 'Change Password Page',
        protected: true
    },
    {
        path: '/logout',
        exact: true,
        component: LogoutPage,
        name: 'Logout Page',
        protected: true
    },
    {
        path: '/forget',
        exact: true,
        component: ForgotPasswordPage,
        name: 'Forgot Password Page',
        protected: false
    },
    {
        path: '/reset',
        exact: true,
        component: ResetPasswordPage,
        name: 'Reset Password Page',
        protected: false
    }
];

export default routes;
