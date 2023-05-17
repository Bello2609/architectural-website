import React, { useEffect } from 'react';
import * as image from "../../images";
import { Box } from '@chakra-ui/react';

const Header = ()=>{
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{

        })
    }, [])
    return (
        <>
            <Box bg="#fff" opacity="0.8" position="fixed" top="0px" zIndex="100000" display="flex" w="100%" alignItems="center" justifyContent="space-between" p={10} height={100} >
                    <img src={image.shift} alt="my svg" width="150px" height="100px" />
                    <h2 className='text-red-400'>Landing Page</h2>
            </Box>
        </>
    );
}
export default Header;