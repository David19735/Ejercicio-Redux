import React from 'react';

const estadoInicial={
    productos:[
    {id:1, nombre:'Producto 1'},
    {id:2, nombre:'Producto 2'},
    {id:3, nombre:'Producto 3'},
    {id:4, nombre:'Producto 4'}
      ],
      carrito:[]
}


const reducer=(estado=estadoInicial,accion)=>{
    switch(accion.type){
        case'AGREGAR_PRODUCTO_AL_CARRITO':
            
        const {nombre,idProdAgregar}=accion;

        if(estado.carrito.length===0){
            return{
                ...estado,
                carrito:[{id:idProdAgregar,nombre:nombre,cantidad:1}]
            }
        }
        else{
            const nuevoCarrito=[...estado.carrito];
      
            const yaEstaEnCarrito= nuevoCarrito.filter((productoDeCarrito)=>{
              return productoDeCarrito.id===idProdAgregar;
            }).length>0;

              
      if(yaEstaEnCarrito){
        nuevoCarrito.forEach((productoDeCarrito,index)=>{
          if(productoDeCarrito.id===idProdAgregar){
            const cantidad=nuevoCarrito[index].cantidad;
            nuevoCarrito[index]={id:idProdAgregar,nombre:nombre,cantidad:cantidad+1}
          }
        })
      }
      else{
        nuevoCarrito.push(
          {id:idProdAgregar,nombre:nombre,cantidad:1}
        )
      }

     return{
        ...estado,
        carrito:nuevoCarrito
     } 
        }



            return estado;

            default:
                return estado;
    }
}


export default reducer;