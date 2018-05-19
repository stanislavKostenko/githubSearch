import { BaseProvider } from '../../providers/Base.provider';
import { appConfigs } from '../../configs/configs';
import { UserRepositoriesTypes } from '../../types/user.repositories.types';

export class RepositoryProvider extends BaseProvider {
    getRepositoryDetails(login: string, repoName: string): Promise<UserRepositoriesTypes> {
        return this.get<UserRepositoriesTypes>(`repos/${login}/${repoName}?access_token=${appConfigs.token}`);
    }
}

export const repositoryProvider = new RepositoryProvider();