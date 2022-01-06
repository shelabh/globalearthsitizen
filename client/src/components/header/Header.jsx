import { AppBar, Toolbar, Typography, makeStyles, Button, Box } from '@material-ui/core'; 


import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { Link, useLocation } from 'react-router-dom';



const useStyle = makeStyles((theme) => ({
    component: {
        flexGrow: 1,
		background: 'white',
  
        
		'& > *': {
			padding: theme.spacing(1),
		}
    },
   
    title: {
		flexGrow: 1,
		padding: 20,
		color: 'black'
	},
   
}));

const Header = () => {
    const classes = useStyle();
    const location = useLocation();
    let params = new URLSearchParams(location.search);
    
    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();

    if (authState && authState.isPending) return null;

    const login = async () => history.push('/login');
    
    const logout = async () => oktaAuth.signOut();

    const button = authState.isAuthenticated ? 
        <Button onClick={logout} 
                variant="contained" 
                color="secondary"
                style={{textDecoration: 'none'}}
                
            
        >Logout</Button> :
        <Button onClick={login}
                variant="contained" 
                color="primary"
        >Login</Button>


    

    return (
        <AppBar  position="static" className={classes.component}>
            <Toolbar >
                
                    <Link to={`/`} className={classes.title} style={{ textDecoration: 'none' }} color='inherit' >
                        <Typography variant="h6" >
							GlobalEarthCitizen
						</Typography>
                        
                    </Link>
                
				    
					<Button component={Link} to={`/about`}>About</Button>
                    <Button component={Link} to={`/register`} >Contact Us</Button>
					
                    

                    <Link>{button}</Link>
                    
                
      

                     
                            
                       
            </Toolbar>
        </AppBar>
    )
}

export default Header;