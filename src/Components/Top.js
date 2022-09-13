import React from 'react'
import {VStack,
        Flex,
        Heading, 
        IconButton, 
        useColorMode, 
        Spacer,
        useDisclosure,
        Drawer, 
        DrawerBody, 
        DrawerContent, 
        DrawerHeader, 
        DrawerOverlay,
        Link,
        HStack} from '@chakra-ui/react'
import {FaSun,FaMoon,FaLinkedinIn, FaGithub, FaPhone, FaFacebookF, FaInstagram} from 'react-icons/fa'
import {PhoneIcon,EmailIcon} from '@chakra-ui/icons'
import Header from './Header'


const Top = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";
    const { isOpen, onOpen, onClose } = useDisclosure();
    

  return ( 
    <>
    <VStack p='5' overflow='hidden'>
    <Flex w='100%'>
      <Heading ml='8' fontWeight='semibold' color='cyan.400' >Portfolio</Heading>
      <Spacer/>
      <Link href='https://www.linkedin.com/in/vaibhavi-c-93968920a'>
        <IconButton icon={<FaLinkedinIn />} isRound='true'></IconButton>
      </Link>
        
      <Link href='https://github.com/cvaibhavi'>
      <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
      </Link>
        
        
        <IconButton ml={2} icon={<FaPhone />} isRound='true' onClick={onOpen}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode}></IconButton>
    </Flex>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth='1px' color='teal.400'><b>Contact Me</b></DrawerHeader>
                <DrawerBody>
                <p><b>Vaibhavi C</b></p><br />
                <p><IconButton
                        variant='outline'
                        colorScheme='teal'
                        aria-label='Call Segun'
                        size='sm'
                        icon={<PhoneIcon />}
                      /> <b> 7676612737</b></p><br/>
                <p><IconButton
                        variant='outline'
                        colorScheme='teal'
                        aria-label='Send email'
                        size='sm'
                        icon={<EmailIcon/>}
                      />
                  <b> cvaibhavi2001@gmail.com</b></p><br />
                <HStack spacing='14' px='16'>
                  <Link href='https://m.facebook.com/100021618545682/'>
                    <IconButton ml={2} icon={<FaFacebookF/>} variant='outline'  isRound='true' />
                  </Link>
                  <Link href='https://www.instagram.com/_vaibhavi_prabhu_/'>
                    <IconButton ml={2} icon={<FaInstagram/>} variant='outline'  isRound='true' />
                  </Link>
                   
                </HStack>
                
                  
                </DrawerBody>
            </DrawerContent>
      </Drawer>
    </VStack>
    <Header/>
    
  </>
  )
}

export default Top
