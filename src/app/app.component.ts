import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsService } from './news.service';
import SwiperCore from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'personal-website';
  date = new Date();
  posts$: any;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.posts$ = this.newsService.getPosts$();
  }
}
