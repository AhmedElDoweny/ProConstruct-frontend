import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrls: ['./lower-header.component.css']
})
export class LowerHeaderComponent implements OnInit {
  @Input() headerTitle: string

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

}
