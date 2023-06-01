import React from "react";
import { Box, Text, Wrap, WrapItem, Button, Heading } from '@chakra-ui/react';
import * as images from "../../images";
import { css } from "@emotion/react";

const Feature = ()=>{
    return (
        <>
            <Box>
                <Box display="flex" width="100%" height="507px">
                    <Box width="50%" height="100%"><img src={images.slide5} className="img_style" alt="slide5" height="100%" /></Box>
                    <Box display="flex" flexDirection="column"  justifyContent="center" pl="10" bg="#f7f7f7" width="50%" height="100%" >
                        <Text as="b" fontSize="sm">Services</Text>
                        <Heading as="h5">Architecture Services</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                            At AFOLUCK Nig Ltd, we believe that architecture should be a harmonious 
                            blend of aesthetics, functionality, and sustainability. Our team of highly
                             skilled architects and designers are passionate about creating spaces 
                             that not only captivate the eye but also enhance the lives of those who 
                             inhabit them. From conceptualization to construction, we provide 
                             comprehensive architectural services tailored to your unique needs. Our services include:
                            </WrapItem>
                        </Wrap>
                        <Button css={styles.butt}>
                            SEE THE WORK
                        </Button>
                    </Box>
                </Box>
                <Box display="flex" width="100%" height="507px">
                    <Box display="flex" flexDirection="column"  justifyContent="center" pl="10" bg="#f7f7f7" width="50%" height="100%" >
                        <Text as="b" fontSize="sm">Architecture Services</Text>
                        <Heading as="h5">Concept Development</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                            We collaborate closely with our clients to understand their vision and
                             objectives, translating them into innovative and inspiring architectural 
                             concepts.
                            </WrapItem>
                        </Wrap>
                        <Button css={styles.butt}>
                            SEE THE WORK
                        </Button>
                    </Box>
                    <Box width="50%" height="100%"><img src={images.slide5} className="img_style" alt="slide5" height="100%" /></Box>
                </Box>
                <Box display="flex" width="100%" height="507px">
                    <Box width="50%" height="100%"><img src={images.slide5} className="img_style" alt="slide5" height="100%" /></Box>
                    <Box display="flex" flexDirection="column"  justifyContent="center" pl="10" bg="#f7f7f7" width="50%" height="100%" >
                        <Text as="b" fontSize="sm">Architecture Services</Text>
                        <Heading as="h5">Design and Planning</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                                Our talented designers use state-of-the-art tools and techniques to 
                                transform concepts into detailed designs and comprehensive plans 
                                that consider every aspect of your project.
                            </WrapItem>
                        </Wrap>
                        <Button css={styles.butt}>
                            SEE THE WORK
                        </Button>
                    </Box>
                </Box>
                <Box display="flex" width="100%" height="507px">
                    
                    <Box display="flex" flexDirection="column"  justifyContent="center" pl="10" bg="#f7f7f7" width="50%" height="100%" >
                        <Text as="b" fontSize="sm">Architecture Services</Text>
                        <Heading as="h5">Project Management</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                                With our experienced project managers at the helm, we ensure seamless
                                 execution, timely delivery, and adherence to budgetary constraints 
                                 throughout the construction process.
                            </WrapItem>
                        </Wrap>
                        <Button css={styles.butt}>
                            SEE THE WORK
                        </Button>
                    </Box>
                    <Box width="50%" height="100%"><img src={images.slide5} className="img_style" alt="slide5" height="100%" /></Box>
                </Box>
                <Box display="flex" width="100%" height="507px">
                    <Box width="50%" height="100%"><img src={images.slide5} className="img_style" alt="slide5" height="100%" /></Box>
                    <Box display="flex" flexDirection="column"  justifyContent="center" pl="10" bg="#f7f7f7" width="50%" height="100%" >
                        <Text as="b" fontSize="sm">Architecture Services</Text>
                        <Heading as="h5">Sustainability and Green Building</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                                We are committed to promoting environmentally friendly practices in 
                                our designs. Our architects incorporate sustainable solutions and 
                                green building techniques to minimize environmental impact and 
                                maximize energy efficiency.
                            </WrapItem>
                        </Wrap>
                        <Button css={styles.butt}>
                            SEE THE WORK
                        </Button>
                    </Box>
                </Box>
                <Box display="flex" width="100%" height="507px">
                    
                    <Box display="flex" flexDirection="column"  justifyContent="center" pl="10" bg="#f7f7f7" width="50%" height="100%" >
                        <Text as="b" fontSize="sm">Services</Text>
                        <Heading as="h5">Hospitality Services:</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                                We specialize in creating captivating and functional spaces for 
                                hotels and resorts that cater to the unique needs and desires of 
                                your target market. From elegant lobbies to luxurious guest rooms,
                                our designs enhance the overall guest experience
                            </WrapItem>
                        </Wrap>
                        <Button css={styles.butt}>
                            SEE THE WORK
                        </Button>
                    </Box>
                    <Box width="50%" height="100%"><img src={images.slide5} className="img_style" alt="slide5" height="100%" /></Box>
                </Box>
                <Box display="flex" width="100%" height="507px">
                    <Box width="50%" height="100%"><img src={images.slide5} className="img_style" alt="slide5" height="100%" /></Box>
                    <Box display="flex" flexDirection="column"  justifyContent="center" pl="10" bg="#f7f7f7" width="50%" height="100%" >
                        <Text as="b" fontSize="sm">Hospitality Services</Text>
                        <Heading as="h5">Restaurant and Bar Design</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                                Our talented designers have a keen eye for creating immersive dining 
                                experiences. Whether it's a trendy bar, a fine dining restaurant, 
                                or a casual cafe, we ensure that every aspect of the design
                                 contributes to a memorable experience.

                            </WrapItem>
                        </Wrap>
                        <Button css={styles.butt}>
                            SEE THE WORK
                        </Button>
                    </Box>
                </Box>
                <Box display="flex" width="100%" height="507px">
                    
                    <Box display="flex" flexDirection="column"  justifyContent="center" pl="10" bg="#f7f7f7" width="50%" height="100%" >
                        <Text as="b" fontSize="sm">Hospitality Services</Text>
                        <Heading as="h5">Spa and Wellness Design</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                            We understand the importance of relaxation and rejuvenation in the 
                            hospitality industry. Our team crafts serene and tranquil spa 
                            environments that promote a sense of well-being and tranquility.
                            
                            </WrapItem>
                        </Wrap>
                        <Button css={styles.butt}>
                            SEE THE WORK
                        </Button>
                    </Box>
                    <Box width="50%" height="100%"><img src={images.slide5} className="img_style" alt="slide5" height="100%" /></Box>
                </Box>
                <Box display="flex" width="100%" height="507px">
                    <Box width="50%" height="100%"><img src={images.slide5} className="img_style" alt="slide5" height="100%" /></Box>
                    <Box display="flex" flexDirection="column"  justifyContent="center" pl="10" bg="#f7f7f7" width="50%" height="100%" >
                        <Text as="b" fontSize="sm">Hospitality Services</Text>
                        <Heading as="h5">Interior Design and Decor</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                                Our expertise extends to interior design and decor services, 
                                where we curate stunning interiors that harmonize with the 
                                overall architectural design. From furniture selection to lighting 
                                and color schemes, we create spaces that are visually captivating 
                                and functionally efficient.
                            </WrapItem>
                        </Wrap>
                        <Button css={styles.butt}>
                            SEE THE WORK
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
const styles = {
    butt: css`
        width: 200px;
        height: 50px;
        background: #000;
        color: #fff;
        border-radius: 0px;
        .img_style{
            object-fit: contain;
        }
    `
}
export default Feature;