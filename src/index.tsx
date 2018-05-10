import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import { SearchFormStore } from './components/SearchForm/SearchForm.store';

const userStore = new SearchFormStore();

ReactDOM.render(
    <App userInfo={userStore}/>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
