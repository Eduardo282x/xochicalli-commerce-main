import { useEffect, useState } from 'react';
import {
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Center,
  VStack,
  SimpleGrid,
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import './newblog/descriptionblog.css'
const ShowSectionUser = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');

  const fetchQuestions = async () => {
    const questionDocs: any = [];
    const querySnapshot = await getDocs(collection(db, 'blogPost'));

    querySnapshot.docs.forEach((doc) => {
      const postData = {
        id: doc.id,
        ...doc.data(),
      };
      questionDocs.push(postData);
    });

    questionDocs[0].nameBlog = 'blogWater';
    questionDocs[1].nameBlog = 'blogCareful';
    questionDocs[2].nameBlog = 'blogImprove';
    questionDocs[3].nameBlog = 'blogMedicine';

    setBlogPosts(questionDocs);
    console.log(questionDocs);
    setLoading(false);
  };
  useEffect(() => {   
    fetchQuestions();
  }, []);

  function truncateText(text: any, maxLength: any) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }

  const filteredBlogPosts = filter
    ? blogPosts.filter((post: any) => post.category === filter)
    : blogPosts;

  if (loading) {
    return <Stack p={16}>
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
      <Skeleton startColor='green.500' endColor='green.100' height='20px' />
    </Stack>
  }

  return (
    <VStack spacing={4} p={4}>
      <Box sx={{ display:  {sm: 'none', md: 'flex'}, width: '100%', justifyContent: 'space-evenly' }}>
        <Button bg="green" textColor={'white'}  onClick={() => setFilter("")}>
          Todas
        </Button>
        <Button bg="white" className='hover:text-black hover:bg-green-400' onClick={() => setFilter("Guía de plantas")}>
          Guía de plantas
        </Button>
        <Button bg="white" className='hover:text-black hover:bg-green-400' onClick={() => setFilter("Cuidado de plantas")}>
          Cuidado de plantas
        </Button>
        <Button bg="white" className='hover:text-black hover:bg-green-400' onClick={() => setFilter("Consejos y trucos")}>
          Consejos y trucos
        </Button>
        <Button bg="white" className='hover:text-black hover:bg-green-400' onClick={() => setFilter("Conocimientos sobre plantas")}>
          Conocimientos sobre plantas
        </Button>
      </Box>
      <Center>       
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
          {filteredBlogPosts.map((post: any) => (
            <Box key={post.id} className=' cursor-pointer h-[400px] w-[256px] bg-gray-100 rounded-lg showMore showText' onClick={() => navigate(`/blog-description-new`, { state:  post.nameBlog })}>
              <Box>
                <Image
                  src={post.imageURL ? post.imageURL : post.imageUrlMiniatura}
                  alt={post.title}
                  borderRadius='lg'
                  sx={{ width: '100%', height:'200px'}} />
              </Box>
              <Box px={2}>
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{truncateText(post.title, 40)}</Heading>
                  <Text>{truncateText(post.description, 100)}</Text>
                </Stack>
              </Box>
          </Box>
          ))}
        </SimpleGrid>
      </Center>
    </VStack>
  );
};

export default ShowSectionUser