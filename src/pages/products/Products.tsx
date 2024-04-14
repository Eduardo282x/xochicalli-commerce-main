import { FC, lazy, Suspense, useState } from "react";

import {
  Center,
  Spinner,
  Heading,
  Text,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  GridItem,
  Grid,
  CheckboxGroup,
  Select,
  Flex,
  Checkbox,
  Button,
  useStatStyles,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { useFilter, useProducts } from "@/hooks";
import { Spinner as LazySpinner } from "@/components/loading";
import { buttonsSelects, Btns } from "./btn.data";

const ProductCard = lazy(() => import("@/components/products/ProductCard"));

const Products: FC = (): JSX.Element => {
  const { loading, products } = useProducts();
  const [btnFilter, setBtnFilter] = useState<Btns[]>(buttonsSelects);

  
  const selectBtn = (btn: any) => {
    const copyBtn: Btns[] = btnFilter.map((btns: Btns) => { 
      btns.active = false;
      return btns
    });
    const findBtn: Btns | any = copyBtn.find(opt => opt.value === btn.value);
    
    if(findBtn){
      findBtn.active = true
    }
    setBtnFilter(copyBtn);
  }

  console.log('%cloading::>', 'color:red', loading)
  const {
    searchInput,
    sortedProducts,
    handleCategoryChange,
    onClearInput,
    onSearchInputChange,
    handleSortChange,
  } = useFilter();

  console.log('pRODUCTOS',sortedProducts);

  console.log('index-products', products)
  return (
    <VStack minH='calc(100vh - 64px)' bgColor='gray.100' p={4}>
      <Helmet>
        <title>Productos</title>
      </Helmet>
      <Heading mt={4}>Productos</Heading>
      <Breadcrumb py={2}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to='/'>
            Inicio
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to='/products' isCurrentPage>
            Productos
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center pt={4} pb={8}>
        {(loading && products.length === 0) ? (
          <Spinner size='xl' mt={4} />
        ) : products.length !== 0 ? (
          <VStack gap={6}>
            <VStack width={["xs", "md"]} gap={2}>
              <InputGroup width={["xs", "sm"]}>
                <InputLeftAddon bgColor='gray.200' children={<FiSearch />} />
                <Input
                  ref={searchInput}
                  type='text'
                  onChange={onSearchInputChange}
                  bgColor='white'
                  placeholder='Planta...'
                />
                <InputRightAddon
                  cursor='pointer'
                  bgColor='gray.200'
                  onClick={onClearInput}
                  children={<FiX />}
                />
              </InputGroup>

              {/* <Flex
                  pl={[8, 8, 0]}
                  direction={["column", "column", "row"]}
                  gap={8}
                  justifyContent={["flex-start", "flex-start", "center"]}
                >
                  {btnFilter.map((btn) => (
                    <Button colorScheme={btn.active ? 'green' : 'gray'} onClick={() => {selectBtn(btn); handleCategoryChange(btn.value)}}>{btn.label}</Button>
                  ))}
              </Flex> */}

              <Select
                bgColor='gray.200'
                placeholder='Ordenar por'
                w='100%'
                onChange={handleSortChange}
              >
                <option value='desc'>Precio (Mayor a menor)</option>
                <option value='asc'>Precio (Menor a mayor)</option>
                <option value='title'>Nombre</option>
                <option value='category'>Categoría</option>
              </Select>
            </VStack>
            <Grid
              height='100%'
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              templateRows='repeat(4, 1fr)'
              gap={6}
            >
              {sortedProducts &&
                sortedProducts.map(
                  ({
                    category,
                    description,
                    id,
                    image,
                    price,
                    title,
                    stock,
                    subcategory,
                    tags,
                  }) => {
                    return (
                      <Suspense key={id} fallback={<LazySpinner />}>
                        <GridItem>
                          <ProductCard
                            id={id}
                            tags={tags}
                            subcategory={subcategory}
                            category={category}
                            description={description}
                            image={image}
                            price={price}
                            title={title}
                            stock={stock}
                            subCategory={""}
                          />
                        </GridItem>
                      </Suspense>
                    );
                  }
                )}
            </Grid>
          </VStack>
        ) : (
          <Text fontWeight='medium'>No hay productos 😓</Text>
        )}
      </Center>
    </VStack>
  );
};

export default Products;
