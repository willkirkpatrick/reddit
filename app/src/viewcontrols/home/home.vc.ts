import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ArticlesRepository from '../../repositories/articles/articles.repo';
import SingleViewControl from '../singleview/singleview.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        articles: <Array<models.IRedditArticles>>[],
        success: [],
        data: {},
      
    };
    
    constructor(private articlesRepo: ArticlesRepository) {
        super();
    }
    
    navigatedTo(): void {
        this.articlesRepo.getArticles().then((success) => {
            this.context.articles = success;
        }, (err) => {
            console.log('something went wrong');
            console.log(err);
        });
    }
    
    singleItem(id: string): any {
        console.log(id);
        this.navigator.navigate(SingleViewControl, {
            parameters: {
                id:id
            }
        });
        
    }
}

register.viewControl('home-vc', HomeViewControl, [ArticlesRepository]);
