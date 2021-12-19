//  BIENVENIDA

let nombreDeUsuario = document.getElementById("nombre-de-usuario");

let datosDelUsuario = document.getElementById("datos-del-usuario");

const abrirRegistro = ()=>{
     $('#datos-del-usuario').slideDown().css({
          "display" : "flex",
          "z-index" : "1"
     });
}

$('#registro').click(abrirRegistro);

const cerrarRegistro = ()=>{
     $('#datos-del-usuario').slideDown(400, function(){
          let nombre = document.getElementById("nombre").value;
          localStorage.setItem("usuarioActual", JSON.stringify(nombre));
          location.reload();
     }).css("display", "none");
}

$('#cerrar').click(cerrarRegistro);

const nombreRGB = ()=>{
     $('#nombre-de-usuario').css('color', 'blue');
     
     $('#nombre-de-usuario')
     .fadeOut(2000, ()=>{
          $('#nombre-de-usuario').css('color', '#a00')
     }).fadeIn(2000)
}

// VALOR DEL DOLAR HOY

const API_DOLAR = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
const apiDolar = 

          $.get(API_DOLAR, function (respuesta,estado) {
               if(estado === 'success'){
                    $('.dolarHoy').append(respuesta[1].casa.compra)
               }
          })

console.log(apiDolar);

// CREACION DE PRODUCTOS

class ProductoGeneral {
     constructor(id, nombre, tipoDePanel, pulgadas, precio, imagen) {
          this.id = id;
          this.nombre = nombre;
          this.tipoDePanel = tipoDePanel;
          this.pulgadas = pulgadas;
          this.precio = precio;
          this.imagen = imagen;
     }
}

let productos = [{
     id: 1,
     nombre: "SMARTPHONE",
     tipoDePanel: "IPS",
     pulgadas: 6.5,
     precio: 20000,
     imagen: "./images/smartPhone.jpg",
},

{    
     id: 2,
     nombre: "SMARTWATCH",
     tipoDePanel: "LCD",
     pulgadas: 3,
     precio: 3000,
     imagen: "./images/smartwatch.jpg",
},

{    
     id: 3,
     nombre: "PC",
     tipoDePanel: "OLED",
     pulgadas: 25,
     precio: 65000,
     imagen: "./images/PC.jpg",
},

{    
     id: 4,
     nombre: "SMART TV",
     tipoDePanel: "SUPER AMOLED",
     pulgadas: 40,
     precio: 50000,
     imagen: "./images/smartTV.jpg",
},

{    
     id: 5,
     nombre: "TABLET",
     tipoDePanel: "IPS",
     pulgadas: 10,
     precio: 35000,
     imagen: "./images/tablet.jpg",
},

{    
     id: 6,
     nombre: "NINTENDO SWITCH",
     tipoDePanel: "OLED",
     pulgadas: 8.5,
     precio: 70000,
     imagen: "./images/nintendo-switch.jpg",
},

{    
     id: 7,
     nombre: "NOTEBOOK",
     tipoDePanel: "LCD",
     pulgadas: 17,
     precio: 80000,
     imagen: "./images/notebook.jpg",
},

{    
     id: 8,
     nombre: "IPAD MINI",
     tipoDePanel: "SUPER AMOLED",
     pulgadas: 6.5,
     precio: 25000,
     imagen: "./images/ipad-mini.jpg",
},

{    
     id: 9,
     nombre: "EBOOK",
     tipoDePanel: "IPS",
     pulgadas: 5.5,
     precio: 26000,
     imagen: "./images/ebook.jpg",
},

]

let contenedorDeProductos = document.getElementById("productos");
contenedorDeProductos.innerHTML = "";

productos.forEach( (producto, index) =>{
          let productoIndividual = document.createElement("div");
          productoIndividual.classList.add("producto");
          productoIndividual.innerHTML += `
          <div class="texto">
          <h3><b>${producto.nombre}</b></h3>
          <p>Tipo de Panel: <br> <b>${producto.tipoDePanel}</b></p>
          <p>Dimensiones: <b>${producto.pulgadas}"</b></p>
          <p>Valor: <b class= "precio">$${producto.precio}</b></p>
          </div>
          <div class= "contenedor-de-imagen-principal"> <img src= "${producto.imagen}" class="imagen-del-producto"></div>
               
          <div class= "agregar-al-carro">
          <button type="button" id= "agregar-al-carro" onClick="agregarAlCarro(${index})">Agregar al carrito</button>
          </div>
          <div class= "vacio"></div>`;
               
          contenedorDeProductos.appendChild(productoIndividual);
     })

// CARRITO DE COMPRAS

const carritoDeCompras = [];


