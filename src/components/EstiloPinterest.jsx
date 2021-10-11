import React from 'react';
import Pin from './Pin.jsx'

const EstiloPinterest = () => {
    return (
        <div style = {styles.pin_container}>
            <Pin size='small'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='medium'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='medium'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='medium'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='medium'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='medium'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='small'/>

        </div>
    );
};

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '100vw',
        backgroundColor: 'white',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 180px)',
        gridAutoRows: '10px',
        justifyContent: 'center',
    }
}

export default EstiloPinterest;