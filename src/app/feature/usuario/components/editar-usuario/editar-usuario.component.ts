import { tap, delay } from 'rxjs/operators';
import { Usuario } from './../../shared/model/usuario';
import { UsuarioService } from './../../shared/service/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  usuarioId: number;
  usuarioForm: FormGroup;
  usuario = {} as Usuario;
  usuarioEnviar = {} as Usuario;

  constructor(protected usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.construirFormularioUsuario();
    this.usuarioId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.onSubmit();
  }

  onSubmit() {
    this.usuario.id = this.usuarioId;
    this.usuarioService.consultarByIdUsuario(this.usuario.id).subscribe(
      data => {
        this.usuario = data;
        this.usuarioForm.patchValue(this.usuario);
      }
    );
  }

  onSubmitActualizarUsuario() {
    this.usuarioEnviar = this.usuarioForm.value;
    this.usuarioService.actualizarUsuario(this.usuarioId, this.usuarioEnviar)
      .pipe(
        tap(() => this.router.navigate(['listar_usuario'])),
        delay(2000)
      )
      .subscribe(
        data => { console.log(data); },
        error => { console.log(error); }
      );
  }

  private construirFormularioUsuario() {
    this.usuarioForm = new FormGroup({
      nombre: new FormControl('', [Validators.required])
    });
  }

}