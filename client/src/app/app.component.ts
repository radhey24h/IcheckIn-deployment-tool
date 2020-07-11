import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Deployment-Tool-Web';

  constructor(
    private titleService: Title,
    private translateService: TranslateService,
  ) {
    translateService.setDefaultLang('en');
  }

  ngOnInit() {

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange)
      .subscribe(event => {
        const title = event['title'];
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });
  }
}
