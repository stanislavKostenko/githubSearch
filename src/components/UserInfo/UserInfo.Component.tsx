import * as React from 'react';
import './UserInfo.Component.scss';
import { UserProfile } from '../../types/user.types';
import { observer } from 'mobx-react';

interface UserInfoComponentProps {
    data: UserProfile;
}

@observer
export class UserInfoComponent extends React.Component<UserInfoComponentProps> {
    render() {
        if (this.props.data === undefined) {
            return <div className="user-info__loading">Loading</div>;
        }
        return(
            <div className="user-info">
                <div className="user-info__wrapper">
                    <img className="user-info__avatar" src={this.props.data.avatar_url} alt="avatar"/>
                    <div className="user-info__data">
                        <span className="user-info__data__name">{this.props.data.name}</span>
                        <span className="user-info__data__login">{this.props.data.login}</span>
                        <span className="user-info__data__email">
                            <i className="fa fa-envelope-o" aria-hidden="true" />
                            {this.props.data.email}
                            </span>
                    </div>
                </div>
                <div className="user-info__data_media">
                    <span className="user-info__data__repositories">Repositories: {this.props.data.public_repos}</span>
                    <span className="user-info__data__followers">Followers: {this.props.data.followers}</span>
                    <span className="user-info__data__followings">Followings: {this.props.data.following}</span>
                </div>
            </div>
        );
    }
}