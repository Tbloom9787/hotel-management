import React from 'react';
import { Box, Flex, Link, Heading } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';


const NavBar = ({}) => {
  const router =useRouter()
  return (
    <Flex zIndex={1} pos='sticky' top={0} bg='lime' p={4}>
      <Flex flex={1} m='auto' maxW={1200} align='center'>
        <NextLink href='/'>
          <Link>
            <Heading>Hotel Management</Heading>
          </Link>
        </NextLink>
        <Flex ml='auto' d='flex' justifyContent='space-between'>
          <NextLink href='/welcome'>
            <Link mr={10}>Welcome</Link>
          </NextLink>
          <NextLink href='/housekeeping'>
            <Link mr={10}>Housekeeping</Link>
          </NextLink>
          <NextLink href='/guests'>
            <Link mr={10}>Guest Profiles</Link>
          </NextLink>
          <NextLink href='/currentGuests'>
            <Link>Current Guest Information</Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;