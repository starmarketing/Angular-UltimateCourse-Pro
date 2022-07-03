import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Item, Product } from '../../models/product.interface';
import { StockInventory } from '../../services/stock-inventory';
import { forkJoin } from 'rxjs'; // RxJS 6 syntax

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent implements OnInit {
  constructor(private fb: FormBuilder, private stockService: StockInventory) {}

  products: Product[] = [];

  productMap!: Map<number, Product>;

  ngOnInit(): void {
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();

    forkJoin(cart, products).subscribe(
      ([cart, products]: [Item[], Product[]]) => {
        console.log('cart: ', cart);
        console.log('products: ', products);

        const myMap = products.map<[number, Product]>((product) => [
          product.id,
          product,
        ]);

        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach((item) => this.addStock(item));
      }
    );
  }

  // form: FormGroup = new FormGroup({
  //   store: new FormGroup({
  //     branch: new FormControl(''),
  //     code: new FormControl(''),
  //   }),
  //   selector: this.createFormGroup({}),
  //   stock: new FormArray([]),
  // });

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: '',
    }),
    selector: this.createFormGroup({}),
    stock: new FormArray([]),
  });

  createFormGroup(stock: any) {
    return this.fb.group({
      // parseInt second parameter:
      // 2 = binary,
      // 8 = octal,
      // 10 = decimal,
      // 16 = hexadecimal.
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || '',
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
