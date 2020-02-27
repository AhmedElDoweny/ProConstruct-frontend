import {Component, OnInit} from '@angular/core';
import {SettingService} from '../../../_service/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  private newsLetterEmails: string[];
  private contactUsMessages: {}[];

  constructor(private settingService: SettingService) {
  }

  ngOnInit() {
    this.settingService.getAnyField('newsLetterEmails').subscribe(data => {
      this.newsLetterEmails = data.newsLetterEmails;
      console.log(data);
    });
    this.settingService.getAnyField('contactUsMessages').subscribe(data => {
      this.contactUsMessages = data.contactUsMessages;
      console.log(data);
    });
  }

}
