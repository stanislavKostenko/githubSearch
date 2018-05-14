import * as React from 'react';
import './UserRepositoriesList.Component.scss';
import { UserRepositoriesTypes } from '../../types/user.repositories.types';
import { UserRepositoriesItemComponent } from './UserRepositoriesItem.Component';

interface UserRepositoriesListComponentProps {
    data: Array<UserRepositoriesTypes>;
}

export class UserRepositoriesListComponent extends React.Component<UserRepositoriesListComponentProps> {
    render() {
        if (this.props.data === undefined) {
            return <div className="user-info__loading">Loading</div>;
        }
        const repository = this.props.data.map((data: UserRepositoriesTypes, index: number) => {
            return <UserRepositoriesItemComponent data={data} key={index} />;
        });
        return(
            <div className="repositories">
                {repository}
            </div>
        );
    }
}