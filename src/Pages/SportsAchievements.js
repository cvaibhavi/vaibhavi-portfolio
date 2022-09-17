import { Button,  Heading, IconButton, Image,  Text,  VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {  FaArrowLeft} from 'react-icons/fa';


const SportsAchievements = () => {
 

  return (
    <>
    
    <VStack alignItems='center' px={10}>
            <Heading>Achievements</Heading>
            <Link to="/sports">
              <IconButton ml={2} icon={<FaArrowLeft />} isRound='true'/>  
            </Link>
            
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
