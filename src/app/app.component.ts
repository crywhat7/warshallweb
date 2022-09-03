import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  matriz: any[] = [];
  resultado: any[] = [];
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
    this.crearMatriz();
  }

  title = 'WarshallWeb';
  matrizSize = 6;

  crearMatriz() {
    this.matriz = [];
    for (let i = 0; i < this.matrizSize; i++) {
      this.matriz.push([]);
      for (let j = 0; j < this.matrizSize; j++) {
        this.matriz[i].push(false);
      }
    }    
  }
  verMatriz() {
    console.log('Matriz', this.matriz);
  }

  cambiarValor(i: number, j: number) {
    this.matriz[i][j] = !this.matriz[i][j];
  }

  warshall() {
    this.matriz[0][1] = true;
    this.matriz[1][2] = true;
    this.matriz[2][0] = true;
    this.matriz[2][5] = true;
    this.matriz[3][5] = true;
    this.resultado = JSON.parse(JSON.stringify(this.matriz));

    const matrizSize = this.matrizSize;
    for (let k = 0; k < matrizSize; k++) {
      for (let i = 0; i < matrizSize; i++) {
        for (let j = 0; j < matrizSize; j++) {
          this.resultado[i][j] =
            this.resultado[i][j] ||
            (this.resultado[i][k] && this.resultado[k][j]);
        }
      }
    }
    console.log('Matriz inicial', this.matriz);
    console.log('Resultado', this.resultado);
  }
}
