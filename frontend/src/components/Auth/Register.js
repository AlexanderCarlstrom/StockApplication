import React from 'react';

class Register extends React.Component {
  onSubmit = () => {
    console.log('register');
  };

  render() {
    return (
      <form id="register" onSubmit={this.onSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="repeat-password" placeholder="Repeat Password" />
        <button>Submit</button>
      </form>
    );
  }
}

export default Register;
