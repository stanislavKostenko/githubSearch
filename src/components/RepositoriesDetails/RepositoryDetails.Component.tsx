import * as React from 'react';
import './RepositoryDetails.Component.scss';
import { UserRepositoriesTypes } from '../../types/user.repositories.types';

interface RepositoryDetailsComponentProps {
    data: UserRepositoriesTypes;
}

export class RepositoryDetailsComponent extends React.Component<RepositoryDetailsComponentProps> {
    render() {
        return(
            <div className="repositories__details">
                <span className="repositories__details__name">{this.props.data.name}</span>
                <span className="repositories__details__full-name">Full name: {this.props.data.full_name}</span>
                <span className="repositories__details__stars">Stars: {this.props.data.stargazers_count}</span>
                <span className="repositories__details__created">Created: {this.props.data.created_at}</span>
                <span className="repositories__details__updated">Updated: {this.props.data.updated_at}</span>
                <a className="repositories__details__site-link" href={this.props.data.svn_url}>Open on GitHub</a>
            </div>
        );
    }
}