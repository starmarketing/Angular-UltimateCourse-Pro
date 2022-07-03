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
    selector: this.createFormGroup({}),
    stock: new FormArray([]),
  });

  createFormGroup(stock: any) {
    return new FormGroup({
      // parseInt second parameter:
      // 2 = binary,
      // 8 = octal,
      // 10 = decimal,
      // 16 = hexadecimal.
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || ''),
    });
  }

  addStock(stock: any) {
    const st = this.form.get('stock') as FormArray;
    st.push(this.createFormGroup(stock));
  }

  removeStock(index: any) {
    let st = this.form.get('stock') as FormArray;
    st.removeAt(index);
  }

  submit() {
    if (this.form.valid) console.log(this.form.value);
  }
}
