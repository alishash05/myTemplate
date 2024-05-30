import react from 'react';
import { createUseStyles } from 'react-jss';


const ThirdShow=createUseStyles({
picture:{
	display:'flex',
	background:'white',
	height:'550px',
	width:'100%',
},
picture_1:{
	background:'red',
	backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/10/Our-Mission-min-1024x762.jpg")`,
	height:'350px',
	width:'40%',
	marginTop:'80px',
	marginLeft:'90px',
},

picture_2:{
	//background:'red',
	height:'350px',
	width:'40%',
	marginTop:'80px',
	marginLeft:'90px',
},
text_1:{
	//background:'blue',
	height:'200px',
	width:'85%',
	marginTop:'90px',
	marginLeft:'40px',
	
	
},

})

function ThirdPage(){
	const newThirdShow= ThirdShow();
return(
<div className={newThirdShow.picture}>
	<div className={newThirdShow.picture_2}>
	<div className={newThirdShow.text_1}>
		<h1>ABOUT US</h1>
		I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do. I wish you the best of luck with your business, enjoy the adventure.
	</div>
	</div>
<div className={newThirdShow.picture_1}></div>
</div>
);	
}
export default ThirdPage