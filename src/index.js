import ReactDOM from 'react-dom';
import App from './components/App';
import React from 'react';

import { Provider } from 'mobx-react';
import TitleStore from './stores/TitleStore';

const app =
    <Provider titleStore={TitleStore}>
        <App />
    </Provider>;
ReactDOM.render(app, document.getElementById('root'));