import React from 'react';
import styles from './styles.module.css';

import { observer, inject } from 'mobx-react';

@inject('titleStore')
@observer
class SearchBar extends React.Component {
    onClick = () => {
        this.props.titleStore.fetchTitles();
    }

    handleChange = (e) => {
        this.props.titleStore.setInput(e.target.value);
    }

    render() {
        const { titleStore } = this.props;
        return (
            <form className={styles.form}>
                <input className={styles.input} placeholder="Search" value={titleStore.inputValue} onChange={this.handleChange} />
                <button type="button" disabled={!titleStore.inputValue} onClick={this.onClick} className={styles.button}>Go</button>
            </form>
        )
    }
}

export default SearchBar;