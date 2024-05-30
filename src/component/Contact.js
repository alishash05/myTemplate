import React from 'react';
import Header from './Header.js';
import { createUseStyles } from 'react-jss';
import Contact2 from './Contact2.js';

const Show = createUseStyles({
	  page:{
	background: 'white',
    height: '450px',
    width: '100%',
   },
  picture: {
    backgroundImage: `url("https://i0.wp.com/www.norwichwealthpartners.com/wp-content/uploads/2022/10/Banner.jpg?resize=1024%2C577&ssl=1")`,
	backgroundSize: 'cover',
    height: '550px',
  },
  subheading: {
    display: 'flex',
    height: '100px',
    width: '40%',
    //marginTop: '100px',
    marginLeft: '450px',
    fontSize: '75px',
    color: '#2c541d',
  },
});

function Contact() {
  const newShow = Show();

return (
  
  <div className={newShow.page}>
     <div className={newShow.picture}>
        <div className={newShow.subheading}>
          <b>CONTACT US</b>
        </div>
      </div>

  </div>   
  );
}

export default Contact