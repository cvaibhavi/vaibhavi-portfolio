import { Button, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Link } from 'react-router-dom'

const Art = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:760px)");

  return (
    <Stack alignItems='center'>
            <Heading>My Arts and Crafts</Heading>
    <Flex direction={isNotSmallerScreen ? "row" : "column"} 
          mt='8' maxWidth='100%' px='15' py='15' 
          justifyContent='center'>
    
    <Image alignSelf='center' p='3'
                 borderRadius='10%'
                 backgroundColor="transparent" 
                 boxShadow="lg"
                 boxSize="300px"
                 src={window.location.origin + '/wallpaint/h-1.jpg'}/>
    <Image alignSelf='center' p='3'
                 borderRadius='10%'
                 backgroundColor="transparent" 
                 boxShadow="lg"
                 boxSize="300px"
                 src={window.location.origin + '/wallpaint/h-2.jpg'}/>
    <Image alignSelf='center' p='3'
                 borderRadius='10%'
                 backgroundColor="transparent" 
                 boxShadow="lg"
                 boxSize="300px"
                 src={window.location.origin + '/wallpaint/h-3.jpg'}/>
    
    <Image alignSelf='center' p='3'
                 borderRadius='10%'
                 backgroundColor="transparent" 
                 boxShadow="lg"
                 boxSize="300px"
                 src={window.location.origin + '/wallpaint/h-4.jpg'}/>
    
     </Flex>
     <Flex direction={isNotSmallerScreen ? "row" : "column"} 
          mt='8' maxWidth='100%' px='15' py='15' 
          justifyContent='center'>
            <Image alignSelf='center' p='3'
                 borderRadius='10%'
                 backgroundColor="transparent" 
                 boxShadow="lg"
                 boxSize="300px"
                 src={window.location.origin + '/wallpaint/mandalArt1.jpg'}/>
            <Image alignSelf='center' p='3'
                 borderRadius='10%'
                 backgroundColor="transparent" 
                 boxShadow="lg"
                 boxSize="300px"
                 src={window.location.origin + '/wallpaint/mandalArt2.jpg'}/>
          </Flex>
     <Button><Link to="/">Go back</Link></Button>
    </Stack>
    
  )
}

export default Art
