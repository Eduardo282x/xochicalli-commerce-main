import React, { FC, useEffect } from 'react'
import { ProductsViewDetails } from './producDetails.interface';
import './producs-details.css';
export const ProductDetails: FC<ProductsViewDetails> = ({products}) => {

    useEffect(() => {
        console.log(products);
    }, [products])

    return (
        <div>
            <div className="main-section">
                <div className="details">
                    {products.Especie && 
                        <p><span className='imgPlant'></span>Especie: {products.Especie}</p>
                    }
                    {products.Variedad && 
                        <p><span className='imgLeaves'></span> Variedad: {products.Variedad}</p>
                    }
                    <p><span className='imgNose'></span> Aroma: No tiene</p>
                    <p><span className='imgDone'></span>Disponibilidad: No tiene</p>
                    {products.Floración && 
                        <p><span className='imgFlower'></span>Floración: {products.Floración}</p>
                    }
                </div>
                <div className="details">
                    {products.Edad && 
                        <p><span className='imgHeart'></span> Tiempo de vida: {products.Edad}</p>
                    }
                    {products.Estado && 
                        <p><span className='imgHealt'></span> Estado: {products.Estado}</p>
                    }
                    {products.Altura && 
                        <p><span className='imgHeight'></span> Altura: {products.Altura} {products['unidad-Altura']}</p>
                    }
                    {products.Presentación && 
                        <p><span className='imgGift'></span> Presentación: {products.Presentación}</p>
                    }
                </div>
            </div>
            <div className="main-section">
                <div className="title">
                    <p>Instrucciones</p>
                </div>
                <div className="title">
                    <p>Recomendacions</p>
                </div>
            </div>
            <div className="main-section">
                <div className="chips-content">
                    {products.instrucciones.map((re: string, index: number)=> (
                        <p className={index !== 2 ? 'chips' : 'chips-center'} key={index}>{re}</p>
                    ))}
                </div>
                <div className="chips-content">
                    {products.Recomendaciones.map((re: string, index: number)=> (
                        <p className={index !== 2 ? 'chips' : 'chips-center'} key={index}>{re}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
