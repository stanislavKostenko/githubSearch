import { BaseProvider } from '../../providers/Base.provider';
import { UserProfile } from '../../types/user.types';
import { appConfigs } from '../../configs/configs';

export class SearchFormProvider extends BaseProvider {
    getUserProfile(login: string): Promise<UserProfile> {
        return this.get<UserProfile>(`users/${login}?access_token=${appConfigs.token}`);
    }
}

export const searchFormProvider = new SearchFormProvider();