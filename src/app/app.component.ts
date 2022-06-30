import { Component, OnInit } from '@angular/core';
import { NavigationTriggerService } from 'ngx-navigation-trigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentPageNavigationTrigger: any;

  constructor(private navigationTriggerService: NavigationTriggerService) { }

  ngOnInit(): void {
    this.navigationTriggerService.eventUrlChanged.subscribe((value) => {
      this.currentPageNavigationTrigger = value;
    });
  }
}