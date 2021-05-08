import React, { useState } from 'react';
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
  useBoolean
} from '@chakra-ui/react';
import { isDynamicRoute } from 'next/dist/next-server/lib/router/utils';
//if not highlighted, then not used

const fakeData = [
  {
    id: 1,
    roomStatus: 'VACANT',
    houseKeeper: 'maria',
    roomNumber: 1,
    roomType: 'supreme',
    bathroom: '',
    towels: '',
    bedSheets: '',
    carpet: '',
    dusting: '',
    electronics: '',
  },

  {
    id: 2,
    roomStatus: 'OCCUPIED',
    houseKeeper: 'maria',
    roomNumber: 2,
    roomType: 'economy',
    bathroom: 1,
    towels: 6,
    bedSheets: 2,
    vacuum: 'no',
    dusting: 'yes',
    electronics: 'tv',
  },
  {
    id: 3,
    roomStatus: 'VACANT',
    houseKeeper: 'maria',
    roomNumber: 3,
    roomType: 'economy',
    bathroom: 1,
    towels: 5,
    bedSheets: 4,
    vacuum: 'yes',
    dusting: 'yes',
    electronics: 'tv',
  },
  {
    id: 4,
    roomStatus: 'VACANT',
    houseKeeper: 'maria',
    roomNumber: 4,
    roomType: 'economy',
    bathroom: 1,
    towels: 5,
    bedSheets: 4,
    vacuum: 'yes',
    dusting: 'yes',
    electronics: 'tv',
  },
  {
    id: 5,
    roomStatus: 'VACANT',
    houseKeeper: 'maria',
    roomNumber: 5,
    roomType: 'economy',
    bathroom: 1,
    towels: 5,
    bedSheets: 4,
    vacuum: 'yes',
    dusting: 'yes',
    electronics: 'tv',
  },
  {
    id: 6,
    roomStatus: 'VACANT',
    houseKeeper: 'maria',
    roomNumber: 6,
    roomType: 'economy',
    bathroom: 1,
    towels: 5,
    bedSheets: 4,
    vacuum: 'yes',
    dusting: 'yes',
    electronics: 'tv',
  },
];
 //https://chakra-ui.com/docs/form/checkbox


 const Housekeeping = () => {
  
    const [checkedItems, setCheckedItems] = React.useState([false, false])
    const Toast = useToast()
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
    const [checked, setChecked] = useState(false) 
  return (
    <Layout>
      <Heading size='4xl' mb={10}>
        HouseKeeping Management
      </Heading>
      <SimpleGrid columns={3} spacing='60px'>
        {fakeData.map((r) => {
          return (
            <VStack key={r.id} h='auto' maxW='sm' spacing='24px'>
            <Flex>
              <Box p={5} shadow='md' borderWidth='1px' bg ='blue.100'>
                <Heading pb={2} align='center'>Room {r.roomNumber}</Heading>
                  <Box w='200px' h ='320px'>
                    <Checkbox onClick = {() =>setChecked(true) } isChecked = {allChecked} isIndeterminate={isIndeterminate} onChange = {(e) => setCheckedItems([e.target.checked, e.target.checked])}>Check if clean</Checkbox>
                    <Stack pl={6} mt={1} spacing={1}>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[3]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Bathrooms {r.bathroom}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[4]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Towels {r.towels}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[5]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Electronics {r.electronics}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[6]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Dusting {r.dusting}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[7]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Carpet {r.vacuum}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[8]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >BedSheets {r.bedSheets}</Checkbox>
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
          );
        })}
        
      </SimpleGrid>
    </Layout>
  );
};

export default Housekeeping;
