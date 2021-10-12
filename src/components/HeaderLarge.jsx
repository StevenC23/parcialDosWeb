import React from 'react';
import logoPinterest from '../utils/logopinterest.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCommentDots, faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDesktop }) => {
    return (
        <div style={{ ...styles.headerLarge, display: isDesktop ? 'flex' : 'none' }}>
            <div style={styles.firstIcons}>
                <img src={logoPinterest} alt="logoP" style={styles.logoP} />
                <div style={styles.inicio} >
                    <span><strong>Inicio</strong></span>
                </div>
                <div style={styles.hoy} >
                    <span><strong>Hoy</strong></span>
                </div>
            </div>
            <div style={styles.search}>
                <FontAwesomeIcon icon={faSearch} style={styles.icon} />
                <span style={styles.buscar}>Buscar</span>
            </div>
            <div style={styles.secondIcons}>
                <FontAwesomeIcon icon={faBell} style={styles.icon2} />
                <FontAwesomeIcon icon={faCommentDots} style={styles.icon2} />
                <FontAwesomeIcon icon={faUserCircle} style={styles.icon2} />
                <FontAwesomeIcon icon={faChevronDown} style={styles.icon2} />

            </div>
        </div>
    );
};

const styles = {
    headerLarge: {
        // display: 'none',
        width: '100vw',
        height: '80px',
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
    },

    /////////////////////////////////////////

    firstIcons: {
        width: '300px',
        // backgroundColor: 'yellow',
        margin: '2px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    logoP: {
        cursor: 'pointer',
        width: '30px',
        height: '30px',
    },

    inicio: {
        cursor: 'pointer',
        width: '70px',
        height: '50px',
        borderRadius: '50px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    hoy: {
        cursor: 'pointer',
        width: '70px',
        height: '50px',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /////////////////////////////////////////
    search: {
        cursor: 'text',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        margin: '16px 2px',
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        paddingLeft: '20px',
    },
    icon: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '20px',
        // background-color: ;
    },

    buscar: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '20px',
        marginLeft: '5px',
    },

    ////////////////////////////////////////
    secondIcons: {
        width: '300px',
        // backgroundColor: 'yellow',
        margin: '2px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icon2: {
        cursor: 'pointer',
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '30px',
        // background-color: ;
    },
}

export default Header;