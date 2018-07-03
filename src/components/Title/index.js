import React from 'react';
import { Block, Text, Place } from './styles.module.js';

import { observer } from 'mobx-react';

@observer
class Title extends React.Component {
    render() {
        return (
            <Block>
                <Text>{this.props.element.title}</Text>
                <Place>{this.props.element.place}</Place>
            </Block>
        )
    }
}

export default Title;