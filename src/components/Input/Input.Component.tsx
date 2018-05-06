import * as React from 'react';
import './Input.Component.scss';

interface InputComponentProps {
    placeholder: string;
}

export class InputComponent extends React.Component<InputComponentProps> {
    render() {
        return(
            <div className="input-wrapper">
                <input type="text" className="search-form__input" placeholder={this.props.placeholder}/>
            </div>
        );
    }
}