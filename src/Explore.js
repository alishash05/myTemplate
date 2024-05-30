import react from 'react';
import Header from './Header.js';
import { createUseStyles } from 'react-jss';


const FirstShow=createUseStyles({
picture:{
    backgroundImage: `url("https://i0.wp.com/www.norwichwealthpartners.com/wp-content/uploads/2022/10/Banner.jpg?resize=1024%2C577&ssl=1")`,
	height:'600px',
},
subheading:{
	display:'flex',
	//background:'white',
	height:'100px',
	width:'30%',
	marginLeft:'500px',
	fontSize:'80px',
	color:'#2c541d',
},
subname:{
	display:'flex',
	//background:'white',
	height:'70px',
	width:'35%',
	marginTop:'10px',
	marginLeft:'430px',
	fontSize:'45px',
	color:'black',
},
button1:{
		type:"text",
		display:"inline-block",
		height:45,
		width:200,
		backgroundColor:"#74a84a",
		color:"black",
		marginTop:'20px',
		marginLeft:'530px',
		fontSize:'18px',
},
})

function Explore(){
const newFirstShow=FirstShow();

return(
<div className={newFirstShow.picture}>
	<Header />
	<div className={newFirstShow.subheading}>
		<b>EARTH</b>
	</div>
	<div className={newFirstShow.subname}>ENDLESS POTENTIAL</div>
	<button  className={newFirstShow.button1} >EXPLORE</button>
</div>
);	
}
export default Explore