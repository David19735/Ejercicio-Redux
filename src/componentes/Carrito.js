import React,{useState} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Carrito = ({carrito}) => {

    


    return (
        <div>
            <h2>Carrito de compras</h2>

            {
                carrito.length>0 ?
                carrito.map((producto,index)=>{
                    return(
                        <Producto key={index}>
                            <NombreProducto>
                                {producto.nombre}
                            </NombreProducto>
                          Cantidad: {producto.cantidad}
                        </Producto>
                    )
                })
                :
                <p>Aún no has agregado productos al carrito</p>
            }
        </div>
      );
}
 


const Producto= styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size:14px;
`;

const NombreProducto= styled.p`
    font-weight:bold;
    font-size:16px;
    color:#000;
`;

const mapStateToProps=(estado)=>{
    return{
        carrito:estado.carrito
    }
}

export default connect(mapStateToProps)(Carrito);