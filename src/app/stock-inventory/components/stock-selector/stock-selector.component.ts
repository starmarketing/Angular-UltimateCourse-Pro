import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss'],
})
export class StockSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Input()
  map!: Map<number, Product>;

  constructor() {}

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  getProductId(id: any) {
    return this.map.get(id);
  }

  ngOnInit(): void {}

  onRemove(index: any) {
    this.remove.emit(index);
  }
}
