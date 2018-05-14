import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import { searchStore } from './components/SearchForm/SearchForm.store';

ReactDOM.render(
    <App userStore={searchStore}/>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
