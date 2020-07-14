import React from 'react';
import './App.css';
// import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import MyHeader from './components/Header';
// import Content from './components/content';
import { Routes, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
// import ProductHome from './components/ProductHome';
import { GlobalProvider } from './context/GlobalState';
import CartList from './components/CartList';
import MyHome from './components/Home1';

// const useStyles = makeStyles({
//   helloWorldStyle: {
//     fontStyle: 'oblique',
//     color: 'red',
//   }
// })

function App() {
  // const classes = useStyles();
  return (
    <GlobalProvider>
      <MyHeader />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<MyHome />} />
        <Route path="products" element={<Product />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="cartlist" element={<CartList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
