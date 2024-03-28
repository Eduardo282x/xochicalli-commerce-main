import React, { FC, useEffect } from 'react'
import { ProductsViewDetails } from './producDetails.interface';
import { DoneIcon, FlowerIcon, GiftIcon, HealthIcon, HeartIcon, HeightIcon, LeavesIcon, NoseIcon, PlantIcon } from './IconsCustom';
import './producs-details.css';
export const ProductDetails: FC<ProductsViewDetails> = ({products}) => {

    useEffect(() => {
        console.log(products);
    }, [products])

    return (
        <div>
            <div className="main-section">
                <div className="details">
                    {/* <p><PlantIcon color={'#40a46b'} fontSize={'24px'}></PlantIcon>Especie: {products.Especie}</p> */}
                    <p><span className='imgPlant'></span>Especie: {products.Especie}</p>
                    {/* <p><LeavesIcon color={'#40a46b'} fontSize={'24px'}></LeavesIcon> Variedad: {products.Variedad}</p> */}
                    <p><span className='imgLeaves'></span> Variedad: {products.Variedad}</p>
                    {/* <p><NoseIcon color={'#40a46b'} fontSize={'24px'}></NoseIcon> Aroma: No tiene</p> */}
                    <p><span className='imgNose'></span> Aroma: No tiene</p>
                    {/* <p><DoneIcon color={'#40a46b'} fontSize={'24px'}></DoneIcon>Disponibilidad: No tiene</p> */}
                    <p><span className='imgDone'></span>Disponibilidad: No tiene</p>
                    {/* <p><FlowerIcon color={'#40a46b'} fontSize={'24px'}></FlowerIcon>Floración: {products.Floración}</p> */}
                    <p><span className='imgFlower'></span>Floración: {products.Floración}</p>
                </div>
                <div className="details">
                    {/* <p><HeartIcon color={'#40a46b'} fontSize={'24px'}></HeartIcon> Tiempo de vida: {products.Edad}</p> */}
                    <p><span className='imgHeart'></span> Tiempo de vida: {products.Edad}</p>
                    {/* <p><HealthIcon color={'#40a46b'} fontSize={'2rem'}/>Estado: No tiene</p> */}
                    <p><span className='imgHealt'></span> Estado: {products.Estado}</p>
                    {/* <p><HeightIcon color={'#40a46b'} fontSize={'2rem'}></HeightIcon> Altura: {products.Altura}</p> */}
                    <p><span className='imgHeight'></span> Altura: {products.Altura} {products['unidad-Altura']}</p>
                    {/* <p><GiftIcon color={'#40a46b'} fontSize={'2rem'}></GiftIcon>Presentación: {products.Presentación}</p> */}
                    <p><span className='imgGift'></span> Presentación: {products.Presentación}</p>
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
                        <p className={index != 2 ? 'chips' : 'chips-center'} key={index}>{re}</p>
                    ))}
                </div>
                <div className="chips-content">
                    {products.Recomendaciones.map((re: string, index: number)=> (
                        <p className={index != 2 ? 'chips' : 'chips-center'} key={index}>{re}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
