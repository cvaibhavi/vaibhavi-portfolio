import {  Button, CloseButton, Divider, Flex, Heading, IconButton, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Link, useNavigate } from "react-router-dom";

const UiUx = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:760px)");
    const navigate = useNavigate(); 

  return (
    <Stack alignItems='center' mb='8'>
        <Flex direction={'row'}>

            <Link to="/" alignItems='flex-end'>
              <IconButton px={5} ml={2} icon={<CloseButton />} isRound='true'/>  
            </Link>

        </Flex>
            
         <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
          
            
            <div onClick={() => navigate("/uiathletez")}>  
                
            <Flex rounded="xl" direction="column" mt={4} 
                          bg="gray.100" h="400px" w="400px" justify="flex-end" _hover={{ bg: "green.400", }}
            >
                <Image alignSelf='center' 
                   pt={0} px={0} py={0}
                   backgroundColor="transparent" 
                   boxShadow="lg"
                   w='400px' h='300px' 
                   src={window.location.origin + '/UiUx/ui cover pic.png'}/>
                       
                        <Text color="black" p="4" fontSize='lg' fontWeight="bold">
                            AthleteZ - sports product app
                        </Text>
                        <Text color="black" pt={0} pl="4" pb={4}  fontSize='lg' fontWeight="semibold">
                            UI case study
                        </Text>

                    </Flex>
            </div>
            <Spacer/>
            <div onClick={() => navigate("/uxathletez")}>  
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                          bg="gray.100" h="400px" w="400px" justify="flex-end"  _hover={{ bg: "blue.400", }}>
                        
                        <Image alignSelf='center' 
                   pt={0} px={0} py={0}
                   backgroundColor="transparent" 
                   boxShadow="lg"
                   w='400px' h='300px' 
                   src={window.location.origin + '/UiUx/ux cover-1.png'}/>
                       
                        <Text color="black" p="4" fontSize='lg' fontWeight="bold">
                            AthleteZ - sports product app
                        </Text>
                        <Text color="black" pt={0} pl="4" pb={4}  fontSize='lg' fontWeight="semibold">
                            UX case study
                        </Text>
                    </Flex>
            </div><br/>
            <Spacer/>
            <div onClick={() => navigate("/redesign")}>  
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                          bg="gray.100" h="400px" w="400px" justify="flex-end"  _hover={{ bg: "orange.400", }}>
                        
                        <Image alignSelf='center' 
                   pt={0} px={0} py={0}
                   backgroundColor="transparent" 
                   boxShadow="lg"
                   w='400px' h='300px' 
                   src={window.location.origin + '/UiUx/Redesign-Cover photo.png'}/>
                       
                        <Text color="black" p="4" fontSize='lg' fontWeight="bold">
                            Quebec - event management
                        </Text>
                        <Text color="black" pt={0} pl="4" pb={4}  fontSize='lg' fontWeight="semibold">
                            Responsive Rdesign Website case study
                        </Text>
                    </Flex>
            </div><br/>
            </Flex>


         <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
          

            <div onClick={() => navigate("/atheletezdashboard")}>  
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                          bg="gray.100" h="400px" w="400px" justify="flex-end"  _hover={{ bg: "blue.500", }}>
                        
                        <Image alignSelf='center' 
                   pt={0} px={0} py={0}
                   backgroundColor="transparent" 
                   boxShadow="lg"
                   w='400px' h='300px' 
                   src={window.location.origin + '/UiUx/Cover-Dashboard.png'}/>
                       
                        <Text color="black" p="4" fontSize='lg' fontWeight="bold">
                            Dashboard Design
                        </Text>
                        <Text color="black" pt={0} pl="4" pb={4}  fontSize='lg' fontWeight="semibold">
                            AthleteZ app
                        </Text>
                    </Flex>
            </div><br/>
            <Spacer/>
            <div onClick={() => navigate("/quebecdashboard")}>  
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                          bg="gray.100" h="400px" w="400px" justify="flex-end"  _hover={{ bg: "orange.500", }}>
                        
                        <Image alignSelf='center' 
                   pt={0} px={0} py={0}
                   backgroundColor="transparent" 
                   boxShadow="lg"
                   w='400px' h='300px' 
                   src={window.location.origin + '/UiUx/Cover pic.png'}/>
                       
                        <Text color="black" p="4" fontSize='lg' fontWeight="bold">
                            Dashboard Design
                        </Text>
                        <Text color="black" pt={0} pl="4" pb={4}  fontSize='lg' fontWeight="semibold">
                        Quebec - event management website
                        </Text>
                    </Flex>
            </div><br/>
            </Flex>
            
     </Stack>
   
  )
}

export default UiUx
