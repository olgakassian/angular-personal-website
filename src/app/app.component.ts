import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsService } from './news.service';
import SwiperCore, { SwiperOptions } from 'swiper';
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

  swiperConfig: SwiperOptions;

  constructor(private newsService: NewsService) {
    this.swiperConfig = {
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    };
  }

  ngOnInit() {
    this.posts$ = this.newsService.getPosts$();
  }
}
