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
<Stack>
<Image alignSelf='center' 
         p={2} 
         backgroundColor="transparent" 
         boxShadow="lg"
         w='400px' h='300px'
         src={window.location.origin + '/sports/alvas.jpg'}/>

  <Image alignSelf='center' 
         p={2} 
         backgroundColor="transparent" 
         boxShadow="lg"
         w='400px' h='300px'
         src={window.location.origin + '/sports/postRace.jpg'}/>


</Stack>
<Stack>
<Image alignSelf='center' p={2} 
         backgroundColor="transparent" 
         boxShadow="lg"
         boxSize="300px"
         src={window.location.origin + '/sports/10k-run.jpg'}/>
  <Image alignSelf='center' p={2} 
         backgroundColor="transparent" 
         boxShadow="lg"
         w='300px' h='400px'
         src={window.location.origin + '/sports/news.jpg'}/>

</Stack>
<Stack>
    <Image alignSelf='center' 
         p={2} 
         backgroundColor="transparent" 
         boxShadow="lg"
         w='400px' h='300px'
         src={window.location.origin + '/sports/award2.jpg'}/>
         <Image alignSelf='center' 
         p={2} 
         backgroundColor="transparent" 
         boxShadow="lg"
         w='400px' h='300px'
         src={window.location.origin + '/sports/award1.jpg'}/>
    
</Stack>

</Flex>
<Button><Link to="/sports">Go back</Link></Button>
</Stack>
  )
}

export default Snaps
