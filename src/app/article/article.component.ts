import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  @Input() article: Article;
  constructor() { }

  ngOnInit(): void {
  }

  voteUp() : boolean {
    this.article.voteUp();
    return false;
  }

  voteDown() : boolean {
    this.article.voteDown();
    return false;
  }

}
