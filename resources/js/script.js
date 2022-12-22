function showView(frase) {
    /* Mostrar div con el mensaje y ocultar placeholder*/
    document.getElementById("no-text-message").classList.add("hidden");
    document.getElementById("view").classList.remove("hidden");
}


function validacion(frase) {
    /* Expresión regular para encontrar mayúsculas y carácteres con acento */
    let regex = /[A-ZÀ-ú]/;

    return (!regex.test(frase) && frase != '');
}


function encriptar(frase) {
    /* Remplazamos todas las vocales por las claves de encriptación */
    let newFrase = frase.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    /* Devolvemos la frase encriptada */
    return newFrase;
}


function desencriptar(frase) {
    /* Remplazamos las letras encriptadas por sus respectivas vocales*/
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
        /* Mostramos el elemento html con el contenido del mensaje */
        showView(frase);

        /* Agregamos la frase encriptada al elemento html */
        document.getElementById("message").innerHTML = encriptar(frase);
    } else {
        alert("Intente de nuevo, puede que su mensaje esté vacío o contenga mayúsculas y/o acentos, evítelos por favor.");
    }
}


function mostrarDesencriptado() {
    /* Obtenemos el contenido de Textarea */
    let frase = document.getElementById("input").value;

    if(validacion(frase)) {
        /* Mostramos el elemento html con el contenido del mensaje */
        showView(frase);
        
        /* Agregamos la frase desencriptada al elemento html */
        document.getElementById("message").innerHTML = desencriptar(frase);
    } else {
        alert("Intente de nuevo, puede que su mensaje esté vacío o contenga mayúsculas y/o acentos, evítelos por favor.");
    }
}


function copiar() {
    /* Obtenemos el texto a copiar */
    let text = document.getElementById("message").innerHTML;

    /* Lo copiamos al portapapeles */
    navigator.clipboard.writeText(text);

    /* Lanzamos alerta de que el texto fue copiado */
    let copyAlert = document.getElementById("copy-alert");
    copyAlert.classList.add("copy");
    setTimeout(() => copyAlert.classList.remove("copy"), 1500);
}


/* ============ Funciones para el background ============ */
function showStars() {

    let bg = document.getElementById("bg");
 
    /* Creamos estrellas random cada 700ms */
    setInterval(() => {
        /* Posición y tamaño random */
        let x = Math.round(Math.random() * (90 - 10) + 10);
        let y = Math.round(Math.random() * (90 - 10) + 10);
        let size = Math.round(Math.random() * (3 - 1) + 1);

        /* Agregamos las estrellas con los estilos random */
        bg.insertAdjacentHTML('beforeend',
            `<span id="star" class="star" style="
                top: ` + y + `%; 
                left: ` + x + `%; 
                width: ` + size + `px; 
                height: ` + size + `px;">
            </span>`);
        
        /* Eliminamos las estrellas después de 50s */
        setTimeout(() => bg.removeChild(bg.firstChild), 50000);
    }, 700);
}