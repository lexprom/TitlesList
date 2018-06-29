import React from 'react';
import styles from './style.module.css';
import Header from '../Header';
import Search from '../SearchBar';
import Title from '../Title';
import Footer from '../Footer';

import {observer,inject} from 'mobx-react';

@inject('titleStore')
@observer
class App extends React.Component {
    render() {
        const { titleStore } = this.props;
        return (
            <div className="App">
                <Header />
                <Search />
                <ul className={styles.ul}>
                    {titleStore.titles.map(title =>
                        <Title element={title} key={title.id} />
                    )}
                </ul>
                <Footer />
            </div>
        )
    }
}

export default App;