import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [StockInventoryComponent],
})
export class StockInventoryModule {}
