import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Deputado } from '../../model/deputado';
import { DeputadoService } from '../../services/deputado.service/deputado.service';


@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrl: './deputados.component.css'
})
export class DeputadosComponent {

  deputados: Deputado[] = [];
  deputadoForm: FormGroup;


  constructor(private depu: DeputadoService, private fb: FormBuilder){
    this.deputados = [];
    this.deputadoForm = this.fb.group({
      nome: ['', [Validators.required]]
    });
  }

  buscarDeputado(): void {
    const nome = this.deputadoForm.value.nome;
    this.depu.obterDeputados(nome).subscribe((res) => {
      this.deputados = res.dados;
    });
  }

}
