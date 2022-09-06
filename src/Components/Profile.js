import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiWebplatform } from 'react-icons/di'
import {  FaPaintBrush, FaProjectDiagram, FaRProject, FaRunning, FaSketch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";



function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:1159px)");
    const navigate = useNavigate(); 

    return (

        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" 
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
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

            </Box>
            
        </Flex>

    )
}

export default Profile