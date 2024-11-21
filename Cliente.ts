import { Mascota } from "./Mascota";

export class Cliente {
  private nombre: string;
  private telefono: string;
  private esVip: boolean = false;
  private id: number;
  private visitas: number = 0;
  private mascotas: Mascota[] = [];

  constructor(nombre: string, telefono: string, id: number) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.id = id;
  }

  incrementarVisita(): void {
    this.visitas++;
    if (this.visitas >= 5) {
      this.esVip = true;
    }
  }

  verificarVip(): boolean {
    return this.esVip;
  }

  // Getters

  getNombre(): string {
    return this.nombre;
  }

  getTelefono(): string {
    return this.telefono;
  }

  getId(): number {
    return this.id;
  }

  getEsVip(): boolean {
    return this.esVip;
  }

  // Setters necesarios para editar los datos
  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setTelefono(telefono: string): void {
    this.telefono = telefono;
  }

  // Agregar mascota a un cliente
  agregarMascota(mascota: Mascota): void {
    this.mascotas.push(mascota);
  }

  eliminarMascota(idMascota: number): void {
    this.mascotas = this.mascotas.filter(
      (mascota) => mascota.getIdPropietario() !== idMascota
    );
  }

  // Editar datos (nombre o especie) de una mascota
  editarMascota(
    idMascota: number,
    mascotaActualizada: Partial<{
      nombre: string;
      especie: string;
    }>
  ): boolean {
    const mascota = this.mascotas.find(
      (mascota) => mascota.getIdPropietario() === idMascota
    );

    if (!mascota) {
      console.log("Mascota no encontrada.");
      return false;
    }

    // Aplicar los cambios utilizando métodos de la clase
    if (mascotaActualizada.nombre !== undefined) {
      mascota.setNombre(mascotaActualizada.nombre);
    }
    if (mascotaActualizada.especie !== undefined) {
      mascota.setEspecie(mascotaActualizada.especie);
    }

    console.log(`Mascota con ID del propietario ${idMascota} editada.`);
    return true;
  }

  getMascotas(): Mascota[] {
    return this.mascotas;
  }
}
