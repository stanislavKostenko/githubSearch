import * as React from 'react';
import './Header.scss';
import { LogoComponent } from '../Logo/Logo.Component';
import { SearchFormComponent } from '../SearchForm/SearchForm.Component';

export class HeaderComponent extends React.Component {
    render() {
        return(
            <div className="header-wrapper">
                <div className="header">
                    <LogoComponent />
                    <SearchFormComponent />
                </div>
            </div>
        );
    }
}