import { Usuario } from "./usuario";
import { IUsuario } from "./usuario.interface";

export class UsuarioTestDataBuilder {
  id: number;
  nombre: string;
  fechaCreacion: Date;

  constructor(usuario: IUsuario) {
    this.nombre = usuario.nombre;
  }

  setID(usuario: IUsuario) {
    this.id = usuario.id;
  }

  setNombre(usuario: IUsuario) {
    this.fechaCreacion = usuario.fechaCreacion;
  };

  build(): Usuario{
    return{
      id: this.id,
      nombre: this.nombre,
      fechaCreacion: this.fechaCreacion
    }
  }
}
