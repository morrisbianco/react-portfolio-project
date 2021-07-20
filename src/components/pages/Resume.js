import React from 'react';

const styles = {
  backgroundColor: {
    backgroundColor: 'whitesmoke',
  }
};

export default function Resume() {
  return (
    <div style={styles.backgroundColor}>
    <div className="title pt-5 px-5">
      Download my Resume <a href="https://docs.google.com/document/d/1R1Pf6OWwy0GiQKITsPRkTbWDyE2dftNzk-tGdPZiH48/edit?usp=sharing">here</a>.
    </div>
    <hr></hr>
    <ol className="subtitle pt-5 px-5">
      <h2 className="title">Front-End Proficiences:</h2>
      <li className="p-2 px-5 mx-5">HTML5</li>
      <li className="p-2 px-5 mx-5">CSS3</li>
      <li className="p-2 px-5 mx-5">React</li>
      <li className="p-2 px-5 mx-5">JavaScript</li>
      <li className="p-2 px-5 mx-5">Bulma</li>
      <li className="p-2 px-5 mx-5">jQuery</li>
      <li className="p-2 px-5 mx-5">Bootstrap</li>
      </ol>
      <hr></hr>
      <ol className="subtitle pb-5 px-5">
      <h2 className="title">Back-End Proficiences:</h2>
      <li className="p-2 px-5 mx-5">MySQL, Sequlize</li>
      <li className="p-2 px-5 mx-5">MongoDB, Mongoose</li>
      <li className="p-2 px-5 mx-5">Node</li>
      <li className="p-2 px-5 mx-5">Express</li>
      <li className="p-2 px-5 mx-5">APIs</li>
    </ol>
    </div>
  );
}
