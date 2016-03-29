import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import ArticlesRepository from '../../repositories/articles/articles.repo';

export default class SingleViewControl extends BaseViewControl {
    templateString: string = require('./singleview.vc.html');

    context: any = {
    };
    
    constructor(private articlesRepo: ArticlesRepository) {
        super();
    }
    
    singleItem(id: string): any {
        console.log("inside single view");
        let singleArticle = {};
        this.articlesRepo.getArticles().then((success) => {
            for (let i = 0; i < success.length; i++) {
                if (success[i].id == id) {
                    this.context.singleArticle = success[i];
                    return singleArticle;
                }
            }   
        });
        
        
    }
}

register.viewControl('singleview-vc', SingleViewControl, [ArticlesRepository]);
