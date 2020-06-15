import React, { useState } from "react";
import "../Settings.css";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

const Password = () => (
      <div className="password">
        <PasswordForm />
      </div>
    );

const PasswordForm = () => {

  const userData = {
    currentPassword: '123',
    newPassword: '',
    confirmPassword: '',
  }

  const [currentPassword, getCurrentPassword] = useState(userData.currentPassword);
  const [newPassword, setNewPassword] = useState(userData.newPassword);
  const [confirmPassword, setConfirmPassword] = useState(userData.confirmPassword);

  const handleSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="form-content">
      <form>
        <label>Current password</label>
        <TextField type='text' name='currentPassword' value={currentPassword}
          onChange={(e) => getCurrentPassword(e.target.value)} 
        />

        <label htmlFor='newPassword'>New password</label>
        <TextField type='text' name='newPassword' value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} 
        />

        <label htmlFor='confirmPassword'>Confirm new password</label>
        <TextField type='text' name='confirmPassword' value={confirmPassword}
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
