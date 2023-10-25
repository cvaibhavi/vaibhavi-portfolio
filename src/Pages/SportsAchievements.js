import { Box, Button,  Divider,  Flex,  Heading, IconButton, Image,  Spacer,  Text,  VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'



const SportsAchievements = () => {
 

  return (
    <>
    
    <VStack alignItems='center' px={10}>
    <Flex direction={'row'}>
         <Box p='5' justifyItems={'flex-start'}>
          <Link to='/sports'>
            <Button>Back</Button>
          </Link>  
         </Box>
        
        
        <Box p='5'>
           <Heading> Achievements </Heading>
        </Box>
         <Divider/>
        <Box p='5' justifyItems={'flex-end'}>
          <Link to='/snaps'>
            <Button>Photos</Button>
          </Link>  
         </Box>
       </Flex>
            
        <Text color='blue.500' fontWeight={'semibold'} fontSize={'lg'}>"Memories in Metal: My Journey of Achievement"</Text>
        <Image alignSelf='center'
                  backgroundColor="transparent" 
                  boxShadow="lg"
                  w='400px' h='350px'
                 src={window.location.origin + '/sports/Prize.jpg'}/>
        
        <Image alignSelf='center'
                  backgroundColor="transparent" 
                  boxShadow="lg"
                  w='300px' h='400px'
                 src={window.location.origin + '/sports/c1.jpg'}/>
        <Image alignSelf='center' 
                 
                 backgroundColor="transparent" 
                 boxShadow="lg"
                 w='300px' h='400px'
                 src={window.location.origin + '/sports/c2.jpg'}/>
   
        <Image alignSelf='center' 
                  backgroundColor="transparent" 
                  boxShadow="lg"
                  w='350px' h='300px'
                 src={window.location.origin + '/sports/c3.jpg'}/>
        <Image alignSelf='center' 
                  backgroundColor="transparent" 
                  boxShadow="lg"
                  w='350px' h='300px'
                 src={window.location.origin + '/sports/c4.jpg'}/>
        <Image alignSelf='center' 
                  backgroundColor="transparent" 
                  boxShadow="lg"
                  w='350px' h='300px'
                 src={window.location.origin + '/sports/c5.jpg'}/>
        <Text color='blue'>and many more....</Text>
    
     <Button><Link to="/sports">Go back</Link></Button>
    </VStack>
    </>
  )
}

export default SportsAchievements
