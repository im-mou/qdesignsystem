import React from 'react';
import routes from '../constants/routes.json';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
        borderRaduis: '30px',
        backgroundColor: 'transparent'
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    rounded: { borderRadius: '30px', paddingLeft: theme.spacing(3) }
}));

export default function NestedList() {
    const classes = useStyles();
    let { pathname } = useRouter();

    // Transformation object[objects] -> array[objects]
    const routesList = Object.entries(routes).map((el) => el[1]);

    // "Select" current link ListItem
    const [selectedIndex, setSelectedIndex] = React.useState(routesList.findIndex(({ link }) => link === pathname));

    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root} dense={true}>
            {routesList.map((route, index) => (
                <ListItem
                    button
                    key={index}
                    className={classes.rounded}
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(index)}
                    // component="a"
                    // to={route.link}
                >
                    <ListItemText primary={route.title} />
                </ListItem>
            ))}
        </List>
    );
}
