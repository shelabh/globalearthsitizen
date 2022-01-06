import React from 'react'
import { TextField } from '@material-ui/core';
import { Box, makeStyles, Button } from '@material-ui/core';


const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginTop: '100px'	
	},
	name: {
		marginBottom: '20px',
	},
	phone: {
		marginBottom: '20px',
	},
	location: {
		marginBottom: '20px',
	},
	description: {
		right: '5px',
		marginBottom: '40px',
	},
	button: {
		
		marginBottom: '20px',
	}
})
    

function Register() {
	const classes = useStyles();
	const [value, setValue] = React.useState('');

	const handleChange = (event) => {
	setValue(event.target.value);
	};
	return (
		<Box className={classes.container}>
			<TextField className={classes.name}
				required
				id="filled-required"
				label="Name"
				
			/>
			<TextField className={classes.phone}
				required
				id="filled-required"
				label="Phone Number"
			
			/>
			<TextField className={classes.location}
				required
				id="filled-required"
				label="Location"
			
			
			/>
			<TextField className={classes.description}
				required
				id="filled-multiline-flexible"
				label="Complaint"
				multiline
				maxRows={4}
				value={value}
				onChange={handleChange}
			
				
		      	/>
		      	<Button className={classes.button}
		      		variant="contained" color="primary">Contained
			</Button>		
		</Box>
	)
}

export default Register;
