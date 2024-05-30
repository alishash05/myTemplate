import react from 'react';
import Header from './header/Header.js';
import { createUseStyles } from 'react-jss';
import SecondPage from './SecondPage.js';
import ThirdPage from './ThirdPage.js';
import FourthPage from './FourthPage.js';
import Explore from './component/btn.js';
import Login from './login.js';

const Show = createUseStyles({
page:{
	//background:'pink',
	backgroundImage:`url('https://i0.wp.com/www.norwichwealthpartners.com/wp-content/uploads/2022/10/Banner.jpg?resize=1024%2C577&ssl=1')`,
	backgroundSize: 'cover',
	height:'450px',
	width:'100%',
	},
box:{
	//background:'pink',
	height:'60px',
	width:'200px',
	marginTop:'10px',
	marginLeft:'530px',
},
subheading: {
    height: '100px',
    width: '40%',
    marginTop: '1px',
    marginLeft: '500px',
    fontSize: '90px',
    color: '#2c541d',
  },
subtext:{
//	background:'red',
	height: '60px',
    width: '40%',
    marginTop: '20px',
    marginLeft: '470px',
    fontSize: '40px',
    color: 'black',
  },
	
});

function FirstPage(){
	const newpage=Show();
return(
<div>
<div className={newpage.page}>
<div className={newpage.subheading}>
<b>EARTH</b>
</div>
<div className={newpage.subtext}>
ENDLESS POTENTIAL
</div>
<div className={newpage.box}>
<Explore />
</div>
</div>

</div>
);	
}
export default FirstPage