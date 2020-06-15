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
  //const [image, setImage] = useState({DefaultPic});
  const uploadedImage = React.useRef({DefaultPic});

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const {current} = props.uploadedImage;
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
          ref={props.uploadedImage} 
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
  uploadedImage: {DefaultPic},
};

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      securityNumber: '',
      address: '',
      city: '',
      zip: '',
      phoneNumber: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = (e) => {
    alert(JSON.stringify(e));
  };

  handleChange = (e) => {
    this.setState({firstName: e.target.value});
    this.setState({lastName: e.target.value});
  }

  render() {
    return (
      <div className='form-content'>
      <form>
        <label>First name</label>
        <TextField type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
  
        <label>Last name</label>
        <TextField type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} />
  
        <label>Security number</label>
        <TextField type='number' name='securityNumber' value={this.state.securityNumber} onChange={this.handleChange} />
  
        <label>Address</label>
        <TextField type='text' name='address' value={this.state.address} onChange={this.handleChange} />
  
        <label>City</label>
        <TextField type='text' name='city' value={this.state.city} onChange={this.handleChange} />
  
        <label>Zip</label>
        <TextField type='number' name='zip' value={this.state.zip} onChange={this.handleChange} />
  
        <label>Phone number</label>
        <TextField type='number' name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} />
  
        <label>Email</label>
        <TextField type='text' name='email' value={this.state.email} onChange={this.handleChange} />
  
        <Button 
            type='submit'
            className='save'
            onClick={this.handleSubmit}
            >Save</Button>
      </form>
      </div>
    )
  }
}

export default Profile;


