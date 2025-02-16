import React, { useState } from 'react';
import Header from './header';
import Projects from './projects';
export default function Layout({ activePage, setActivePage }) {
    return (
        <section>
            <Header activePage={activePage} setActivePage={setActivePage} />
           
        </section>
    );
}
