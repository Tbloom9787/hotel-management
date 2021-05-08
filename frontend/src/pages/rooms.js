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

const Rooms = () => {
  const router = useRouter();
  const [rooms, setRooms] = useState(false);
  const [clickable, setClick] = useState(false);

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
        All Rooms
      </Heading>
      {rooms &&
        rooms.map((room) => {
          return (
            <>
              <div key={room.number}>
                <Flex>
                  <Box
                    maxW='xlg'
                    borderWidth='1px'
                    borderRadius='xxlg'
                    overflow='hidden'
                  >
                    <Box d='flex' p='12' alignItems='baseline'>
                      <Table variant='simple'>
                        <Thead>
                          <Tr>
                            <Th>Room Number {room.number}</Th>
                            {/*<Th>{room.number}</Th>*/}
                          </Tr>
                        </Thead>
                        <Tbody>
                          {room.status == 'Vacant' ? (
                            <Tr>
                              <NextLink href='/reservations'>
                                <Link>
                                  <Button colorScheme='green'>
                                    <Td>Room Type:</Td>
                                    <Td>{room.type}</Td>
                                    <Td>Room Status:</Td>
                                    <Td>{room.status}</Td>
                                  </Button>
                                </Link>
                              </NextLink>
                            </Tr>
                          ) : (
                            <Tr bg='yellow'>
                              <Td>Room Type:</Td>
                              <Td>{room.type}</Td>
                              <Td>Room Status:</Td>
                              <Td>{room.status}</Td>
                            </Tr>
                          )}
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

export default Rooms;
