//Pedidos de tortas y guardar todos los pedidos en un array

//Crear arrays con los pedidos de tortas
const pedidos = []

while (true) {
    var combo = parseFloat(prompt("Realiza tu pedido! \n1 - Torta de chocolate $500 \n2 - Torta de vainilla $350"));

    if ((combo=="1") || (combo=="2")) {
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
            torta = torta + "vainilla";
            valor = 350;
            precio = calcularPrecio(valor, cantidad);
        }
        
        //Resumen de compra
        alert("Resumen de compra \nCliente: " + nombre + "\nProducto: " + torta + "\nCantiad: " + cantidad + "\nPrecio Final: " + precio);

        //Declarar objeto de pedidos
        class Pedidos {
            constructor(nombre, torta, cantidad, precio) {
                this.nombre = nombre
                this.torta = torta
                this.cantidad = cantidad
                this.precio = precio
            }
        }

        //Agregar pedido a la lista de pedidos
        const agregarPedidos = new Pedidos (nombre, torta, cantidad, precio)
        pedidos.push(agregarPedidos)

        //Realizar otro pedido
        var repuesta = confirm("Desea realizar otro pedido?");

        if (!repuesta) {
            break;
        } 

    } else {
        alert ('Debe de ingresar un dato valido');
        continue;
    }
}

//Ver pedidos en la consola
console.log(pedidos);


