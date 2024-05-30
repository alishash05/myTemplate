import react from 'react';
import { createUseStyles } from 'react-jss';
import Navbar from './component/Navbar.js';
import Logo from './component/Logo.js';
import Footer from './Footer.js';

const ThirdShow=createUseStyles({
picture:{
	display:'block',
	backgroundImage: `url("https://i0.wp.com/www.norwichwealthpartners.com/wp-content/uploads/2022/10/Banner.jpg?resize=1024%2C577&ssl=1")`,
	backgroundSize: 'cover',
	height:'500px',
	width:'100%',
	color:'white',
},
text_1:{
	//background:'lightblue',
	height:'50px',
	width:'20%',
	marginTop:'100px',
	marginLeft:'550px',
	color:'green',
	fontSize:'50px',
},
text_2:{
	//background:'lightgreen',
	height:'90px',
	width:'38%',
	marginTop:'40px',
	marginLeft:'420px',
	color:'black',
},
button1:{
		type:"text",
		display:"inline-block",
		height:40,
		width:300,
		backgroundColor:"#74a84a",
		color:"white",
		marginTop:'10px',
		marginLeft:'550px',
		fontSize:'18px',
},
last:{
	display:'block',
	background:'white',
	height:'90px',
	width:'100%',
	marginTop:'210px',
	
},
name:{
	display:'block',
	//background:'pink',
	height:'45px',
	width:'20%',
	marginLeft:'600px',
	marginBottom:'5px',
},

})

function FourthPage(){
	const newThirdShow= ThirdShow();
return(
<>
<div className={newThirdShow.picture}>.
	<div className={newThirdShow.text_1}>
		TALK  TO  US
	</div>
	<div className={newThirdShow.text_2}>
		 Have any questions? We are always open to talk about your business, new projects, creative opportunities and how we can help you.
	</div>
	<button  className={newThirdShow.button1} >GET IN TOUCH</button>	
 </div>
 <Footer />
 </>
);	
}
export default FourthPage

		