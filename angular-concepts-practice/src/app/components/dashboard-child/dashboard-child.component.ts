import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.scss'
})
export class DashboardChildComponent {
@Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>()


notifyParent()
{
  this.buttonClicked.emit()
}
}
