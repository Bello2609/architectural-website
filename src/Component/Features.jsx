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
                        <Text as="b" fontSize="sm">FEATURED:</Text>
                        <Heading as="h5">Santa Lucia Preserve</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                            The design of this 20,000 acre community preserve reflects the belief 
                            that the property's intrinsic value lies in the site's natural beauty,
                            vastness and richness of its landscape.
                            </WrapItem>
                        </Wrap>
                        <Button css={styles.butt}>
                            SEE THE WORK
                        </Button>
                    </Box>
                </Box>
                <Box display="flex" width="100%" height="507px">
                    <Box display="flex" flexDirection="column"  justifyContent="center" pl="10" bg="#f7f7f7" width="50%" height="100%" >
                        <Text as="b" fontSize="sm">FEATURED:</Text>
                        <Heading as="h5">Santa Lucia Preserve</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                            The design of this 20,000 acre community preserve reflects the belief 
                            that the property's intrinsic value lies in the site's natural beauty,
                            vastness and richness of its landscape.
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
                        <Text as="b" fontSize="sm">FEATURED:</Text>
                        <Heading as="h5">Santa Lucia Preserve</Heading>
                        <Wrap my={5}>
                            <WrapItem color="gray.500" fontSize='lg' fontWeight="400">
                            The design of this 20,000 acre community preserve reflects the belief 
                            that the property's intrinsic value lies in the site's natural beauty,
                            vastness and richness of its landscape.
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