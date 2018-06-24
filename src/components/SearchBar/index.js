import React from 'react';
import styles from './styles.module.css';

import { observer, inject } from 'mobx-react';

@inject('titleStore')
@observer
class SearchBar extends React.Component {
    handleChange = (e) => {
        this.props.titleStore.inputValue = e.target.value;
    };

    onClick = () => {
        const inputText = this.props.titleStore.currentInputValue;
        this.props.titleStore.fetchTitlesPlaces(inputText);
        this.props.titleStore.inputValue = '';
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