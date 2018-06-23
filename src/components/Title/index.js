import React from 'react';
import styles from './styles.module.css';

class Title extends React.Component {
    render() {
        return (
            <li className={styles.li}>
                <p className={styles.title}>Title</p>
                <p className={styles.text}>place_of_publication</p>
            </li>
        )
    }
}

export default Title;