import {Component, OnInit} from '@angular/core';
import {SettingService} from '../../../../_service/setting.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgFlashMessageService} from 'ng-flash-messages';

@Component({
  selector: 'app-footer-middel',
  templateUrl: './footer-middel.component.html',
  styleUrls: ['./footer-middel.component.css']
})
export class FooterMiddelComponent implements OnInit {
  newsLetterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private settingService: SettingService,
    private ngFlashMessage: NgFlashMessageService
  ) {
  }

  ngOnInit() {
    this.newsLetterForm = this.fb.group({
      newsEmail: ['', [Validators.email, Validators.required]]
    });
  }

  addNewsLetterEmail() {
    if (this.newsLetterForm.controls.newsEmail.valid) {
      this.settingService.addNewsLetterEmail(this.newsLetterForm.controls.newsEmail.value).subscribe(data => {
        console.log(data);
        this.newsLetterForm.controls.newsEmail.setValue('');
        this.ngFlashMessage.showFlashMessage({
          messages: ['subscribed successfully'],
          dismissible: true,
          type: 'success  '
        });
      });
    } else {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Wrong Email...'],
        dismissible: true,
        type: 'danger'
      });
    }
  }
}
