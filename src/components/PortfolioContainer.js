import React, { useState } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState('/');
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };
  
  return (
    <>
    <BrowserRouter>
      <NavTabs {...data} />
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={AboutMe} />
      <Route path={`${process.env.PUBLIC_URL}/portfolio`} exact component={Portfolio} />
      <Route path={`${process.env.PUBLIC_URL}/resume`} exact component={Resume} />
      <Route path={`${process.env.PUBLIC_URL}/contact`} exact component={Contact} />
    </BrowserRouter>
    <footer className="is-flex is-justify-content-space-between p-5">
        <h2 className="title" id="contact">Contact Me:</h2>
        <article className="breadcrumb is-large" aria-label="breadcrumbs">
            <ul>
                <li><a href="mailto:andrewbianco98gmail.com">My Email</a></li>
                <li><a href="https://github.com/morrisbianco" target="_blank">My GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/morris-bianco-a7165820b/" target="_blank">My Linkedin</a></li>
                <li><a href="https://www.facebook.com/andrew.bianco.182/" target="_blank">My Facebook</a></li>
            </ul>
        </article>
        <p className="subtitle">
            &copy; 2021 Andrew Bianco
        </p>
    </footer>
    </>
  );
}

export default PortfolioContainer;
