import React from "react";
import { Box, Heading, Icon, Text } from '@chakra-ui/react';
import { BsArrowRight } from "react-icons/bs";
const Footer1 = ()=>{
    return(
        <>
            <Box p={10} display="flex" flexDirection="column" alignItems="center">
                <Heading as="h5" fontSize='xl'>
                    We've worked in iconic natural settings, historic towns, and growing cities,
                </Heading>
                <Heading as="h5" fontSize='xl'>
                    across 6 continents and 51 countries.
                </Heading>
                <Box display="flex" my={5}>
                  <Box display="flex" alignItems="center" cursor="pointer">
                      <Text as="b" mr={5}>SEE OUR WORK</Text>
                      <Icon as={BsArrowRight} />
                  </Box>
                  <Box display="flex" alignItems="center" cursor="pointer" ml={5}>
                      <Text as="b" mr={5}>SEE OUR WORK</Text>
                      <Icon as={BsArrowRight} />
                  </Box>
              </Box>
            </Box>
            
        </>
    );
}
export default Footer1;