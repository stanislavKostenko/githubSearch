import * as React from 'react';
import './SearchForm.scss';
import { FormEvent } from 'react';
import { InputComponent } from '../Input/Input.Component';
import { SearchFormStore } from './SearchForm.store';

interface SearchFormComponentProps {

}

interface SearchFormComponentState {
    login: string;
}
export class SearchFormComponent extends React.Component<SearchFormComponentProps, SearchFormComponentState> {
    protected searchStore: SearchFormStore = new SearchFormStore();
    constructor(props: SearchFormComponentProps) {
        super(props);
        this.onInputHandler = this.onInputHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            login: ''
        };
    }

    onInputHandler(login: string) {
        this.setState( (state) => {
            return {...state, login};
        });
    }

    onSubmit(e: FormEvent<any>) {
        e.preventDefault();
        this.searchStore.userData(this.state.login);
    }

    render() {
        return(
            <div className="search-form-wrapper">
                <form action="" className="search-form" onSubmit={this.onSubmit}>
                    <InputComponent
                        value={this.state.login}
                        onInput={this.onInputHandler}
                        placeholder="Enter username"
                    />
                </form>
            </div>
        );
    }
}