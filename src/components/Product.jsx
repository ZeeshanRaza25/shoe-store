import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import { green, purple } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { CardContent } from '@material-ui/core';
// import RatingComponent from './Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '5%',
    },
    media: {
        height: 0,
        paddingTop: '50%', // 16:9
    },
    card: {
        maxWidth: 325,
        // backgroundColor: 'black',
        // flexGrow: 1,
        // borderColor: 'white'
        marginTop: '12%',
        // marginBottom: '5%'
    },
    margin: {
        margin: theme.spacing(1),
        width: '90%',
        textAlign: 'center',
        alignContent: 'center',
        paddingBottom: '5%',
    },
}));

export default function Product() {
    const classes = useStyles();
    const { items } = useContext(GlobalContext);
    // console.log(items.length)
    return (
        <div style={{ marginLeft: '5%', marginRight: '5%' }}>
            <Grid container
                direction="row"
                alignItems="center"
                spacing={3} >
                {items.length > 0 ? <>
                    {Object.entries(items).map(([slug, { imgUrl, name, img, id, price }]) => (
                        <Grid item xs={4} key={id} >
                            <Link className="product-link" to={`/products/${slug}`} style={{ textDecoration: 'none', color: 'white' }}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={imgUrl}
                                        title={name}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" color="textSecondary" style={{ fontSize: 18, fontWeight: '500', textAlign: 'center', marginTop: '5%' }} component="div">
                                            {name}
                                        </Typography>
                                        <Typography variant="h6" style={{ fontSize: 16, fontWeight: '500', textAlign: 'center', marginTop: '2%', marginBottom: '5%' }} color="textSecondary" component="div">
                                            $ {price}
                                        </Typography>
                                        {/* <RatingComponent rating={item.rating} /> */}
                                    </CardContent>
                                    {/* <Button onClick={() => { addItem(item) }} variant="outlined" fullWidth size="medium" color="primary" className={classes.margin}>
                                    ADD TO CART
                                </Button> */}
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </> : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
                }
            </Grid>
        </div>
    );
}