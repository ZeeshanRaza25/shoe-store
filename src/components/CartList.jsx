import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import { Outlet, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
}));
// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//       maxWidth: 752,
//     },
//     demo: {
//       backgroundColor: theme.palette.background.paper,
//     },
//     title: {
//       margin: theme.spacing(4, 0, 2),
//     },
//   }));

export default function CartList() {
    const classes = useStyles();
    const { items, removeItem } = useContext(GlobalContext);

    return (
        <div style={{ width: '60%', marginLeft: '20%', marginTop: '3%', height: '100%', }}>
            {items.length > 0 ? <>
                {items.map(item => (
                    <List dense={false} key={item.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt={item.name} src={item.imgUrl} className={classes.large} />
                            </ListItemAvatar>
                            <ListItemText style={{ marginLeft: '5%' }}
                                primary={item.name}
                            />
                            <ListItemSecondaryAction onClick={() => removeItem(item.id)}>
                                <IconButton edge="end" aria-label="delete" size="medium" style={{ height: 200, fontWeight: '900' }}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                    //       <Card className={classes.root}>
                    //       <CardMedia
                    //           className={classes.media}
                    //           image={item.imgUrl}
                    //           title={item.name}
                    //       />
                    //       <CardActions disableSpacing>
                    //           <IconButton aria-label="add to favorites">
                    //               <FavoriteIcon />
                    //           </IconButton>
                    //           <IconButton aria-label="share">
                    //               <ShareIcon />
                    //           </IconButton>
                    //       </CardActions>
                    //   </Card>
                ))}
            </> : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
            }
        </div>
    );
}


// export default function Product() {
//     return (
//         <div>
//             <div>
//                 <Outlet />
//             </div>

//         </div>
//     )
// }
 // <div className="flex items-center bg-gray-100 mb-10 shadow" key={item.id}>
                    //     <div className="flex-auto text-left px-4 py-2 m-2">
                    //         <p className="text-gray-900 leading-none">{item.name}</p>
                    //         <p className="text-gray-600">{item.price}</p>
                    //     </div>
                    //     <div className="flex-auto text-right px-4 py-2 m-2">
                    //         <Link to={`/edit/${item.id}`}>
                    //             <button onClick={() => editItem(item.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                    //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    //             </button>
                    //         </Link>
                    //         <button onClick={() => removeItem(item.id)} className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    //         </button>
                    //     </div>
                    // </div>