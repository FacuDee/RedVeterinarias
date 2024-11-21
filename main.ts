import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Mascota } from "./Mascota";
import { Proveedor } from "./Proveedor";
import { GestorVeterinarias } from "./GestorVeterinarias";
import * as readlineSync from "readline-sync";

// Crear la Red de Veterinarias Vet-Code
const VetCode = new GestorVeterinarias();
VetCode.generarIdUnico();

// Crear instancias de Veterinaria
const veterinaria1 = new Veterinaria(
  "Veterinaria Patitas",
  "Av. Pringles 2855",
  VetCode.generarIdUnico()
);

const veterinaria2 = new Veterinaria(
  "Veterinaria Tu Mascota",
  "Sargento Cabral 1951",
  VetCode.generarIdUnico()
);

// Crear instancias de Cliente
const cliente1 = new Cliente(
  "Pedro Sánchez",
  "2284-547411",
  VetCode.generarIdUnico()
);
const cliente2 = new Cliente(
  "Marcela Salazar",
  "2284-757878",
  VetCode.generarIdUnico()
);

// Incrementar visita a cliente
cliente1.incrementarVisita();

// Crear instancia de Mascota
const mascota1 = new Mascota("Popi", "Loro", VetCode.generarIdUnico());
const mascota2 = new Mascota("Coqui", "Perro", VetCode.generarIdUnico());

// Crear instancias de Proveedor
const proveedor1 = new Proveedor(
  "AlimentosSA",
  "2281-458799",
  VetCode.generarIdUnico(),
  "Cnel. Suárez 1114",
  "alimentossa@gmail.com",
  "Alimentos procesados"
);

const proveedor2 = new Proveedor(
  "Todo para tu mascota",
  "2284-478996",
  VetCode.generarIdUnico(),
  "Av. Colón 3288",
  "todoparatumascota@gmail.com",
  "Juguetes y ropa para mascotas"
);

console.log(veterinaria1.getNombre());

VetCode.agregarVeterinaria(veterinaria1);
VetCode.agregarVeterinaria(veterinaria2);

VetCode.agregarProveedor(proveedor1);
VetCode.agregarProveedor(proveedor2);

veterinaria1.agregarCliente(cliente1);
veterinaria2.agregarCliente(cliente2);

cliente1.agregarMascota(mascota1);
cliente2.agregarMascota(mascota2);

///////// MENÚ INTERACTIVO DE LA RED DE VETERINARIAS /////////

function menuPrincipal() {
  let salir = false;

  while (!salir) {
    console.log("\n--- MENÚ PRINCIPAL ---");
    console.log("1. Gestionar Veterinarias");
    console.log("2. Gestionar Proveedores");
    console.log("3. Gestionar Clientes");
    console.log("4. Salir");
    const opcion = readlineSync.questionInt("Elige una opcion: ");

    switch (opcion) {
      case 1:
        menuVeterinarias();
        break;
      case 2:
        menuProveedores();
        break;
      case 3:
        menuClientes();
        break;
      case 4:
        console.log("Saliendo del programa...");
        salir = true;
        break;
      default:
        console.log("Opción no válida. Inténtalo de nuevo.");
    }
  }
}

function menuVeterinarias() {
  let regresar = false;

  while (!regresar) {
    console.log("\n--- GESTIÓN DE VETERINARIAS ---");
    console.log("1. Agregar Veterinaria");
    console.log("2. Eliminar Veterinaria");
    console.log("3. Ver Veterinarias");
    console.log("4. Regresar al Menú Principal");
    const opcion = readlineSync.questionInt("Elige una opcion: ");

    switch (opcion) {
      case 1:
        agregarVeterinaria();
        break;
      case 2:
        eliminarVeterinaria();
        break;
      case 3:
        verVeterinarias();
        break;
      case 4:
        regresar = true;
        break;
      default:
        console.log("Opción no válida. Inténtalo de nuevo.");
    }
  }
}

function agregarVeterinaria() {
  const nombre = readlineSync.question("Nombre de la veterinaria: ");
  const direccion = readlineSync.question("Direccion de la veterinaria: ");
  const id = VetCode.generarIdUnico();

  const nuevaVeterinaria = new Veterinaria(nombre, direccion, id);
  VetCode.agregarVeterinaria(nuevaVeterinaria);
  console.log("Veterinaria agregada exitosamente.");
}

function eliminarVeterinaria() {
  verVeterinarias();
  const id = readlineSync.questionInt("ID de la veterinaria a eliminar: ");
  const veterinaria = VetCode.getVeterinarias().find((v) => v.getId() === id);

  if (veterinaria) {
    VetCode.eliminarVeterinaria(veterinaria.getId());
    console.log("Veterinaria eliminada exitosamente.");
  } else {
    console.log("No se encontró una veterinaria con ese ID.");
  }
}

