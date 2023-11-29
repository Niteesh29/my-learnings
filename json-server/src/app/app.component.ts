import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'json-server';
  dataToBePost = 
  {
    id:9,
    name:"piyush",
    age:19
  }

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.postData()

      this.http.get('http://localhost:4532/users').subscribe(res => {
      console.log('res', res)
    })
  }

  postData() 
  {
    this.http.post('http://localhost:4532/users', this.dataToBePost).subscribe(res=>
    {
      console.log(res)  
    })
  }




  
}
