import react from 'react';
import { createUseStyles } from 'react-jss';
import Footer from './Footer.js';

const SecondShow=createUseStyles({
picture:{
	display:'flex',
	background:'white',
	height:'650px',
	width:'100%',
},
picture_1:{
	background:'red',
	backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/10/Service-1-min.jpg")`,
	 backgroundSize: 'cover',
	height:'378px',
	width:'26%',
	marginTop:'40px',
	marginLeft:'100px',
},
picture_2:{
	background:'green',
	backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/10/Service-2-min.jpg")`,
	 backgroundSize: 'cover',
	height:'378px',
	width:'26%',
	marginTop:'40px',
	marginLeft:'30px',

},
picture_3:{
	background:'blue',
	backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/10/Service-3-min.jpg")`,
	 backgroundSize: 'cover',
	height:'378px',
	width:'26%',
	marginTop:'40px',
	marginLeft:'30px',

},
data:{
	background:'white',
	height:'120px',
	width:'300px',
	marginTop:'380px',
	marginLeft:'10px',

},


})

function SecondPage(){
	const newSecondShow=SecondShow();
return(
<div className={newSecondShow.picture}>
	
	<div className={newSecondShow.picture_1}>
		<div className={newSecondShow.data}><h2>Web Design</h2>
			Custom web design for small businesses, we help you capture new audiences and increase your sales.
		</div>
	</div>

	<div className={newSecondShow.picture_2}>
		<div className={newSecondShow.data}>
			<h2>Graphic Design</h2>
				Logos, merchandise and more. Anyone can create nice graphics. We think it’s better to create memorable ones.
		</div>
	</div>
	
	<div className={newSecondShow.picture_3}>
		<div className={newSecondShow.data}><h2>Content Creation</h2>
			Want to attract people to your website?  You have to have the best content in the world. That’s what we do.
		</div>
	</div>
</div>
);	
}
export default SecondPage