function verVeterinarias() {
  const veterinarias = VetCode.getVeterinarias();
  if (veterinarias.length === 0) {
    console.log("No hay veterinarias registradas.");
  } else {
    console.log("\n--- LISTA DE VETERINARIAS ---");
    veterinarias.forEach((vet) => {
      console.log(
        `ID: ${vet.getId()}, Nombre: ${vet.getNombre()}, Dirección: ${vet.getDireccion()}`
      );
    });
  }
}

function menuProveedores() {
  let regresar = false;

  while (!regresar) {
    console.log("\n--- GESTIÓN DE PROVEEDORES ---");
    console.log("1. Agregar Proveedor");
    console.log("2. Eliminar Proveedor");
    console.log("3. Ver Proveedores");
    console.log("4. Regresar al Menú Principal");
    const opcion = readlineSync.questionInt("Elige una opcion: ");

    switch (opcion) {
      case 1:
        agregarProveedor();
        break;
      case 2:
        eliminarProveedor();
        break;
      case 3:
        verProveedores();
        break;
      case 4:
        regresar = true;
        break;
      default:
        console.log("Opción no válida. Inténtalo de nuevo.");
    }
  }
}

function agregarProveedor() {
  const nombre = readlineSync.question("Nombre del proveedor: ");
  const telefono = readlineSync.question("Telefono del proveedor: ");
  const direccion = readlineSync.question("Direccion del proveedor: ");
  const correElectronico = readlineSync.question("Email del proveedor: ");
  const categoria = readlineSync.question("Categoria del proveedor: ");
  const id = VetCode.generarIdUnico();

  const nuevoProveedor = new Proveedor(
    nombre,
    telefono,
    id,
    direccion,
    correElectronico,
    categoria
  );
  VetCode.agregarProveedor(nuevoProveedor);
  console.log("Proveedor agregado exitosamente.");
}

function verProveedores() {
  const proveedores = VetCode.getProveedores();
  if (proveedores.length === 0) {
    console.log("No hay proveedores registrados.");
  } else {
    console.log("\n--- LISTA DE PROVEEDORES ---");
    proveedores.forEach((prov) => {
      console.log(
        `ID: ${prov.getId()}, Nombre: ${prov.getNombre()}, Teléfono: ${prov.getTelefono()}, Direccion: ${prov.getDireccion()}, Categoria: ${prov.getCategoria()}`
      );
    });
  }
}

function eliminarProveedor() {
  verProveedores();
  const id = readlineSync.questionInt("ID del proveedor a eliminar: ");
  const proveedor = VetCode.getProveedores().find((p) => p.getId() === id);

  if (proveedor) {
    VetCode.eliminarProveedor(proveedor.getId());
  } else {
    console.log("No se encontró un proveedor con ese ID.");
  }
}

function menuClientes() {
  let regresar = false;

  while (!regresar) {
    console.log("\n--- GESTIÓN DE CLIENTES ---");
    console.log("1. Agregar Cliente");
    console.log("2. Eliminar Cliente");
    console.log("3. Ver Clientes");
    console.log("4. Gestionar Mascotas");
    console.log("5. Regresar al Menú Principal");
    const opcion = readlineSync.questionInt("Elige una opcion: ");

    switch (opcion) {
      case 1:
        agregarCliente();
        break;
      case 2:
        eliminarCliente();
        break;
      case 3:
        verClientes();
        break;
      case 4:
        gestionarMascotas();
        break;
      case 5:
        regresar = true;
        break;
      default:
        console.log("Opción no válida. Inténtalo de nuevo.");
    }
  }
}

function agregarCliente() {
  const nombre = readlineSync.question("Nombre del cliente: ");
  const telefono = readlineSync.question("Telefono del cliente: ");
  const id = VetCode.generarIdUnico();

  const nuevoCliente = new Cliente(nombre, telefono, id);
  verVeterinarias();
  const veterinariaId = readlineSync.questionInt(
    "ID de la veterinaria a la que pertenece el cliente: "
  );
  const veterinaria = VetCode.getVeterinarias().find(
    (vet) => vet.getId() === veterinariaId
  );

  if (veterinaria) {
    veterinaria.agregarCliente(nuevoCliente); // Llamamos al método agregarCliente de Veterinaria
    console.log("Cliente agregado exitosamente.");
  } else {
    console.log("Veterinaria no encontrada.");
  }
}

