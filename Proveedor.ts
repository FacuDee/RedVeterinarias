export class Proveedor {
  private nombre: string;
  private telefono: string;
  private id: number;
  private direccion: string;
  private correoElectronico: string;
  private categoria: string;
  constructor(
    nombre: string,
    telefono: string,
    id: number,
    direccion: string,
    correoElectronico: string,
    categoria: string
  ) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.id = id;
    this.direccion = direccion;
    this.correoElectronico = correoElectronico;
    this.categoria = categoria;
  }
  getNombre(): string {
    return this.nombre;
  }
  getTelefono(): string {
    return this.telefono;
  }
  getId(): number {
    return this.id;
  }
  getDireccion(): string {
    return this.direccion;
  }
  getCorreoElectronico(): string {
    return this.correoElectronico;
  }
  getCategoria(): string {
    return this.categoria;
  }
}
