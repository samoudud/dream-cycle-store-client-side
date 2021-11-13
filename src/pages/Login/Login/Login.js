import { Alert, Button, CircularProgress, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const { loginUser, loading, authError, logInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginInfo };
        newLoginData[field] = value;
        setLoginInfo(newLoginData);
        console.log(loginInfo)
    }

    const handleLogin = e => {
        loginUser(loginInfo.email, loginInfo.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        logInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item sx={{ mt: 8, mx: 'auto' }} xs={12} md={6}>
                    <Paper sx={{ py: 5 }} elevation={5}>
                        <Typography variant="h6" gutterBottom>
                            Please Login
                        </Typography>
                        <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Email"
                                name='email'
                                onBlur={handleOnBlur} variant="outlined"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Password"
                                type='password'
                                name='password'
                                onBlur={handleOnBlur}
                                variant="outlined"

                            />
                            <NavLink to='/register'><Button variant='text'>Dont't have account? Create an account</Button></NavLink>

                            <Button
                                sx={{ width: '75%', m: 1, p: 1 }} variant='contained'
                                type='submit'
                            >Login</Button>


                        </form>
                        <Button
                            sx={{ width: '75%', m: 1, p: 1 }} variant='contained'
                            onClick={handleGoogleSignIn}
                        ><i style={{ color: '#F783AC', marginRight: '5px' }} className="fab fa-google"></i> Login With Google</Button>
                        <br />
                        {
                            loading && <CircularProgress color="secondary" />
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>

                        }
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;