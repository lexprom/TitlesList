import React from 'react';
import styles from './styles.module.css';

class SearchBar extends React.Component {
    render () {
        return (
            <form className={styles.form}>
                <input className={styles.input} placeholder="Search"/>
                <button className={styles.button}>Go</button>
            </form>
        )
    }
}

export default SearchBar;