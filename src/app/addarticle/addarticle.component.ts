import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {

  articles: Article[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addTitle(title: HTMLInputElement, link: HTMLInputElement): boolean {

     this.articles.push(new Article(title.value, link.value));
     return false;
  }

}
