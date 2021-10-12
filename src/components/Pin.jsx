import React from 'react';


const Pin = (props) => {
    return (
        <div style={{
            ...styles.pin,
            ...styles[props.size],
            background : 'url('+props.img+')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundSize: '100% 100%',
            }}>
            {/* <img src="https://picsum.photos/300/450" alt="img"></img> */}
        </div>
    );
};


const styles = {
    pin: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '10px',
        backgroundColor: 'red',
        backgroundSize: 'cover',

    },
    small: {
        gridRowEnd: 'span 21'
    },
    medium: {
        gridRowEnd: 'span 28'
    },
    large: {
        gridRowEnd: 'span 35'
    }
}

export default Pin;