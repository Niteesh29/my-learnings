import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  productForm: FormGroup 

  constructor(private fb : FormBuilder)
  {
    this.productForm = this.fb.group({
      products: this.fb.array([]), // Initialize an empty FormArray for products
    });
  }
 
  get products(): FormArray {
    return this.productForm.get('products') as FormArray;
  }

  createProduct(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
    });
  }

  addProduct()
  {
    console.log(Array.isArray(this.products))
    this.products.push(this.createProduct())
  }

 

  get totalPrice(): number
  {
    return this.products?.controls.reduce((total, product) => {
      const price = product.get('price')?.value || 0;
      const quantity = product.get('quantity')?.value || 0

      return total + price*quantity

    },0)
  }

  onSubmit()
  {
    console.log(this.productForm.value)
  }
}
