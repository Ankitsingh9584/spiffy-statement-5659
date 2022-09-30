
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Button,
    Heading,
    Image
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
import {EmailIcon} from "@chakra-ui/icons"
export default function Footer(){
    return(
        <>
       <Box bg={"#111317"} w={"100%"} height={"502px"}>
<Container w={"83%"}>
<Flex py={"6%"}>
    <Button fontSize={"lg"} height={"49px"} width={"37%"} marginLeft={"-59%"} border={"2px"} bg={"#111317"} color={"grey"}><EmailIcon marginRight={"10%"} color={"grey"}/>  Contact us </Button>
    <Heading fontWeight={"medium"} marginLeft={"6%"} marginTop={"2.5%"} color={"grey"} fontSize={"small"}>USA, 800 Boylston Street, Suite 2475, Boston, MA 02199</Heading>

    <Button h={"55px"}  marginLeft={"-2%"} 
      width={"66%"}
marginTop={"-1%"}
marginRight={"-189%"}
marginLeft={"270px"}
bg={"#00bc98"} color={'white'}
                  _hover={{
                    bg: '#0a5748',
                  }} size='lg'>
Get started with Semrush
  </Button>

</Flex>
{/*  */}



</Container>
<Flex gap={"9.3%"}  margin={"auto"} marginTop={"3%"} width={"79.2%"}>
    <Stack>
<Heading  textAlign={"start"} color={"white"} fontWeight={"semibold"} fontSize={"sm"}>SEMRUSH</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Features</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Pricing</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Success Stories</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Stats and Facts</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Data Studies</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>News</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Custom Report</Heading>




    </Stack>

    {/* 2nd stack */}
    <Stack>
<Heading  textAlign={"start"} color={"white"} fontWeight={"semibold"} fontSize={"sm"}>HELP</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Knowledge Base</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Academy</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Semrush API </Heading>

<Heading paddingTop={"18px"} textAlign={"start"} color={"white"} fontWeight={"semibold"} fontSize={"sm"}>COMMUNITY</Heading>

<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Semrush Blog</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Webinars</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Events</Heading>


    </Stack>

    {/* 3rd stack */}
    <Stack>
<Heading  textAlign={"start"} color={"white"} fontWeight={"semibold"} fontSize={"sm"}>MORE TOOLS</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Analytics Reports</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Projects</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Content Marketplace</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Agency Partners</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Affiliate Program</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>SEOquake</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Sensor</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Tools for Amazon</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Prowly</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>App Center</Heading>




    </Stack>
    {/* 4th stack */}

    <Stack>
<Heading  textAlign={"start"} color={"white"} fontWeight={"semibold"} fontSize={"sm"}>COMPANY</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>About Us</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Newsroom</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Partners</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Legal Info</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Privacy Policy</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Cookie Settings</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Security Info</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>For Investors</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Contact Us</Heading>




    </Stack>
{/* 5th stack */}

<Stack>
<Heading  textAlign={"start"} color={"white"} fontWeight={"semibold"} fontSize={"sm"}>FOLLOW US</Heading>
<Heading   _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>
    <Image marginRight={"6px"} display={"inline"} width={"16px"} src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/TWITTER-512.png"/>
    Twitter</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>  
<Image marginRight={"6px"} display={"inline"} width={"16px"} src="https://cdn0.iconfinder.com/data/icons/brands-filled-3/194/facebook-social-network-brand-logo-256.png"/>Facebook</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}> <Image marginRight={"6px"} display={"inline"} width={"16px"} src="https://cdn0.iconfinder.com/data/icons/brands-filled-3/184/linkedin-social-network-brand-logo-256.png"/>LinkedIn</Heading>
<Heading display={"inline"} _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}> <Image marginRight={"6px"} display={"inline"} width={"16px"} src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/INSTAGRAM-256.png"/>Instagram</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}><Image marginRight={"6px"} display={"inline"} width={"16px"} src="https://cdn0.iconfinder.com/data/icons/brands-filled-3/196/youtube-social-network-brand-logo-256.png"/>YouTube</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}><Image marginRight={"6px"} display={"inline"} width={"16px"} src="https://cdn0.iconfinder.com/data/icons/brands-filled-3/201/pinterest-social-network-brand-logo-128.png"/>Pinterest</Heading>





    </Stack>


    {/* 6th stack */}


    <Stack>
<Heading  textAlign={"start"} color={"white"} fontWeight={"semibold"} fontSize={"sm"}>LANGUAGE</Heading>
<Heading  textAlign={"start"} color={"white"} fontWeight={"semibold"} fontSize={"small"}>ENGLISH</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Español</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Deutsch</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Français</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Italiano</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Português (Brasil)</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Tiếng Việt</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>Türkçe</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>中文</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>日本語</Heading>
<Heading _hover={{color:"white"}} textAlign={"start"} fontWeight={"normal"} fontSize={"sm"} color={"gray"}>한국어</Heading>





    </Stack>


</Flex>
       </Box>
       
       
       
       </>
    )
}