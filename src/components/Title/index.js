import React from 'react';
import { Block, Text, Place } from './styles.js';

import { observer } from 'mobx-react';

@observer
class Title extends React.Component {
    render() {
        const {element} = this.props;
        return (
            <Block>
                <Text>{element.title}</Text>
                <Place>{element.place}</Place>
            </Block>
        )
    }
}

export default Title;