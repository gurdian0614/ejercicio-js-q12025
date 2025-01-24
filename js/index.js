function calcular() {
    let strA = document.getElementById("valorA").value
    let strB = document.getElementById("valorB").value
    let strC = document.getElementById("valorC").value
    
    if (strA === "") {
        alert("Valor a en blanco")
    } else if(strB === "") {
        alert("Valor b en blanco")
    } else if(strC === "") {
        alert("Valor c en blanco")
    } else {
        alert("Todo bien")
    }
}

function limpiar() {
    document.getElementById("valorA").value = ""
    document.getElementById("valorB").value = ""
    document.getElementById("valorC").value = "" 
}