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
  "Pedro Sanchez",
  "2284-547411",
  VetCode.generarIdUnico()
);
const cliente2 = new Cliente(
  "Marcela Salazar",
  "2284-757878",
  VetCode.generarIdUnico()
);
const cliente3 = new Cliente(
  "Eduardo Ortiz",
  "2284-544780",
  VetCode.generarIdUnico()
);
const cliente4 = new Cliente(
  "Julia Galarza",
  "2284-895645",
  VetCode.generarIdUnico()
);
const cliente5 = new Cliente(
  "Daniela Bormida",
  "2284-544899",
  VetCode.generarIdUnico()
);

// Incrementar visita a cliente hasta llegar a 4
cliente1.incrementarVisitas();
cliente1.incrementarVisitas();
cliente1.incrementarVisitas();
cliente1.incrementarVisitas();

// Crear instancia de Mascota
const mascota1 = new Mascota(
  VetCode.generarIdUnico(),
  "Popi",
  "loro",
  VetCode.generarIdUnico()
);
const mascota2 = new Mascota(
  VetCode.generarIdUnico(),
  "Coqui",
  "perro",
  VetCode.generarIdUnico()
);
const mascota3 = new Mascota(
  VetCode.generarIdUnico(),
  "Ruso",
  "gato",
  VetCode.generarIdUnico()
);
const mascota4 = new Mascota(
  VetCode.generarIdUnico(),
  "Rayo",
  "gato",
  VetCode.generarIdUnico()
);
const mascota5 = new Mascota(
  VetCode.generarIdUnico(),
  "Mara",
  "perro",
  VetCode.generarIdUnico()
);

// Crear instancias de Proveedor
const proveedor1 = new Proveedor(
  "Pet Alimentos SA",
  "2281-458799",
  VetCode.generarIdUnico(),
  "Cnel. Suarez 1114",
  "alimentossa@gmail.com",
  "Alimentos procesados"
);

const proveedor2 = new Proveedor(
  "Todo para tu mascota",
  "2284-478996",
  VetCode.generarIdUnico(),
  "Av. Colon 3288",
  "todoparatumascota@gmail.com",
  "Accesorios"
);

const proveedor3 = new Proveedor(
  "Pipetas Litoral",
  "11-54471218",
  VetCode.generarIdUnico(),
  "Talcahuano 1817",
  "litoralpipetas@gmail.com",
  "Pipetas"
);

VetCode.agregarVeterinaria(veterinaria1);
VetCode.agregarVeterinaria(veterinaria2);

VetCode.agregarProveedor(proveedor1);
VetCode.agregarProveedor(proveedor2);
VetCode.agregarProveedor(proveedor3);

veterinaria1.agregarCliente(cliente1);
veterinaria2.agregarCliente(cliente2);
veterinaria1.agregarCliente(cliente3);
veterinaria1.agregarCliente(cliente4);
veterinaria2.agregarCliente(cliente5);

cliente1.agregarMascota(mascota1);
cliente2.agregarMascota(mascota2);
cliente3.agregarMascota(mascota3);
cliente4.agregarMascota(mascota4);
cliente5.agregarMascota(mascota5);

//////////////////////////////////////////////////////////////
///////// MENÚ INTERACTIVO DE LA RED DE VETERINARIAS /////////
//////////////////////////////////////////////////////////////

