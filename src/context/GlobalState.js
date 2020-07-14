import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    items: [
        {
            id: 1,
            name: 'Men casual shoes',
            price: '799',
            type: 'Men',
            rating: 3,
            quantity: 0,
            imgUrl: 'https://static-01.daraz.pk/p/2ccb6d541685dfc85e0ca04a0e5194c5.png'
        },
        {
            id: 2,
            name: 'Men shoes',
            price: '899',
            type: 'Men',
            rating: 4,
            quantity: 0,
            imgUrl: 'https://static-01.daraz.pk/p/2ccb6d541685dfc85e0ca04a0e5194c5.png'
        },
        {
            id: 3,
            name: 'casual shoes',
            price: '999',
            type: 'Men',
            rating: 5,
            quantity: 0,
            imgUrl: 'https://static-01.daraz.pk/p/2ccb6d541685dfc85e0ca04a0e5194c5.png'
        },
        {
            id: 4,
            name: 'Men casual shoes',
            price: '799',
            type: 'Women',
            rating: 2,
            quantity: 0,
            imgUrl: 'https://static-01.daraz.pk/p/2ccb6d541685dfc85e0ca04a0e5194c5.png'
        },
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeItem(id) {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        });
    };

    function addItem(item) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
    };

    function editItem(item) {
        dispatch({
            type: 'EDIT_ITEM',
            payload: item
        });
    };

    return (<GlobalContext.Provider value={{
        items: state.items,
        removeItem,
        addItem,
        editItem
    }}>
        {children}
    </GlobalContext.Provider>);
}