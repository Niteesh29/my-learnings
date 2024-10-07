import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardChildComponent } from "./components/dashboard-child/dashboard-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-concepts-practice';
  message :string = 'waiting for child event >>>'
  onChildButtonClicked()
  {
    this.message = "Child button was clicked!"
  }
}
