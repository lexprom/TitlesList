import React from 'react';
import { injectGlobal, Ul } from './styles.module.js';
import Header from '../Header';
import Search from '../SearchBar';
import Title from '../Title';
import Footer from '../Footer';

import { observer, inject } from 'mobx-react';

@inject('titleStore')
@observer
class App extends React.Component {
    render() {
        const { titleStore } = this.props;
        return (
            <div>
                <Header />
                <Search />
                <Ul>
                    {titleStore.titles.map(title =>
                        <Title element={title} key={title.id} />
                    )}
                </Ul>
                <Footer />
            </div>
        )
    }
}

export default App;