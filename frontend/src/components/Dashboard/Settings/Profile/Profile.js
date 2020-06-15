import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { AppBar, TextField, Button, Typography, Link } from '@material-ui/core';
import DefaultPic from "./defaultProfile.png";
import '../Settings.css';
import IconButton from '@material-ui/core/IconButton';
import BrushIcon from '@material-ui/icons/Brush';


const Profile = () => (
      <div className='profile'>
        <ProfileImage />
        <ProfileForm />
      </div>
    );

const ProfileImage = (props) => {
  //const [image, setImage] = useState(props.DefaultPic);
  const uploadedImage = React.useRef(props.DefaultPic);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const {current} = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  }
   
  return (
    <div className="profileImg">
        <img 
          ref={uploadedImage} 
          width="100px" 
          className='uploadedImg' 
          onError=''
        />
        <input 
          accept='image/*' 
          className='inputBtn' 
          id='button-file' 
          type='file' 
          onChange={handleImageUpload}
        />
        <label htmlFor='button-file'>
          <IconButton aria-label='upload image' component='span'>
            <BrushIcon />
          </IconButton>
        </label>
      </div>
  );
};

ProfileImage.defaultProps = {
  uploadedImage: DefaultPic,
};


const ProfileForm = (props) => {

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

  const [firstName, setFirstName] = useState(userFormData.firstName);
  const [lastName, setLastName] = useState(userFormData.lastName);
  const [securityNumber, setSecurityNumber] = useState(userFormData.securityNumber);
  const [address, setAddress] = useState(userFormData.address);
  const [city, setCity] = useState(userFormData.city);
  const [zip, setZip] = useState(userFormData.zip);
  const [phoneNumber, setPhoneNumber] = useState(userFormData.phoneNumber);
  const [email, setEmail] = useState(userFormData.email);
  const [userInfo, setUserInfo] = useState([]);

  const handleSubmit = (e) => {
    console.log(JSON.stringify(e));
    //const form = e.target;
    //const data = new FormData(form);
  }
  
  return (
    <div className='form-content'>
    <form>
      <label>First name</label>
      <TextField type='text' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <label>Last name</label>
      <TextField type='text' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <label>Security number</label>
      <TextField type='number' name='securityNumber' value={securityNumber} onChange={(e) => setSecurityNumber(e.target.value)} />

      <label>Address</label>
      <TextField type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)} />

      <label>City</label>
      <TextField type='text' name='city' value={city} onChange={(e) => setCity(e.target.value)} />

      <label>Zip</label>
      <TextField type='number' name='zip' value={zip} onChange={(e) => setZip(e.target.value)} />

      <label>Phone number</label>
      <TextField type='number' name='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

      <label>Email</label>
      <TextField type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />

      <Button 
          type='submit'
          className='save'
          onClick={handleSubmit}
          >Save</Button>
    </form>
    </div>
  );
};



export default Profile;


