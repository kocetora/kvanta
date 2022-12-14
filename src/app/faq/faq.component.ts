import { Component, OnInit } from '@angular/core';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less'],
})
export class FaqComponent implements OnInit {
  faqes: any;

  constructor(private faqService: FaqService) {}

  ngOnInit() {
    this.faqService
      .getFaqes()
      .subscribe((faqes: any) => (this.faqes = faqes.posts));
  }
}
