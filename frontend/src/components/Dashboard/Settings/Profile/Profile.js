import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import DefaultPic from "./defaultProfile.png";
import './Profile.css';
import Button from '@material-ui/core/Button';
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




const ProfileForm = (props) => {

  const user = {
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

  const { handleSubmit, update, formState } = useForm({ user });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className='form-class'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='firstName'>First name</label>
      <input type='text' name='firstName' value={user.name} ref={update} />

      <label htmlFor='lastName'>Last name</label>
      <input type='text' name='lastName' ref={update} />

      <label>Security number</label>
      <input type='number' name='securityNumber' ref={update} />

      <label>Address</label>
      <input type='text' name='address' ref={update} />

      <label>City</label>
      <input type='text' name='city' ref={update} />

      <label>Zip</label>
      <input type='number' name='zip' ref={update} />

      <label>Phone number</label>
      <input type='number' name='phoneNumber' ref={update} />

      <label>Email</label>
      <input type='text' name='email' ref={update} />

      <Button 
          type='submit'
          className='save'
          
          >Save</Button>
    </form>
    </div>
  )

}

export default Profile;


