import React from "react";
import { Box, Heading, Icon, Text } from '@chakra-ui/react';
import { BsArrowRight } from "react-icons/bs";
const Footer1 = ()=>{
    return(
        <>
            <Box p={10} display="flex" flexDirection="column" alignItems="center">
                <Heading as="h5" fontSize='xl'>
                    At AFOLUCK Nig Ltd, we are committed to excellence in every project we undertake. 
                </Heading>
                <Heading as="h5" fontSize='xl'>
                    With our unwavering dedication to quality, innovation, and client satisfaction, we have established
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