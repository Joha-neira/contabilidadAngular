import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  id: number;
  fecha: string;
  tipoDoc: string;
  totalNeto: number;
  rutCliente: number;
  tipoPago: string;
  iva: number;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 394234, fecha: '24/04/2020', tipoDoc: 'Factura', totalNeto: 456789, iva: 0, rutCliente: 18841584, tipoPago: 'Tarjeta Crédito'},
  {id: 387423, fecha: '20/04/2020', tipoDoc: 'Factura', totalNeto: 45789, iva: 0, rutCliente: 18841584, tipoPago: 'Efectivo'},
  {id: 379824, fecha: '20/05/2020', tipoDoc: 'Boleta', totalNeto: 234235, iva: 0, rutCliente: 18841584, tipoPago: 'Tarjeta Débito'},
  {id: 367823, fecha: '20/02/2020', tipoDoc: 'Factura', totalNeto: 512412, iva: 0, rutCliente: 18841584, tipoPago: 'Transferencia'},
  {id: 345234, fecha: '12/03/2020', tipoDoc: 'Boleta', totalNeto: 12312, iva: 0, rutCliente: 18841584, tipoPago: 'Efectivo'},
  {id: 398567, fecha: '02/01/2020', tipoDoc: 'Boleta', totalNeto: 65234, iva: 0, rutCliente: 18841584, tipoPago: 'Tarjeta Crédito'},
  {id: 321251, fecha: '08/04/2020', tipoDoc: 'Factura', totalNeto: 12311, iva: 0, rutCliente: 18841584, tipoPago: 'Efectivo'},
];
function setIva() {
  for ( const element in EXAMPLE_DATA) {
      if (element.length > 0) {
        EXAMPLE_DATA[element].iva = Math.round(EXAMPLE_DATA[element].totalNeto * 0.19);
        console.log(EXAMPLE_DATA[element].iva);
      }
  }
}
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
    setIva();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'totalNeto': return compare(a.totalNeto, b.totalNeto, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
