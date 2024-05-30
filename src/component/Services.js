import React from 'react';
import Header from './Header.js';
import { createUseStyles } from 'react-jss';
import FourthPage from './FourthPage.js';
import Services2 from './Services2.js';
import Footer from './Footer.js';

const Show = createUseStyles({
	  page:{
	background: 'white',
    height: '450px',
    width: '100%',
   },
  picture: {
    backgroundImage: `url("https://i0.wp.com/www.norwichwealthpartners.com/wp-content/uploads/2022/10/Banner.jpg?resize=1024%2C577&ssl=1")`,
	backgroundSize: 'cover',
    height: '450px',
  },
  subheading: {
    display: 'flex',
    height: '100px',
    width: '40%',
    marginTop: '0px',
    marginLeft: '500px',
    fontSize: '75px',
    color: '#2c541d',
  },
});

function Services() {
  const newShow = Show();

  return (
  
  <div className={newShow.page}>
     <div className={newShow.picture}>
        <div className={newShow.subheading}>
          <b>SERVICES</b>
        </div>
      </div>
	
  </div>   
  );
}

export default Services