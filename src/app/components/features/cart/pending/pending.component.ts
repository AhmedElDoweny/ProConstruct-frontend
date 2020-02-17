import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  @Input() pendingproducts;

  constructor() {
  }

  ngOnInit() {
  }

}
