import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contabilidadAngular';
  showBalanceVentasPanel = false;
  showBalanceGastosPanel = false;
  showBalanceReversosPanel = false;
  showLibroPanel = false;

  showLibro() {
    this.showLibroPanel = !this.showLibroPanel;
    this.showBalanceVentasPanel = false;
    this.showBalanceGastosPanel = false;
    this.showBalanceReversosPanel = false;
  }
  showBalanceVentas() {
    this.showBalanceVentasPanel = !this.showBalanceVentasPanel;
    this.showLibroPanel = false;
    this.showBalanceGastosPanel = false;
    this.showBalanceReversosPanel = false;
  }

  showBalanceGastos() {
    this.showBalanceGastosPanel = !this.showBalanceGastosPanel;
    this.showBalanceVentasPanel = false;
    this.showLibroPanel = false;
    this.showBalanceReversosPanel = false;
  }

  showBalanceReversos() {
    this.showBalanceReversosPanel = !this.showBalanceReversosPanel;
    this.showBalanceVentasPanel = false;
    this.showLibroPanel = false;
    this.showBalanceGastosPanel = false;
  }

}
