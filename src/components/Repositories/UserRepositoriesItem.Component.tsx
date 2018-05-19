import * as React from 'react';
import './UserRepositoriesItem.Component.scss';
import { UserRepositoriesTypes } from '../../types/user.repositories.types';
import { repositoryDetailsStore, RepositoryStore } from '../RepositoriesDetails/Repository.store';
import { RepositoryDetailsComponent } from '../RepositoriesDetails/RepositoryDetails.Component';

interface UserRepositoriesComponentProps {
    data: UserRepositoriesTypes;
}

interface UserRepositoriesItemComponentState {
    clicked: boolean;
}

export class UserRepositoriesItemComponent extends React.Component
    <UserRepositoriesComponentProps, UserRepositoriesItemComponentState> {
    private repoStore: RepositoryStore = repositoryDetailsStore;

    constructor(props: UserRepositoriesComponentProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.addElement = this.addElement.bind(this);
        this.removeElement = this.removeElement.bind(this);
        this.state = {
            clicked: false
        };
    }
    onClick() {
        this.repoStore.userRepositoryDetails(this.props.data.owner.login, this.props.data.name);
        console.log('click');
        if (!this.state.clicked) {
            this.addElement();
        } else {
            this.removeElement();
        }
    }

    addElement() {
        this.setState( {
            clicked: true
        });
    }

    removeElement() {
        this.setState( {
            clicked: false
        });
    }
    render() {
        return(
            <div className="repositories__item-wrapper">
                <div className="repositories__item" onClick={this.onClick}>
                    <span className="repositories__item__name">{this.props.data.name}</span>
                    <span className="repositories__item__language">{this.props.data.language}</span>
                </div>
                {this.state.clicked ? <RepositoryDetailsComponent data={this.props.data} /> : <div />}
            </div>

        );
    }
}