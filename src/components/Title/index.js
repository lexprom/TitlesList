import React from 'react';
import styles from './styles.module.css';

import {inject,observer} from 'mobx-react';

@inject('titleStore')
@observer
class Title extends React.Component {
    render() {
        const {titleStore} = this.props;
        return (
            <li className={styles.li}>
                <p className={styles.title}>{titleStore.getTitle(this.props.index)}</p>
                <p className={styles.text}>{titleStore.getPlace(this.props.index)}</p>
            </li>
        )
    }
}

export default Title;