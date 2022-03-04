import React from 'react';
import routes from '../constants/routes.json';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { useRouter } from 'next/router';

// get routes
const routesList = Object.entries(routes).map((el) => el[1]);

const getNevPaths = () => {
    let router = useRouter();
    let next = null;
    let back = null;

    // compute previous and next link
    const index = routesList.findIndex((el) => el.link === router.pathname);
    if (index > 0) back = index - 1;
    if (index < routesList.length - 1) next = index + 1;

    return { next, back };
};

export default function PageNav() {
    const { next, back } = getNevPaths();
    return (
        <>
            <div style={{ paddingTop: 60 }}>
                <Divider />
            </div>
            <div style={{ paddingTop: 60 }}>
                <Grid container direction="row" justify="space-between">
                    {back || back === 0 ? (
                        <Button href={routesList[back].link} startIcon={<ChevronLeft />} size="large">
                            {routesList[back].title}
                        </Button>
                    ) : (
                        <span />
                    )}

                    {next ? (
                        <Button href={routesList[next].link} endIcon={<ChevronRight />} size="large">
                            {routesList[next].title}
                        </Button>
                    ) : (
                        <span />
                    )}
                </Grid>
            </div>
        </>
    );
}
