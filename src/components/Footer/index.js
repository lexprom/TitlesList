import React from 'react';
import { Text, Background } from './styles.module.js';

class Footer extends React.Component {
    render() {
        return (
            <Background>
                <Text>Sticky Footer</Text>
            </Background>
        )
    }
}

export default Footer;