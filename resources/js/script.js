function showView(frase) {
    /* Mostrar div con el mensaje y ocultar placeholder*/
    document.getElementById("no-text-message").classList.add("hidden");
    document.getElementById("view").classList.remove("hidden");
}


function validacion(frase) {
    /* Expresión regular para encontrar mayúsculas y carácteres con acento */
    let regex = /[A-ZÀ-ú]/;

    if(regex.test(frase)) {
        alert("Escribe solo con minúsculas y sin acentos por favor");
        return false;
    } else if(frase == '') {
        alert("No hay ningún mensaje escrito aún, ingresa el texto que deseas encriptar por favor");
        return false
    } else {
        return true
    }
}


function encriptar(frase) {

    /* ======== Método 1 de encriptación ======== */
    // /* Dividir la frase en un arreglo de carácteres */
    // let newFrase = frase.split('');
    // /* Cambiamos los carácteres por las claves de encriptación respecticas y unimos el arreglo en un string con join*/
    // newFrase = newFrase.map((letra) => {
    //     switch (letra) {
    //         case 'e':
    //             return 'enter';
    //         case 'i':
    //             return 'imes';
    //         case 'a':
    //             return 'ai';
    //         case 'o':
    //             return 'ober';
    //         case 'u':
    //             return 'ufat';
    //         default:
    //             return letra;
    //     }
    // }).join('');
    // ===========================================

    /* ======== Método 2 de encriptación ======== */
    let newFrase = frase.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    /* Devolvemos la frase encriptada */
    return newFrase;
}


function desencriptar(frase) {
    let newFrase = frase.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    /* Devolvemos la frase desencriptada */
    return newFrase;
}


function mostrarEncriptado() {
    /* Obtenemos el contenido de Textarea */
    let frase = document.getElementById("input").value;

    if(validacion(frase)) {
        /* Mostramos la etiqueta con el contenido del mensaje */
        showView(frase);

        /* Agregamos la frase encriptada al elemento html */
        document.getElementById("message").innerHTML = encriptar(frase);
    }
}


function mostrarDesencriptado() {
    /* Obtenemos el contenido de Textarea */
    let frase = document.getElementById("input").value;

    if(validacion(frase)) {
        /* Mostramos la etiqueta con el contenido del mensaje */
        showView(frase);
        
        /* Agregamos la frase desencriptada al elemento html */
        document.getElementById("message").innerHTML = desencriptar(frase);
    }
}