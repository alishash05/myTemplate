import react from 'react';
import { createUseStyles } from 'react-jss';
import Logo from './component/Logo.js';
import Navbar from './component/Navbar.js';

const FooterShow=createUseStyles({
picture:{
	display:'flex',
	background:'white',
	height:'110px',
	width:'100%',
},
picture_1:{
	//background:'red',
	height:'80px',
	width:'25%',
	marginTop:'20px',
	//marginLeft:'1px',
},
picture_2:{
	//background:'red',
	height:'80px',
	width:'50%',
	marginTop:'20px',
	marginLeft:'5px',
},
data:{
	background:'white',
	height:'50px',
	width:'68%',
	marginTop:'10px',
	marginLeft:'100px',

},


})

function Footer(){
	const newFooterShow=FooterShow();
return(
<div className={newFooterShow.picture}>
	<div className={newFooterShow.picture_2}><Navbar /></div>
	<div className={newFooterShow.picture_1}>
	<div className={newFooterShow.data}><Logo /></div>
	</div>
	<div className={newFooterShow.picture_1}><div className={newFooterShow.data}>©2022 Earth. All right reserved.</div></div>
</div>			
);	
}
export default Footer