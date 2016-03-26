import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class RedditService extends BaseService {
    getArticles(): async.IAjaxThenable<Array<models.IRedditArticles>> {
        return this.http.json<Array<models.IRedditArticles>>({
            method: 'GET',
            url: this.host +'aww.json'   
        }).then((success) => {
            return success;
            console.log(success);
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
}

register.injectable('reddit-svc', RedditService);
