import React from 'react';
import { Block, Text, Place, MiddleShape, FirstSquare, SecondSquare } from './styles.module.js';

import { observer } from 'mobx-react';

@observer
class Title extends React.Component {
    render() {
        const {element} = this.props;
        return (
            <Block>
                <Text>{element.title}</Text>
                <FirstSquare />
                <MiddleShape />
                <SecondSquare />
                <Place>{element.place}</Place>
            </Block>
        )
    }
}

export default Title;