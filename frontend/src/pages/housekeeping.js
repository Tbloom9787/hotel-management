import React from 'react';
import Layout from '../components/Layout';
import {
  Box,
  Heading,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  ListItem,
  UnorderedList,
  Checkbox,
  CheckboxGroup,
  Stack
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
    bathroom: 2,
    towels: 3,
    bedSheets: 2,
    vacuum: 'no',
    dusting: 'yes',
    electronics: 'ps5, 2 tvs',
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
  
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
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
                <Heading pb={2}>Room {r.roomNumber}</Heading>
                  <Box w='200px' h ='350px'>
                    <Checkbox isChecked = {allChecked} 
                    isIndeterminate={isIndeterminate}
                    onChange = {(e) => setCheckedItems([e.target.checked, e.target.checked])}
                    >Test Checkall</Checkbox>
                    <Stack pl={6} mt={1} spacing={1}>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[0]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Check-in </Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[1]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >RoomStatus: {r.roomStatus}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[2]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >HouseKeeper: {r.houseKeeper}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[3]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Bathrooms: {r.bathroom}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[4]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Towels: {r.towels}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[5]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Electronics: {r.electronics}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[6]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Dusting: {r.dusting}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[7]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >Vacuum: {r.vacuum}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[8]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])} >BedSheets: {r.bedSheets}</Checkbox>
                    <Checkbox colorScheme='green' defaultIsNotChecked={checkedItems[9]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[0]])} >RoomType: {r.roomType}</Checkbox>
                    <Checkbox colorScheme='red' defaultIsNotChecked>Check-out </Checkbox>
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
