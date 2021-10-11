import React from 'react';

const Pin = (props) => {
    return (
        <div style={{
            ...styles.pin,
            ...styles[props.size]
            }}>
            
        </div>
    );
};

const styles = {
    pin: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '10px',
        backgroundColor: 'red',

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