import {  Flex, Icon, IconButton, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft, FaAward, FaCamera } from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Link, useNavigate } from "react-router-dom";

const Sports = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:760px)");
    const navigate = useNavigate(); 

  return (
    <Stack alignItems='center' mb='8'>
            <Link to="/">
              <IconButton ml={2} icon={<FaArrowLeft />} isRound='true'/>  
            </Link>
         <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
          
            
            <div onClick={() => navigate("/achievements")}>  
                
            <Flex rounded="xl" direction="column" mt={4} 
                          bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "green.400", }}
                          
                        >
                        
                        <Icon color="black" p="4" as={FaAward} w="20" h="20" />
                        <Text color="black" p="4" fontSize='lg' fontWeight="semibold">
                            Achievements
                        </Text>
                    </Flex>
            </div>
            <Spacer/>
            <div onClick={() => navigate("/snaps")}>  
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                          bg="gray.100" h="30vh" w="30vh" justify="flex-end"  _hover={{ bg: "blue.400", }}>
                        
                        <Icon color="black" p="4" as={FaCamera} w="20" h="20" />
                        <Text color="black" p="4" fontSize='lg' fontWeight="semibold">
                            Photos
                        </Text>
                    </Flex>
            </div><br/>
            </Flex>
            
     </Stack>
    
  )
}

export default Sports
