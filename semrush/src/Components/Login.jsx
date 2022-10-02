import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,HStack
  } from '@chakra-ui/react';
  import axios from "axios"
import { useState } from 'react';

export default function Login(){

    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
     const [data,setData]=useState([])
    const getData=()=>{
axios.get("http://localhost:8000/posts")
.then(res=>setData(res.data))
let a=false;
data.map((el)=>{
   
    if(el.email==email&&el.password==pass){
    alert("Login Successfull")
    window.location.href="/"
a=true;
    
    }
})
if(a===false){
    alert("User Not Found")
}

    }
    return(
        // <h1 style={{marginTop:"200px"}}>Login</h1>
        <Flex>
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        width={"50%"}
        display={"column"}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack maxW={'lg'} align={'center'}>
            <Heading textAlign={"start"} fontSize={'4xl'}>Log in</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email"  onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  onChange={(e)=>setPass(Number(e.target.value))} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                 
                  <Link color={'#ff642d'}>Forgot password?</Link>
                </Stack>
                <Button
                border={"2px solid white"}
                  bg={'#ff642d'}
                  color={'white'}
                  _hover={{
                    bg: '#b23300',
                  }}
                  onClick={getData}
                  >
             Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        
            
       
      </Flex >
      <Box  backgroundColor={"#6EDBFF"} align={"center"} width={"50%"}>
      <Image width={"70%"} src="https://www.semrush.com/static/images/semrushman.4deb494408156a6748f227586cd1491c.svg"/>
      </Box>
      </Flex>
    )
}