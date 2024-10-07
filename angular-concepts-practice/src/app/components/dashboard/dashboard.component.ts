import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  employeeName:string[] = []
  changeColor:boolean = false
  inputText:string = ''
  counterDisabled :boolean = false
  counterColor:boolean = false
  count = 0
  increment()
  {
    this.counterColor= true
    this.count++
  }
  decrement() 
  {
  
   if(this.count==0)
   {
    this.counterDisabled = true
   }
   else 
   {
    this.counterColor = false
    this.count--
   }
  }
  reset()
  {
    this.count = 0
   
  }

  addListItem()
  {
    if(!this.employeeName.includes(this.inputText))
    {
      this.employeeName.push(this.inputText)
      this.inputText = ''
    }
    
  }

  deleteListItem(index:number)
  {
     this.employeeName.splice(index,1)
  }
}
