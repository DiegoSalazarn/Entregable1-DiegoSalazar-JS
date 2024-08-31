let nombre = prompt("¡Hola! ¿Cómo te llamas?"); // saludar al usuario

if (nombre) {// continua si coloca su nombre

    alert(`¡Hola, ${nombre}! Bienvenido`);  // saludar al usuario por su nombre

  
    function solicitarEdad() {
        let edad;
        do {
            edad = prompt(`¿Cuántos años tienes, ${nombre}?`);

            if (edad === null) { // Si el usuario cancela
                return null;
            }
            edad = Number(edad); // Convertir a número

            if (isNaN(edad) || edad <= 0) {
                alert("Por favor, ingresa un número válido para la edad.");
                edad = null; // esto hace que continue el bucle
            }
        } while (edad === null);
        return edad;
    }

    // pedir la edad del usuario
    const edad = solicitarEdad();

    // verificar que se ingreso una edad valida
    if (edad !== null) {
        // Confirmar la edad ingresada
        const confirmacion = confirm(`¿Confirmas que tienes ${edad} años?`);

        if (confirmacion) {
            alert("¡Bienvenido, disfrute su estadía!");
        } else {
            alert("Por favor, vuelve a ingresar tu edad.");
        }
    } else {
        alert("No ingresaste tu edad, Intentelo más tarde");
    }
    } else {
        alert("No pusiste tu nombre"); //por si no pone su nombre, le tira el "no ingresaste tu nombre"
    }

    let documento = prompt ("Ingrese su DNI/Documento")
    if (documento !== null){
        const confirmacion = confirm(`Confirmas que tu documento es: ${documento}`);

            if (confirmacion){
                alert("¡Bienvenido, disfrute su estadía!")
            }else{
                alert("por favor, vuelva a ingresar su Documento Correctamente")
            }
        }

    

    const prendas = {
        "Remeras negras con estampados": 20000,
        "Pantalones Jean Clasicos": 50000,
        "Buzos de varios colores": 25000,
    }

    console.log ("El precio final es: $"+ servicios[0])
