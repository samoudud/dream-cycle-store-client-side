import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div style={{ background: '#111827', color: 'white', padding: '5px' }}>
            <Container sx={{ my: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ mb: 2 }} align="left" variant="h5" color="inherit">
                            Dream Bicycle Store
                        </Typography>
                        <Typography align="left" sx={{ width: '75%' }} variant='body1'>
                            Individual saddle fitting according to your height and weight. Have spare parts and want to sell or exchange them? Come and see!
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ mb: 2, color: 'orange' }} align="left" variant="h5" color="inherit">
                            Quick Links
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Home
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Term
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Privacy & Policy
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Blog
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Contact Us
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ mb: 2, color: 'orange' }} align="left" variant="h5" color="inherit">
                            About Us
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Our Story
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Cycling Blog & Tips
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Working With Us
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Cycling guide
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Be Our Partner
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ mb: 2, color: 'orange' }} align="left" variant="h5" color="inherit">
                            Support
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Customer Support
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Privacy & Policy
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Terms & Condition
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Forum
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Traffic guide
                        </Typography>
                    </Grid>
                </Grid>
                <Typography sx={{ my: 2 }} align="center" variant="body1" color="inherit">
                    Copyright © 2021 dream-bicycle-store.com
                </Typography>

            </Container>
        </div>
    );
};

export default Footer;