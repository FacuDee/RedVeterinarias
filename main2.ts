import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Mascota } from "./Mascota";
import { Proveedor } from "./Proveedor";
import { GestorVeterinarias } from "./GestorVeterinarias";

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
const mascota1 = new Mascota(
  VetCode.generarIdUnico(),
  "Popi",
  "Loro",
  VetCode.generarIdUnico()
);
const mascota2 = new Mascota(
  VetCode.generarIdUnico(),
  "Coqui",
  "Perro",
  VetCode.generarIdUnico()
);

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

// console.log(veterinaria1.getNombre());

VetCode.agregarVeterinaria(veterinaria1);
VetCode.agregarVeterinaria(veterinaria2);

VetCode.agregarProveedor(proveedor1);
VetCode.agregarProveedor(proveedor2);

veterinaria1.agregarCliente(cliente1);
veterinaria2.agregarCliente(cliente2);

cliente1.agregarMascota(mascota1);
cliente2.agregarMascota(mascota2);

// cliente1.eliminarMascota(mascota1.getIdPropietario());

// VetCode.editarVeterinaria(veterinaria1.getId(), { nombre: "Nombre nuevo" });
// VetCode.editarProveedor(proveedor1.getId(), { nombre: "Nombre nuevo" });

// VetCode.eliminarVeterinaria(veterinaria2.getId());

// veterinaria1.editarCliente(cliente1.getId(), { telefono: "11-58987744" });
// veterinaria1.eliminarCliente(cliente1.getId());

// console.log(mascota1);
// cliente1.editarMascota(mascota1.getIdPropietario(), { especie: "perro" });
// console.log(mascota1);

console.log(VetCode);
