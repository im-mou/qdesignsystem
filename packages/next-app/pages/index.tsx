import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Prism from 'prismjs';
import { useEffect } from 'react';
import helpers from '../utils/helpers';
import Code from '../components/Code';
const code = `var data = 1;`;

const Home: NextPage = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>qDesign</h1>

                <p className={styles.description}>
                    qDesign is a CSS library that provides a minimal setup of styles for a fast and clean starting
                    point. This library can either be used as a React components library or it can be used in plain good
                    'ol HTML by importing the precompiled javascript and CSS files.
                </p>

                <Code>this is a code example</Code>
            </main>
        </div>
    );
};

export default Home;
