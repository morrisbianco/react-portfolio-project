import { React, useState } from 'react';
import { checkMessage, validateEmail } from '../utils/helpers';

const styles = {
  backgroundColor: {
    backgroundColor: 'whitesmoke',
  }
};

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target.name);

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Please include a message`
      );
      return;
    }
    alert(`Hello ${name}`);

    setName('');
    setMessage('');
    setEmail('');
  };


  return (
    <div style={styles.backgroundColor}>
      {errorMessage && (
        <div>
          <p className="subtitle pt-5 mx-5 px-5">{errorMessage}</p>
        </div>
      )}
    <form className="form">
      <div className="field pt-5 mx-5 px-5">
        <label className="label">Name:</label>
        <div className="control">
          <input className="input" type="text" name="name" value={name} onChange={handleInputChange} placeholder="Please enter your name here" />
        </div>
      </div>

      <div className="field pt-5 mx-5 px-5">
        <label className="label">E-mail Address:</label>
        <div className="control">
          <input className="input" type="email" name="email" value={email} onChange={handleInputChange} placeholder="Please enter your E-mail here" />
        </div>
      </div>

      <div className="field p-5 mx-5 px-5">
        <label className="label">Message:</label>
        <div className="control">
          <textarea className="textarea" name="message" value={message} onChange={handleInputChange} placeholder="Please enter your message here"></textarea>
        </div>
      </div>

      <div className="has-text-right">
        <button className="button p-5 m-5 px-5" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      </form>
      </div>
  );
}
