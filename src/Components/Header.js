import { Box, Button, Flex, Image, Spacer, Stack, Text,  useMediaQuery } from '@chakra-ui/react';
import React from 'react'

function Header() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:760px)");

  return (
    
    <Stack>

      <Flex direction={isNotSmallerScreen ?  'row' : 'column'}
            spacing="200px" p={isNotSmallerScreen ? "32" : "10"}
            alignSelf='stretch'>
              <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                <Text fontSize="5xl" fontWeight="semibold" color={'blue.500'}>Hi, I am </Text>
                <Text fontSize="7xl" 
                      fontWeight="bold" 
                      bgGradient="linear(to-r, blue.400, blue.500, purple.600)" 
                      bgClip='text' >Vaibhavi Prabhu</Text>
                
                <Button mt={8} colorScheme="blue" 
                             onClick={()=> window.open('/Vaibhavi-Resume.pdf')}> Hire Me </Button>
              </Box>
              
            <Spacer/>
            <Box>
              <Image alignSelf='center' justify='flex-end'
                     mt={isNotSmallerScreen ? "0" : "12"}
                     mb={isNotSmallerScreen ? "0" : "12"} 
                     borderRadius='full'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/vaibhavi.jpg'}/>
            </Box>
              
      </Flex>
    </Stack>
     
  )
}

export default Header

