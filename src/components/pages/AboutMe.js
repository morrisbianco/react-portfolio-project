import React from 'react';

const styles = {
  backgroundColor: {
    backgroundColor: 'whitesmoke',
  }
};

export default function AboutMe() {
  return (
    <>
    <div class="columns py-5 px-5 is-variable is-multiline" style={styles.backgroundColor}>
      <div className="column is-3">
      <div className="card">
        <figure className="card-image has-text-centered">
          <img className="is-rounded" src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=AngryNatural&mouthType=Smile&skinColor=Light' />
        </figure>
      </div>
      </div>
      <div className="column is-9">
      <div className="card">
      <div className="media-content has-text-centered">
        <p className="title is-4 is-size-2 p-2">About Me:</p>
        <div className="content p-2 is-size-5">
          <p> I am currently participating in the UNCC Coding Bootcamp to become a full stack web
            developer. Once I am
            finished, I will be familiar with HTML, CSS, and Javascript, as well as APIs, Servers, and
            MERN. </p>
          <p> I am from Mount Pleasant, NC, and I recently graduated from Belmont Abbey College with a
            Bachelors
            degree in History. I became interested in coding after speaking to a friend who had already
            gone through
            the UNC Coding Bootcamp. He mentioned that the Bootcamp was very helpful in helping him
            further his
            career in web and app development. </p>
        </div>
      </div>
      </div>
      </div>
    </div>
    </>
  );
}
