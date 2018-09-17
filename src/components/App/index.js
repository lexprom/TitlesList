import React from 'react';
import { observer, inject } from 'mobx-react';
import { Ul } from './styles';
import Header from '../Header';
import Search from '../SearchBar';
import Title from '../Title';
import Footer from '../Footer';


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
          {titleStore.titles.map(title => <Title element={title} key={title.id} />)}
        </Ul>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  titleStore: PropTypes..isRequired,
};

export default App;
