import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent implements OnInit {
  constructor() {}

  products: Product[] = [
    {
      id: 1,
      name: 'Apple',
      quantity: 4,
    },
    {
      id: 2,
      name: 'Toyota',
      quantity: 5,
    },
    {
      id: 3,
      name: 'Nissan',
      quantity: 2,
    },
  ];

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl(''),
    }),
    selector: new FormGroup({
      product_id: new FormControl(),
      quantity: new FormControl(),
    }),
    stock: new FormArray([]),
  });

  // stock-branch
  // stock-products
  // stock-selector
  submit() {
    if (this.form.valid) console.log(this.form.value);
  }
}
