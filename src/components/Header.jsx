import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { Link } from 'react-router-dom';
// import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: 'none',
    // [theme.breakpoints.up('md')]: {
    //   display: 'block',
    // },
    marginLeft: '6%',
    // fontWeight: '500',
    // fontSize: 35
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function MyHeader() {
  // const navigate = useNavigate();
  // const { items } = useContext(GlobalContext);
  // console.log(items)
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.title} style={{ margingLeft: '5%' }}>
            <img alt="logo" src={require('../assets/logo.png')} height="80" width="300" />
          </Link>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <div className={classes.grow} />
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Home &nbsp; &nbsp;
          </Link>
          <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
            Products &nbsp; &nbsp;
          </Link>
          {/* <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
            About &nbsp;
          </Link> */}
          {/* <div className={classes.sectionDesktop}>
            <Link to="/cartlist" style={{ textDecoration: 'none', color: 'white' }}>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={items.length} color="secondary">
                  <AddShoppingCartSharpIcon />
                </Badge>
              </IconButton>
            </Link>
          </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// // import Button from '@material-ui/core/Button';
// // import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';
// import MyIcon from '@material-ui/icons/AcUnitRounded'
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   TypographicStyle: {
//     flex: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// const MyHeader = () => {
//   const classes = useStyles();
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography className={classes.TypographicStyle}><Link to="/">Home</Link></Typography>
//         {/* <MyIcon /> */}
//         {/* <Link to="/">Home</Link> {' '} {' '} */}
//         <Link to="/about">About</Link> {' '}
//         <Link to="/products">Product</Link> {' '}
//         {/* <Button color="inherit">Login</Button> */}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default MyHeader;