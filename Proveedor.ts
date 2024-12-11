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

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getTelefono(): string {
    return this.telefono;
  }

  setTelefono(telefono: string): void {
    this.telefono = telefono;
  }

  getId(): number {
    return this.id;
  }

  getDireccion(): string {
    return this.direccion;
  }

  setDireccion(direccion: string): void {
    this.direccion = direccion;
  }

  getCorreoElectronico(): string {
    return this.correoElectronico;
  }

  setCorreoElectronico(correoElectronico: string): void {
    this.correoElectronico = correoElectronico;
  }

  getCategoria(): string {
    return this.categoria;
  }

  setCategoria(categoria: string): void {
    this.categoria = categoria;
  }
}
