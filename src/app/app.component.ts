import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TDA Warshall - Equipo 3';

  matriz: any[] = [];
  matrizView: any[] = [];
  matrizSize = 6;
  cantidadVertices = 3;
  maxVertices = 0;
  vertices: Array<object> = [];
  resultado: any[] = [];

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;    
    // this.crearMatriz();
  }

  agregarVertices() {
    this.vertices = [];
    for (let i = 0; i < this.cantidadVertices; i++) {
      this.vertices.push({});
    }
    console.log(' vertices', this.vertices);
  }

  crearMatriz() {
    this.matriz = [];
    for (let i = 0; i < this.matrizSize; i++) {
      this.matriz.push([]);
      for (let j = 0; j < this.matrizSize; j++) {
        this.matriz[i].push(false);
      }
    }
    this.resultado = [];
    this.matrizView = JSON.parse(JSON.stringify(this.matriz));
  }

  cambiarValor(i: number, j: number) {
    this.matriz[i][j] = !this.matriz[i][j];
    console.log('Matriz Normal', this.matriz);
    this.matrizView = [];
    this.matrizView = JSON.parse(JSON.stringify(this.matriz));
    console.log('Matriz View ', this.matrizView);
  }

  warshall() {
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
