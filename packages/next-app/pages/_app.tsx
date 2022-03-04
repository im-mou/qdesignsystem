import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { qTheme } from '@im-mou/qdesign-system-legacy';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MainHeader from '../components/MainHeader';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Sidebar from '../components/Sidebar';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={qTheme}>
            <CssBaseline />
            <Container maxWidth="lg" id="main-container" className="preload">
                <MainHeader />
                <Grid container spacing={3} style={{ marginTop: 20 }}>
                    <Hidden smDown>
                        <Grid item md={3} style={{ paddingRight: '30px' }}>
                            <Sidebar />
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={9}>
                        <Component {...pageProps} />
                        <PageNav />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default MyApp;
