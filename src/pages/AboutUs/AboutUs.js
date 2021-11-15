import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import about from '../../images/about.png'

const AboutUs = () => {
    return (
        <Container sx={{ my: 6 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <img style={{ width: '90%' }} src={about} alt="" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <div style={{ marginTop: '80px' }}>
                        <Typography sx={{ fontWeight: 500 }} align="left" variant="h6" color="inherit">
                            About Us
                        </Typography>
                        <Typography sx={{ fontWeight: 700 }} align="left" variant="h4" color="inherit">
                            We help you
                        </Typography>
                        <Typography sx={{ mb: 2, fontWeight: 700 }} align="left" variant="h4" color="inherit">
                            embarace the future
                        </Typography>
                        <p style={{ textAlign: 'start' }}>Enjoy flying up the hills? Start with our range of road bikes. Or if it's all about tracks and trails, head to our mountain bikes for a mix of hardtail and full suspension machines. We've even got a full range of hybrid bikes (perfect for commuting), which includes several folding bikes - ideal if you're taking the train or you're short on storage space. Still not sure which bike is for you? Pop into one of our UK bike stores where our friendly staff will help, or have a read of our super handy buying guides
                            We also stock all the clothing and accessories you'll ever need, as well as a wide range of parts and components to keep your bike in top-top condition. Plus, shopping with us gives you lots of great benefits like our Click & Collect. Enjoy the ride</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;