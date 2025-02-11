import React from "react"
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Link,
    Flex,
    Image,
  } from '@chakra-ui/react'


  import YoutubeIcon from '../assets/images/youtube.svg';

  import TiktokIcon from '../assets/images/tik-tok.svg';

  import twitchIcon from '../assets/images/twitch.svg';
  import discordIcon from '../assets/images/discord.svg';




export default function Home() {
    return(
            <>
        <Container maxW={'3xl'}  >
            <Stack as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }} alignItems={'center'} >
                <Box bg='tomato' w='30rem' h={'50rem'} p={4} color='white' borderRadius={'100px'}   >
                    <Text fontSize={'6xl'} padding={'2rem 0 0 0'}>
                        @Capitão
                    </Text>
                    
                    <Flex flexDirection={'column'} padding={'10em 5rem 0 5rem'}  gap='2'>
                             
                        <Button as="a"  href="https://www.youtube.com/@capitao2729" leftIcon={<Image src={YoutubeIcon} boxSize="30px" />} colorScheme="red"  >
                            <Text fontSize={'4xl'}>
                                Youtube 
                            </Text>
                        </Button>

                        
                        <Button as="a" href="https://www.tiktok.com/@capita_o"  leftIcon={<Image src={TiktokIcon} boxSize="30px" />}  bg="black" _hover={{ bg: "gray.800" }} >
                            <Text fontSize={'4xl'}>
                                Tiktok
                            </Text>
                        </Button>
                        

                        <Button as="a" href="https://www.twitch.tv/lcapitaoj" leftIcon={<Image src={twitchIcon} boxSize="30px" />} colorScheme="purple"  >
                            <Text fontSize={'4xl'}>
                                Twitch
                            </Text>
                        </Button>

                        <Button as="a" href="https://discord.gg/TRb8KEBRUx" leftIcon={<Image src={discordIcon} boxSize="30px" />} bg='#2B2BE0'  _hover={{bg:'#1B51E0'}}  >
                            <Text fontSize={'4xl'}>
                                Discord
                            </Text>
                        </Button>
                        
                        <Text>
                            Se inscreva em todos meus canais, 
                        </Text>
                    </Flex>
                </Box>
            </Stack>
        </Container>
    </>
    )
}