const agregarAlCarro = (index)=> {
     const indiceExistenteEnElCarro = carritoDeCompras.findIndex((productoIndividual) =>{
          return productoIndividual.id === productos[index].id;
     });
     if(indiceExistenteEnElCarro === -1){
          const productoAgregado = productos[index];
          productoAgregado.cantidad = 1;
          carritoDeCompras.push(productoAgregado);
          productoMasUno();
          dibujarCarrito();
     } else {
          carritoDeCompras[indiceExistenteEnElCarro].cantidad += 1;
          productoMasUno();
          dibujarCarrito();
     }
}

let mostrarCarrito = document.getElementById("acceso-carrito");

const dibujarCarrito = ()=>{
     let totalProductosAgregados = 0;
     mostrarCarrito.innerHTML = "";
     if(carritoDeCompras.length > 0){      
          carritoDeCompras.forEach((productoEnCarro, index)=>{
               totalProductosAgregados = totalProductosAgregados + productoEnCarro.precio * productoEnCarro.cantidad;
               const nuevoProducto = document.createElement("div");
               nuevoProducto.innerHTML = 
               $('#acceso-carrito').prepend(`<br>
               <p>Producto <b>${productoEnCarro.nombre}</b></p>
               <p>Cantidad = ${productoEnCarro.cantidad}</p>
               <p>Precio <b>$${productoEnCarro.precio}</b></p>
               <p> Subtotal = <b>$${productoEnCarro.precio * productoEnCarro.cantidad}</b></p>
               <div class= "contenedor-de-imagen"> <img src= "${productoEnCarro.imagen}" class="imagen-del-carro"> </div>
               <button type="button" id="eliminar" onClick="borrarDelCarro(${index})">Eliminar</button>
               <hr>`);
               
          })
     }

     mostrarCarrito.innerHTML += `<div id= "contenedor-total-compra"><b>Total: $${totalProductosAgregados} </b>
      <button type= "button" id= "realizar-compra">Comprar</button> </div>`;

      const instanciaFinal = ()=>{
          $('#ultima-instancia').slideDown();
     } 
     
     $('#realizar-compra').click(instanciaFinal);

     $('#volver').click(400, function(){
          $('#ultima-instancia').slideUp();
     })
}


const borrarDelCarro = (index)=>{
     carritoDeCompras.splice(index, 1);
     dibujarCarrito();
}

const interactuarCarro = ()=>{
     $('#acceso-carrito').slideToggle(400, function () {
          $('#foto-carrito').toggleClass('foto-carrito-abierto');
     });
}

// CAMBIO DE MODO DE COLOR

const darkMode = ()=>{
     $('.switch').toggleClass('dark-mode');
     $('ul').toggleClass('dark-background');
     $('ul').toggleClass('light-text');
     $('body').toggleClass('mid-dark');
     $('#foto-carrito').toggleClass('light-cart');
     $('footer').toggleClass('dark-background');
     $('footer').toggleClass('light-text');
     $('.texto').toggleClass('dark-font');
     $('.producto div').toggleClass('mid-light');
     $('.producto div').toggleClass('mid-background');
     $('#productos').toggleClass('dark-border');
}

$('#switch').click(darkMode);

// FORMULARIO DE COMPRA

$('#carrito').click(interactuarCarro);

     $('#proceso-de-compra').append(`
     <form>
          <label for="nombre">Nombre</label>
                    <input type="text" placeholder="Nombre" id= "user-name" required>
          <label for="apellido">Apellido</label>
               <input type="text" placeholder="apellido" id= "last-name" required>
          <label for="email">email</label>
               <input type="email" placeholder="email" id= "email" required>
          <label for="email">Confirmar email</label>
               <input type="email" placeholder="email" required>
          <label for="telefono">Teléfono</label>
               <input type="number" placeholder="Ej: 11 2345 6789" id= "number-phone" required>
          <label for="n-de-identificacion" id= "DNI" required>Numero de identificación(DNI)</label>
               <input type="number">
          <button type="submit" id="finalizar-compra">Realizar pedido</button>
     </form>`);

let finalizarCompra = document.getElementById('finalizar-compra');
let procesoDeCompra = document.getElementById('proceso-de-compra');

finalizarCompra.addEventListener('click', ()=>{
     procesoDeCompra.innerHTML = '<div id= "mensaje-de-compra"><p>¡Su compra ha sido realizada con exito! <br> Revise su bandeja de correo para más información</p></div>';
})

// GENERAL

window.onload = function () {
     let llamada = JSON.parse(localStorage.getItem("usuarioActual"));
     nombreDeUsuario.innerText = `¡Binvenid@ ${llamada} a Electronic Home!`;

     nombreRGB();
}

const productoMasUno = ()=>{
     $('#masUno').fadeIn(2500).fadeOut();
}