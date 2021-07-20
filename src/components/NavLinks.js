import React from 'react'
import { Link } from 'react-router-dom';


const NavLink = ({ currentPage, handlePageChange, page }) => {
  const to = `${process.env.PUBLIC_URL}/` + (page === 'AboutMe' ? '' : page.toLowerCase());
  let onClick = () => handlePageChange(to);
  const data = { onClick, to };

  return (
    <li>
      <Link {...data}>{page}</Link>
    </li>
  );
};

const NavLinks = ({ currentPage, handlePageChange, pages }) => {
  return pages.map(page => {
    const data = { page, currentPage, handlePageChange }; 
    return <NavLink key={page} {...data} />;
  }); 
};


export default NavLinks;