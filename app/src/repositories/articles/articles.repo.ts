import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import RedditService from '../../services/reddit/reddit.svc';

export default class ArticlesRepository extends BaseRepository {

    

}

register.injectable('articles-repo', ArticlesRepository);
