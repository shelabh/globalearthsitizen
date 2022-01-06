import React from 'react'


import { Box, Container, } from '@material-ui/core';


function Footer() {
	
	return (
		<>
			
			<footer>
				<Box 
					
					bgcolor="text.primary" color="white" >
					<Container maxWidth="lg">
						
						<Box textAlign="center" pt={{xs: 3, sm: 4}} pb={{xs: 3, sm: 4}}>
							GlobalEarthCitizen &reg; {new Date().getFullYear()}
						</Box>
					</Container>
				</Box>
			</footer>
		</>
	)
}

export default Footer;
