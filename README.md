<strong>VET-CODE</strong> | Red de Veterinarias

Aplicación de gestión de una red de veterinarias, organizada en torno a conceptos de Programación Orientada a Objetos (POO). Las clases representan entidades del mundo real (veterinarias, clientes, mascotas y proveedores).

1. CLASES QUE COMPONEN EL SISTEMA:

Veterinaria: Representa cada sucursal de la red de veterinarias, con atributos para su identificación, nombre y dirección. Cada veterinaria contiene listas de sus propios clientes y mascotas. Los métodos permiten agregar clientes y mascotas específicos, ayudando a modular el manejo de datos y facilitar la búsqueda o asignación por veterinaria.

Cliente: Representa a cada cliente con datos básicos como nombre y teléfono, además de un sistema para registrar si es cliente VIP según el número de visitas con su mascota a la veterinaria. Esto se gestiona con el atributo esVip, el cual se actualiza automáticamente tras cinco visitas.

Mascota: Representa a las mascotas de los clientes, identificadas por nombre, especie (clasificada como “perro”, “gato” o “exótica”) y la referencia al cliente dueño (a través de un id). Esto permite una relación directa entre cliente y mascota, facilitando la gestión de datos de pacientes en cada veterinaria.

Proveedor: Representa a los proveedores que proveen servicios o insumos a la red, gestionando datos de contacto básicos. Esto ayuda a estructurar los servicios adicionales que la red puede necesitar.

GestorVeterinarias: Actúa como un administrador central del sistema, encargado de manejar todas las operaciones de alta, baja y modificación de veterinarias, clientes, mascotas y proveedores. También asegura la generación de IDs únicos para evitar conflictos, encapsulando así la lógica de validación.

2. PRINCIPIOS DE PROGRAMACIÓN ORIENTADA A OBJETOS (POO)

Encapsulamiento: Cada clase encapsula sus propios atributos y métodos, manteniendo su estado privado. Esto permite que los datos de cada veterinaria, cliente, mascota o proveedor solo se manipulen a través de métodos específicos y no directamente desde el exterior.

Abstracción: Las clases representan entidades del mundo real (veterinarias, clientes, mascotas y proveedores), enfocándose en los atributos y comportamientos esenciales para la gestión del sistema, sin incluir detalles irrelevantes.

Modularidad: El proyecto se organiza en archivos separados por clase, facilitando la escalabilidad y mantenimiento del código. La estructura modular permite realizar cambios en una clase sin afectar directamente al resto del sistema.

Composición y relaciones entre Clases: La relación entre Veterinaria y Cliente o Mascota es de composición, dado que una veterinaria puede “contener” clientes y mascotas específicos. Al registrar un cliente o mascota, también se le asigna a una veterinaria, reforzando la relación entre las entidades.

3. FLUJO

El GestorVeterinarias maneja la creación y administración de entidades, validando los IDs únicos y asegurando que cada entidad esté correctamente asignada.

Al crear una nueva entidad (cliente, mascota, proveedor), el GestorVeterinarias genera un ID único y se lo asigna a la veterinaria correspondiente, además de guardarlo en su propia lista de entidades global.

Esto permite acceder fácilmente a cada veterinaria y verificar qué clientes y mascotas están registrados en ella, generando un sistema jerárquico y organizado.

4. CÓMO UTILIZARLO

Clonar este repositorio:

git clone https://github.com/FacuDee/RedVeterinarias.git

Ejecutar por consola el archivo main.ts:

Se abrirá un menú interactivo para gestionar cada una de las entidades que integran la Red.
