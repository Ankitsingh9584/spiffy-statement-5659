
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import axios from  "axios"
export default function Signup(){
const [email,setEmail]=useState("")
const [pass,setPass]=useState("")

    const [showPassword, setShowPassword] = useState(false);
const setTodb =()=>{

axios.post("http://localhost:8000/posts",{
   
    email:email,
    password:pass
    
})
}
    return (
        <Flex>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        width={"50%"}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            Create your account 
            </Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
        
              <FormControl id="email" isRequired>
                <FormLabel>Email </FormLabel>
                <Input type="email"  onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}
                  onChange={(e)=>setPass(Number(e.target.value))}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'#ff642d'}
                  color={'white'}
                  _hover={{
                    bg: '#b23300'
                
                  }}
                  onClick={setTodb}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already have an account? <Link  onClick={()=>window.location.href="/login"}  color={'#ff642d'}>Log in</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Box width={"50%"} bgColor={"#B880FF"}>
<Heading
fontSize={"3xl"}
color={"white"}
align={'center'}
justify={'center'}
marginTop={"16%"}
marginLeft={"8%"}
width={"60%"}
textAlign={"start"}
>By using Semrush, my team saves a lot of time by working on the right content and in a more data-driven way.

</Heading>
<Heading
color={"white"}
textAlign={"start"}
marginTop={"7%"}
marginLeft={"8%"}
fontSize={"l"}
>Idan Segal</Heading>
<Heading
color={"#808080"}
textAlign={"start"}
marginTop={"0.5%"}
marginLeft={"8%"}
fontSize={"sm"}
>Organic Growth Lead</Heading>
<Heading
fontSize={"4xl"}
color={"white"}
textAlign={"start"}
marginTop={"2%"}
marginLeft={"8%"}
>Wix.com</Heading>
      </Box>
      </Flex>
    );
}