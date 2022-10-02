import { Box,Image, Button, Container, Flex,Grid,GridItem, Heading,Stack } from "@chakra-ui/react";
import Footer from "./Footer";

const data=[{top:"Keyword Research",mid:" Bring traffic to your site by finding the best keywords",bottomLeft:"Learn more",bottomRight:"6 tools"},
{top:"               On-page SEO",mid:"  Get new ideas to improve your site’s health and SEO performance",bottomLeft:"Learn more",bottomRight:"3 tools"},
{top:"              Competitor Analysis",mid:"  Increase your website traffic and improve performance",bottomLeft:"Learn more",bottomRight:"4 tools"},
{top:" Content Marketing",mid:"    Develop a powerful content strategy with data-driven solutions ",bottomLeft:"Learn more",bottomRight:"6 tools"},
{top:"Local SEO",mid:" Optimize your site for local searches to get more customers in your area ",bottomLeft:"Learn more",bottomRight:"4 tools"},
{top:"Rank Tracking",mid:"ly changes of your target keywords in your target location ",bottomLeft:"Learn more",bottomRight:"3 tools"},
{top:"Social Media Management",mid:"  Increase your brand awareness with our social media posting and analytic",bottomLeft:"Learn more",bottomRight:"2 tools"},
{top:"Link Building",mid:"              Find unique opportunities to strengthen your backlink profile ",bottomLeft:"Learn more",bottomRight:"5 tools"},
{top:"  Content Optimization",mid:" Drive more organic traffic with personalized recommendations ",bottomLeft:"Learn more",bottomRight:"2 tools"},
{top:"Market Analysis",mid:"              Analyze your position and get ahead of the competition in a current",bottomLeft:"Learn more",bottomRight:"2 tools"},
{top:"Paid Optimization",mid:" Build your perfect paid search campaign with our keyword research tools ",bottomLeft:"Learn more",bottomRight:"3 tools"},
{top:"Keyword Research",mid:" Bring traffic to your site by finding the best keywords ",bottomLeft:"Learn more",bottomRight:"5 tools"}



]

