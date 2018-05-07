import * as React from 'react';
import './Input.Component.scss';
import { KeyboardEvent } from 'react';

interface InputComponentProps {
    placeholder: string;
    onInput: (enteredText: string) => void;
    value: string;
}

export class InputComponent extends React.Component<InputComponentProps> {
    constructor(props: InputComponentProps) {
        super(props);
        this.onInputHandler = this.onInputHandler.bind(this);
    }
    onInputHandler(event: KeyboardEvent<any>) {
        const newText = event.currentTarget.value;
        this.props.onInput(newText);
    }

    render() {
        return(
            <div className="input-wrapper">
                <input
                    type="text"
                    className="search-form__input"
                    placeholder={this.props.placeholder}
                    onInput={this.onInputHandler}
                    value={this.props.value}
                />
            </div>
        );
    }
}