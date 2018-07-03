import React from 'react';
import styles from './styles.module.css';

import { inject, observer } from 'mobx-react';

@observer
class Title extends React.Component {
    render() {
        const {element} = this.props;
        return (
            <li className={styles.li}>
                <p className={styles.title}>{element.title}</p>
                <p className={styles.text}>{element.place}</p>
            </li>
        )
    }
}

export default Title;