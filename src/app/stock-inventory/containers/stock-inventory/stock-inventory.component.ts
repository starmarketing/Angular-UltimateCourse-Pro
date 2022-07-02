import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
