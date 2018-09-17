import React from 'react';
import { injectGlobal, Ul } from './styles.js';
import Header from '../Header/index.js';
import Search from '../SearchBar/index.js';
import Title from '../Title/index.js';
import Footer from '../Footer/index.js';

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