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
  Button,
  Text,
} from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from '../components/Layout';

const Guests = () => {
  const [guests, setGuests] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get('http://localhost:8000/guests')
          .then(async (res) => {
            setGuests(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setGuests]);

  return (
    <Layout>
      <Heading size='4xl' mb={10} textAlign='center'>
        Guests Information
      </Heading>
      {guests[counter] && (
        <>
          <Flex justifyContent='center'>
            <Box
              maxW='sm'
              borderWidth='1px'
              borderRadius='lg'
              overflow='hidden'
            >
              <Flex justifyContent='center'>
                <WrapItem pt='6'>
                  <Avatar
                    size='2xl'
                    name={guests[counter].firstName}
                    // src='https://bit.ly/broken-link'
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
                      <Td>{guests[counter].firstName}</Td>
                    </Tr>
                    <Tr>
                      <Td>Last Name:</Td>
                      <Td>{guests[counter].lastName}</Td>
                    </Tr>
                    <Tr>
                      <Td>Email:</Td>
                      <Td>{guests[counter].email}</Td>
                    </Tr>
                    <Tr>
                      <Td>Phone:</Td>
                      <Td>{guests[counter].phone}</Td>
                    </Tr>
                    <Tr>
                      <Td>Address:</Td>
                      <Td>{guests[counter].address}</Td>
                    </Tr>
                    <Tr>
                      <Td>ID:</Td>
                      <Td>{guests[counter].stateID}</Td>
                    </Tr>
                    <Tr>
                      <Td>License Plate:</Td>
                      <Td>{guests[counter].licensePlate}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </Flex>
          <Flex justifyContent='center'>
            <Button
              onClick={() => {
                if (counter > 0) {
                  setCounter(counter - 1);
                }
                console.log('clicked', counter);
              }}
            >
              click me to go back
            </Button>
            <Button
              onClick={() => {
                if (counter < guests.length - 1) {
                  setCounter(counter + 1);
                }
                console.log('clicked', counter);
              }}
            >
              click me forward
            </Button>
          </Flex>
        </>
      )}
      {/* {guests &&
        guests.map((guest) => {
          return (
              <div key={guest.id}>
                <Flex>
                  <Box
                    maxW='sm'
                    borderWidth='1px'
                    borderRadius='lg'
                    overflow='hidden'
                  >
                    <Flex justifyContent='center'>
                      <WrapItem pt='6'>
                        <Avatar
                          size='2xl'
                          name={guest.firstName}
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
                            <Td>{guest.firstName}</Td>
                          </Tr>
                          <Tr>
                            <Td>Last Name:</Td>
                            <Td>{guest.lastName}</Td>
                          </Tr>
                          <Tr>
                            <Td>Email:</Td>
                            <Td>{guest.email}</Td>
                          </Tr>
                          <Tr>
                            <Td>Phone:</Td>
                            <Td>{guest.phone}</Td>
                          </Tr>
                          <Tr>
                            <Td>Address:</Td>
                            <Td>{guest.address}</Td>
                          </Tr>
                          <Tr>
                            <Td>ID:</Td>
                            <Td>{guest.stateID}</Td>
                          </Tr>
                          <Tr>
                            <Td>License Plate:</Td>
                            <Td>{guest.licensePlate}</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </Box>
                  </Box>
                </Flex>
              </div>
          );
        })} */}
    </Layout>
  );
};

export default Guests;
