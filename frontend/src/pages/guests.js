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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';

const Guests = () => {
  const router = useRouter();
  const [guests, setGuests] = useState(false);

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
      {guests &&
        guests.map((guest) => {
          return (
            <>
              <Heading size='4xl' mb={10}>
                Guest Profile Information
              </Heading>
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
            </>
          );
        })}
    </Layout>
  );
};

export default Guests;
