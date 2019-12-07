//Instalar el service worker.
self.addEventListener("intall",evt => {console.log("El service worked se instalo.");});


//Activar el service worker.
self.addEventListener("activate",evt => {console.log("El service workerse activo.");});

//Eventos Fetch (fetch request o pedido de busqueda).
self.addEventListener("fetch", evt=> {console.log("Se atrapo ese evento: ",evt);});
