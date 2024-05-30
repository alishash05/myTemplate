import React from 'react';
import { createUseStyles } from 'react-jss';

const Show = createUseStyles({

  
  picture: {
    display: 'flex',
    background: 'white',
    height: '550px',
    width: '100%',
  },
  picture_1: {
    background: 'red',
    backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/10/Our-Mission-min.jpg")`,
    backgroundSize: 'cover', 
    height: '400px',
    width: '40%',
    marginTop: '80px',
    marginLeft: '90px',
  },
  picture_2: {
    height: '350px',
    width: '40%',
    marginTop: '80px',
    marginLeft: '90px',
  },
  text_1: {
    height: '200px',
    width: '85%',
    marginTop: '90px',
    marginLeft: '40px',
  },
});

function About2() {
  const newShow = Show();
  return (
  
    <div className={newShow.picture}>
      <div className={newShow.picture_1}></div>
      <div className={newShow.picture_2}>
        <div className={newShow.text_1}>
          <h1>OUR MISSION</h1>
          <p>
            Hello, my name is Tyler Moore and with the help of many people I made this template. I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do.
          </p>
          <p>I wish you the best of luck with your business, enjoy the adventure.</p>
        </div>
      </div>
    </div>
 );
}

export default About2