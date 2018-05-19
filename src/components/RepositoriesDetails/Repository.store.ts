import { UserRepositoriesTypes } from '../../types/user.repositories.types';
import { action, computed, observable } from 'mobx';
import { repositoryProvider } from './Repository.provider';

export class RepositoryStore {
    @observable
    private _repositoryDetails: UserRepositoriesTypes;

    @computed
    get repositoryDetails(): UserRepositoriesTypes {
        return this._repositoryDetails;
    }

    @observable
    private _errorMessage: string;

    @computed
    get errorMessage(): string {
        return this._errorMessage;
    }

    userRepositoryDetails(login: string, repoName: string) {
        repositoryProvider
            .getRepositoryDetails(login, repoName)
            .then(this.repositoryDetailsUpdate.bind(this))
            .catch(action((e: XMLHttpRequest) => {
                this._errorMessage = e.statusText;
                throw new Error(e.statusText);
            }));
    }

    @action
    private repositoryDetailsUpdate(repo: UserRepositoriesTypes) {
        this._repositoryDetails = repo;
        console.log(this._repositoryDetails);
    }
}

export const repositoryDetailsStore = new RepositoryStore();