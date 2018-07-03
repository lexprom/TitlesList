import React from 'react';
import styles from './styles.module.css';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <p className={styles.text}>Header</p>
            </header>
        )
    }
}

export default Header;