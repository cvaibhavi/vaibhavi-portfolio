import { Box, Button, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Link } from 'react-router-dom'

const Snaps = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:760px)");

  return (
    <Stack alignItems='center' maxWidth='100%'>
    <Flex direction={'row'}>
         <Box p='5' justifyItems={'flex-start'}>
          <Link to='/sports'>
            <Button>Back</Button>
          </Link>  
         </Box>
        
        
        <Box p='5'>
           <Heading> Photos </Heading>
        </Box>
         <Divider/>
        <Box p='5' justifyItems={'flex-end'}>
          <Link to='/snaps'>
            <Button>Achievements</Button>
          </Link>  
         </Box>
       </Flex>
<Flex direction={isNotSmallerScreen ? "row" : "column"} 
  mt='8' maxWidth='100%' px='15' py='15' 
  justifyContent='center'>

<Image alignSelf='center' 
         p={2} 
         backgroundColor="transparent" 
         boxShadow="lg"
         w='400px' h='300px'
         src={window.location.origin + '/sports/alvas.jpg'}/>
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
<Flex direction={isNotSmallerScreen ? "row" : "column"} 
  mt='8' maxWidth='100%' px='15' py='15' 
  justifyContent='center'>
<Box borderRadius='20%' bg='blue.400' h='50px' w='50px' textAlign='center'> 
    <Text fontSize='medium'>Year 2016</Text>
  </Box>
<Image alignSelf='center'
                  backgroundColor="transparent" 
                  boxShadow="lg"
                  w='400px' h='350px'
                 src={window.location.origin + '/sports/news1.jpg'}/>
  
  <Box borderRadius='20%' bg='blue.400' h='50px' w='50px' textAlign='center'> 
    <Text fontSize='medium'>Year 2020</Text>
  </Box>
  <Image alignSelf='center' p={2} 
         backgroundColor="transparent" 
         boxShadow="lg"
         w='300px' h='400px'
         src={window.location.origin + '/sports/news.jpg'}/>
        
         <Box borderRadius='20%' bg='blue.400' h='50px' w='50px' textAlign='center'> 
    <Text fontSize='medium'>Year 2017</Text>
  </Box>
   <Image alignSelf='center'
                  backgroundColor="transparent" 
                  boxShadow="lg"
                  w='400px' h='350px'
                 src={window.location.origin + '/sports/news2.jpg'}/>
         
  </Flex>
  <Flex direction={isNotSmallerScreen ? "row" : "column"} 
  mt='8' maxWidth='100%' px='15' py='15' 
  justifyContent='center'>
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
   </Flex>
  
<Button><Link to="/sports">Go back</Link></Button>
</Stack>
  )
}

export default Snaps
