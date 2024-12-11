import { Proveedor } from "./Proveedor";
import { Veterinaria } from "./Veterinaria";

export class GestorVeterinarias {
  private veterinarias: Veterinaria[] = [];
  private proveedores: Proveedor[] = [];

  generarIdUnico(): number {
    let id: number;
    do {
      id = Math.floor(Math.random() * 10000);
    } while (this.existeId(id));
    return id;
  }

  existeId(id: number): boolean {
    // Verificar en veterinarias
    const idEnVeterinarias = this.veterinarias.some((v) => v.getId() === id);

    // Verificar en proveedores
    const idEnProveedores = this.proveedores.some((p) => p.getId() === id);

    // Verificar en clientes de cada veterinaria
    const idEnClientes = this.veterinarias.some((v) =>
      v.getClientes().some((c) => c.getId() === id)
    );

    // Verificar en mascotas de cada cliente
    const idEnMascotas = this.veterinarias.some((v) =>
      v.getClientes().some((c) => c.getMascotas().some((m) => m.getId() === id))
    );

    return idEnVeterinarias || idEnProveedores || idEnClientes || idEnMascotas;
  }

  // VETERINARIAS

  agregarVeterinaria(veterinaria: Veterinaria): void {
    this.veterinarias.push(veterinaria);
  }

  eliminarVeterinaria(idVeterinaria: number): boolean {
    const veteIndex = this.veterinarias.findIndex(
      (c) => c.getId() == idVeterinaria
    );
    if (veteIndex == -1) {
      console.log("Veterinaria no encontrada.");
      return false;
    }
    this.veterinarias.splice(veteIndex, 1);
    return true;
  }

  editarVeterinaria(
    idVeterinaria: number,
    nuevosDatos: Partial<{
      nombre: string;
      telefono: string;
    }>
  ): boolean {
    const veteIndex = this.veterinarias.findIndex(
      (c) => c.getId() == idVeterinaria
    );
    if (!veteIndex) {
      console.log("Veterinaria no encontrada.");
      return false;
    }
    const veterinaria = this.veterinarias[veteIndex];

    Object.assign(veterinaria, nuevosDatos);
    console.log(`Veterinaria con ID ${idVeterinaria} editada.`);
    return true;
  }

  // PROVEEDORES

  agregarProveedor(proveedor: Proveedor): void {
    this.proveedores.push(proveedor);
  }

  eliminarProveedor(idProveedor: number): boolean {
    const proveIndex = this.proveedores.findIndex(
      (c) => c.getId() == idProveedor
    );
    if (proveIndex == -1) {
      console.log("Proveedor no encontrado.");
      return false;
    }
    this.proveedores.splice(proveIndex, 1);
    console.log(`Proveedor con ID ${idProveedor} eliminado.`);
    return true;
  }

  editarProveedor(
    idProveedor: number,
    nuevosDatos: Partial<{
      nombre: string;
      telefono: string;
      direccion: string;
      correoElectronico: string;
      categoria: string;
    }>
  ): boolean {
    const proveIndex = this.proveedores.findIndex(
      (c) => c.getId() == idProveedor
    );
    if (!proveIndex) {
      console.log("Proveedor no encontrado.");
      return false;
    }
    const proveedor = this.proveedores[proveIndex];

    Object.assign(proveedor, nuevosDatos);
    console.log(`Proveedor con ID ${idProveedor} editado.`);
    return true;
  }

  // GETTERS

  getVeterinarias(): Veterinaria[] {
    return this.veterinarias;
  }

  getProveedores(): Proveedor[] {
    return this.proveedores;
  }
}
