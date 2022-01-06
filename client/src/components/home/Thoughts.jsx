import React from 'react'
import { Box, Divider, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles({
	box: {
        	display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		padding: '10px 0 60px 0',
		
    	},
	write: {
		padding: '0 0px 0 10px',
		fontSize: '25px',
		textAlign: 'center',
		fontWeight: 'bold',
	
	},
	column:{
		display: 'flex',
		flexDirection: 'column',
	},
	small:{
		padding: '10px 20px 0 20px',
		fontSize: '16px',
	},
	small1:{
		textAlign: 'center',
		padding: '10px 20px 0 20px',
		fontSize: '16px',
	},
	divider: {
		width: '2px',
		background: 'rgba(255, 213, 63, 1)',
	}
    	
})

function Thoughts() {
	const classes = useStyle();
	return (
		<Box className={classes.box}>
			<div className={classes.column}>
				<Typography className={classes.write}>
					OUR EXPERTISE
				</Typography>
				<Typography className={classes.small1} >
					All type of waste water treatment 
				</Typography>
				<Typography className={classes.small}>
					Legal Aid & compliances on Environmental Issues
				</Typography>
			</div>
			<Divider  orientation="vertical" flexItem classes={{root: classes.divider}} />
			<div className={classes.column}>
				<Typography className={classes.write}>
					OUR FIGHT
				</Typography>
				<Typography className={classes.small}>
					Environmental & Social Justice
				</Typography>
			</div>
			<Divider  orientation="vertical" flexItem classes={{root: classes.divider}} />
			<div>
				<Typography className={classes.write}>
					OUR WORK
				</Typography>
				<Typography className={classes.small}>
					Pollution free air, water, land
				</Typography>
			</div>
			<Divider  orientation="vertical" flexItem classes={{root: classes.divider}} />
			<div>
				<Typography className={classes.write}>
					OUR GOAL
				</Typography>
				<Typography className={classes.small}>
					Save the planet with sustainable approach
				</Typography>
			</div>
		</Box>
	)
}

export default Thoughts
