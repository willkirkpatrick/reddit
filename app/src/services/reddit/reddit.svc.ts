import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class RedditService extends BaseService {
    getArticles(): async.IAjaxThenable<Array<any>> {
        return this.http.json<any>({
            method: 'GET',
            url: this.host +'/aww.json'   
        }).then((success) => { 
            return success.response.data.children;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
}

register.injectable('reddit-svc', RedditService);
