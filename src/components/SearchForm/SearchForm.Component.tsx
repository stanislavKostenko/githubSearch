import * as React from 'react';
import './SearchForm.scss';
import { FormEvent } from 'react';
import { InputComponent } from '../Input/Input.Component';

export class SearchFormComponent extends React.Component {
    onSubmit(e: FormEvent<any>) {
        e.preventDefault();
    }

    render() {
        return(
            <div className="search-form-wrapper">
                <form action="" className="search-form" onSubmit={this.onSubmit}>
                    <InputComponent placeholder="Enter username" />
                </form>
            </div>
        );
    }
}