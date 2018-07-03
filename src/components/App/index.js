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
                    <Title />
                    <Title />
                    <Title />
                    <Title />
                    <Title />
                    <Title />
                </ul>
                <Footer />
            </div>
        )
    }
}

export default App;