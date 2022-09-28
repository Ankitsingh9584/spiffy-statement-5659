
// import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
// export default function Navbar (){
//   return (
  
// <Flex minWidth='max-content' alignItems='center' gap='2'>
//   <Box p='2'>
//     <Heading size='md'>Chakra App</Heading>
//   </Box>
//   <Spacer />
//   <ButtonGroup gap='2'>
//     <Button colorScheme='teal'>Sign Up</Button>
//     <Button colorScheme='teal'>Log in</Button>
//   </ButtonGroup>
// </Flex>

//   )
// }


import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';


// our imports
import Login from './Login';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('#111317', 'gray.800')}
        color={useColorModeValue('#a1a6af', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('white', 'white')}>
  <Image color={"white"} src="https://seeklogo.com/images/S/semrush-logo-A3301E3A06-seeklogo.com.png"/>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
          display={{ base: 'none', md: 'inline-flex' }}
            as={'a'}
            fontSize={'sm'}
            fontWeight={600}
            variant={'link'}
            // href={'#'}
            onClick={(e)=>{window.location.href="/login"}}
            color={"#fff"}
            border={"5px"}
         w={"80px"}
            borderColor={"white"}
            _hover={{
              bg: '#d1d4db',
            }}
            >
            Login In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#00ba96'}
            onClick={(e)=>{window.location.href="/signup"}}
            _hover={{
              bg: '#008275',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} bgColor={"#111317"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={"#a1a6af"}
                _hover={{
                  textDecoration: 'none',
                  color: "white",
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
                bgColor={"black"}>
                <Stack color={"white"}  >
                  {navItem.children.map((child) => (
                    <DesktopSubNav  key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{  }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
          align={"start"}
          fontSize={"xl"}
            transition={'all .3s ease'}
          _hover={{ color: 'orange' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text  align={"start"} fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} 
    backgroundColor={"#111317"}
    onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('white', 'white')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
       
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link color={"white"} key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Feature',
   
  },
  {
    label: 'Pricing',
    
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Blog',
        subLabel: "Read the industry's latest thoughts on digital marketing, content strategy, SEO, PPC, social media and more.",
        href: '#',
      },
      {
        label: "Whats's New",
        subLabel: "Keep track of the newest Semrush features and improvements.",
        href: '#',
      },
      {
        label: "Ebooks",
        subLabel: "A range of downloadable guides in PDF format that can help you broaden your knowledge and improve your skills.",
        href: '#',
      },
    
    ],
  },
  {
    label: 'Company',
    href: '#',
  },
  {
    label: 'App Center',
    href: '#',
  },
  {
    label: 'Extra Tools',
    href: '#',
  },
];