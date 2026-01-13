import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ProductsSection from '../components/ProductsSection';
import Services from '../components/Services';
import Artists from '../components/Artists';
import Projects from '../components/Projects';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Stats />
            <ProductsSection />
            <Services />
            <Artists />
            <Projects />
            <About />
            <FAQ />
            <Contact />
        </Layout>
    );
};

export default Home;
