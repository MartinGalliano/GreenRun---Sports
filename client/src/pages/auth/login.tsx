import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, FormGroup, Input } from 'reactstrap';
import AuthContainer from '../../components/AuthContainer';
import ErrorText from '../../components/ErrorText';
import { auth, Providers } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';
import firebase from 'firebase';
import { SignInWithSocialMedia } from './modules';

import GlobalStyle from '../../styles/global';
import NavBar from '../../components/NavBar';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from '../../utils/usePersistedState'
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark'; 

const LoginPage: React.FunctionComponent<IPageProps> = props => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();

    const signInWithEmailAndPassword = () => {
        if (error !== '') setError('');

        setAuthenticating(true);

        auth.signInWithEmailAndPassword(email, password)
        .then(result => {
            logging.info(result);
            history.push('/');
        })
        .catch(error => {
            logging.error(error);
            setAuthenticating(false);
            setError(error.message);
        });
    }

    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');

        setAuthenticating(true);

        SignInWithSocialMedia(provider)
        .then(result => {
            logging.info(result);
            history.push('/');
        })
        .catch(error => {
            logging.error(error);
            setAuthenticating(false);
            setError(error.message);
        });
    }

    const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}> 
        <GlobalStyle />
        <NavBar name = {""} IconsButtings= {""} toggleTheme={toggleTheme} />
        
        <AuthContainer header="Welcome">
            <FormGroup>
                <Input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    />
            </FormGroup>
            <FormGroup>
                <Input 
                    autoComplete="new-password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    />
            </FormGroup>
            <Button
                disabled={authenticating}
                color="success"
                block
                onClick={() => signInWithEmailAndPassword()}
                >
                Login
            </Button>
            <small>
                <p className='m-1 text-center'><Link to="/register">Register here.</Link></p>
                <p className='m-1 text-center'><Link to="/forget">Forget your password?</Link></p>
            </small>
            <ErrorText error={error} />
            <hr className="bg-info m-3" />
            <Button
                block
                disabled={authenticating}
                onClick={() => signInWithSocialMedia(Providers.google)}
                style={{ backgroundColor:'#ea4335', borderColor: '#ea4335'}} 
                >
                <i className="fab fa-google mr-2"></i> Sign in with Google
            </Button>
        </AuthContainer>
        </ThemeProvider>
    );
}

export default LoginPage;