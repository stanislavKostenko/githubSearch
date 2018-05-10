import * as React from 'react';
import { UserProfile } from '../../types/user.types';

interface UserInfoComponentProps {
    data: UserProfile;
}

export class UserInfoComponent extends React.Component<UserInfoComponentProps> {
    render() {
        if (this.props.data === undefined) {
            return <div>Loading</div>;
        }
        return(
            <div className="user-info">
                <img src={this.props.data.avatar_url} alt="avatar"/>
                <span>{this.props.data.name}</span>
            </div>
        );
    }
}