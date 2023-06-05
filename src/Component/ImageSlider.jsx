import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { css } from "@emotion/react";
import * as images from "../../images";

const ImageSlider = ()=>{
    return (
        <>
            <Box position="relative">
                <Box position="relative">
                    <Fade>
                        <Box css={styles.eachSlide}>
                            <Image src={images.slide1} objectFit="cover" maxW={{ base: "100vw", sm: "100vw" }} css={styles.img_img} />
                            <Box css={styles.img_caption} zIndex="100000"    width="100%" height="200px"  display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                                <Heading as="h5">
                                    AFOLUCK Nig Ltd
                                </Heading>
                                <Text>LAGOS NIGERIA</Text>
                                <Heading>We are team of planner, architects</Heading><Heading>landscape architect and interior designers</Heading>
                            </Box>
                        </Box>
                        <Box css={styles.eachSlide}>
                            <Image src={images.slide2} objectFit="cover" maxW={{ base: "100vw", sm: "100vw" }} css={styles.img_img} />
                            <Box css={styles.img_caption} zIndex="100000" width="100%" height="200px"  display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                                <Heading as="h5">
                                    AFOLUCK Nig Ltd
                                </Heading>
                                <Text>LAGOS NIGERIA</Text>
                                <Heading>We are team of planner, architects</Heading><Heading>landscape architect and interior designers</Heading>
                            </Box>
                        </Box>
                        <Box css={styles.eachSlide}>
                            <Image src={images.slide3} objectFit="cover" maxW={{ base: "100vw", sm: "100vw" }}  css={styles.img_img} />
                            <Box css={styles.img_caption} zIndex="100000" width="100%" height="200px"  display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                                <Heading as="h5">
                                    AFOLUCK Nig Ltd
                                </Heading>
                                <Text>LAGOS NIGERIA</Text>
                                <Heading>We are team of planner, architects</Heading>
                                <Heading>landscape architect and interior designers</Heading>
                            </Box> 
                        </Box>
                    </Fade>
                </Box>
            </Box>
            
        </>
    );
}
const styles = {
    eachSlide: css`
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 600px;
        // overflow: hidden;
    `,
    imgDiv: css`
        display: flex;
        flex-direction: column;
        width: 100%;
    `,
    img_img: css`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `,
    img_caption: css`
        position: absolute;
        bottom: 0px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
    `

}
export default ImageSlider;