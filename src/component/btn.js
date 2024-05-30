import react from 'react';
import { createUseStyles } from 'react-jss';


const btn=createUseStyles({

button1:{
		type:"text",
		display:"inline-block",
		height:50,
		width:200,
		backgroundColor:"#74a84a",
		color:"black",
		marginTop:'20px',
		marginLeft:'10px',
		fontSize:'18px',
},
})

function Explore(){
const newbtn=btn();

return(
	<button  className={newbtn.button1} >EXPLORE</button>

);	
}
export default Explore