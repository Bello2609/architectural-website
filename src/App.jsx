import React from "react";
import { Box, Heading, Text, Wrap, WrapItem, Icon } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
//component
import Header from "./Component/Header";
import ImageSlider from "./Component/ImageSlider";
import * as images from "../images";
import Features from "./Component/Features";
import Footer1 from "./Component/Footer1";
import Footer2 from "./Component/Footer2";
const App = ()=>{
  return (
    <>
      <Box width="100%" height="100%">
          <Header />
          <ImageSlider />
          <Box display="flex" p={10} mt={10}>
            <Box display="flex" flexDirection="column" >
                <Heading as="h5" fontStyle="italic">
                    About Us
                </Heading>
                <Wrap my={5}>
                  <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                    We are a team of planners, architects, landscape architects and interior designers
                    headquartered in New York and San Francisco with a network of domestic and international 
                    offices.
                  </WrapItem>
                </Wrap>
                <Box display="flex" alignItems="center" cursor="pointer">
                  <Text as="b" mr={5}>READ MORE</Text>
                  <Icon as={BsArrowRight} />
                </Box>
            </Box>
            <Box>
                <Heading as="h5" fontStyle="italic">
                        About Us
                </Heading>
                <Wrap my={5} >
                  <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                    We are a team of planners, architects, landscape architects and interior designers
                    headquartered in New York and San Francisco with a network of domestic and international 
                    offices.
                  </WrapItem>
                </Wrap>
                <Box display="flex" alignItems="center" cursor="pointer">
                  <Text as="b" mr={5}>READ MORE</Text>
                  <Icon as={BsArrowRight} />
              </Box>
            </Box>
          </Box>
          <Box p={10} mt={10}>
              <Heading as="h5">
                  Latest News
              </Heading>
              <Box display="flex" mt={5}>
                  <img src={images.cert} alt="cert" />
                  <Wrap>
                      <WrapItem color="gray.500" fontSize='lg' fontWeigt="400">
                          Hart Howerton is a certified B Corp. This certification means we meet the 
                          highest standards of verified social and environmental performance, 
                          sustainability, public transparency, and legal accountability.
                           Becoming a B Corp also means that our long-held values of inclusion, 
                           sustainability, and respect for the land are validated. By building 
                           complete environments, we create benefit for not just the shareholders, 
                           but for all stakeholders: our clients, vendors, employees, communities, 
                           and the environment.
                      </WrapItem>
                  </Wrap>
              </Box>
              <Box display="flex">
                  <Box display="flex" alignItems="center" cursor="pointer">
                      <Text as="b" mr={5}>READ MORE</Text>
                      <Icon as={BsArrowRight} />
                  </Box>
                  <Box display="flex" alignItems="center" cursor="pointer" ml={5}>
                      <Text as="b" mr={5}>READ MORE</Text>
                      <Icon as={BsArrowRight} />
                  </Box>
              </Box>
          </Box>
          <Features />
          <Footer1 />
          <Footer2 />
      </Box>
      
    </>
  );
}
export default App;