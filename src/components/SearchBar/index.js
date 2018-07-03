import React from 'react';
import { Form, Input, Button } from './styles.module.js';

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
            <Form>
                <Input placeholder="Search" value={titleStore.inputValue} onChange={this.handleChange} />
                <Button type="button" disabled={!titleStore.inputValue} onClick={this.onClick}>Go</Button>
            </Form>
        )
    }
}

export default SearchBar;