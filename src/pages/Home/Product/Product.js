import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Rating } from '@mui/material';

const Product = (props) => {
    const { name, price, rating, img } = props.product
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="h6" color="red">
                            price: {price}
                        </Typography>
                        <Rating name="read-only" value={parseFloat(rating)} readOnly />
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button sx={{ mx: 'auto' }} size="small">Buy Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;