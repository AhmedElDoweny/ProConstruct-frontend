import {Component, OnInit} from '@angular/core';
import {SettingService} from '../../../_service/setting.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  private aboutApp: string;

  constructor(private settingService: SettingService) {
  }

  ngOnInit() {
    this.settingService.getAnyField('aboutApp').subscribe(data => {
      this.aboutApp = data.aboutApp;
    });
  }

}
