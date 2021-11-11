import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bannerImg from '../../../images/banner.webp';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1, background: '#F0F2F1' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                        <Box>
                            <Typography sx={{ fontWeight: '700', color: '#1B3E41' }} variant='h2'>
                                Top Quality, <br />
                                Factory Price

                            </Typography>
                            <Typography variant='h5' sx={{ my: 3, width: '75%' }}>
                                Individual saddle fitting according to your height and weight. Have spare parts and want to sell or exchange them? Come and see!
                            </Typography>
                            <Button sx={{ p: 1 }} variant="contained" color="success">Choose Your Bike</Button>
                        </Box>
                    </Grid>
                    <Grid style={verticalCenter} item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={bannerImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;


