import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { shoe } from '../Context/Shoe';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../context/GlobalState';
import Typography from '@material-ui/core/Typography';
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';

export const ProductDetail = () => {
    const { items } = useContext(GlobalContext);
    const { slug } = useParams();
    const x = items[slug];
    console.log(x.img1);
    return (
        <div >
            <Typography align="center" style={{ paddingTop: '3%', color: '#424242' }} variant="h3" component="h2" gutterBottom>
                {x.name}
            </Typography>
            <Grid container direction="row"
                justify="center"
                alignItems="center"
                spacing={0}
            >
                <Grid item xs={2} />
                <Grid container item direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}>
                    <Grid item xs={2}><img height="100%" width="100%" src={x.imgUrl} alt={x.name} /></Grid>
                    <Grid item xs={2}><img height="100%" width="100%" src={x.img1} alt={x.name} /></Grid>
                    <Grid item xs={2}><img height="100%" width="100%" src={x.img2} alt={x.name} /></Grid>
                    {/* <Grid item xs={2}><img height="100%" width="100%" src={x.img3} alt={x.name} /></Grid> */}
                </Grid>
                <Grid item xs={2} />
            </Grid>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography variant="h4" color="textSecondary" style={{ textAlign: 'center', marginBottom: '1%' }} component="legend">
                    Rating
            </Typography>
                <Typography variant="h5" color="textSecondary" style={{textAlign: 'center'}} component="legend">
                    <Rating name="read-only" value={x.rating} readOnly />
                </Typography>
            </Box>
            <Typography align="center" style={{ color: '#424242', marginBottom: '8%' }} variant="h5" component="h2" gutterBottom>
                Price: $ {x.price}
            </Typography>
        </div>
    )
}

export default ProductDetail;