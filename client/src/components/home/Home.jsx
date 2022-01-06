import { Grid} from '@material-ui/core';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';
import Footer from '../footer/Footer';
import Thoughts from './Thoughts';
import BasicSpeedDial  from './dial/SpeedDial';






const Home = () => {
  
    return (
        <>
            
            
            
            <Banner />
          
            <Thoughts />
            
        
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>  
            </Grid>
            <BasicSpeedDial />
            <Footer />
        </>
    )
    }

export default Home;