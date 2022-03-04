import React from 'react';
import Image from 'next/image';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router';
import logoDot from '../static/images/logo-dot-hollow.png';

import routes from '../constants/routes.json';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import helpers from '../utils/helpers';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        // flexGrow: 1,
        fontWeight: 'bold',
        marginRight: theme.spacing(2)
    },
    subtitle: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
        opacity: '0.4',
        fontWeight: 'bold',
        marginLeft: theme.spacing(2)
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: fade(theme.palette.common.black, 0.03),
        '&:hover': {
            // backgroundColor: fade(theme.palette.common.black, 0.05)
        },
        marginLeft: 0,
        width: '100%',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            marginLeft: theme.spacing(1),
            width: 'auto'
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch'
            }
        }
    },
    appBar: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: 'none',
        borderBottom: '2px solid #ddd'
    }
}));

export default function SearchAppBar() {
    const classes = useStyles();
    let router = useRouter();

    const routesList = Object.entries(routes).map((el) => el[1]);
    // "Select" current link ListItem
    const [selectedIndex, setSelectedIndex] = React.useState(
        routesList.findIndex(({ link }) => link === router.pathname)
    );

    const [anchorEl, setAnchorEl] = React.useState<any>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setAnchorEl(event.currentTarget);
    const handleMenuClick = (link: any) => {
        setAnchorEl(null);
        if (typeof link === 'string') window.location = link as unknown as Location;
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={(e) => handleClick}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClick}
                            keepMounted
                        >
                            {routesList.map((route, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={() => handleMenuClick(route.link)}
                                    selected={selectedIndex === index}
                                >
                                    {route.title}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Hidden>

                    {/* <img
                        src={logoDot}
                        alt="LogoDot"
                        style={{
                            marginRight: 15,
                            height: 30
                        }}
                    /> */}

                    <Image height={32} width={32} src={logoDot} alt="Logo" loader={helpers.imageLoader} />

                    {
                        // Hide togo text if path=home
                        router.pathname !== '/' ? (
                            <Typography className={classes.title} variant="h6" noWrap>
                                <em>q</em>Design
                            </Typography>
                        ) : null
                    }

                    <Typography className={classes.subtitle} variant="overline">
                        a design System for qGenomics apps
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
