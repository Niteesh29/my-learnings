import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form, FormGroup,FormGroupName, FormControl, Validators } from '@angular/forms';
import { map, of, switchMap } from 'rxjs';

interface User {
  email: string;
}

interface posts {
  title: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent implements OnInit {
  title = 'json-server';
  

  contactForm!: FormGroup<any>;
  dataToBePost = 
  {
    id:9,
    name:"piyush",
    age:19
  }

  constructor(private http: HttpClient) {}
 
 
  ngOnInit(): void {
    this.getData()
    // this.postData()

    //   this.http.get('http://localhost:4532/users').subscribe(res => {
    //   console.log('res', res)
    // })

       this.contactForm = new FormGroup({
      firstname: new FormControl({value:null, disabled:false},Validators.required),
      lastname: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      address:new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        pincode:new FormControl(),
        country: new FormControl(),
      })
    })
  }

  postData() 
  {
    this.http.post('http://localhost:4532/users', this.dataToBePost).subscribe(res=>
    {
      console.log(res)  
    })
  }

  onSubmit()
  {
     console.log(this.contactForm.value, "form value")
     console.log(this.contactForm.getRawValue(), "form raw value")
     if(this.contactForm.valid)
     {
       console.log(this.contactForm)

     }
     else(
      console.log('invalid')
     )
  }

  getData()
  {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      switchMap(
        posts => this.http.get('https://jsonplaceholder.typicode.com/users')
          .pipe(
            map(users => ({ posts, users }))
          )
      )
    )
    .subscribe( 
      result => console.log('merged: ', result)
    )
  }

  
}

