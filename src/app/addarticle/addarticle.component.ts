import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article.model';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {

   
  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
  }

  addTitle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    if(title.value !== '' && link.value !== '') {
       
      this.redditService.addArticle(new Article(title.value, link.value));
      title.value ="";
      link.value="";
    }
    
     return false;
  }

}
