import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormArray, Validators, FormGroup, AbstractControl } from '@angular/forms';


@Pipe({
  name: 'appOwnership',
  standalone:true
})
export class OwnershipPipe implements PipeTransform {
  transform(value: any): any {
    return value + '%';
  }
}
@Component({
  selector: 'app-owner-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, OwnershipPipe],
  templateUrl: './owner-details.component.html',
  styleUrl: './owner-details.component.scss'
})
export class OwnerDetailsComponent {
  ownerForm : FormGroup
  percentage = 0
  constructor(private fb : FormBuilder)
  {
     this.ownerForm = fb.group(
      {
        owners : this.fb.array([this.createOwner()])
      }
      
     )
  }

  get owners() : FormArray 
  {
    return this.ownerForm.get('owners') as FormArray
  }

  createOwner(): FormGroup
  {
    return this.fb.group(
      {
        personalInfo : this.fb.group({
           firstName: [ '', Validators.required],
           lastName: ['', Validators.required],
           email: ['', [Validators.required, Validators.email]],
           dob: ['', [Validators.required, this.dobValidator]],
           gender: ['', Validators.required],
           phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
           ownershipPercentage: ['', [Validators.required, this.percentageValidator]],
           
        }),
        address: this.fb.group({
           street: ['', Validators.required],
           city: ['', Validators.required],
           state: ['', Validators.required],
           country: ['', Validators.required],
           postalCode: ['', [Validators.required, Validators.pattern("^[0-9]{6}$")]],
        }),
        isPrimaryOwner : [false],
        sameAsPrimaryAddress: [false]
      }
    )
  }

  addOwner()
  {
    if(this.ownershipSum() >=100)
    {
      alert('Ownership reached 100% . You can not add more owners');
      return;
    }

    this.owners.push(this.createOwner())
    console.log(this.owners)
  }
  ownershipSum():number
  {
     return this.owners.controls.reduce((acc,owner:any)=> {

      const ownership = +owner.get('personalInfo?.ownershipPercentage')?.value || 0
      return acc + ownership

     }, 0 )
  }

  dobValidator(control:AbstractControl)
  {
    console.log(control)
     const dob = new Date(control.value)
     const age = new Date().getFullYear() - new Date(dob).getFullYear()
     console.log(dob, age)

     if(age <18 || age>75)
     {
      alert('inside if')
      return {invalidAge : true}
     }
     return null
  }

  percentageValidator(control:AbstractControl)
  {
    const value = +control.value

    if(value <0 || value > 100)
    {
      return {invalidPercentage:true}
    }
    return null
  }

  checkPrimaryOwner(ownerIndex: number) {
    this.owners.controls.forEach((owner, index) => {
      if (index !== ownerIndex) {
        owner.get('isPrimaryOwner')?.setValue(false);
      }
    });
  }

  copyPrimaryAddress(ownerIndex:number)
  {
    const primaryOwner = this.owners.controls.find(owner => owner.get('isPrimaryOwner')?.value);
    if(primaryOwner)
    {
      const primaryAddress = primaryOwner.get('address')?.value
      const ownerAddressGroup = this.owners.controls[ownerIndex].get('address') as FormGroup
      ownerAddressGroup.patchValue(primaryAddress)
    }
  }

  onSubmit() {
    if (this.ownerForm.valid && this.ownershipSum() <= 100) {
      console.log(this.ownerForm.value);
    } else {
      alert('Please fill out the form correctly!');
    }
  }
}
