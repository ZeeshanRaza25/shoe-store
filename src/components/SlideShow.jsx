import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css';

const Slideshow = () => {
    const slideImages = [
        'https://cdn.shopify.com/s/files/1/0016/0074/9623/files/4th_Banner_1512x.jpg?v=1590646782',
        'https://cdn.shopify.com/s/files/1/0016/0074/9623/files/1st-Sec-MainBanner-2-1263x442-New-Mens_1512x.jpg?v=1590750951',
        'https://cdn.shopify.com/s/files/1/0016/0074/9623/files/1st-Sec-MainBanner-2-1263x442-New-Women_1512x.jpg?v=1590750973',
    ];

    const properties = {
        duration: 6000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        onChange: (oldIndex, newIndex) => {
            console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    }
    return (
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>

                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>

                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;