import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';
@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  products!: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
