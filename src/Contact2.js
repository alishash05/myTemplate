import React from 'react';
import { createUseStyles } from 'react-jss';
import Footer from './Footer.js';
import Login from './login.js';

const ThirdShow = createUseStyles({
  picture: {
    display: 'flex',
   // background: 'pink',
    height: '550px',
    width: '100%',
  },
  picture_1: {
   // background: 'red',
    height: '500px',
    width: '40%',
    marginTop: '10px',
    marginLeft: '70px',
  },
  text_1: {
	display:'flex',
    background: 'white',
    height: '70px',
    width: '100%',
    marginTop: '100px',
    marginLeft: '90px',
  },
  text_2: {
    background: 'white',
    height: '50px',
    width: '40%',
	fontSize:'35px',
    marginTop: '10px',
    marginLeft: '50px',
  },
  input: {
    background: 'white',
    height: '55px',
    width: '400px',
    marginTop: '25px',
    marginLeft: '45px',
    border: '1px solid black',
  },
  input_1: {
    background: 'white',
    height: '105px',
    border: '1px solid black',
    width: '400px',
    marginTop: '20px',
    marginLeft: '45px',
  },
  button1: {
    height: '40px',
    width: '150px',
    backgroundColor: '#74a84a',
    color: 'white',
    marginTop: '10px',
    marginLeft: '45px',
    fontSize: '18px',
  },
  
  input_2: {
    background: 'white',
    height: '60px',
    width: '400px',
	fontSize:'15px',
    marginTop: '35px',
    marginLeft: '45px',
	color:'gray',
    //border: '1px solid black',
  },
    input_3: {
    background: 'pink',
    height: '55px',
    width: '380px',
	fontSize:'15px',
    marginTop: '35px',
    marginLeft: '45px',
	color:'gray',
    //border: '1px solid black',
  },
});

function Contact2() {
  const newThirdShow = ThirdShow();

  return (
    <>
      <div className={newThirdShow.text_1}>
      <div className={newThirdShow.text_2}><b>Get In Touch</b></div>
	  <div className={newThirdShow.text_2}><b>Talk To Us</b>
     </div>
	  </div>
	   
      <div className={newThirdShow.picture}>
	    <div className={newThirdShow.picture_1}>
<Login />
</div>
	  

	
        <div className={newThirdShow.picture_1}>
		<div className={newThirdShow.input_2}>EMAIL
		<h2>something@tyler.com</h2></div>
		<div className={newThirdShow.input_2}>PHONE NUMBER
		<h2>202-555-0188</h2></div>
  		<div className={newThirdShow.input_2}>ADDRESS
		<h2>2727 Ocean Road,Malibu, CA, 90264</h2></div>
  		<div className={newThirdShow.input_2}>Follow Us:

		<h2>something@tyler.com</h2></div>
  
          </div>
		  
      </div>
	   <Footer />
	  </>
  );
}

export default Contact2