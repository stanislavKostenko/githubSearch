import { UserProfile } from '../../types/user.types';
import { action, computed, observable } from 'mobx';
import { searchFormProvider } from './SearchForm.provider';


export class SearchFormStore {
    @observable
    private _userProfile: UserProfile;

    @computed
    get userProfile(): UserProfile {
        return this._userProfile;
    }

    @observable
    private _errorMessage: string;

    @computed
    get errorMessage(): string {
        return this._errorMessage;
    }

    private userData(login: string) {
        searchFormProvider
            .getUserProfile(login)
            .then(this.updateUserProfile.bind(this))
            .catch(action((e: XMLHttpRequest) => {
                this._errorMessage = e.statusText;
                throw new Error(e.statusText);
            }));
    }

    @action
    private updateUserProfile(user: UserProfile) {
        this._userProfile = user;
    }
}