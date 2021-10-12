import React from 'react';

const HeaderSmall = ({ isDesktop }) => {
    return (
        <div style={{ ...styles.headerSmall, display: isDesktop ? 'none' : 'flex' }}>

        </div>
    );
};

const styles = {
    headerSmall: {
        display: 'flex',
        width: '100vw',
        height: '80px',
        backgroundColor: 'blue',
    }
}
export default HeaderSmall;