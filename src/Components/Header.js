import { Box, Button, Flex, Image, Spacer, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import React from 'react'

function Header() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:1159px)");

  return (
    
    <Stack>

      <Flex direction={isNotSmallerScreen ?  'row' : 'column'}
            spacing="200px" p={isNotSmallerScreen ? "32" : "10"}
            alignSelf="flex-start">
              <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                <Text fontSize="5xl" fontWeight="semibold">Hi, I am </Text>
                <Text fontSize="7xl" 
                      fontWeight="bold" 
                      bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" 
                      bgClip='text' >Vaibhavi</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>Student</Text>
                <Button mt={8} colorScheme="blue" 
                             onClick={()=> window.open('/Resume.pdf')}> Hire Me </Button>
              </Box>
              <Spacer />
              <Image alignSelf='center' 
                     mt={isNotSmallerScreen ? "0" : "12"}
                     mb={isNotSmallerScreen ? "0" : "12"} 
                     borderRadius='full'
                     backgroundColor="transparent" 
                     boxShadow="lg"
                     boxSize="300px"
                     src={window.location.origin + '/vaibhavi.jpg'}/>
      </Flex>
    </Stack>
     
  )
}

export default Header

