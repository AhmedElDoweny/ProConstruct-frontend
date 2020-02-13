import {Component, ElementRef, AfterViewInit, ViewChild, OnInit} from '@angular/core';
/// <reference types="@types/googlemaps" />
declare const google: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: true}) gmap: ElementRef;
  // map: google.maps.Map;
  map: any;

  // default EGYPT coordinates
  lat = 30.13155089;
  lng = 31.30643130;

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
    icon: 'assets/images/icons/gMarkergit gg.png',
    animation: google.maps.Animation.BOUNCE
  });

  constructor() {
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }


  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

  // getPosition() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.lng = position.coords.longitude;
  //       this.lat = position.coords.latitude;
  //       console.log('Plng: ', position.coords.longitude, 'Plat: ', position.coords.latitude);
  //     });
  //   }
  // }

  // How you would like to style the map.
  // This is where you would paste any style found on Snazzy Maps.
  //   styles:
  //     [
  //       {
  //         featureType: 'all',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //           {
  //             saturation: 36
  //           },
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 40
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'all',
  //         elementType: 'labels.text.stroke',
  //         stylers: [
  //           {
  //             visibility: 'on'
  //           },
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 16
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'all',
  //         elementType: 'labels.icon',
  //         stylers: [
  //           {
  //             visibility: 'off'
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'administrative',
  //         elementType: 'geometry.fill',
  //         stylers: [
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 20
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'administrative',
  //         elementType: 'geometry.stroke',
  //         stylers: [
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 17
  //           },
  //           {
  //             weight: 1.2
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'landscape',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 20
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'poi',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 21
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'geometry.fill',
  //         stylers: [
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 17
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'geometry.stroke',
  //         stylers: [
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 29
  //           },
  //           {
  //             weight: 0.2
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'road.arterial',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 18
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'road.local',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 16
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'transit',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 19
  //           }
  //         ]
  //       },
  //       {
  //         featureType: 'water',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#000000'
  //           },
  //           {
  //             lightness: 17
  //           }
  //         ]
  //       }
  //     ]
  // };

}
