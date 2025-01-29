function calcular() {
    let strA = document.getElementById("valorA").value
    let strB = document.getElementById("valorB").value
    let strC = document.getElementById("valorC").value
    
    if (strA === "") {
        alerta("Valor a en blanco")
    } else if(strB === "") {
        alerta("Valor b en blanco")
    } else if(strC === "") {
        alerta("Valor c en blanco")
    } else {
        let a = parseInt(strA)
        let b = parseInt(strB)
        let c = parseInt(strC)

        if (a !== 0) {
            let discriminante = (b * b) - (4 * a * c)

            if (discriminante >= 0) {
                let x1 = (-b + Math.sqrt(discriminante)) / (2 * a)
                let x2 = (-b - Math.sqrt(discriminante)) / (2 * a)

                document.getElementById("valorX1").value = x1
                document.getElementById("valorX2").value = x2
            } else {
                alerta("La raíz cuadrada no puede ser negativa")
            }
        } else {
            alerta("Valor de a no puede ser igual a cero")
        }
    }
}

function limpiar() {
    document.getElementById("valorA").value = ""
    document.getElementById("valorB").value = ""
    document.getElementById("valorC").value = "" 
    document.getElementById("valorX1").value = ""
    document.getElementById("valorX2").value = ""
}

function alerta(mensaje) {
    Swal.fire({
      icon: "warning",
      title: mensaje,
    });
}