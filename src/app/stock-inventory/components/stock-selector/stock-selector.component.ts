import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

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

  constructor() {}

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  ngOnInit(): void {}

  onRemove(index: any) {
    this.remove.emit(index);
  }
}