export default function Pricing(){


    return(
        <>
        <Container  width={"90%"}>
<Flex marginTop={"9%"} gap={"10%"} marginLeft={"0%"} width={"100%"}>
    <Box marginLeft={"-65%"} width={"50%"}>
      <Heading fontSize={"5xl"} align={"start"} width={"300%"} color={"black"}>Semrush Features</Heading>  
      <Heading marginTop={"16%"} fontWeight={"normal"} align={"start"} width={"210%"} color={"black"} 
      fontWeight={"normal"} fontSize={"21px"}>Start solving your marketing challenges today with 55+ tools and reports on Semrush..</Heading>
      <Button h={"55px"}  marginLeft={"-2%"} 
      width={"106%"}
marginTop={"16%"}
bg={"#ff622d"} color={'white'}
                  _hover={{
                    bg: '#b23300',
                  }} size='lg'>
Get Started For Free
  </Button>
  </Box>
  <Box marginLeft={"80%"} marginRight={'-80%'}>
    <Image src="https://cdn.semrush.com/features/static/features/index/illustration.c4b3988bc6c1.svg"
    />
    
    </Box>  
       
     

       

</Flex>
<Box marginLeft={"-100%"}>
<Heading marginLeft={"-20%"}>Choose your area of interest</Heading>
<Flex marginTop={"3%"} marginLeft={"15%"} gap={"2%"}>
    <Button width={"9%"} borderRadius={"17px"} bg={"#00bc98"}>All</Button>
    <Button  width={"12%"} border={"1px solid green"} bg={"white"} _hover={{color:"#00bc98"}} borderRadius={"17px"}> SEO</Button>
    <Button  width={"14%"} border={"1px solid green"} bg={"white"} _hover={{color:"#00bc98"}} borderRadius={"17px"}>Content</Button>
    <Button  border={"1px solid green"} bg={"white"} _hover={{color:"#00bc98"}}  borderRadius={"17px"}>Market Research</Button>
    <Button  border={"1px solid green"} bg={"white"} _hover={{color:"#00bc98"}}  borderRadius={"17px"}>Advertising</Button>
    <Button  border={"1px solid green"} bg={"white"} _hover={{color:"#00bc98"}}  borderRadius={"17px"}>SMM & SERM</Button>


</Flex>
<Grid
width={"100%"}
  h='200px'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(3, 1fr)'
  gap={28}
 
  marginLeft={"15%"}
  marginTop={"12%"}
>

{data.map((el)=>{
    return(

        <Box
        marginTop={"-32%"}
     
        height={"200px"} borderRadius={"7px"} border={"1px solid gray "} width={"140%"} px={"8%"} py={"8%"} textAlign={"center"} >
           <Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontSize={"2xl"}>{el.top}</Heading>
           <Heading width={"89%"} marginTop={"4%"} fontWeight={"semibold"} textAlign={"start"} fontSize={"sm"}
           
           marginBottom={"50px"}
           >           {el.mid}
       </Heading>
           <Heading  _hover={{color:"#ff622d"}}  display={"inline"} fontWeight={"normal"} color={"gray"}  textAlign={"start"} fontSize={"lg"}  >Learn more</Heading>
           <Button  _hover={{color:"#ff622d"}}  marginLeft={"130px"} fontWeight={"semibold"}>{el.bottomRight}</Button>
        </Box>
    )
})}



</Grid>




</Box>

</Container>


<Box borderRadius={"17px"} margin={"auto"} marginTop={"46%"} marginLeft={"11.5%"} height="235px" width={"71%"} bg={"#421983"}>
<Heading fontWeight={"semibold"} color={"white"} py={"3%"} marginLeft={"-48%"} fontSize={"5xl"} width={"200%"}  >Get it all in one with Semrush</Heading>
<Button h={"55px"}  marginLeft={"-2%"} 
    
    marginTop={"0.5%"}
    marginLeft={"2%"}
    w={"22%"}
    bg={"#ff622d"} color={'white'}
                      _hover={{
                        bg: '#b23300',
                      }} size='lg'>
    get free trial
      </Button>
    </Box>


{/*  */}

<Heading fontSize={"5xl"} color={"black"} marginLeft={"-64%"} marginTop={"4.5%"}>All Tools</Heading>
<Flex gap={"9.3%"}  margin={"auto"} marginTop={"3%"} width={"79.2%"} marginBottom={"5%"}>
    <Stack marginLeft={"2%"}>
<Heading color={"black"} textAlign={"start"}fontWeight={"semibold"}  marginTop={"5px"} fontSize={"xl"}>SEO</Heading>

<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Backlink Analytics</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Backlink Audit Tool</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Backlink Gap</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Bulk Analysis</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Domain Overview</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Google Data Studio connectors</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Keyword Gap</Heading>



    </Stack>

    {/* 2nd stack */}
    <Stack marginTop={"3%"} marginLeft={"2%"}>


<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}> Keyword Magic Tool
</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Keyword Overview</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Link Building Tool</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Listing Management</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Log File Analyzer</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>My Reports</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>On Page SEO checker</Heading>
</Stack>

{/* 3rd stack */}
<Stack marginTop={"3%"} marginLeft={"2%"}>


<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}> Organic Research
</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Organic Traffic Insights</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Position Tracking</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Ranks</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Sensor</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Site Audit</Heading>
</Stack>



{/* 4th stack */}
<Stack marginLeft={"2%"}>
<Heading color={"black"} textAlign={"start"}fontWeight={"semibold"}  marginTop={"5px"} fontSize={"xl"}>Content</Heading>

<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Content Audit</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Marketing Calendar</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Post Tracking</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>SEO Content Template</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>SEO Writing Assistant</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Topic Research</Heading>
<Heading _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Readability Checker</Heading>
<Heading  _hover={{color:"#ff622d"}} textAlign={"start"} fontWeight={"normal"} fontSize={"l"} color={"black"}>Rephraser Tool</Heading>



    </Stack>
    </Flex>
<Footer />
        </>
    )
}