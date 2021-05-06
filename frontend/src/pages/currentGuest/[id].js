import {
  Avatar,
  WrapItem,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
} from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';

const currentGuests = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <Heading size='4xl' mb={10}>
        Current Guests
      </Heading>
      <Flex w='50vw'>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Flex justifyContent='center'>
            <WrapItem pt='6'>
              <Avatar
                size='2xl'
                name='Oshigaki Kisame'
                src='https://bit.ly/broken-link'
              />
            </WrapItem>
          </Flex>
          <Box d='flex' p='6' alignItems='baseline'>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Guest</Th>
                  <Th>Information</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>First Name:</Td>
                  <Td>Oshigaki</Td>
                </Tr>
                <Tr>
                  <Td>Last Name:</Td>
                  <Td>Kisame</Td>
                </Tr>
                <Tr>
                  <Td>Check-in Date:</Td>
                  <Td>04/02/2021</Td>
                </Tr>
                <Tr>
                  <Td>Check-in Time:</Td>
                  <Td>4:30 pm</Td>
                </Tr>
                <Tr>
                  <Td>Expected Check-out Date:</Td>
                  <Td>04/10/2021</Td>
                </Tr>
                <Tr>
                  <Td>Expected Check-out Time:</Td>
                  <Td>11:00 am</Td>
                </Tr>
                <Tr>
                  <Td>Room Number:</Td>
                  <Td>312</Td>
                </Tr>
                <Tr>
                  <Td>Room Type:</Td>
                  <Td>Deluxe</Td>
                </Tr>
                <Tr>
                  <Td>Room Rate:</Td>
                  <Td>$412/day</Td>
                </Tr>
                <Tr>
                  <Td>Total Charge:</Td>
                  <Td>$3,296.00</Td>
                </Tr>
                <Tr>
                  <Td>Payments Made:</Td>
                  <Td>$2,500.00</Td>
                </Tr>
                <Tr>
                  <Td>Balance:</Td>
                  <Td>$796.00</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default currentGuests;
