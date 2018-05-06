import * as React from 'react';
import './App.scss';
import { observer } from 'mobx-react';
import { HeaderComponent } from './components/Header/Header.Component';

interface AppProps {

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
            </div>

        );
    }
}

export default App;