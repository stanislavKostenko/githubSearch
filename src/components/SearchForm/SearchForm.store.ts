import { UserProfile } from '../../types/user.types';
import { action, computed, observable } from 'mobx';
import { searchFormProvider } from './SearchForm.provider';
import { UserRepositoriesTypes } from '../../types/user.repositories.types';

export class SearchFormStore {
    @observable
    private _userProfile: UserProfile;

    @computed
    get userProfile(): UserProfile {
        return this._userProfile;
    }

    @observable
    private  _userRepositories: Array<UserRepositoriesTypes> = [];

    @computed
    get userRepositories(): Array<UserRepositoriesTypes> {
        return this._userRepositories;
    }

    @observable
    private _errorMessage: string;

    @computed
    get errorMessage(): string {
        return this._errorMessage;
    }

    userData(login: string) {
        searchFormProvider
            .getUserProfile(login)
            .then(this.updateUserProfile.bind(this))
            .catch(action((e: XMLHttpRequest) => {
                this._errorMessage = e.statusText;
                throw new Error(e.statusText);
            }));

        searchFormProvider
            .getUserRepositories(login)
            .then(this.updateUserRepositories.bind(this))
            .catch(action((e: XMLHttpRequest) => {
                this._errorMessage = e.statusText;
                throw new Error(e.statusText);
            }));
    }

    @action
    private updateUserProfile(user: UserProfile) {
        this._userProfile = user;
        console.log(this._userProfile);
    }

    @action
    private updateUserRepositories(repos: Array<UserRepositoriesTypes>) {
        this._userRepositories = repos;
        console.log(this._userRepositories);
    }
}

export const searchStore = new SearchFormStore();