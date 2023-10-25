import { Box, Button, Divider, Flex,Image, Link, Spacer, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const UxAthletez = () => {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:760px)");
  const navigate = useNavigate(); 

  return (
    <Flex direction={'column'}> 
      <Flex direction={'row'}>
         <Box p='5'>
          <Button onClick={() => navigate("/uiux")}>Back</Button>
        </Box>
        <Divider/>
        
        <Box p='5'>
            <Link href='https://www.behance.net/gallery/179984789/Athletez-UX-case-Study'>
                <Button>Open in Behance</Button>
            </Link>
        </Box>
       </Flex>
        <Image src={window.location.origin + '/UiUx/ux case study.png'}  />

        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} alignSelf={'center'}>

    
<Flex direction={'row'} pb={'10'}>

  <Spacer/>

  <div onClick={() => navigate("/uiathletez")} p='5'>  
      <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                    bg="gray.100" h={isNotSmallerScreen ? 200 : 150} w={isNotSmallerScreen ? '200px' : '150px'} justify="flex-end"  _hover={{ bg: "green.500", }}>
                  
                  <Image alignSelf='center' 
             pt={0} px={0} py={0}
             backgroundColor="transparent" 
             boxShadow="lg"
             w={isNotSmallerScreen ? '200px' : '150px'} h={isNotSmallerScreen ? '200px' : '150px'}
             src={window.location.origin + '/UiUx/ui cover pic.png'}/>
                 
                  <Text color="black" p="4" fontSize='medium' fontWeight="bold">
                      UI Case Study
                  </Text>
              </Flex>
      </div><br/>
      <Spacer/>
      <div onClick={() => navigate("/atheletezdashboard")}>  
            <Flex rounded='lg' direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                          bg="gray.100" h={isNotSmallerScreen ? '200px' : '150px'}
                           w={isNotSmallerScreen ? '200px' : '150px'} justify="flex-end"  _hover={{ bg: "blue.600", }}>
                        
                        <Image alignSelf='center' 
                   pt={0} px={0} py={0}
                   backgroundColor="transparent" 
                   boxShadow="lg"
                   w={isNotSmallerScreen ? '200px' : '150px'} h={isNotSmallerScreen ? '200px' : '150px'} 
                   src={window.location.origin + '/UiUx/Cover-Dashboard.png'}>  
                   </Image>
                   
                    <Text color="black" p="4" fontSize='medium' fontWeight="bold">
                            Dashboard Design
                        </Text>
                        {/* <Text color="black" pt={0} pl="4" pb={4}  fontSize='lg' fontWeight="semibold">
                        Atheletez App
                        </Text> */}
                   
                       
                       
                    </Flex>
            </div><br/>
      <Spacer/>
      
  </Flex>
  <Flex direction={'row'} pb={'10'}>
  <div onClick={() => navigate("/redesign")}>  
      <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                    bg="gray.100" h={isNotSmallerScreen ? '200px' : '150px'} 
                    w={isNotSmallerScreen ? '200px' : '150px'} justify="flex-end"  _hover={{ bg: "orange.500", }}>
                  
                  <Image alignSelf='center' 
             pt={0} px={0} py={0}
             backgroundColor="transparent" 
             boxShadow="lg"
             w={isNotSmallerScreen ? '200px' : '150px'} h={isNotSmallerScreen ? '200px' : '150px'} 
             src={window.location.origin + '/UiUx/Redesign-Cover photo.png'}/>
                 
                  <Text color="black" p="4" fontSize='medium' fontWeight="bold">
                      Redesign Website
                  </Text>
                  {/* <Text color="black" pt={0} pl="4" pb={4}  fontSize='lg' fontWeight="semibold">
                      Quebec
                  </Text> */}
              </Flex>
      </div><br/>
      <Spacer/>
      <div onClick={() => navigate("/quebecdashboard")}>  
      <Flex rounded='lg' direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                    bg="gray.100" h={isNotSmallerScreen ? '200px' : '150px'}
                     w={isNotSmallerScreen ? '200px' : '150px'} justify="flex-end"  _hover={{ bg: "orange.600", }}>
                  
                  <Image alignSelf='center' 
             pt={0} px={0} py={0}
             backgroundColor="transparent" 
             boxShadow="lg"
             w={isNotSmallerScreen ? '200px' : '150px'} h={isNotSmallerScreen ? '200px' : '150px'} 
             src={window.location.origin + '/UiUx/Cover pic.png'}>  
             </Image>
             
              <Text color="black" p="4" fontSize='medium' fontWeight="bold">
                      Dashboard Design
                  </Text>
                  {/* <Text color="black" pt={0} pl="4" pb={4}  fontSize='lg' fontWeight="semibold">
                  Atheletez App
                  </Text> */}
             
                 
                 
              </Flex>
      </div><br/>
      <Spacer />
</Flex>
</Flex>
     
    </Flex>
    
  )
}

export default UxAthletez