function menuPrincipal() {
  let salir = false;

  while (!salir) {
    console.log("\n*** MENÚ PRINCIPAL ***");
    console.log("\n1. Gestionar Veterinarias");
    console.log("2. Gestionar Proveedores");
    console.log("3. Gestionar Clientes");
    console.log("4. Salir");
    const opcion = readlineSync.questionInt("\nElige una opcion: ");

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
    console.log("\n*** GESTIÓN DE VETERINARIAS ***");
    console.log("\n1. Agregar Veterinaria");
    console.log("2. Eliminar Veterinaria");
    console.log("3. Ver Veterinarias");
    console.log("4. Editar Veterinaria");

    console.log("5. Regresar al Menú Principal");
    const opcion = readlineSync.questionInt("\nElige una opcion: ");

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
        editarVeterinaria();
        break;
      case 5:
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
  console.log("\nVeterinaria agregada exitosamente.");
}

function eliminarVeterinaria() {
  verVeterinarias();
  const id = readlineSync.questionInt("\nID de la veterinaria a eliminar: ");
  const veterinaria = VetCode.getVeterinarias().find((v) => v.getId() === id);

  if (veterinaria) {
    VetCode.eliminarVeterinaria(veterinaria.getId());
    console.log("Veterinaria eliminada exitosamente.");
  } else {
    console.log("No se encontró una veterinaria con ese ID.");
  }
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

function editarVeterinaria() {
  verVeterinarias();
  const id = readlineSync.questionInt("\nID de la veterinaria a editar: ");
  const veterinaria = VetCode.getVeterinarias().find((v) => v.getId() === id);

  console.log("\nDeja en blanco los campos que no quieras editar.");

  if (veterinaria) {
    const nuevoNombre = readlineSync.question(
      `Nuevo nombre (${veterinaria.getNombre()}): `
    );
    const nuevaDireccion = readlineSync.question(
      `Nueva direccion (${veterinaria.getDireccion()}): `
    );

    if (nuevoNombre) veterinaria.setNombre(nuevoNombre);
    if (nuevaDireccion) veterinaria.setDireccion(nuevaDireccion);

    console.log("Veterinaria editada exitosamente.");
  } else {
    console.log("No se encontró una veterinaria con ese ID.");
  }
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

function verVeterinarias() {
  const veterinarias = VetCode.getVeterinarias();
  if (veterinarias.length === 0) {
    console.log("No hay veterinarias registradas.");
  } else {
    console.log("\n[LISTA DE VETERINARIAS]");
    veterinarias.forEach((vet) => {
      console.log(
        `ID: ${vet.getId()}, Nombre: ${vet.getNombre()}, Direccion: ${vet.getDireccion()}`
      );
    });
  }
}

function menuProveedores() {
  let regresar = false;

  while (!regresar) {
    console.log("\n*** GESTIÓN DE PROVEEDORES ***");
    console.log("\n1. Agregar Proveedor");
    console.log("2. Eliminar Proveedor");
    console.log("3. Ver Proveedores");
    console.log("4. Editar Proveedor");
    console.log("5. Regresar al Menú Principal");
    const opcion = readlineSync.questionInt("\nElige una opcion: ");

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
        editarProveedor();
        break;
      case 5:
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

function eliminarProveedor() {
  verProveedores();
  const id = readlineSync.questionInt("\nID del proveedor a eliminar: ");
  const proveedor = VetCode.getProveedores().find((p) => p.getId() === id);

  if (proveedor) {
    VetCode.eliminarProveedor(proveedor.getId());
  } else {
    console.log("No se encontró un proveedor con ese ID.");
  }
}

function editarProveedor() {
  verProveedores();
  const id = readlineSync.questionInt("\nID del proveedor a editar: ");
  const proveedor = VetCode.getProveedores().find((p) => p.getId() === id);
  console.log("\nDeja en blanco los campos que no quieras editar.");

  if (proveedor) {
    const nuevoNombre = readlineSync.question(
      `Nuevo nombre (${proveedor.getNombre()}): `
    );
    const nuevoTelefono = readlineSync.question(
      `Nuevo telefono (${proveedor.getTelefono()}): `
    );
    const nuevaDireccion = readlineSync.question(
      `Nueva direccion (${proveedor.getDireccion()}): `
    );
    const nuevoCorreo = readlineSync.question(
      `Nuevo correo electronico (${proveedor.getCorreoElectronico()}): `
    );
    const nuevaCategoria = readlineSync.question(
      `Nueva categoria de producto (${proveedor.getCategoria()}): `
    );

    if (nuevoNombre) proveedor.setNombre(nuevoNombre);
    if (nuevoTelefono) proveedor.setTelefono(nuevoTelefono);
    if (nuevaDireccion) proveedor.setDireccion(nuevaDireccion);
    if (nuevoCorreo) proveedor.setCorreoElectronico(nuevoCorreo);
    if (nuevaCategoria) proveedor.setCategoria(nuevaCategoria);

    console.log("Proveedor editado exitosamente.");
  } else {
    console.log("No se encontró un proveedor con ese ID.");
  }
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

function verProveedores() {
  const proveedores = VetCode.getProveedores();
  if (proveedores.length === 0) {
    console.log("No hay proveedores registrados.");
  } else {
    console.log("\n[LISTA DE PROVEEDORES]");
    proveedores.forEach((prov) => {
      console.log(
        `ID: ${prov.getId()}, Nombre: ${prov.getNombre()}, Telefono: ${prov.getTelefono()}, Direccion: ${prov.getDireccion()}, Categoria: ${prov.getCategoria()}`
      );
    });
  }
}

function menuClientes() {
  let regresar = false;

  while (!regresar) {
    console.log("\n*** GESTIÓN DE CLIENTES ***");
    console.log("\n1. Agregar Cliente");
    console.log("2. Eliminar Cliente");
    console.log("3. Ver Clientes");
    console.log("4. Gestionar Mascotas");
    console.log("5. Editar Cliente");
    console.log("6. Registrar visita");
    console.log("7. Regresar al Menú Principal");
    const opcion = readlineSync.questionInt("\nElige una opcion: ");

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
        editarCliente();
        break;
      case 6:
        incrementarVisitaCliente();
        break;
      case 7:
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
    "\nID de la veterinaria a la que pertenece el cliente: "
  );
  const veterinaria = VetCode.getVeterinarias().find(
    (vet) => vet.getId() === veterinariaId
  );

  if (veterinaria) {
    veterinaria.agregarCliente(nuevoCliente);
    console.log("Cliente agregado exitosamente.");
  } else {
    console.log("Veterinaria no encontrada.");
  }
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

function eliminarCliente() {
  const veterinariaId = verClientes();

  if (veterinariaId === null) {
    console.log("No se pudo realizar la operación, veterinaria no encontrada.");
    return;
  }

  // Pedimos al usuario el ID del cliente a eliminar
  const id = readlineSync.questionInt("\nID del cliente a eliminar: ");
  const veterinaria = VetCode.getVeterinarias().find(
    (vet) => vet.getId() === veterinariaId
  );

  if (veterinaria) {
    // Buscamos el cliente en esa veterinaria
    const cliente = veterinaria.getClientes().find((c) => c.getId() === id);

    if (cliente) {
      // Si encontramos el cliente, lo eliminamos
      veterinaria.eliminarCliente(cliente.getId());
    } else {
      console.log("No se encontró un cliente con ese ID en esta veterinaria.");
    }
  } else {
    console.log("Veterinaria no encontrada.");
  }

  // Espera a que el usuario presione ENTER para continuar
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

function editarCliente() {
  verClientes();
  const id = readlineSync.questionInt("\nID del cliente a editar: ");

  const veterinaria = VetCode.getVeterinarias().find((vet) =>
    vet.getClientes().some((c) => c.getId() === id)
  );

  if (veterinaria) {
    const cliente = veterinaria.getClientes().find((c) => c.getId() === id);
    console.log("\nDeja en blanco los campos que no quieras editar.");
    if (cliente) {
      const nuevoNombre = readlineSync.question(
        `Nuevo nombre (${cliente.getNombre()}): `
      );
      const nuevoTelefono = readlineSync.question(
        `Nuevo telefono (${cliente.getTelefono()}): `
      );

      if (nuevoNombre) cliente.setNombre(nuevoNombre);
      if (nuevoTelefono) cliente.setTelefono(nuevoTelefono);

      console.log("\nCliente editado exitosamente.");
    } else {
      console.log("\nNo se encontró un cliente con ese ID.");
    }
  } else {
    console.log("\nNo se encontró una veterinaria con ese cliente.");
  }
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

function incrementarVisitaCliente() {
  verClientes();

  const idCliente = readlineSync.questionInt(
    "\nID del cliente para incrementar visitas: "
  );

  const veterinaria = VetCode.getVeterinarias().find((vet) =>
    vet.getClientes().some((c) => c.getId() === idCliente)
  );

  if (veterinaria) {
    const cliente = veterinaria
      .getClientes()
      .find((c) => c.getId() === idCliente);

    if (cliente) {
      cliente.incrementarVisitas();

      // Verifica si el cliente es VIP después de incrementar las visitas
      if (cliente.getEsVip() && cliente.getVisitas() === 5) {
        console.log("¡Felicidades! Este cliente ahora es VIP.");
      } else {
        console.log("\nVisita registrada exitosamente.");
      }
    } else {
      console.log(
        "\nNo se encontró un cliente con ese ID en esta veterinaria."
      );
    }
  } else {
    console.log("\nNo se encontró una veterinaria con ese cliente.");
  }

  // Espera a que el usuario presione ENTER para continuar
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

function verClientes() {
  verVeterinarias();
  const veterinariaId = readlineSync.questionInt(
    "\nID de la veterinaria donde esta registrado el cliente: "
  );

  const veterinaria = VetCode.getVeterinarias().find(
    (vet) => vet.getId() === veterinariaId
  );

  if (veterinaria) {
    const clientes = veterinaria.getClientes();
    if (clientes.length === 0) {
      console.log("No hay clientes registrados en esta veterinaria.");
    } else {
      console.log("\n[LISTA DE CLIENTES]");
      clientes.forEach((cliente) => {
        console.log(
          `ID: ${cliente.getId()}, Nombre: ${cliente.getNombre()}, Telefono: ${cliente.getTelefono()}, Visitas: ${cliente.getVisitas()}`
        );
      });
    }
    return veterinariaId;
  } else {
    console.log("No se encontró una veterinaria con ese ID.");
    return null; // Si no se encuentra la veterinaria, retorna null
  }
}

function gestionarMascotas() {
  // Se pide el ID de la veterinaria
  verVeterinarias();
  const veterinariaId = readlineSync.questionInt(
    "\nID de la veterinaria del cliente: "
  );

  // Buscam la veterinaria en el gestor de veterinarias
  const veterinaria = VetCode.getVeterinarias().find(
    (vet) => vet.getId() === veterinariaId
  );

  if (veterinaria) {
    // Obtiene la lista de clientes de esa veterinaria
    const clientes = veterinaria.getClientes();

    // Si la veterinaria tiene clientes, muestra la lista
    if (clientes.length > 0) {
      console.log("\n[LISTA DE CLIENTES]");
      clientes.forEach((cliente) => {
        console.log(
          `ID: ${cliente.getId()}, Nombre: ${cliente.getNombre()}, Telefono: ${cliente.getTelefono()}`
        );
      });

      // Pide el ID del cliente para gestionar sus mascotas
      const idCliente = readlineSync.questionInt("\nID del cliente: ");
      const cliente = clientes.find((c) => c.getId() === idCliente);

      if (cliente) {
        let regresarMascotas = false;
        while (!regresarMascotas) {
          console.log("\n*** GESTIÓN DE MASCOTAS ***");
          console.log("\n1. Agregar Mascota");
          console.log("2. Eliminar Mascota");
          console.log("3. Ver Mascotas");
          console.log("4. Editar Mascota");
          console.log("5. Regresar");
          const opcionMascota = readlineSync.questionInt(
            "\nElige una opcion: "
          );

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
              editarMascota(cliente);
              break;
            case 5:
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

  const nuevaMascota = new Mascota(id, nombre, especie, id);
  cliente.agregarMascota(nuevaMascota);
  console.log("\nMascota agregada exitosamente.");
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

function eliminarMascota(cliente: Cliente) {
  verMascotas(cliente);
  const idMascota = readlineSync.questionInt("\nID de la mascota a eliminar: ");
  const mascota = cliente
    .getMascotas()
    .find((m) => m.getIdPropietario() === idMascota);

  if (mascota) {
    cliente.eliminarMascota(mascota.getIdPropietario());
    console.log("Mascota eliminada exitosamente.");
  } else {
    console.log("No se encontró una mascota con ese ID.");
  }
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

function editarMascota(cliente: Cliente) {
  const mascotas = cliente.getMascotas();
  if (mascotas.length === 0) {
    console.log("El cliente no tiene mascotas registradas.");
    return;
  }

  console.log("\n[LISTA DE MASCOTAS]");
  mascotas.forEach((mascota) =>
    console.log(
      `ID: ${mascota.getId()}, Nombre: ${mascota.getNombre()}, Especie: ${mascota.getEspecie()}`
    )
  );

  const mascotaId = readlineSync.questionInt("\nID de la mascota a editar: ");
  const mascota = mascotas.find((m) => m.getId() === mascotaId);

  if (!mascota) {
    console.log("No se encontró una mascota con ese ID.");
    return;
  }

  console.log("\nDeja en blanco los campos que no quieras editar.");
  const nuevoNombre = readlineSync.question("Nuevo nombre de la mascota: ");
  const nuevaEspecie = readlineSync.question("Nueva especie de la mascota: ");

  if (nuevoNombre) mascota.setNombre(nuevoNombre);
  if (nuevaEspecie) mascota.setEspecie(nuevaEspecie);

  console.log("Mascota editada exitosamente.");
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

function verMascotas(cliente: Cliente) {
  const mascotas = cliente.getMascotas();
  if (mascotas.length === 0) {
    console.log("Este cliente no tiene mascotas registradas.");
  } else {
    console.log("\n[LISTA DE MASCOTAS]");
    mascotas.forEach((mascota) => {
      console.log(
        `ID: ${mascota.getIdPropietario()}, Nombre: ${mascota.getNombre()}, Especie: ${mascota.getEspecie()}`
      );
    });
  }
  let teclaAvanzar = readlineSync.question("\nENTER para continuar...");
}

menuPrincipal();
