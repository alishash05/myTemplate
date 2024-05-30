import React from 'react';
import Header from './header/Header.js';
import { createUseStyles } from 'react-jss';
import FourthPage from './FourthPage.js';
import About2 from './About2.js';

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
    height: '80px',
    width: '45%',
  //  marginTop: '150px',
    marginLeft: '400px',
    fontSize: '75px',
    color: '#2c541d',
  },
});

function About() {
  const newShow = Show();

  return (
  
  <div className={newShow.page}>
     <div className={newShow.picture}>
        <div className={newShow.subheading}>
          <b>WHO ARE WE ?</b>
        </div>
      </div>

  </div>   
  );
}

export default About
