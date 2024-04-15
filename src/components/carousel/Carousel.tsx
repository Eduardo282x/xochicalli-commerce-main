import React, { useEffect, useRef, FC } from 'react';
import './Carousel.css';
import ProductsHome from '../products/ProductsHome';
import ProductsCardCategory from '../products/ProductsCardCategory';

interface CarouselProps {
    items: any[];
    typeCarousel: string;
}

export const Carousel: FC<CarouselProps> = ({ items, typeCarousel }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 2; // Ajusta este valor para controlar la velocidad
            }
        }, 30); // Actualiza cada 20ms para una animación suave

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={scrollRef} className="carousel-container h-auto">
            <div className="carousel-inner gap-5 h-full p-4">
                {typeCarousel === 'ProductsHome' && items.map((produc, index) => (
                    <ProductsHome
                        key={index}
                        id={produc.id}
                        tags={produc.tags}
                        subcategory={produc.subcategory}
                        category={produc.category}
                        description={produc.description}
                        image={produc.image}
                        price={produc.price}
                        title={produc.title}
                        stock={produc.stock}
                        subCategory={""}
                    />
                ))}
                {typeCarousel === 'ProductsHome' && items.map((produc, index) => (
                    <ProductsHome
                        key={index}
                        id={produc.id}
                        tags={produc.tags}
                        subcategory={produc.subcategory}
                        category={produc.category}
                        description={produc.description}
                        image={produc.image}
                        price={produc.price}
                        title={produc.title}
                        stock={produc.stock}
                        subCategory={""}
                    />
                ))}

                {typeCarousel === 'ProductsCardCategory' && items.map((produc, index) => (
                    <ProductsCardCategory
                        id={produc.id}
                        tags={produc.tags}
                        subcategory={produc.subcategory}
                        category={produc.category}
                        description={produc.description}
                        image={produc.image}
                        price={produc.price}
                        title={produc.title}
                        stock={produc.stock}
                        subCategory={""}
                    />
                ))}
                {typeCarousel === 'ProductsCardCategory' && items.map((produc, index) => (
                    <ProductsCardCategory
                        id={produc.id}
                        tags={produc.tags}
                        subcategory={produc.subcategory}
                        category={produc.category}
                        description={produc.description}
                        image={produc.image}
                        price={produc.price}
                        title={produc.title}
                        stock={produc.stock}
                        subCategory={""}
                    />
                ))}


                {/* {images.map((image, index) => (
                    <img key={index} src={image} alt={`Imagen ${index}`} className="carousel-image" />
                ))} */}
                {/* Clonamos las imágenes para el efecto de scroll infinito */}
                {/* {images.map((image, index) => (
                    <img key={`clone-${index}`} src={image} alt={`Imagen clonada ${index}`} className="carousel-image" />
                ))} */}
            </div>
        </div>
    );
};
