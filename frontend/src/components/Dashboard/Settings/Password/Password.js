import React, { useState } from 'react';
import '../Settings.css';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import axios from 'axios';

const Password = () => (
  <div className="password">
    <PasswordForm />
  </div>
);

const PasswordForm = () => {
  const userData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // const [userPassword, setUserPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUserPassword({
    //   currentPassword: currentPassword ? currentPassword : userData.currentPassword,
    //   newPassword: newPassword ? newPassword : userData.newPassword,
    //   confirmPassword: confirmPassword ? confirmPassword : userData.confirmPassword,
    // });
    // console.log(userPassword);

    if (newPassword === confirmPassword) {
      const token = JSON.parse(localStorage.getItem('user-token'));
      axios
        .post(
          'http://localhost:4000/user/change-password',
          {
            oldPassword: currentPassword,
            newPassword: newPassword,
          },
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        )
        .then((result) => {
          if (!result.data.success) {
            if (result.data.forUser) {
              alert(result.data.message);
            }
          } else {
            alert('Password Has Been Changed');
          }
        });
    } else {
      alert('Passwords Must Match');
    }
  };

  return (
    <div className="form-content">
      <form>
        <TextField
          label="Current password"
          type="password"
          name="currentPassword"
          defaultValue={userData.currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <br />

        <TextField
          label="New password"
          type="password"
          name="newPassword"
          defaultValue={userData.newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />

        <TextField
          label="Confirm new password"
          type="password"
          name="confirmPassword"
          defaultValue={userData.confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button type="submit" value="submit" className="save" onClick={handleSubmit}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default Password;
