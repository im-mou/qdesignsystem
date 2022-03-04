import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // minHeight: '100px',
        padding: '30px',
        margin: '60px 0 0 0',
        borderTop: '2px solid rgba(0,0,0,0.1)',
        backgroundColor: 'rgba(0,0,0,0.05)'
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="body2">v0.1-alpha</Typography>
            {/* <Typography variant="caption">qDesign 2020</Typography> */}
        </Box>
    );
}
