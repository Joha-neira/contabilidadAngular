import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { DataTableLibroComponent } from './data-table-libro.component';

describe('DataTableLibroComponent', () => {
  let component: DataTableLibroComponent;
  let fixture: ComponentFixture<DataTableLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableLibroComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
