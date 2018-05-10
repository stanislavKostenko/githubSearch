import * as React from 'react';
import './App.scss';
import { observer } from 'mobx-react';
import { HeaderComponent } from './components/Header/Header.Component';
import { SearchFormStore } from './components/SearchForm/SearchForm.store';
import { UserInfoComponent } from './components/UserInfo/UserInfo.Component';

interface AppProps {
    userInfo: SearchFormStore;
}

@observer
class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <HeaderComponent />
                <UserInfoComponent data={this.props.userInfo.userProfile}/>
            </div>

        );
    }
}

export default App;