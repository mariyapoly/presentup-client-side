
import { useTheme } from '@mui/material';
import { styled } from '@mui/system';

const RegularBtn = () => {

    const theme = useTheme();

    const RegularButton = styled('button')({
        background: 'rgb(1, 37, 70)',
        color: '#fff',
        textTransform: 'capitalize',
        padding: '15px 30px',
        fontSize: '15px',
        fontWeight: '600',
        fontFamily: `'Open Sans', sans-serif`,
        '&:hover': { background: "#ff3d55" },
        transition: 'all linear 0.3s',
        border: 0,
        borderRadius: '3px',
        [theme.breakpoints.down('md')]: {
            padding: '10px 20px',
            fontSize: '14px',
        },
    })
    return { RegularButton }
};

export default RegularBtn;