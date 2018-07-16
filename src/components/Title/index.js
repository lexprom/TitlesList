import React from 'react';
<<<<<<< HEAD
import { Block, Text, Place, MiddleShape, FirstSquare, SecondSquare } from './styles.module.js';
=======
import { Block, Text, Place } from './styles.js';
>>>>>>> 4f849ab4416567446b6c57c30225f69250dc3108

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