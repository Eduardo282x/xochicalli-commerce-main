import { useEffect, useState } from "react";
import {
    Accordion, AccordionButton, AccordionIcon,
    AccordionItem, AccordionPanel, List, ListItem,
    Box,
    Text,
    VStack,
    Center,
    Stack,
    Progress
} from '@chakra-ui/react';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import {questionMappings} from './encuestas.data';

const Encuestas = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            const questionDocs : any = [];
            const querySnapshot = await getDocs(collection(db, 'questions'));
            querySnapshot.forEach((doc) => {
                questionDocs.push(doc.data());
            });
            setQuestions(questionDocs);
            console.log(questionDocs)
            setLoading(false);
        };

        fetchQuestions();
    }, []);

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

    const groupedAnswers: any = {};

    questions.forEach((question, index) => {
        Object.entries(question).forEach(([key, value]) => {
            const mappedQuestion = questionMappings.find(item => item.key === key);
            if (mappedQuestion) {
                if (!groupedAnswers[mappedQuestion.key]) {
                    groupedAnswers[mappedQuestion.key] = [];
                }
                groupedAnswers[mappedQuestion.key].push({ pregunta: index + 1, respuesta: value });
            }
        });
    });

    const countResponses = (question : any, response: any) => {
        return questions.filter(answer => answer[question.key] === response).length;
    };

    return (
        <VStack minH='calc(100vh - 64px)' bgColor='gray.100' p={4}>
            <Text fontSize='xl' as='b'>RESPUESTAS A ENCUESTAS</Text>
            <Center bg='white' p={[6, 8]} borderRadius='lg' w={['sm', 'md', 'xl', '3xl']}>
                <Accordion allowToggle>
                    {questionMappings.map((question) => (
                        <AccordionItem key={question.key}>
                            <Text>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        {question.question}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Text>
                            <AccordionPanel>
                                <List style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                                    {question.key === 'additionalComments' ? (
                                        questions.map((response : any, index) => (
                                            <ListItem key={index} className="flex items-center justify-between">
                                                {index + 1} - {response.additionalComments}
                                            </ListItem>
                                        ))
                                    ) : (
                                        question.responses.map((response, index) => (
                                            <ListItem key={index} className="flex items-center justify-between">
                                                <strong className="w-[20%] h-8">{response}</strong>
                                                <Progress value={(countResponses(question, response) / questions.length) * 100} size="sm" w="60%" colorScheme="green" />
                                                <strong>{countResponses(question, response)}</strong>
                                            </ListItem>
                                        ))
                                    )}
                                </List>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Center>
        </VStack>
    )
}

export default Encuestas