import { Button, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Link } from 'react-router-dom'

const Snaps = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:1159px)");

  return (
    <Stack alignItems='center'>
    <Heading>Photos</Heading>
<Flex direction={isNotSmallerScreen ? "row" : "column"} 
  mt='8' w='100%' px='15' py='15' 
  justifyContent='center'>

<Image alignSelf='center' p={2} 
         backgroundColor="transparent" 
         boxShadow="lg"
         boxSize="300px"
         src={window.location.origin + '/sports/10k-run.jpg'}/>
<Image alignSelf='center' 
         p={2} 
         backgroundColor="transparent" 
         boxShadow="lg"
         w='400px' h='300px'
         src={window.location.origin + '/sports/postRace.jpg'}/>


</Flex>
<Button><Link to="/sports">Go back</Link></Button>
</Stack>
  )
}

export default Snaps
