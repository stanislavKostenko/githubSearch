import * as React from 'react';
import './UserRepositoriesItem.Component.scss';
import { UserRepositoriesTypes } from '../../types/user.repositories.types';

interface UserRepositoriesComponentProps {
    data: UserRepositoriesTypes;
}

export class UserRepositoriesItemComponent extends React.Component<UserRepositoriesComponentProps> {
    render() {
        return(
            <div className="repositories__item">
                <span className="repositories__item__name">{this.props.data.name}</span>
                <span className="repositories__item__language">{this.props.data.language}</span>
            </div>
        );
    }
}