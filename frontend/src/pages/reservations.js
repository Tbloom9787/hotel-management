import React from 'react';
import Layout from '../components/Layout';
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
} from '@chakra-ui/react';
import { isDynamicRoute } from 'next/dist/next-server/lib/router/utils';
//if not highlighted, then not used

const fakeData = [
  {
    id: 1,
    FirstName: 'John',
    LastName: 'Adams',
    DateMade: '05/06/2021',
    CheckIn: '06/04/2021',
    CheckOut: '06/10/2021',
    RoomType: 'Deluxe Suite',
    RoomNumber: '007',
    Website: 'www.expedia.com',
    DailyRate: '$200',
    TotalCharge: '$1400',
  }
];
 //https://chakra-ui.com/docs/form/checkbox


 const Reservations = () => {
  
    const [checkedItems, setCheckedItems] = React.useState([false, false])
    const Toast = useToast()
    const statuses = ['success', 'error', 'warning', 'info']
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  return (
    <Layout>
      <Heading size='4xl' mb={10}>
        Reservations
      </Heading>
      <SimpleGrid columns={3} spacing='60px'>
        {fakeData.map((r) => {
          return (
            <VStack key={r.id} h='auto' maxW='sm' spacing='24px'>
            <Flex>
              <Box p={5} shadow='md' borderWidth='1px' bg ='blue.100'>
                <Heading pb={2}>Room {r.roomNumber}</Heading>
                  <Box w='200px' h ='550px'>
                    <Stack mt={4} spacing={4} direction="column" align="left">
                    <th align='left'>First Name: {r.FirstName}</th>
                    <th align='left'>Last Name: {r.LastName}</th>
                    <th align='left'>Date Created: {r.DateMade}</th>
                    <th align='left'>Check In: {r.CheckIn}</th>
                    <th align='left'>Check Out: {r.CheckOut}</th>
                    <th align='left'>Room Type: {r.RoomType}</th>
                    <th align='left'>Website: {r.Website}</th>
                    <th align='left'>Daily Rate: {r.DailyRate}</th>
                    <th align='left'>Total: {r.TotalCharge}</th>
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
                      <Button p={5} pb={5} colorScheme='blue'
                        onClick={() => Toast({
                          title: 'Submitted.',
                          description: 'Reservation has been submitted.',
                          status: 'info',
                          duration: 9000,
                          isClosable: true,
                        })}
                      >
                        Submit
                      </Button>
                  </Stack>
                </Box>
            </Box>
            </Flex>
          </VStack>
          );
        })}
        
      </SimpleGrid>
    </Layout>
  );
};

export default Reservations;