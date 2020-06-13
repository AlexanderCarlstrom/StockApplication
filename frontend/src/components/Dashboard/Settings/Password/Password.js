import React, { useState } from "react";
import "./Password.css";
import Button from "@material-ui/core/Button";

const Password = () => (
      <div className="password">
        <PasswordForm />
      </div>
    );

const PasswordForm = () => {
  const [currentPassword, getCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {

  };

  return (
    <div className="password-form">
      <form onSubmit={handleSubmit()}>
        <label onSubmit={handleSubmit}>
          Current password
          <input
            id="currentPassword"
            type="text"
            value={currentPassword}
            onChange={(e) => getCurrentPassword(e.target.value)}
          />
        </label>
        <br />
        <label onSubmit={handleSubmit}>
          New password
          <input
            id="newPassword"
            type="number"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <br />
        <label onSubmit={handleSubmit}>
          Confirm new password
          <input
            id="confirmPassword"
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <Button type="submit" value="submit" className="save">
          Save
        </Button>
      </form>
    </div>
  );
};

export default Password;
