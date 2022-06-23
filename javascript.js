//Pedidos de tortas
while (true) {
    var combo = parseFloat(prompt("Realiza tu pedido! \n1 - Torta de chocolate $500 \n2 - Torta de vainilla $350"));

    if ((combo=="1") || (combo=="2")) {
        break;
    } else {
        alert ('Debe de ingresar un dato valido');
        continue;
    }
}

let cantidad = parseFloat(prompt("Ingrese cantidad de tortas a llevar"));
let nombre = prompt("Ingrese su nombre");
let torta = "Torta de ";
let precio = 0;
let valor = 0;

function calcularPrecio(valor , cantidad) {
    return (valor*cantidad);
}

if (combo=="1") {
    torta = torta + "chocolate";
    valor= 500;
    precio = calcularPrecio(valor, cantidad);
} else {
    torta = torta + "chocolate";
    valor = 350;
    precio = calcularPrecio(valor, cantidad);
}

alert("Resumen de compra \nCliente: " + nombre + "\nProducto: " + torta + "\nCantiad: " + cantidad + "\nPrecio Final: " + precio );
