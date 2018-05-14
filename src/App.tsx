import * as React from 'react';
import './App.scss';
import { HeaderComponent } from './components/Header/Header.Component';
import { SearchFormStore } from './components/SearchForm/SearchForm.store';
import { UserInfoComponent } from './components/UserInfo/UserInfo.Component';
import { observer } from 'mobx-react';
import { UserRepositoriesListComponent } from './components/Repositories/UserRepositoriesList.Component';

interface AppProps {
    userStore: SearchFormStore;
}
@observer
class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }
    render() {
        return (
            <div className="app">
                <HeaderComponent />
                <UserInfoComponent data={this.props.userStore.userProfile} />
                <UserRepositoriesListComponent data={this.props.userStore.userRepositories} />
            </div>

        );
    }
}

export default App;