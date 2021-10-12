import React from 'react';
import Pin from './Pin.jsx'

const EstiloPinterest = () => {
    return (
        <div style = {styles.pin_container}>
            <Pin size='small' img='https://picsum.photos/300/450'/>
            <Pin size='small' img='https://picsum.photos/200/150'/>
            <Pin size='medium' img='https://picsum.photos/700/350'/>
            <Pin size='large' img='https://picsum.photos/300/450'/>
            <Pin size='medium' img='https://picsum.photos/900/850'/>
            <Pin size='small' img='https://picsum.photos/600/350'/>
            <Pin size='medium' img='https://picsum.photos/300/250'/>
            <Pin size='large' img='https://picsum.photos/500/250'/>
            <Pin size='small' img='https://picsum.photos/400/150'/>
            <Pin size='medium' img='https://picsum.photos/700/750'/>
            <Pin size='large' img='https://picsum.photos/800/650'/>
            <Pin size='small' img='https://picsum.photos/500/850'/>
            <Pin size='medium' img='https://picsum.photos/600/650'/>
            <Pin size='medium' img='https://picsum.photos/400/350'/>
            <Pin size='large' img='https://picsum.photos/100/250'/>
            <Pin size='medium' img='https://picsum.photos/300/650'/>
            <Pin size='large' img='https://picsum.photos/900/950'/>
            <Pin size='small' img='https://picsum.photos/600/850'/>
            <Pin size='medium' img='https://picsum.photos/400/750'/>
            <Pin size='large' img='https://picsum.photos/300/150'/>
            <Pin size='small' img='https://picsum.photos/700/350'/>
            <Pin size='medium'img='https://picsum.photos/800/250'/>
            <Pin size='medium' img='https://picsum.photos/900/150'/>
            <Pin size='medium' img='https://picsum.photos/400/650'/>
            <Pin size='large' img='https://picsum.photos/500/450'/>
            <Pin size='medium' img='https://picsum.photos/600/550'/>
            <Pin size='small' img='https://picsum.photos/100/450'/>
            <Pin size='medium' img='https://picsum.photos/200/750'/>
            <Pin size='medium' img='https://picsum.photos/300/850'/>
            <Pin size='large' img='https://picsum.photos/400/950'/>
            <Pin size='medium' img='https://picsum.photos/500/650'/>
            <Pin size='small' img='https://picsum.photos/600/350'/>
            <Pin size='medium' img='https://picsum.photos/900/150'/>
            <Pin size='large' img='https://picsum.photos/800/250'/>
            <Pin size='small' img='https://picsum.photos/700/650'/>
            <Pin size='medium' img='https://picsum.photos/400/950'/>
            <Pin size='large' img='https://picsum.photos/500/750'/>
            <Pin size='medium' img='https://picsum.photos/100/250'/>
            <Pin size='large' img='https://picsum.photos/200/150'/>
            <Pin size='medium' img='https://picsum.photos/700/450'/>
            <Pin size='small' img='https://picsum.photos/300/550'/>
            <Pin size='medium' img='https://picsum.photos/400/450'/>
            <Pin size='large' img='https://picsum.photos/600/950'/>
            <Pin size='small' img='https://picsum.photos/400/750'/>
            <Pin size='medium' img='https://picsum.photos/600/650'/>
            <Pin size='large' img='https://picsum.photos/700/450'/>
            <Pin size='small' img='https://picsum.photos/300/250'/>

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