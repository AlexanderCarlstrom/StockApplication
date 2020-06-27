import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import DefaultPic from './defaultProfile.png';
import '../Settings.css';
import IconButton from '@material-ui/core/IconButton';
import BrushIcon from '@material-ui/icons/Brush';
import UserConsumer from '../../../../logic/UserConsumer';

const Profile = (props) => (
  <div className="profile">
    <ProfileImage user={props.user} actions={props.actions} />
    <ProfileForm user={props.user} actions={props.actions} />
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
        <img src={DefaultPic} width="100px" style={{ borderRadius: 50 }} alt="profile" />
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

const ProfileForm = (props) => {
  const userFormData = props.user;

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  // const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [userInfo, setUserInfo] = useState();
  const [mounted, setMounted] = useState(false);

  //Fetch i useeffect
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    } else {
      props.actions.onUpdateUser(userInfo).then((result) => {
        if (!result) {
          alert('could not save user info');
        }
      });
    }
  }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({
      firstname: firstname ? firstname : userFormData.firstname,
      lastname: lastname ? lastname : userFormData.lastname,
      address: address ? address : userFormData.address,
      city: city ? city : userFormData.city,
      zipCode: zip ? zip : userFormData.zipCode,
      // phoneNumber: phoneNumber ? phoneNumber : userFormData.phoneNumber,
      email: email ? email : userFormData.email,
    });
  };

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit}>
        <div className="form-line">
          <TextField
            type="text"
            name="firstname"
            label="Firstname"
            defaultValue={userFormData.firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div className="form-line">
          <TextField
            label="Lastname"
            type="text"
            name="lastname"
            defaultValue={userFormData.lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        {/* <TextField
          label="Identity Number"
          type="number"
          name="identityNumber"
          defaultValue={userFormData.identityNumber}
          onChange={(e) => setIdentityNumber(e.target.value)}
        />
        <br /> */}

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
            defaultValue={userFormData.zipCode}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>

        {/* <TextField
          label="Phone number"
          type="number"
          name="phoneNumber"
          defaultValue={userFormData.phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br /> */}

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

export default UserConsumer(Profile);
