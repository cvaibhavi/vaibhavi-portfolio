import { Box, Button, Divider, Heading, IconButton,Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const Projects = () => {

    const navigate = useNavigate(); 

  return (
    <VStack>
        <Heading alignItems='center'>My Projects</Heading>
        <Box boxShadow='lg' borderRadius='5%' maxWidth='100%' p='10' >
        
              <IconButton  ml={2} icon={<FaArrowLeft />} isRound='true' onClick={() => navigate("/")}/>  
        
        <Divider/>
           <Box p='5'>
            <Link href='https://walldesign.herokuapp.com/auth/login'>
                <Button>Wall Design</Button>
            </Link>
            <Text>This is an E-Commerce web Application.</Text>
           </Box>
           <Divider/>
           <Box  p='5'>
            <Link href='https://vaibhavi-portfolio.web.app/'>
                 <Button>My Portfolio</Button>
            </Link>
            <Text>This is my portfolio website.Build on React using Chakra-ui library</Text>    
            </Box>
           <Divider/>
           <Box  p='5'>
            <Link href='https://github.com/cvaibhavi/Calsi'>
                 <Button>Basic Calculator</Button>
            </Link>
            <Text>This is a basic calculator.Worked on frontend Design using html,css and javascript.</Text>    
            </Box>

            

            <Divider/>


        </Box>
    </VStack>
  )
}

export default Projects
