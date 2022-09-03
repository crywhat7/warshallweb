import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  matriz: any[] = [];
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
    this.crearMatriz();
  }

  title = 'WarshallWeb';
  matrizSize = 5;

  crearMatriz() {
    this.matriz = [];
    for (let i = 0; i < this.matrizSize; i++) {
      this.matriz.push([]);
      for (let j = 0; j < this.matrizSize; j++) {
        this.matriz[i].push({ valor: 0 });
      }
    }
  }
}
