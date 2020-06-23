import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import DefaultPic from './defaultProfile.png';
import '../Settings.css';
import IconButton from '@material-ui/core/IconButton';
import BrushIcon from '@material-ui/icons/Brush';

const Profile = () => (
  <div className="profile">
    <ProfileImage />
    <ProfileForm />
  </div>
);

const ProfileImage = () => {
  //const [image, setImage] = useState(DefaultPic);
  const uploadedImage = React.useRef(DefaultPic);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-content">
      <div className="profileImg">
        <img ref={uploadedImage} width="100px" style={{ borderRadius: 50 }} alt="profile" />
        <input
          accept="image/*"
          className="inputBtn"
          id="button-file"
          type="file"
          style={{ display: 'none ' }}
          onChange={handleImageUpload}
        />
        <label style={{ marginTop: 40 }} htmlFor="button-file">
          <IconButton aria-label="upload image" component="span">
            <BrushIcon />
          </IconButton>
        </label>
      </div>
    </div>
  );
};

const ProfileForm = () => {
  const userFormData = {
    id: 1,
    firstName: 'Hilda',
    lastName: 'Olofsdotter',
    securityNumber: 1111112222,
    address: 'Halmstad 1',
    city: 'Halmstad',
    zip: 12345,
    phoneNumber: 1245324578,
    email: 'hilda.hilda@hilda.com',
  };

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [securityNumber, setSecurityNumber] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [userInfo, setUserInfo] = useState();

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value.trim(),
    });
  };

  //Fetch i useeffect
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({
      firstName: firstName ? firstName : userFormData.firstName,
      lastName: lastName ? lastName : userFormData.lastName,
      securityNumber: securityNumber ? securityNumber : userFormData.securityNumber,
      address: address ? address : userFormData.address,
      city: city ? city : userFormData.city,
      zip: zip ? zip : userFormData.zip,
      phoneNumber: phoneNumber ? phoneNumber : userFormData.phoneNumber,
      email: email ? email : userFormData.email,
    });

    console.log(userInfo);
  };

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit}>
        <div className="form-line">
          <TextField
            type="text"
            name="firstName"
            label="Firstname"
            defaultValue={userFormData.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-line">
          <TextField
            label="Lastname"
            type="text"
            name="lastName"
            defaultValue={userFormData.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <TextField
          label="Security number"
          type="number"
          name="securityNumber"
          defaultValue={userFormData.securityNumber}
          onChange={(e) => setSecurityNumber(e.target.value)}
        />
        <br />

        <TextField
          label="Address"
          type="text"
          name="address"
          defaultValue={userFormData.address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />

        <div className="form-line">
          <TextField
            label="City"
            type="text"
            name="city"
            defaultValue={userFormData.city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="form-line">
          <TextField
            label="Zip"
            type="number"
            name="zip"
            defaultValue={userFormData.zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>

        <TextField
          label="Phone number"
          type="number"
          name="phoneNumber"
          defaultValue={userFormData.phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />

        <TextField
          label="Email"
          type="email"
          name="email"
          defaultValue={userFormData.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <Button type="submit" className="save">
          Save
        </Button>
      </form>
    </div>
  );
};

export default Profile;
