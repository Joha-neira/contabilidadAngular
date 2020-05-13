import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTableGastosComponent } from './data-table-gastos/data-table-gastos.component';
import { DataTableReversosComponent } from './data-table-reversos/data-table-reversos.component';
import { DataTableLibroComponent } from './data-table-libro/data-table-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataTableGastosComponent,
    DataTableReversosComponent,
    DataTableLibroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
