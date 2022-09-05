import { Button, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@chakra-ui/media-query';

const Painting = () => {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:1159px)");
  return (
    <Stack alignItems='center'>
    <Heading>Paintings</Heading>
<Flex direction={isNotSmallerScreen ? "row" : "column"} 
      mt='8' w='100%' px='15' py='15' 
      justifyContent='center'>
        
        <Image alignSelf='center' p='5'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/4paint.jpeg'}/>
        <Image alignSelf='center' p='5'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/1paint.jfif'}/>
        <Image alignSelf='center' p='5'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/2paint.jfif'}/>
        <Image alignSelf='center' p='5'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/3paint.jpeg'}/>
      </Flex>
        <Button><Link to="/">Go back</Link></Button>
    </Stack>
    
  )
}

export default Painting
