import React from 'react';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Heading,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  ListItem,
  UnorderedList,
  Checkbox,
  CheckboxGroup,
  Stack,
  useToast,
  StackItem,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Link,
} from '@chakra-ui/react';
//if not highlighted, then not used
//https://chakra-ui.com/docs/form/checkbox


const Reservations = () => {
  return(
    <Layout>
      <Heading size='4xl' mb={5}>
        Reservations
      </Heading>
      <SimpleGrid columns={3} spacing='60px'>
            <VStack h='auto' maxW='sm' spacing='24px'>
            <Flex>
              <Box p={5} shadow='md' borderWidth='1px' bg ='blue.100'>
                <Heading pb={2}>Available Rooms (100)</Heading>
                  <Box w='200px' h ='850px' pb={5} mb={5}>
                    <Stack mt={4} spacing={4} direction="column" align="left">
                    <Button p={5} pb={5} colorScheme='green'
                        onClick={() => Toast({
                          title: 'Add Reservation.',
                          description: 'Please fill out the information below.',
                          status: 'success',
                          duration: 9000,
                          isClosable: true,
                        })}
                      >
                        Add
                      </Button>
                      <FormControl id="first-name" isRequired> 
                      <FormLabel>First name</FormLabel>
                      <Input placeholder="First name" />
                      </FormControl>

                      <FormControl id="last-name" isRequired> 
                      <FormLabel>Last name</FormLabel>
                      <Input placeholder="Last name" />
                      </FormControl>

                      <FormControl id="Date Created" isRequired> 
                      <FormLabel>First name</FormLabel>
                      <Input placeholder="Today's Date" />
                      </FormControl>

                      <FormControl id="Check In" isRequired> 
                      <FormLabel>First name</FormLabel>
                      <Input placeholder="Check In" />
                      </FormControl>

                      <FormControl id="Check Out" isRequired> 
                      <FormLabel>First name</FormLabel>
                      <Input placeholder="Check Out" />
                      </FormControl>

                      <FormControl id="Room Type" isRequired> 
                      <FormLabel>First name</FormLabel>
                      <Input placeholder="Room Type" />
                      </FormControl>

                      <FormControl id="Website" isRequired> 
                      <FormLabel>First name</FormLabel>
                      <Input placeholder="Website" />
                      </FormControl>

                      <FormControl id="Daily Rate" isRequired> 
                      <FormLabel>First name</FormLabel>
                      <Input placeholder="Daily Rate" />
                      </FormControl>

                      <Button p={5} pb={5} colorScheme='red'
                        onClick={() => Toast({
                          title: 'Deleted',
                          description: 'Reservation has been deleted.',
                          status: 'error',
                          duration: 9000,
                          isClosable: true,
                        })}
                      >
                        Delete
                      </Button>
                      <NextLink href='/currentGuest/6095f39b7e2f3d3d99e090f2'>
                    <Link>
                      <Button p={5} pb={5} colorScheme='blue'
                      >
                        Submit
                      </Button>
                      </Link>
                      </NextLink>
                  </Stack>
                </Box>
            </Box>
            </Flex>
          </VStack>
      </SimpleGrid>
    </Layout>
  );
};

export default Reservations;
