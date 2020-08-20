import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addTitle(title: HTMLInputElement, link: HTMLInputElement) {

    console.log(title.value, link.value);
  }

}
