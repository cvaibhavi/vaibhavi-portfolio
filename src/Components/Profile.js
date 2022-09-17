import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Text,Stack } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import {  FaPaintBrush, FaProjectDiagram, FaRunning, FaSketch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";



function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:760px)");
    const navigate = useNavigate(); 

    return (
        <Stack alignItems='center' mb='8'>

            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
            
            <div onClick={() => navigate("/painting")}>  
                
                    <Flex rounded="xl" direction="column" mt={4} 
                          bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "blue.400", }}
                          
                        >
                        
                        <Icon color="black" p="4" as={FaPaintBrush} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Paintings
                        </Text>
                    
                    </Flex>
               
            </div> 
            <div onClick={() => navigate("/art")}>
      
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                          bg="gray.100" h="30vh" w="30vh" justify="flex-end"  _hover={{ bg: "orange.400", }}>
                        <Icon color="black" p="4" as={FaSketch} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Art
                        </Text>
                    </Flex>
            </div>
            <div onClick={() => navigate("/sports")}>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={FaRunning} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Sports
                        </Text>
                    </Flex>
            </div>    
            <div onClick={() => navigate("/projects")}>    
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        <Icon as={FaProjectDiagram} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Projects
                        </Text>
                    </Flex>
            </div>
        </Flex>
    </Stack>
    
    )
}

export default Profile