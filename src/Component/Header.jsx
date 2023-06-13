import React, { useEffect } from 'react';
import * as image from "../../images";
import { Box, Text } from '@chakra-ui/react';

const Header = ()=>{
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{

        })
    }, [])
    return (
        <>
            <Box bg="#fff" opacity="0.8" position="fixed" top="0px" zIndex="100000" display="flex" w="100%" alignItems="center" justifyContent="space-between" p={10} height={100} >
                    <img src={image.logo} alt="my svg" width="150px" height="100px" />
                    <Text as="h2" fontWeight="bold" color="#D2BD6F">AFOLUCK NIG LTD</Text>
            </Box>
        </>
    );
}
export default Header;