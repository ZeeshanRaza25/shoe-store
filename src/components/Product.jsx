import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { green, purple } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import { Outlet, Link } from 'react-router-dom';
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
    const { addItem, items } = useContext(GlobalContext);
    // console.log(items.length)
    return (
        <div style={{ marginLeft: '5%', marginRight: '5%' }}>
            <Grid container
                direction="row"
                alignItems="center"
                spacing={3} >
                {items.length > 0 ? <>
                    {items.map(item => (
                        <Grid item xs={4} key={item.id} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={item.imgUrl}
                                    title={item.name}
                                />
                                <CardContent>
                                    <Typography variant="h6" color="textSecondary" style={{ fontSize: 18, fontWeight: '500', textAlign: 'center', marginTop: '5%'}} component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="h6" style={{ fontSize: 16, fontWeight: '500', textAlign: 'center', marginTop: '2%', marginBottom: '5%'}} color="textSecondary" component="div">
                                        $ {item.price}
                                    </Typography>
                                    {/* <RatingComponent rating={item.rating} /> */}
                                </CardContent>
                                <Button onClick={() => { addItem(item) }} variant="outlined" fullWidth size="medium" color="primary" className={classes.margin}>
                                    ADD TO CART
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </> : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
                }
            </Grid>
        </div>
    );
}

//     return (
//         <div>
//               {items.length > 0 ? <>
//                   {items.map(item => (
//                     <div className="flex items-center bg-gray-100 mb-10 shadow" key={item.id}>
//                         <div className="flex-auto text-left px-4 py-2 m-2">
//                             <p className="text-gray-900 leading-none">{item.name}</p>
//                             <p className="text-gray-600">{item.price}</p>
//                         </div>
//                         <div className="flex-auto text-right px-4 py-2 m-2">
//                             <Link to={`/edit/${item.id}`}>
//                                 <button onClick={() => editItem(item.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
//                                 </button>
//                             </Link>
//                             <button onClick={() => removeItem(item.id)} className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </> : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
//             }
//         </div>
//     );
// }
