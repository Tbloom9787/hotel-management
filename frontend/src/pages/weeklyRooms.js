import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
  Box,
  Heading,
  Flex,
  Text,
  Stack,
  SimpleGrid,
  ListItem,
  UnorderedList,
  WrapItem,
  Avatar,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

const weeklyRooms = () => {
  const router = useRouter();
  const [rooms, setRooms] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get('http://localhost:8000/rooms')
          .then(async (res) => {
            setRooms(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setRooms]);

  return (
    <Layout>
      <Heading size='4xl' mb={10}>
        Weekly Room Information
      </Heading>

      {rooms &&
        rooms.map((room) => {
          return (
            <div key={rooms.number}>
              <Flex>
                <Box
                  maxW='xlg'
                  borderWidth='1px'
                  borderRadius='lg'
                  overflow='hidden'
                >
                  <Flex justifyContent='center'>
                    <WrapItem pt='25'></WrapItem>
                  </Flex>
                  <Box d='flex' p='6' alignItems='baseline'>
                    <Table variant='simple'>
                      <Tbody>
                        <Tr>
                          <Th>Room Number</Th>
                          <Th>Monday</Th>
                          <Th>Tuesday</Th>
                          <Th>Wednesday</Th>
                          <Th>Thursday</Th>
                          <Th>Friday</Th>
                          <Th>Saturday</Th>
                          <Th>Sunday</Th>
                        </Tr>
                        {room.number >= '300' ? (
                          <Tr>
                            <Td>{room.number}</Td>
                            <Td>{room.guestFirst}</Td>
                            <Td>
                              <NextLink href='/reservations'>
                                <Link>
                                  <Stack
                                    spacing={4}
                                    direction='row'
                                    align='center'
                                  ></Stack>
                                  <Button colorScheme='blue' size='lg'>
                                    Reserve
                                  </Button>
                                </Link>
                              </NextLink>
                            </Td>
                            <Td>
                              <NextLink href='/reservations'>
                                <Link>
                                  <Stack
                                    spacing={4}
                                    direction='row'
                                    align='center'
                                  ></Stack>
                                  <Button colorScheme='blue' size='lg'>
                                    Reserve
                                  </Button>
                                </Link>
                              </NextLink>
                            </Td>
                            <Td>{room.guestFirst}</Td>
                            <Td>{room.guestFirst}</Td>
                            <Td>{room.guestFirst}</Td>
                            <Td>
                              <NextLink href='/reservations'>
                                <Link>
                                  <Stack
                                    spacing={4}
                                    direction='row'
                                    align='center'
                                  ></Stack>
                                  <Button colorScheme='blue' size='lg'>
                                    Reserve
                                  </Button>
                                </Link>
                              </NextLink>
                            </Td>
                          </Tr>
                        ) : (
                          <Tr>
                            <Td>{room.number}</Td>
                            <Td>
                              <NextLink href='/reservations'>
                                <Link>
                                  <Stack
                                    spacing={4}
                                    direction='row'
                                    align='center'
                                  ></Stack>
                                  <Button colorScheme='blue' size='lg'>
                                    Reserve
                                  </Button>
                                </Link>
                              </NextLink>
                            </Td>
                            <Td>{room.guestFirst}</Td>
                            <Td>
                              <NextLink href='/reservations'>
                                <Link>
                                  <Stack
                                    spacing={4}
                                    direction='row'
                                    align='center'
                                  ></Stack>
                                  <Button colorScheme='blue' size='lg'>
                                    Reserve
                                  </Button>
                                </Link>
                              </NextLink>
                            </Td>
                            <Td>{room.guestFirst}</Td>
                            <Td>{room.guestFirst}</Td>
                            <Td>
                              <NextLink href='/reservations'>
                                <Link>
                                  <Stack
                                    spacing={4}
                                    direction='row'
                                    align='center'
                                  ></Stack>
                                  <Button colorScheme='blue' size='lg'>
                                    Reserve
                                  </Button>
                                </Link>
                              </NextLink>
                            </Td>
                            <Td>{room.guestFirst}</Td>
                          </Tr>
                        )}
                      </Tbody>
                    </Table>
                  </Box>
                </Box>
              </Flex>
            </div>
          );
        })}
    </Layout>
  );
};

export default weeklyRooms;
