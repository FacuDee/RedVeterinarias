import { Cliente } from "./Cliente";

export class Mascota {
  private id: number;
  private nombre: string;
  private especie: string;
  private idPropietario: number;

  constructor(
    id: number,
    nombre: string,
    especie: string,
    idPropietario: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.especie = especie;
    this.idPropietario = idPropietario;
    this.setEspecie(especie);
  }

  getId(): number {
    return this.id;
  }

  getNombre(): string {
    return this.nombre;
  }

  getEspecie(): string {
    return this.especie;
  }

  getIdPropietario(): number {
    return this.idPropietario;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setEspecie(especie: string) {
    if (especie.toLowerCase() === "perro" || especie.toLowerCase() === "gato") {
      this.especie = especie;
    } else {
      this.especie = "exótica";
    }
  }
}
