import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import RedditService from '../../services/reddit/reddit.svc';

export default class ArticlesRepository extends BaseRepository {

    constructor(private reader: RedditService) {
        super();
    }
    
    getArticles(): async.IThenable<Array<models.IRedditArticles>> {
        let articleArray: Array<any> = [];
        return this.reader.getArticles().then((success) => {
            for (let i = 0; i < success.length; i++) {
                let indvArticle = {"title": success[i].data.title, "author": success[i].data.author, "id": success[i].data.id, "thumbnail": success[i].data.thumbnail};
                articleArray.push(indvArticle);
            
            }
            return articleArray;
        });
        
    }

}

register.injectable('articles-repo', ArticlesRepository, [RedditService]);
