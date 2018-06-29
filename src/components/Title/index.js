import React from 'react';
import styles from './styles.module.css';

import { inject, observer } from 'mobx-react';

@observer
class Title extends React.Component {
    render() {
        return (
            <li className={styles.li}>
                <p className={styles.title}>{this.props.element.title}</p>
                <p className={styles.text}>{this.props.element.place}</p>
            </li>
        )
    }
}

export default Title;