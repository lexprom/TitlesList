import React from 'react';
import styles from './style.module.css';
import Header from '../Header';
import Search from '../SearchBar';
import Title from '../Title';
import Footer from '../Footer';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Search />
                <ul className={styles.ul}>
                    <Title index={0} />
                    <Title index={1} />
                    <Title index={2} />
                    <Title index={3} />
                </ul>
                <Footer />
            </div>
        )
    }
}

export default App;