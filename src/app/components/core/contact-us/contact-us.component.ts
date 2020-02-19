import {Component, ElementRef, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import {SettingService} from '../../../_service/setting.service';
import {NgFlashMessageService} from 'ng-flash-messages';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/// <reference types="@types/googlemaps" />
declare const google: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', {static: true}) gmap: ElementRef;
  // map: google.maps.Map;
  map: any;

  // default EGYPT coordinates
  lat = 31.0409949;
  lng = 31.3589223;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions = {
    center: this.coordinates,
    zoom: 12,
    scrollwheel: false,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: 'Construction!',
    icon: 'assets/images/icons/gMarker.png',
    animation: google.maps.Animation.BOUNCE
  });

  contactEmail: string;
  contactForm: FormGroup;
  lastMessageId: number;

  constructor(
    private settingService: SettingService,
    private fb: FormBuilder,
    private ngFlashMessageService: NgFlashMessageService
  ) {
  }

  ngOnInit(): void {
    this.settingService.getAnyField('contactEmail').subscribe(data => {
      this.contactEmail = data.contactEmail;
    });

    this.contactForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

    this.settingService.getAnyField('contactUsMessages').subscribe(data => {
      this.lastMessageId = data.contactUsMessages[data.contactUsMessages.length - 1].id + 1;
    });

  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

  sendMessage() {
    if (this.contactForm.controls.email.valid
      && this.contactForm.controls.email.valid
      && this.contactForm.controls.subject.valid
      && this.contactForm.controls.message.valid) {
      const message = {
        id: this.lastMessageId,
        name: this.contactForm.controls.name.value,
        email: this.contactForm.controls.email.value,
        subject: this.contactForm.controls.subject.value,
        message: this.contactForm.controls.message.value
      };

      this.settingService.addContactUsMessages(message).subscribe(data => {
        console.log(data);
        this.lastMessageId++;
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Your message has been send...'],
          type: 'success'
        });
        this.contactForm.controls.name.setValue('');
        this.contactForm.controls.email.setValue('');
        this.contactForm.controls.subject.setValue('');
        this.contactForm.controls.message.setValue('');
      });
    } else {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Something wrong...', 'email, subject and message are required fields'],
        type: 'danger'
      });
    }
  }

}
