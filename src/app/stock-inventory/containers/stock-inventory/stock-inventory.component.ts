import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl(''),
    }),
    selector: new FormGroup({
      product_id: new FormControl(),
      quantity: new FormControl()
    }),
    stock: new FormArray([])
  });


  // stock-branch
  // stock-products
  // stock-selector
  submit() {
    if (this.form.valid) console.log(this.form.value);
  }
}
