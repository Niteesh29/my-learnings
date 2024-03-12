import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { AppComponent } from './app.component';
import { ChildThreeComponent } from './components/child-three/child-three.component';
import { ChildFourComponent } from './components/child-four/child-four.component';

const routes: Routes = [
{
  path:'one', component:ChildOneComponent
},
{
  path:'two', component:ChildTwoComponent
},
{
  path:'three', component:ChildThreeComponent,
  
},
{
  path:'four', component:ChildFourComponent,
  

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
