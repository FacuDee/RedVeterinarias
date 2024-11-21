import { Cliente } from "./Cliente";

export class Veterinaria {
  private nombre: string;
  private direccion: string;
  private id: number;
  private clientes: Cliente[] = [];

  constructor(nombre: string, direccion: string, id: number) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.id = id;
  }

  // Getters
  getNombre(): string {
    return this.nombre;
  }

  getDireccion(): string {
    return this.direccion;
  }

  getId(): number {
    return this.id;
  }

  // Setters
  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setDireccion(direccion: string): void {
    this.direccion = direccion;
  }

  // Agregar un cliente a la lista de clientes
  agregarCliente(cliente: Cliente): boolean {
    // Verificamos si el cliente ya está registrado (por ID)
    if (this.clientes.some((c) => c.getId() === cliente.getId())) {
      console.log("El cliente ya está registrado en esta veterinaria.");
      return false;
    }
    this.clientes.push(cliente);
    return true;
  }

  // Eliminar un cliente de la lista
  eliminarCliente(idCliente: number): boolean {
    const clienteIndex = this.clientes.findIndex(
      (c) => c.getId() === idCliente
    );
    if (clienteIndex === -1) {
      console.log("Cliente no encontrado.");
      return false;
    }
    this.clientes.splice(clienteIndex, 1);
    console.log(`Cliente con ID ${idCliente} eliminado.`);
    return true;
  }

  // Editar los datos de un cliente
  editarCliente(
    idCliente: number,
    datosActualizados: Partial<{
      nombre: string;
      telefono: string;
    }>
  ): boolean {
    // Buscar el cliente por ID
    const cliente = this.clientes.find((c) => c.getId() === idCliente);

    if (!cliente) {
      console.log("Cliente no encontrado.");
      return false;
    }

    // Modificar los datos proporcionados
    if (datosActualizados.nombre !== undefined) {
      cliente.setNombre(datosActualizados.nombre);
    }
    if (datosActualizados.telefono !== undefined) {
      cliente.setTelefono(datosActualizados.telefono);
    }
    console.log(`Cliente con ID ${idCliente} actualizado.`);
    return true;
  }

  getClientes(): Cliente[] {
    return this.clientes;
  }
}

// Modificar el editar cliente dentro de clase Veterinaria (en vez de reemplazar, que se puedan editar los datos).

// Dentro de clase Cliente terminar agregarMascota y hacer el editarMascota y el eliminarMascota.

// Dentro de clase GestorVeterinarias los editarVeterinaria y editarProveedor

// Menú interactivo
