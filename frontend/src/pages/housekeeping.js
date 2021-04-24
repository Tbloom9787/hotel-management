import React from 'react';
import Layout from '../components/Layout';
import {
  Box,
  Heading,
  Flex,
  Text,
  Stack,
  SimpleGrid,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

const fakeData = [
  {
    id: 1,
    houseKeeper: 'maria',
    roomNumber: 1,
    roomType: 'supreme',
    roomStatus: 'vacant',
    bathroom: 2,
    towels: 3,
    bedSheets: 2,
    vacuum: 'no',
    dusting: 'yes',
    electronics: 'ps5, 2 tvs',
  },

  {
    id: 2,
    houseKeeper: 'maria',
    roomNumber: 2,
    roomType: 'economy',
    roomStatus: 'occupied',
    bathroom: 1,
    towels: 6,
    bedSheets: 2,
    vacuum: 'no',
    dusting: 'yes',
    electronics: 'wireless charging, tv',
  },
  {
    id: 3,
    houseKeeper: 'maria',
    roomNumber: 3,
    roomType: 'economy',
    roomStatus: 'vacant',
    bathroom: 1,
    towels: 5,
    bedSheets: 4,
    vacuum: 'yes',
    dusting: 'yes',
    electronics: 'tv',
  },
];

const Housekeeping = () => {
  return (
    <Layout>
      <Heading size='4xl' mb={10}>
        HouseKeeping Management
      </Heading>
      <SimpleGrid columns={3} spacing='60px'>
        {fakeData.map((r) => {
          return (
            <Stack key={r.id} h='auto'>
              <Box p={5} shadow='md' borderWidth='1px'>
                <Heading pb={2}>roomNumber {r.roomNumber}</Heading>
                <UnorderedList>
                  <ListItem> houseKeeper: {r.houseKeeper}</ListItem>
                  <ListItem>bathrooms: {r.bathroom}</ListItem>
                  <ListItem> towels {r.towels}</ListItem>
                  <ListItem>roomStatus: {r.roomStatus}</ListItem>
                  <ListItem>electronics: {r.electronics}</ListItem>
                  <ListItem>dusting: {r.dusting}</ListItem>
                  <ListItem>vacuum: {r.vacuum}</ListItem>
                  <ListItem>bedSheets: {r.bedSheets}</ListItem>
                  <ListItem>roomType: {r.roomType}</ListItem>
                </UnorderedList>
              </Box>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default Housekeeping;
