// import { CrearPeliculaComponent } from '@pelicula/components/crear-pelicula/crear-pelicula.component';
// import { PeliculaService } from '@pelicula/shared/service/pelicula.service';
// import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpService } from 'src/app/core/services/http.service';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// describe('Peliculas Crear - Pruebas Unitarias', () => {
//   let component: CrearPeliculaComponent;
//   let fixture: ComponentFixture<CrearPeliculaComponent>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [CrearPeliculaComponent],
//       imports: [
//         CommonModule,
//         HttpClientModule,
//         RouterTestingModule,
//         ReactiveFormsModule,
//         FormsModule
//       ],
//       providers: [PeliculaService, HttpService],
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CrearPeliculaComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('Pelicula se deberia crear', () => {
//     expect(component).toBeTruthy();
//   });

//   it('Pelicula formalario deberia ser invalido cuando esta vacio', () => {
//     expect(component.peliculaForm.valid).toBeFalsy();
//   });

//   it('Pelicula Formulario deberia crear y guardar', () => {
//     expect(component.peliculaForm.valid).toBeFalsy();
//     component.peliculaForm.controls.titulo.setValue('PeliculaPrueba');
//     component.peliculaForm.controls.director.setValue('directorPrueba');
//     fixture.detectChanges();
//     component.onSubmit();
//     expect(component.peliculaForm.valid).toBeTruthy();
//   });
// });