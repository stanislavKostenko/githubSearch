import * as React from 'react';
import './App.scss';
import { observer } from 'mobx-react';

interface AppProps {

}

@observer
class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }


    render() {
        return (
            <div />

        );
    }
}

export default App;