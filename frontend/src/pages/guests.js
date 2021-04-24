import { Avatar, WrapItem, Table, Thead, Tr, Th, Tbody, Td, Heading } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../components/Layout';

const Guests = () => {
  // const property = {
  //   imageUrl: 'https://bit.ly/2Z4KKcF',
  //   imageAlt: 'Rear view of modern home with pool',
  //   beds: 3,
  //   baths: 2,
  //   title: 'Modern home in city center in the heart of historic Los Angeles',
  //   formattedPrice: '$1,900.00',
  //   reviewCount: 34,
  //   rating: 4,
  // };

  return (
    <Layout>
      <Heading size='4xl' mb={10}>
        Guest Profile Information
      </Heading>
      <Flex>
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
                <Td>Email:</Td>
                <Td>oshisame@gmail.com</Td>
              </Tr>
              <Tr>
                <Td>Phone:</Td>
                <Td>(949)274-5938</Td>
              </Tr>
              <Tr>
                <Td>Address:</Td>
                <Td>25883 Via Avalon, Fullerton</Td>
              </Tr>
              <Tr>
                <Td>ID:</Td>
                <Td>5F25DVC42</Td>
              </Tr>
              <Tr>
                <Td>License Plate:</Td>
                <Td>KCX295P</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' ml={4} mr={4}>
        <Flex justifyContent='center'>
          <WrapItem pt='6'>
            <Avatar
              size='2xl'
              name='Sasuke Uchiha'
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
                <Td>Sasuke</Td>
              </Tr>
              <Tr>
                <Td>Last Name:</Td>
                <Td>Uci</Td>
              </Tr>
              <Tr>
                <Td>Email:</Td>
                <Td>sasukeuki@gmail.com</Td>
              </Tr>
              <Tr>
                <Td>Phone:</Td>
                <Td>(949)274-5938</Td>
              </Tr>
              <Tr>
                <Td>Address:</Td>
                <Td>25883 Via Avalon, Fullerton</Td>
              </Tr>
              <Tr>
                <Td>ID:</Td>
                <Td>5F25DVC42</Td>
              </Tr>
              <Tr>
                <Td>License Plate:</Td>
                <Td>KCX295P</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Flex justifyContent='center'>
          <WrapItem pt='6'>
            <Avatar
              size='2xl'
              name='Naruto Okami'
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
                <Td>Naruto</Td>
              </Tr>
              <Tr>
                <Td>Last Name:</Td>
                <Td>Okami</Td>
              </Tr>
              <Tr>
                <Td>Email:</Td>
                <Td>naruto_okami@gmail.com</Td>
              </Tr>
              <Tr>
                <Td>Phone:</Td>
                <Td>(949)274-5938</Td>
              </Tr>
              <Tr>
                <Td>Address:</Td>
                <Td>25883 Via Avalon, Fullerton</Td>
              </Tr>
              <Tr>
                <Td>ID:</Td>
                <Td>5F25DVC42</Td>
              </Tr>
              <Tr>
                <Td>License Plate:</Td>
                <Td>KCX295P</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
      </Flex>
    </Layout>
  );
};

export default Guests;
