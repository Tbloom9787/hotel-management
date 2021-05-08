import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
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
  useBoolean
} from '@chakra-ui/react';
//if not highlighted, then not used
 //https://chakra-ui.com/docs/form/checkbox


 const Housekeeping = () => {
  
    const [checkedItems, setCheckedItems] = React.useState([false, false])
    const Toast = useToast()
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
    const [checked, setChecked] = useState(false);
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
        HouseKeeping Management
      </Heading>
      {rooms && rooms.map((room) => { 
        return(
      <SimpleGrid columns={3} spacing='60px'>
            <VStack key={rooms.number} h='auto' maxW='sm' spacing='24px'>
            <Flex>
              <Box p={5} shadow='md' borderWidth='1px' bg ='blue.100'>
                <Heading pb={2} align='center'>Room {room.number}</Heading>
                  <Box w='200px' h ='320px'>
                    <Checkbox onClick = {() =>setChecked(true) } isChecked = {allChecked} isIndeterminate={isIndeterminate} onChange = {(e) => setCheckedItems([e.target.checked, e.target.checked])}>Check if clean</Checkbox>
                    <Stack pl={6} mt={1} spacing={1}>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[3]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Bathrooms </Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[4]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Towels </Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[5]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Electronics </Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[6]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Dusting </Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[7]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Carpet </Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[8]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >BedSheets </Checkbox>
                    </Stack>
                    <Stack mt={4} spacing={2} direction="column" align="left">
                    <Button p={5} pb={5} colorScheme='blue' 
                        onClick={()  =>  
                          {checked ? Toast({
                            title: 'Room Updated',
                            checked: true,
                            description: 'The room is now available',
                            status: 'success',
                            duration: 9000,
                            isClosable: true
                        }) : Toast({title: 'Room not Cleaned Yet!', isClosable: true})}
                      }
                    >
                      Submit
                    </Button>
                  </Stack>
                </Box>
            </Box>
            </Flex>
          </VStack>
      </SimpleGrid>
         ); 
      })}
    </Layout>
  );
};

export default Housekeeping;
