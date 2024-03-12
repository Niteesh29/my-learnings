import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  @Output() myOutput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

     this.myOutput.emit()
  }

}
