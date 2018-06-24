import React from 'react';
import styles from './style.module.css';
import Header from '../Header';
import Search from '../SearchBar';
import Title from '../Title';
import Footer from '../Footer';

import { observer, inject } from 'mobx-react';

@inject('titleStore')
@observer
class App extends React.Component {

    allTitlesPlaces = () => {
        const count = this.props.titleStore.getCount;
        let all = [];
        for (let i = 0; i < count; i++) {
            all.push(<Title key={i} index={i} />);
        }
        return all;
        all = [];
    }

    render() {
        const { titleStore } = this.props;
        return (
            <div className="App">
                <Header />
                <Search />
                <ul className={styles.ul}>
                    {this.allTitlesPlaces()}
                </ul>
                <Footer />
            </div>
        )
    }
}

export default App;