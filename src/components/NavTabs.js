import React from 'react';
import NavLinks from './NavLinks';
import background from '../images/CodingHero.jpg'

const styles = {
  heroCoding: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
    height: "350px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    top: 0

  },
  backgroundColor: {
    backgroundColor: 'whitesmoke',
  }
};

const NavTabs = (props) => {

  return (
    <div style={styles.backgroundColor} className="pt-5">
    < nav className="breadcrumb is-right is-large" aria-label="breadcrumbs" >
        <ul>
        <li className="is-active"><a>Morris Bianco</a></li>
          <NavLinks {...props} />
        </ul>
    </nav >
        <div className="hero" style={styles.heroCoding}></div >
        </div>
  );
}

export default NavTabs;
