// CLASE PELICULA CON SU TITULO, FORMATO, PRECIO Y ENTRADAS DISPONIBLES
function Pelicula(titulo, formato, precio, disponibles) {
    this.titulo = titulo;
    this.formato = formato;
    this.precio = precio;
    this.disponibles = disponibles;
}

// AARRAY DE 10 PELICULAS
const peliculas = [
    new Pelicula("El señor de los anillos", "2D", 2300, 14),
    new Pelicula("Harry Potter", "3D", 1200, 30),
    new Pelicula("Titanic", "4D", 2600, 24),
    new Pelicula("Avatar", "4D", 2500, 13),
    new Pelicula("Jurassic Park", "2D", 2000, 42),
    new Pelicula("Star Wars", "3D", 2200, 31),
    new Pelicula("Inception", "2D", 2400, 9),
    new Pelicula("The Avengers", "4D", 1800, 3),
    new Pelicula("The Godfather", "2D", 2700, 76),
    new Pelicula("The Dark Knight", "3D", 2300, 19)
];



// MOSTRAR MENSAJE DE BIENVENIDA AL CINE Y MUESTRO EL MENU CON LAS OPCIONES
function mostrarMenu() {
    alert
        ("Bienvenidos al cine de AMALFITANO \n Menu de opciones: \n 1 = Ver todo el array de películas (solo el título) \n 2 = Filtrar las películas por formato \n 3 = Filtrar por precio menor a mayor \n 4 = Filtrar por precio mayor a menor \n 5 = Buscar pelicula \n 6 = Comprar entradas para una pelicula")

}

// MOSTRAR TODOS LOS TITULOS DE LAS PELICULAS
function verTodosLosTitulos() {
    for (let i = 0; i < peliculas.length; i++) {
        console.log((i + 1) + ": " + peliculas[i].titulo);
    }
}

// BUSCAR UNA PELICULA CON UN PROMPT
function buscarPelicula(arr, buscar) {
    return arr.filter((pelicula) => pelicula.titulo.toLowerCase().includes(buscar.toLowerCase()));

    }


// FILTRAR POR FORMATO (2D, 3D Y 4D)
function filtrarPorFormato(formato) {
    const peliculasFiltradas = peliculas.filter(function (pelicula) {
        return pelicula.formato.toLowerCase() === formato.toLowerCase();
    });

    console.log("Las películas con formato " + formato + " son:");
    peliculasFiltradas.forEach(function (pelicula) {
        console.log(pelicula.titulo);
    });
}

// ORDENAR DE MENOR A MAYOR
function ordenarPorPrecioMenorAMayor() {
    const peliculasOrdenadas = peliculas.slice().sort(function (a, b) {
        return a.precio - b.precio;
    });

    console.log("Películas ordenadas por precio de menor a mayor:");
    peliculasOrdenadas.forEach(function (pelicula) {
        console.log(pelicula.titulo + " - Precio: $" + pelicula.precio);
    });
}

// ORDENAR DE MAYOR A MENOR
function ordenarPorPrecioMayorAMenor() {
    const peliculasOrdenadas = peliculas.slice().sort(function (a, b) {
        return b.precio - a.precio;
    });

    console.log("Películas ordenadas por precio, de mayor a menor:");
    peliculasOrdenadas.forEach(function (pelicula) {
        console.log(pelicula.titulo + " - Precio: $" + pelicula.precio);
    });
}

///COMPRAR ENTRADAS
function comprarEntradas() {
    const titulo = prompt("Ingrese el título de la película:");
    const pelicula = peliculas.find(pelicula => pelicula.titulo.toLowerCase() === titulo.toLowerCase());
    alert ("La cantidad de entradas disponibles que hay para " + pelicula.titulo + " son " + pelicula.disponibles )

    if (!pelicula) {
        console.log("La película ingresada no está disponible.");
        return;
    }

    let cantidad;
    while (true) {
        cantidad = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar para " + pelicula.titulo));
        if (cantidad <= 0 || cantidad > pelicula.disponibles) {
            console.log("La cantidad ingresada no es válida. Por favor, ingrese un número válido mayor que cero y mayor o igual a la cantidad de entradas disponibles.");
            alert("La cantidad ingresada no es válida. Por favor, ingrese un número válido mayor que cero y mayor o igual a la cantidad de entradas disponibles.");
        } else {
            break;
        }
    }

    const precioTotal = cantidad * pelicula.precio;
    
    console.log("Has comprado " + cantidad + " entradas para " + pelicula.titulo + " por un total de $" + precioTotal);
    alert ("Has comprado " + cantidad + " entradas para " + pelicula.titulo + " por un total de $" + precioTotal);
}


function ejecutarMenu(opcion) {
    switch (opcion) {
        case '1':
            verTodosLosTitulos();
            break;
        case '2':
            const formato = prompt("Ingrese el formato a filtrar:");
            filtrarPorFormato(formato);
            break;
        case '3':
            ordenarPorPrecioMenorAMayor();
            break;
        case '4':
            ordenarPorPrecioMayorAMenor();
            break;
        case '5':
            const buscar = prompt("Ingrese una parte del título de la película que desea buscar:");
            const peliculasEncontradas = buscarPelicula(peliculas, buscar);
            console.log("Películas encontradas:");
            peliculasEncontradas.forEach(function(pelicula) {
                console.log("Título: " + pelicula.titulo + " - Formato: " + pelicula.formato + " - Precio: " + pelicula.precio + " - Entradas disponibles: " + pelicula.disponibles);
            });
            break;
            case '6':
            comprarEntradas();
            break;

        default:
            console.log("Opción no válida");
    }
}

mostrarMenu();
const opcionSeleccionada = prompt("Ingrese el número de la opción que desea ejecutar:");
ejecutarMenu(opcionSeleccionada);
