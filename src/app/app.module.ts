import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthRememberComponent } from './auth-form/auth-remember.component';
import { CreditCardDirective } from './credit-card.directive';
import { FileSizePipe } from './file-size.pipe';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent,
    CreditCardDirective,
    FileSizePipe,
  ],
  imports: [BrowserModule, CommonModule, FormsModule, StockInventoryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
