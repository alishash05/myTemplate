/*import react from 'react';
import { createUseStyles } from 'react-jss';
import Navbar from'./Navbar.js';
import Selectbar from './selectbar.js';

const Show=createUseStyles({
	
	header:{
	display:'flex',
	background:'#87ceeb1c',
	width:'98%',
	height:'80px',
	padding:'10px',
	
	},
	name:{
	background:'none',
	width:'50%',
	height:'60px',
	padding:'5px',	
	},
	subheader:{
	//background:'pink',
	width:'50%',
	height:'60px',
	padding:'5px',	
	},
	img:{
	height:19,
	width:96,
	backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/08/Logo-96x19.png")`,
	marginLeft:65,
	marginTop:30,
	
	},
});

function Header(){
	const newShow=Show();
return(
<div className={newShow.header}>
	<div className={newShow.name}>
		<div className={newShow.img}></div>
	</div>
	<div className={newShow.subheader}>
	<Selectbar />
	</div>
</div>
);
}
export default Header*/
import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import axios from 'axios'; // Import Axios

const Show = createUseStyles({
  header: {
    display: 'flex',
    background: '#87ceeb1c',
    width: '98%',
    height: '80px',
    padding: '10px',
  },
  name: {
    background: 'none',
    width: '50%',
    height: '60px',
    padding: '5px',
  },
  subheader: {
    width: '50%',
    height: '60px',
    padding: '5px',
  },
  img: {
    height: 19,
    width: 96,
    backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/08/Logo-96x19.png")`,
    marginLeft: 65,
    marginTop: 30,
  },
});

function Header() {
  const newShow = Show();

  useEffect(() => {
    
    const username = 'emilys';
    const password = 'emilyspass';

    axios.post('https://dummyjson.com/auth/login', {
      username: username,
      password: password,
    })
    .then(res => {
      console.log(res.data); 
	  })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []); 

  return (
    <div className={newShow.header}>
      <div className={newShow.name}>
        <div className={newShow.img}></div>
      </div>
      <div className={newShow.subheader}>
        
      </div>
    </div>
  );
}

export default Header