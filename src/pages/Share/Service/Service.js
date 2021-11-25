import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router';

const Service = ({ service }) => {

    const { img, serviceName, _id } = service || {};

    const useStyle = makeStyles({
        singleService: {
            marginBottom: '15px',
            "&:hover": {
                cursor: 'pointer',
                "& $sevicesTitle": {
                    background: '#ff3d55',
                    color: '#fff'
                }
            }
        },
        sevicesTitle: {
            background: '#fff',
            color: '#273f5b',
            fontSize: '20px !important',
            fontWeight: '700 !important',
            padding: '17px 25px 12px',
            textAlign: 'center',
            width: '200px',
            margin: '-30px auto 0 !important',
            zIndex: '999',
            position: 'relative',
            borderRadius: '3px',
            transition: 'all linear 0.3s',
            boxShadow: '0 0 10px rgb(0 0 0 / 7%)'
        }

    })
    const { sevicesTitle, singleService } = useStyle();
    const nagivation = useNavigate();
    const handleService = () => {
        nagivation(`/singleService/${_id}`)
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box onClick={handleService} className={singleService}>
                <img src={img} alt="" />
                <Typography className={sevicesTitle}>{serviceName}</Typography>
            </Box>
        </Grid>
    );
};

export default Service;