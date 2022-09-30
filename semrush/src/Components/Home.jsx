
import { Box, Button, Container, Heading, Input ,Image, Flex, List, UnorderedList, ListItem, Avatar} from "@chakra-ui/react"
import {CheckIcon} from "@chakra-ui/icons"


import Footer from "./Footer"
const data_crousel=["https://cdn.semrush.com/static/index/logos/Amazon_logo.9f5bdb154006.svg",
"https://cdn.semrush.com/static/index/logos/Quora_logo.38ca9be29021.svg",
"https://cdn.semrush.com/static/index/logos/General_Electric_logo.bab81321a38c.svg",
"https://cdn.semrush.com/static/index/logos/Vodafone_logo.699b394a72bf.svg",
"https://cdn.semrush.com/static/index/logos/Forbes_logo.d98a659660b4.svg",
"https://cdn.semrush.com/static/index/logos/Booking_logo.fa2c1c5764b2.svg"

]
export default function Home(){
    return (
    <>


 
    <Box bg='#421983' w='100%' h='1150px' p={4} color='white'>
    <Container w={"100%"}>

    <Heading w={"140%"} py={6} marginLeft={"-15%"} fontSize={"6xl"} fontWeight={"semibold"}>Get measurable results from online marketing</Heading>
    <Heading w={"119%"} marginLeft={"-3%"} fontWeight={"normal"}  py={3} fontSize={"2xl"}>Do SEO, content marketing, competitor research,
PPC and social media marketing from just one platform.</Heading>
<Box display={"flex"} w={"120%"} py={"6%"} marginLeft={"12%"}>
<Input bg={"white"} w={"250%"} h={"55px"} color={"black"} marginLeft={"-28%"} placeholder='Enter domain, keyword or URL' size='lg' />
<Button h={"55px"} w={"80%"}  marginLeft={"2%"} bg={"#ff622d"} color={'white'}
                  _hover={{
                    bg: '#b23300',
                  }} size='lg'>
Start now
  </Button>
</Box>
<Heading marginTop={"12.5%"} fontSize={"xl"} fontWeight={"normal"} color={"grey"}>Trusted by the world’s leading brands</Heading>
<Box w={"210%"} marginTop={'7%'} marginLeft={"-41%"} display={"flex"}>
    {data_crousel.map((el)=>{
        return(
            <>
            <Box marginLeft={"5%"}><Image fontWeight={"light"} src={el}/></Box>
           
           
            </>
        )
    })}

</Box>

<Heading py={112} fontSize={"5xl"}>See what's inside</Heading>

<Flex marginTop={"-12%"} boxShadow='dark-lg' p='6' rounded='md' bg='white' 
borderRadius={"20px"} width={"250%"} marginLeft={"-80%"} bg={"white"}>
    <Box width={"50%"} marginLeft={"9%"} marginTop={"8%"}>
        <Heading fontWeight={"semibold"} width={"80%"} color={"black"} textAlign={"start"}>  Grow organic traﬃc with our complete and easy SEO tools & workﬂow</Heading>
    <UnorderedList color={"#171a22"} fontSize={"lg"} marginTop={"4%"} textAlign={"start"} color={"black"}>
  <ListItem>Uncover millions of national & local keywords</ListItem>
  <ListItem>Analyze any domain’s backlink profile</ListItem>
  <ListItem>Run technical SEO audits</ListItem>
  <ListItem>Track your SERP positions daily</ListItem>
</UnorderedList>
<Button h={"55px"}  marginLeft={"-72%"} 
marginTop={"4%"}
bg={"#ff622d"} color={'white'}
                  _hover={{
                    bg: '#b23300',
                  }} size='lg'>
Try SEO Toolkit
  </Button>
</Box>
    <Box  marginTop={"8%"} width={"50%"}><Image src="https://cdn.semrush.com/static/index/tools-new/seo.9edeeb0311e7.svg"/></Box>
</Flex>

<Box>
    <Heading
marginTop={"19%"}
marginLeft={"-30%"} fontSize={"5xl"} fontWeight={"semibold"} width={"170%"} color={"black"}>“Semrush is like a keyword research tool, Google Trends, Moz, Hootsuite and SimilarWeb in one.”

</Heading>
<Avatar
marginTop={"10%"}
          size={'xl'}
          src={
            'https://cdn.semrush.com/static/index/testimonials/Mario_Leon_Rojas.6062ad72d0c3.webp'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
         
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading  fontSize={"large"} color={"black"}>Mario León Rojas</Heading>
        <Heading marginTop={"2%"} fontSize={"large"} fontWeight={"normal"} color={"black"}>Performance Marketing Specialist, Banco del Sol</Heading>
        <Heading marginTop={"2%"}  fontSize={"large"} fontWeight={"normal"}  color={"#8a8b8f"}>Source: Semrush G2 reviews</Heading>
</Box>
<Heading
marginTop={"24%"}
marginLeft={"-30%"} fontSize={"5xl"} fontWeight={"semibold"} width={"170%"} color={"black"}>Award-winning tools trusted by the world’s leading companies

</Heading>
<Flex marginTop={"12%"} gap={"38%"}  marginLeft={"-39%"}>
    <Box color={"black"}>
        <Box marginLeft={"30%"}  marginTop={"-10%"} display={"flex"}>
        <Image height={"75px"} width={"68px"}  src="https://www.semrush.com/static/images/heart.6e0968f39befa7d22627669dbe30ca2d.svg"/>
        <Heading marginLeft={"-120%"} marginTop={"20%"} fontSize={"6xl"}>10M </Heading>
       
        </Box>
       
        <Heading marginLeft={"-29%"} marginTop={"8%"} width={"190%"} fontSize={"xl"}>marketing professionals</Heading>
        <Heading color={"#585454"} marginTop={"6%"} fontWeight={"semibold"} marginLeft={"-45%"}  width={"220%"} fontSize={"xl"}>have already used Semrush</Heading>
    </Box>
    <Box color={"black"}>
        <Box marginLeft={"30%"}  marginTop={"-10%"} display={"flex"}>
        <Image height={"75px"} width={"68px"}  src="https://www.semrush.com/static/images/star.a549a5922da2063e08b7cdb942349fd9.svg"/>
        <Heading marginLeft={"-80%"} marginTop={"20%"} fontSize={"6xl"}>21 </Heading>
       
        </Box>
       
        <Heading marginLeft={"-29%"} marginTop={"8%"} width={"190%"} fontSize={"xl"}>international awards</Heading>
        <Heading color={"#585454"} marginTop={"6%"} fontWeight={"semibold"} marginLeft={"-45%"}  width={"220%"} fontSize={"xl"}>as best SEO software suite</Heading>
    </Box>
    <Box color={"black"}>
        <Box marginLeft={"30%"}  marginTop={"-10%"} display={"flex"}>
        <Image height={"75px"} width={"68px"}  src="https://www.semrush.com/static/images/diamond.4699339fa7ac96d7fa266b427502e8e6.svg"/>
        <Heading marginLeft={"-98%"} marginTop={"20%"} fontSize={"6xl"}>30% </Heading>
       
        </Box>
       
        <Heading marginLeft={"-29%"} marginTop={"8%"} width={"190%"} fontSize={"xl"}>Fortune 500 companies</Heading>
        <Heading color={"#585454"} marginTop={"6%"} fontWeight={"semibold"} marginLeft={"-45%"}  width={"220%"} fontSize={"xl"}>
        use Semrush as their go-to marketing tool

        </Heading>
    </Box>

</Flex>

<Flex marginTop={"29%"}  marginLeft={"-70%"} width={"100%"}>
    <Box width={"50%"}>
      <Heading align={"start"} width={"320%"} color={"black"}>More data. More insights</Heading>  
      <Heading marginTop={"16%"} align={"start"} width={"430%"} color={"black"} fontWeight={"normal"} fontSize={"2xl"}>With the size of our SEO databases and speed of our backlink crawler, imagine what you can achieve if you have the insights your competitors don’t.</Heading>
      <Button h={"55px"}  marginLeft={"-2%"} 
      width={"106%"}
marginTop={"16%"}
bg={"#ff622d"} color={'white'}
                  _hover={{
                    bg: '#b23300',
                  }} size='lg'>
Learn more
  </Button>
    </Box>
    <Box  marginLeft={"120%"} width={"50%"}>

           <Flex gap={"8%"}>
           <Box paddingLeft={"60px"}  paddingBottom={7} paddingRight={"60px"}  color={"black"} boxShadow='dark-lg'  rounded='md' bg='white'>
<Heading marginTop={"20%"} fontSize={"5xl"} >22B</Heading>
<Heading marginTop={"6%"} fontSize={"l"} fontWeight={"medium"}>keywords</Heading>
</Box>

<Box  paddingLeft={"60px"}  paddingTop={5}  paddingRight={"60px"} color={"black"} boxShadow='dark-lg'  rounded='md' bg='white'>
<Heading fontSize={"5xl"} >43T</Heading>
<Heading marginTop={"6%"} fontSize={"l"} fontWeight={"medium"}>backlinks</Heading>
</Box>
  </Flex>
          <Flex  marginTop={"8%"} gap={"8%"}>
          <Box   paddingTop={5} paddingLeft={"40px"} paddingRight={"40px"} color={"black"} boxShadow='dark-lg' rounded='md' bg='white'>
<Heading fontSize={"5xl"} >808M</Heading>
<Heading marginTop={"6%"} fontSize={"l"} fontWeight={"medium"}>domain profiles</Heading>
</Box>


<Box paddingBottom={5} paddingTop={5}  paddingLeft={"60px"} paddingRight={"60px"} color={"black"} boxShadow='dark-lg'  rounded='md' bg='white'>
<Heading fontSize={"5xl"} >140</Heading>
<Heading marginTop={"6%"} marginLeft={"-40%"} width={"200%"} fontSize={"l"} fontWeight={"medium"}>geo datbases</Heading>
</Box>

            </Flex>        
       
        

       
    </Box>
</Flex>
{/*  */}
<Flex marginLeft={"-80%"} marginTop={"20%"}>
  <Box width={"110%"}>

    <Image src="https://cdn.semrush.com/static/index/Oleg_Shchegolev_in_hat.0ac9c95bbf09.webp"/>
  </Box>
  <Box marginLeft={"5%"} marginTop={"15%"}>
<Heading fontWeight={"medium"} fontSize={"5xl"} width={"200%"}  color={"black"}>Our CEO will eat his hat</Heading>
<Heading  marginTop={"7%"} width={"200%"}  color={"black"} fontWeight={"medium"} fontSize={"xl"}>... if you find another tool that lets you do all these things</Heading>





<List fontSize={"lg"} marginTop={"12%"} width={"200%"} textAlign={"start"} marginLeft={"19%"} color={"black"} spacing={3}>
  <ListItem>
  <CheckIcon marginRight={"2%"} color={"orange"}/>Access over 22 billion keywords for 130 countries
    
  </ListItem>
  <ListItem>
  <CheckIcon marginRight={"2%"}  color={"orange"}/>
  Run in-depth website audit based on 130+ checks
  </ListItem>
  <ListItem>
  <CheckIcon marginRight={"2%"}  color={"orange"}/>
  Get recommendations to improve your content to increase search rankings
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
  <CheckIcon marginRight={"2%"}  color={"orange"}/>
  Track and analyze competitor websites and marketing strategies
  </ListItem>
  <ListItem>
  <CheckIcon marginRight={"2%"}  color={"orange"}/>
  Create and track your PPC campaigns
  </ListItem>
  <ListItem>
  <CheckIcon marginRight={"2%"}  color={"orange"}/>
  Draft, schedule and post content on social
  </ListItem>
  <ListItem>
  <CheckIcon marginRight={"2%"}  color={"orange"}/>
  Draft, schedule and post content on social
  </ListItem>
</List>

<Button h={"55px"}  marginLeft={"-2%"} 
      width={"106%"}
marginTop={"12%"}
marginLeft={"19%"}
bg={"#ff622d"} color={'white'}
                  _hover={{
                    bg: '#b23300',
                  }} size='lg'>
Discover all Semrush features
  </Button>
  </Box>
</Flex>
{/* */}


    </Container>
    <Box marginTop={"10%"} height={"298px"} bg={"#421983"}>
<Heading  py={"3%"} marginLeft={"-48%"} fontSize={"5xl"} width={"200%"}  >Get started with Semrush today</Heading>
<Heading fontWeight={"normal"} marginTop={"-1.5%"}  marginLeft={"-48%"} fontSize={"2xl"} width={"200%"} > Get 7 days of full access to all toolkits. Cancel anytime.</Heading>
<Button h={"55px"}  marginLeft={"-2%"} 
    
marginTop={"2%"}
marginLeft={"4%"}
bg={"#ff622d"} color={'white'}
                  _hover={{
                    bg: '#b23300',
                  }} size='lg'>
Discover all Semrush features
  </Button>
</Box>

{/* Footer component import */}
<Footer/>
</Box>

    </>
    )
}