function eliminarCliente() {
  verClientes();
  const id = readlineSync.questionInt("ID del cliente a eliminar: ");

  verVeterinarias();
  // Aquí accedemos a la veterinaria primero para poder eliminar al cliente.

  const veterinaria = VetCode.getVeterinarias().find((vet) => vet.getId());

  if (veterinaria) {
    const cliente = veterinaria.getClientes().find((c) => c.getId() === id);

    if (cliente) {
      veterinaria.eliminarCliente(cliente.getId());
      console.log("Cliente eliminado exitosamente.");
    } else {
      console.log("No se encontró un cliente con ese ID.");
    }
  } else {
    console.log("Veterinaria no encontrada.");
  }
}

function verClientes() {
  verVeterinarias();
  const veterinariaId = readlineSync.questionInt("ID de la veterinaria: ");
  const veterinaria = VetCode.getVeterinarias().find(
    (vet) => vet.getId() === veterinariaId
  );

  if (veterinaria) {
    const clientes = veterinaria.getClientes(); // Llamamos al método obtenerClientes de Veterinaria
    if (clientes.length === 0) {
      console.log("No hay clientes registrados.");
    } else {
      console.log("\n--- LISTA DE CLIENTES ---");
      clientes.forEach((cli) => {
        console.log(
          `ID: ${cli.getId()}, Nombre: ${cli.getNombre()}, Teléfono: ${cli.getTelefono()}`
        );
      });
    }
  } else {
    console.log("Veterinaria no encontrada.");
  }
}

function gestionarMascotas() {
  // Primero pedimos el ID de la veterinaria
  verVeterinarias();
  const veterinariaId = readlineSync.questionInt(
    "ID de la veterinaria del cliente: "
  );

  // Buscamos la veterinaria en el gestor de veterinarias
  const veterinaria = VetCode.getVeterinarias().find(
    (vet) => vet.getId() === veterinariaId
  );

  if (veterinaria) {
    // Ahora obtenemos la lista de clientes de esa veterinaria
    const clientes = veterinaria.getClientes();

    // Si la veterinaria tiene clientes, mostramos la lista
    if (clientes.length > 0) {
      console.log("\n--- LISTA DE CLIENTES ---");
      clientes.forEach((cli) => {
        console.log(
          `ID: ${cli.getId()}, Nombre: ${cli.getNombre()}, Teléfono: ${cli.getTelefono()}`
        );
      });

      // Ahora pedimos el ID del cliente para gestionar sus mascotas
      const idCliente = readlineSync.questionInt("ID del cliente: ");
      const cliente = clientes.find((c) => c.getId() === idCliente);

      if (cliente) {
        let regresarMascotas = false;
        while (!regresarMascotas) {
          console.log("\n--- GESTIÓN DE MASCOTAS ---");
          console.log("1. Agregar Mascota");
          console.log("2. Eliminar Mascota");
          console.log("3. Ver Mascotas");
          console.log("4. Regresar");
          const opcionMascota = readlineSync.questionInt("Elige una opcion: ");

          switch (opcionMascota) {
            case 1:
              agregarMascota(cliente);
              break;
            case 2:
              eliminarMascota(cliente);
              break;
            case 3:
              verMascotas(cliente);
              break;
            case 4:
              regresarMascotas = true;
              break;
            default:
              console.log("Opción no válida. Inténtalo de nuevo.");
          }
        }
      } else {
        console.log("Cliente no encontrado.");
      }
    } else {
      console.log("No hay clientes registrados en esta veterinaria.");
    }
  } else {
    console.log("Veterinaria no encontrada.");
  }
}

function agregarMascota(cliente: Cliente) {
  const nombre = readlineSync.question("Nombre de la mascota: ");
  const especie = readlineSync.question(
    "Especie de mascota (perro, gato, etc.): "
  );
  const id = VetCode.generarIdUnico();

  const nuevaMascota = new Mascota(nombre, especie, id);
  cliente.agregarMascota(nuevaMascota);
  console.log("Mascota agregada exitosamente.");
}

function eliminarMascota(cliente: Cliente) {
  verMascotas(cliente);
  const idMascota = readlineSync.questionInt("ID de la mascota a eliminar: ");
  const mascota = cliente
    .getMascotas()
    .find((m) => m.getIdPropietario() === idMascota);

  if (mascota) {
    cliente.eliminarMascota(mascota.getIdPropietario());
    console.log("Mascota eliminada exitosamente.");
  } else {
    console.log("No se encontró una mascota con ese ID.");
  }
}

function verMascotas(cliente: Cliente) {
  const mascotas = cliente.getMascotas();
  if (mascotas.length === 0) {
    console.log("Este cliente no tiene mascotas registradas.");
  } else {
    console.log("\n--- LISTA DE MASCOTAS ---");
    mascotas.forEach((mascota) => {
      console.log(
        `ID: ${mascota.getIdPropietario()}, Nombre: ${mascota.getNombre()}, Especie: ${mascota.getEspecie()}`
      );
    });
  }
}

menuPrincipal();
