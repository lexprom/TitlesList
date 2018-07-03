import React from 'react';
import { Text, Background } from './styles.module.js';

class Header extends React.Component {
    render() {
        return (
            <Background>
                <Text>Header</Text>
            </Background>
        )
    }
}

export default Header;