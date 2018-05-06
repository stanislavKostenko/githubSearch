import * as React from 'react';
import './Logo.scss';

export class LogoComponent extends React.Component {
    render() {
        return(
            <div className="header__logo">
                <img
                    src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png"
                    alt="logo"
                    className="header__logo__image"
                />
            </div>
        );
    }
}