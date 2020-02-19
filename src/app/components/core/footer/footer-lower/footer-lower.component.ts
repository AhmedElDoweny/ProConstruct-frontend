import {Component, OnInit} from '@angular/core';
import {SettingService} from '../../../../_service/setting.service';

@Component({
  selector: 'app-footer-lower',
  templateUrl: './footer-lower.component.html',
  styleUrls: ['./footer-lower.component.css']
})
export class FooterLowerComponent implements OnInit {
  private aboutApp: string;
  private contactEmail: string;

  constructor(private settingService: SettingService) {
  }

  ngOnInit() {
    this.settingService.getAnyField('aboutApp').subscribe(data => {
      this.aboutApp = data.aboutApp;
    });
    this.settingService.getAnyField('contactEmail').subscribe(data => {
      this.contactEmail = data.contactEmail;
    });
  }

}
