import React from 'react';
import { Form, Input, Button } from './styles.module.js';

import { observer, inject } from 'mobx-react';

@inject('titleStore')
@observer
class SearchBar extends React.Component {
    onClick = () => {
        const inputText = this.props.titleStore.inputValue;
        this.props.titleStore.fetchTitles(inputText);
        this.props.titleStore.inputValue = '';
    }

    handleChange = (e) => {
        this.props.titleStore.inputValue = e.target.value;
    }

    render() {
        const { titleStore } = this.props;
        return (
            <Form>
                <Input placeholder="Search" value={titleStore.inputValue} onChange={this.handleChange} />
                <Button type="button" disabled={!titleStore.inputValue} onClick={this.onClick}>Go</Button>
            </Form>
        )
    }
}

export default SearchBar;