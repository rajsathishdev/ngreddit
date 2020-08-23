import { Injectable } from '@angular/core';
import { Article } from './models/article.model';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  articles: Article[] = [];
  constructor() { }

  getArticles() {
    return this.articles;
  }

  addArticle(article: Article) {
    console.log(article);
    this.articles.push(article);
  }


}
