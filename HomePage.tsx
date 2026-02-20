import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { HSE } from './components/HSE';
import { Clients } from './components/Clients';

export const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <HSE />
            <Clients />
        </>
    );
};
