import React from 'react';
import { Box, Flex, Link, Heading } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const NavBar = ({}) => {
  const router = useRouter();
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
          <NextLink href='/reservations'>
            <Link>Reservations</Link>
          </NextLink>
          <NextLink href='/rooms'>
            <Link mr={10}>Rooms</Link>
          </NextLink>
          <NextLink href='/weeklyRooms'>
            <Link mr={10}>Week</Link>
          </NextLink>
          <NextLink href='/housekeeping'>
            <Link mr={10}>Housekeeping</Link>
          </NextLink>
          <NextLink href='/guests' exactpa>
            <Link mr={10}>Guest Profiles</Link>
          </NextLink>
          <NextLink
            href='/currentGuest/[id]'
            as={`/currentGuest/${'6095f39b7e2f3d3d99e090f2'}`}
          >
            <Link>Current Guest Information</Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
