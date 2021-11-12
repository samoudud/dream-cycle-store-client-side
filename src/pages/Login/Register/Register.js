import { Alert, Button, CircularProgress, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({});
    const { registerUser, loading, authError, logInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerInfo };
        newRegisterData[field] = value;
        setRegisterInfo(newRegisterData);
    }

    const handleSignUp = e => {
        if (registerInfo.password === registerInfo.password2) {
            registerUser(registerInfo.email, registerInfo.password, registerInfo.name, history);
        }
        else {
            alert('passwords are not matching')
        }
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
                            Create An Account
                        </Typography>
                        <form onSubmit={handleSignUp}>
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Your Name"
                                name='name'
                                onBlur={handleOnBlur} variant="outlined"
                            />

                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Your Email"
                                name='email'
                                type='email'
                                onBlur={handleOnBlur} variant="outlined"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Your Password"
                                type='password'
                                name='password'
                                onBlur={handleOnBlur}
                                variant="outlined"

                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }} label="Re-type Your Password"
                                type='password'
                                name='password2'
                                onBlur={handleOnBlur}
                                variant="outlined"

                            />
                            <NavLink to='/login'><Button variant='text'>Aready have an account? Login</Button></NavLink>

                            <Button
                                sx={{ width: '75%', m: 1, p: 1 }} variant='contained'
                                type='submit'
                            >Sign Up</Button>


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

export default Register;