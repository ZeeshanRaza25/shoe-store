import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    items: [
        {
            name: "Air Max 90",
            id: 1,
            price: '1799',
            type: 'Women',
            rating: 2,
            quantity: 0,
            imgUrl:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a8860307-124b-4bf8-bd37-61b6952bed39/air-max-90-shoe-kn1phR.jpg",
            img1:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7fddcc13-096f-4fa7-8006-bb78627a192a/air-max-90-shoe-kn1phR.jpg",
            img2:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/703377e3-e4be-4ed5-a144-aa4e8483d4f2/air-max-90-shoe-kn1phR.jpg",
            img3:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/30df81f1-9828-4dfb-b4f2-132084eb4180/air-max-90-shoe-kn1phR.jpg"
        },
        {
            name: "Air Max 95 Essential",
            id: 2,
            price: '1899',
            type: 'Men',
            rating: 4,
            quantity: 0,
            imgUrl:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/agdm9cq3urmzu1wufaez/air-max-95-essential-shoe-7Cq3xk.jpg",
            img1:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/yawwqxvr40yoqnj98eva/air-max-95-essential-shoe-7Cq3xk.jpg",
            img2:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ioridfry4eeowwi4kjb6/air-max-95-essential-shoe-7Cq3xk.jpg",
            img3:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/efsq0xcrwznili9zqwma/air-max-95-essential-shoe-7Cq3xk.jpg"
        },
        {
            name: "Jordan 5 Retro",
            id: 3,
            price: '1999',
            type: 'Men',
            rating: 5,
            quantity: 0,
            imgUrl:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d70c8b18-58db-4a42-9857-63908a5af5dd/air-jordan-5-retro-older-shoe-tWwB3f.jpg",
            img1:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5babb194-8848-4712-9775-f7202331984d/air-jordan-5-retro-older-shoe-tWwB3f.jpg",
            img2:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d8b169fd-797c-4e68-96d3-e45c2a1d61d8/air-jordan-5-retro-older-shoe-tWwB3f.jpg",
            img3:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/090abf69-bf8e-4309-a266-d6475e734d81/air-jordan-5-retro-older-shoe-tWwB3f.jpg"
        },
        {
            name: "Nike Air Max Plus III",
            id: 4,
            price: '1699',
            type: 'Men',
            rating: 4,
            quantity: 0,
            imgUrl:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f5ce4856-476f-40e9-be52-ac6dcbe4fb26/air-max-plus-iii-shoe-pcRszz.jpg",
            img1:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aa5068a0-ca27-44e1-bc00-b6df86aac2b3/air-max-plus-iii-shoe-pcRszz.jpg",
            img2:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bced0fee-fbfc-4ae3-985b-2fdbb57ff31a/air-max-plus-iii-shoe-pcRszz.jpg",
            img3:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dae5135f-728a-4dda-87c0-06262e811130/air-max-plus-iii-shoe-pcRszz.jpg"
        },
        {
            name: "Air Zoom",
            id: 6,
            price: '1599',
            type: 'Men',
            rating: 3,
            quantity: 0,
            imgUrl:
                " https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/99ea062-7111-48c4-8066-a89613053227/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-29kGpS.jpg",
            img1:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/60b31e7c-54a7-45df-83dc-ac7c403fd291/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-29kGpS.jpg",
            img2:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/52de8598-9a88-4b7d-8c17-1e831d6865b8/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-29kGpS.jpg",
            img3:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1da44266-4bec-45e0-947c-32f3d3a392c2/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-29kGpS.jpg"
        },

        {
            name: "Zoom Fly 3",
            id: 7,
            price: '1399',
            type: 'Men',
            rating: 4,
            quantity: 0,
            imgUrl:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c8fc9ed5-8b84-437f-a2b8-daab62e9126a/zoom-fly-3-running-shoe-9SdJdh.jpg",
            img1:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5410c1a2-5322-4da9-9eb2-560ff2c4fea8/zoom-fly-3-running-shoe-9SdJdh.jpg",
            img2:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d4d45dce-20b3-4389-8111-12395dd97984/zoom-fly-3-running-shoe-9SdJdh.jpg",
            img3:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/81b574dd-3d60-4abe-a857-a142d4b688b6/zoom-fly-3-running-shoe-9SdJdh.jpg"
        },
        {
            name: "Air Zoom Infinity Tour",
            id: 8,
            price: '1599',
            type: 'Men',
            rating: 3,
            quantity: 0,
            imgUrl:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bd851f24-2caf-45bd-a0e6-7214a3fe4cee/air-zoom-infinity-tour-golf-shoe-4RtwvS.jpg",
            img1:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7c978be3-9923-4cd0-957d-98fa75f87f35/air-zoom-infinity-tour-golf-shoe-4RtwvS.jpg",
            img2:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/418ba9ac-8e6e-40af-89d8-547bfcc29f33/air-zoom-infinity-tour-golf-shoe-4RtwvS.jpg",
            img3:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d7ebce86-a6c3-47ad-8516-6d641caeb0e5/air-zoom-infinity-tour-golf-shoe-4RtwvS.jpg"
        },
        {
            name: "Air Max 95 ERA",
            id: 9,
            price: '1499',
            type: 'Men',
            rating: 4,
            quantity: 0,
            imgUrl:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/70ed5234-928b-40cd-9400-6db6faad7671/air-max-95-era-shoe-zSDKRP.jpg",
            img1:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d67dcfdb-d186-4dd4-8234-247d73eefa28/air-max-95-era-shoe-zSDKRP.jpg",
            img2:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/57ceea27-3dbf-43bc-8338-d3934ac322b0/air-max-95-era-shoe-zSDKRP.jpg",
            img3:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/171bed34-760d-4062-a98d-9f3027d6d374/air-max-95-era-shoe-zSDKRP.jpg"
        },
        {
            name: "Vintage Premium",
            id: 10,
            price: '1999',
            type: 'Men',
            rating: 5,
            quantity: 0,
            imgUrl:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-16200bdf-1a22-4220-94c7-b9e7b34626f6/nikecourt-vintage-shoe-3X1v0g.jpg",
            img1:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-71f3641a-89e5-47de-956d-dbe362503137/nikecourt-vintage-shoe-3X1v0g.jpg",
            img2:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-956b22fb-58e1-4b68-bcc2-abe8c4aac1ef/nikecourt-vintage-shoe-3X1v0g.jpg",
            img3:
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-f84c6da0-2e7b-4df7-a72e-7d8adb450cbe/nikecourt-vintage-shoe-3X1v0g.jpg"
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