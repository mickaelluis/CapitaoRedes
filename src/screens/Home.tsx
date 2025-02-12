import React from "react"
import {
    Box,
    Container,
    Text,
    Button,
    Stack,
    Flex,
    Image,
  } from '@chakra-ui/react'


  import YoutubeIcon from '../assets/images/youtube.svg';
  import TiktokIcon from '../assets/images/tik-tok.svg';
  import twitchIcon from '../assets/images/twitch.svg';
  import discordIcon from '../assets/images/discord.svg';
  import avatar from '../assets/images/Avatar.jpeg';

//base → Aplica para todas as telas menores que md (mobile-first).
//md → Aplica a partir de 48em (768px).
//lg → Aplica a partir de 64em (1024px).
 

export default function Home() {
    return(
            <>
        <Container maxW={'3xl'}   >
            <Stack as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: '12rem', md: 36 }} alignItems={'center'} >
                <Box bg='tomato'  p={4} color='white' borderRadius={'50px'} w={{ base: "75%", md: "26em", lg: "22em" }}  h={{ base: "10%", md: "35em", lg: "35em" }} mt="-7rem" >
                    <Text fontSize={{ base: "2.5em", md: "2.5em", lg: "2em" }} padding={'2rem 0 0 0'}>
                        @Capitão
                    </Text>
                    <Box display="flex" justifyContent="center" mt='2rem'>
                    <Image
                        src={avatar}  
                        borderRadius='full'
                        boxSize='150px' 
                    />
                    </Box>
                    <Flex flexDirection={'column'}  padding={'0 5rem 0 5rem'}  mt={{ base:' 3rem', md: '3rem', lg: '3rem' }}  gap='2'> 
                             
                        <Button as="a"  href="https://www.youtube.com/@capitao2729" leftIcon={<Image src={YoutubeIcon} boxSize="30px"  sx={{ filter: "brightness(0) invert(1)"}} />} colorScheme="red"  >
                            <Text fontSize={{ base: "0.8em", md: "1.5em", lg: "1em" }}>
                                Youtube 
                            </Text>
                        </Button>   

                        
                        <Button as="a" href="https://www.tiktok.com/@capita_o"  leftIcon={<Image src={TiktokIcon} boxSize="30px"  sx={{ filter: "brightness(0) invert(1)"}} />}  bg="black" _hover={{ bg: "gray.800" }} >
                            <Text fontSize={{ base: "0.8em", md: "1.5em", lg: "1em" }}>
                                Tiktok
                            </Text>
                        </Button>
                        

                        <Button as="a" href="https://www.twitch.tv/lcapitaoj" leftIcon={<Image src={twitchIcon} boxSize="30px" sx={{ filter: "brightness(0) invert(1)"}} />} colorScheme="purple"  >
                            <Text fontSize={{ base: "0.8em", md: "1.5em", lg: "1em" }}>
                                Twitch
                            </Text>
                        </Button>

                        <Button as="a" href="https://discord.gg/TRb8KEBRUx" leftIcon={<Image src={discordIcon} boxSize="30px" sx={{ filter: "brightness(0) invert(1)"}} />} bg='#2B2BE0'  _hover={{bg:'#1B51E0'}}  >
                            <Text fontSize={{ base: "0.8em", md: "1.5em", lg: "1em" }}>
                                Discord
                            </Text>
                        </Button>
                        
                        <Text fontSize={{ base: "0.8em", md: "1.5em", lg: "1.3em" }}>
                            Se inscreva em todos meus canais.
                        </Text>
                    </Flex>
                </Box>
            </Stack>
        </Container>
    </>
    )
}