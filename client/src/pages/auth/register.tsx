import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, FormGroup, Input } from 'reactstrap';
import AuthContainer from '../../components/AuthContainer';
import ErrorText from '../../components/ErrorText';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';

import GlobalStyle from '../../styles/global';
import NavBar from '../../components/NavBar';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from '../../utils/usePersistedState'
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark'; 

const RegisterPage: React.FunctionComponent<IPageProps> = props => {
    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();

    const signUpWithEmailAndPassword = () => {
        if (password !== confirm)
        {
            setError('Please make sure your passwords match.');
            return;
        }

        if (error !== '') setError('');

        setRegistering(true);

        auth.createUserWithEmailAndPassword(email, password)
        .then(result => {
            logging.info(result);
            history.push('/login');
        })
        .catch(error => {
            logging.error(error);

            if (error.code.includes('auth/weak-password'))
            {
                setError('Please enter a stronger password.');
            }
            else if (error.code.includes('auth/email-already-in-use'))
            {
                setError('Email already in use.');
            }
            else
            {
                setError('Unable to register.  Please try again later.')
            }

            setRegistering(false);
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

        <AuthContainer header="Register">
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
            <FormGroup>
                <Input 
                    autoComplete="new-password"
                    type="password"
                    name="confirm"
                    id="confirm"
                    placeholder="Confirm Password"
                    onChange={event => setConfirm(event.target.value)}
                    value={confirm}
                />
            </FormGroup>
            <Button
                disabled={registering}
                color="success"
                block
                onClick={() => signUpWithEmailAndPassword()}
            >
                Sign Up
            </Button>
            <small>
                <p className='m-1 text-center'>Already have an account? <Link to="/login">Login.</Link></p>
            </small>
            <ErrorText error={error} />
        </AuthContainer>
        </ThemeProvider>
    );
}

export default RegisterPage;