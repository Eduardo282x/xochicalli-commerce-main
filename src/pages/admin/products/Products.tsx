import { FC, lazy } from "react";

import {
  Center,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { ProductCardSkeleton } from "@/components/skeleton";
import { Product } from "@/interfaces";
import { useProducts } from "@/hooks";

const ProductCard = lazy(() => import("@/components/admin/ProductCard"));

const Products: FC = (): JSX.Element => {
  const { handleNextProd, handlePrevProd, loading, more, products } = useProducts();
  console.log('products:::>', products)
  return (
    <VStack  bgColor='gray.200' gap={4} mb={4}>
      <Helmet>
        <title>Productos</title>
      </Helmet>
      <Heading my={8}>Productos</Heading>
      <Center>
        {loading ? (
          <ProductCardSkeleton />
        ) : products.length !== 0 ? (
          <VStack gap={6}>
            <HStack className="flex items-center justify-center gap-8 flex-wrap w-[98%] h-full py-5">
              {products
                .slice(more - 3, more)
                .map(
                  ({
                    category,
                    description,
                    id,
                    image,
                    price,
                    title,
                    subcategory,
                    tags,
                  }: Product) => {
                    return (
                      <GridItem key={id}>
                        <ProductCard
                          id={id}
                          subcategory={subcategory}
                          tags={tags}
                          category={category}
                          description={description}
                          image={image}
                          price={price}
                          title={title}
                          subCategory={""}
                        />
                      </GridItem>
                    );
                  }
                )}
            </HStack>
            {products.length >= 4 && (
              <ButtonGroup mt={8} mb={8} pb={4}>
                <Button
                  onClick={handlePrevProd}
                  colorScheme='blue'
                  leftIcon={<FiArrowLeft size='0.75em' />}
                >
                  Anterior
                </Button>
                <Button
                  onClick={handleNextProd}
                  colorScheme='green'
                  rightIcon={<FiArrowRight size='0.75em' />}
                >
                  Siguiente
                </Button>
              </ButtonGroup>
            )}
          </VStack>
        ) : (
          <Text fontWeight='medium'>No hay productos 😓</Text>
        )}
      </Center>
    </VStack>
  );
};

export default Products;
