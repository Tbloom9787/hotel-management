import {
  Link,
  Avatar,
  WrapItem,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import { Box, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import Layout from '../../components/Layout';

const currentGuests = () => {
  const router = useRouter();
  const [room, setRoom] = useState(false);
  const [payment, setPayment] = useState(0);
  const [paymentMade, setPaymentMade] = useState(0);
  const [balance, setBalance] = useState(0);
  const [edit, setEdit] = useState(false);
  const [temp, setTemp] = useState(0);
  const [fieldValues, setFieldValues] = useState({
    guestFirstName: '',
    guestLastName: '',
    guestCheckIn: '',
    guestCheckOut: '',
    roomTotal: '',
  });
  
  const onChange = (e) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;
      try {
        await axios
          .get(`http://localhost:8000/rooms/${router.query.id}`)
          .then(async (res) => {
            setRoom(res.data);
            setBalance(res.data.balance);
            setPaymentMade(res.data.paymentsMade);
            setFieldValues({
              guestFirstName: res.data.guestFirst,
              guestLastName: res.data.guestLast,
              guestCheckIn: res.data.checkIn,
              guestCheckOut: res.data.checkOut,
              roomTotal: res.data.total,
            })
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setRoom, setBalance, setPaymentMade, setFieldValues, temp, router.isReady]);

  return (
    <Layout>
      <Heading size='4xl' mb={10} textAlign='center'>
        Current Guest
      </Heading>
      {room && (
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
                  <NextLink href='/guests'>
                    <Link>
                      <Avatar
                        size='2xl'
                        name={room.guestFirst}
                        src='https://bit.ly/broken-link'
                      />
                    </Link>
                  </NextLink>
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
                      {edit ? (
                        <Td>
                          <Input
                            name='guestFirstName'
                            placeholder={fieldValues.guestFirstName}
                            value={fieldValues.guestFirstName}
                            onChange={onChange}
                            size='xs'
                          />
                        </Td>
                      ) : (
                        <Td>{room.guestFirst}</Td>
                      )}
                    </Tr>
                    <Tr>
                      <Td>Last Name:</Td>
                      {edit ? (
                        <Td>
                          <Input
                            name='guestLastName'
                            placeholder={fieldValues.guestLastName}
                            value={fieldValues.guestLastName}
                            onChange={onChange}
                            size='xs'
                          />
                        </Td>
                      ) : (
                        <Td>{room.guestLast}</Td>
                      )}
                    </Tr>
                    <Tr>
                      <Td>Check-in Date:</Td>
                      {edit ? (
                        <Td>
                          <Input
                            name='guestCheckIn'
                            placeholder={fieldValues.guestCheckIn}
                            value={fieldValues.guestCheckIn}
                            onChange={onChange}
                            size='xs'
                          />
                        </Td>
                      ) : (
                        <Td>{room.checkIn}</Td>
                      )}
                    </Tr>
                    <Tr>
                      <Td>Check-out Date:</Td>
                      {edit ? (
                        <Td>
                          <Input
                            name='guestCheckOut'
                            placeholder={fieldValues.guestCheckOut}
                            value={fieldValues.guestCheckOut}
                            onChange={onChange}
                            size='xs'
                          />
                        </Td>
                      ) : (
                        <Td>{room.checkOut}</Td>
                      )}
                    </Tr>
                    <Tr>
                      <Td>Room Number:</Td>
                      <Td>{room.number}</Td>
                    </Tr>
                    <Tr>
                      <Td>Room Type:</Td>
                      <Td>{room.type}</Td>
                    </Tr>
                    <Tr>
                      <Td>Room Rate:</Td>
                      <Td>${room.rate}.00/day</Td>
                    </Tr>
                    <Tr>
                      <Td>Total Charge:</Td>
                      <Td>
                        {' '}
                        {edit ? (
                          <Td>
                            <Input
                              name='roomTotal'
                              placeholder={fieldValues.roomTotal}
                              value={fieldValues.roomTotal}
                              onChange={onChange}
                              size='md'
                            />
                          </Td>
                        ) : (
                          <Td>${room.total}.00</Td>
                        )}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Payments Made:</Td>
                      <Td>${parseFloat(paymentMade)}</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <FormControl id='amount'>
                          <FormLabel>Make Payment:</FormLabel>
                          <NumberInput
                            onChange={(e) => {
                              setPayment(parseFloat(e));
                            }}
                          >
                            <NumberInputField
                              placeholder='0.00'
                              textAlign='right'
                            />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                        </FormControl>
                      </Td>
                      <Td>
                        <Button
                          onClick={() => {
                            if (balance - payment >= 0) {
                              setBalance(balance - payment);
                              setPaymentMade(paymentMade + payment);
                            }
                          }}
                          mt='5'
                        >
                          Update
                        </Button>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Balance:</Td>
                      <Td>${balance}.00</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </Flex>
        </>
      )}
      <Button onClick={() => setEdit((prevEdit) => !prevEdit)}>Edit</Button>
      <Button onClick={() => setTemp(temp + 1)}>temp {temp}</Button>
      <Button
        onClick={() =>
          axios.patch(`http://localhost:8000/rooms/${router.query.id}`,
          {
            guestFirst: fieldValues.guestFirstName,
            guestLast: fieldValues.guestLastName,
            checkIn: fieldValues.guestCheckIn,
            checkOut: fieldValues.guestCheckOut,
            total: fieldValues.roomTotal,
          })
        }
      >
        Submit
      </Button>
    </Layout>
  );
};

export default currentGuests;
