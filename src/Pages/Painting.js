import { Button, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@chakra-ui/media-query';

const Painting = () => {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:760px)");
  return (
    <Stack alignItems='center'>
    <Heading>Paintings</Heading>
<Flex direction={isNotSmallerScreen ? "row" : "column"} 
      mt='8' w='100%' px='15' py='15' 
      justifyContent='center'>
        
        <Image alignSelf='center' p='3'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/4paint.jpeg'}/>
        <Image alignSelf='center' p='3'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/1paint.jfif'}/>
        <Image alignSelf='center' p='3'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/2paint.jfif'}/>
        <Image alignSelf='center' p='3'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/3paint.jpeg'}/>
      </Flex>
      <Flex direction={isNotSmallerScreen ? "row" : "column"} 
      mt='8' w='100%' px='15' py='15' 
      justifyContent='center'>
        <Image alignSelf='center' p='5'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/potPaint.jpg'}/>
        <Image alignSelf='center' p='5'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/paint-5.jpg'}/>
        <Image alignSelf='center' p='5'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/paint-6.jpg'}/>
      </Flex>
      <Flex direction={isNotSmallerScreen ? "row" : "column"} 
      mt='8' w='100%' px='15' py='15' 
      justifyContent='center'>
         <Image alignSelf='center' p='5'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/Draw1.jpg'}/>
         <Image alignSelf='center' p='5'
                     borderRadius='10%'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/wallpaint/Draw2.jpg'}/>
      </Flex>
        <Button><Link to="/">Go back</Link></Button>
    </Stack>
    
  )
}

export default Painting
