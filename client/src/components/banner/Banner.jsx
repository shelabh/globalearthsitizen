
import { makeStyles, Box} from '@material-ui/core';
import Typewriter from 'typewriter-effect';

const useStyle = makeStyles((theme) => ({
    image: {
        width: '100%',
        background: `url(${'https://images.unsplash.com/photo-1627441943833-8d930796dde7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'}) center/100% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 65,
            color: '#FFFFFF',
        },
        [theme.breakpoints.down('xs')]: {
            height: '34vh',
            '& :first-child': {
                fontSize: 40,
                color: '#FFFFFF',
            }
        },
    }
}))

const Banner = () => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.image}>
                <Typewriter
                    options={{
                    strings: ['GlobalEarthCitizen'],
                    autoStart: true,
                    loop: true,
                    }}
                />
            </Box>
        </>
    )
}

export default Banner;