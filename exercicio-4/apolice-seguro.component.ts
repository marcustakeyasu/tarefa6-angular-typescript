import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {
  nomeSegurado: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: number | null = null;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      if (this.idade <= 25) {
        this.valorApolice = 0.15 * this.valorAutomovel;
      } else {
        this.valorApolice = 0.10 * this.valorAutomovel;
      }
    } else if (this.sexo === 'feminino') {
      this.valorApolice = 0.08 * this.valorAutomovel;
    }
  }
}
