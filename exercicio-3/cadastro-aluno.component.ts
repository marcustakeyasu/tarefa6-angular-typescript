import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
  ra: string = '';
  nome: string = '';
  email: string = '';
  celular: string = '';

  cadastrarAluno() {
    // Aqui você pode adicionar a lógica para salvar os dados do aluno
    console.log('Aluno cadastrado:', { ra: this.ra, nome: this.nome, email: this.email, celular: this.celular });
  }
}
