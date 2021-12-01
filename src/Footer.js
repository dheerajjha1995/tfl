import React from 'react'
import { Container } from '@mui/material'
import { Box } from '@mui/material'

export const Footer = () => {
    return (
        <footer>
            <Box bgcolor = "text.secondary" color = "white">
                <Container>
                    <Box fontSize="24px" height="40px" textAlign="center">
                        <p>Copyright &copy; TooFunLabs.com</p>
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer