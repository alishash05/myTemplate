import react from 'react';
import { createUseStyles } from 'react-jss';
import Explore from './btn.js';

const ThirdShow=createUseStyles({
picture:{
	display:'flex',
	//background:'pink',
	height:'600px',
	width:'100%',
},
img_1:{
	//background:'red',
	    backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/10/Service-1-min.jpg")`,
    backgroundSize: 'cover', 
	height:'350px',
	width:'40%',
	marginTop:'80px',
	marginLeft:'90px',
},

img_2:{
	//background:'red',
backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/10/Service-2-min.jpg")`,
	 backgroundSize: 'cover',
	height:'350px',
	width:'40%',
	marginTop:'80px',
	marginLeft:'90px',
},

img_3:{
	background:'red',
		backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/10/Service-3-min.jpg")`,
	 backgroundSize: 'cover',
	height:'350px',
	width:'40%',
	marginTop:'100px',
	marginLeft:'90px',
},

picture_2:{
	//background:'red',
	height:'350px',
	width:'30%',
	marginTop:'90px',
	marginLeft:'90px',
	color:'black'
},
text_1:{
	//background:'blue',
	height:'200px',
	width:'85%',
	marginTop:'90px',
	marginLeft:'40px',
	
	
},

})

function Services2(){
	const newThirdShow= ThirdShow();
return(
<div>
<div className={newThirdShow.picture}>
<div className={newThirdShow.picture_2}>
<h2>Web Design</h2>
<p>We create custom web design for small businesses, this will help you capture new audiences and increase your sales. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours.</p>
<Explore />
</div>
<div className={newThirdShow.img_1}>
</div>
</div>
<div className={newThirdShow.picture}>
<div className={newThirdShow.img_2}></div>
<div className={newThirdShow.picture_2}><h2>Graphic Design</h2>
<p>We specialize in logos, merchandise and more. Anyone can create nice graphics but it’s much better to create memorable ones. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours.</p>
<Explore />

</div>
</div>
<div className={newThirdShow.picture}>
<div className={newThirdShow.picture_2}><h2>Content Writing</h2>
<p>Want to attract people to your website? You have to have the best content in the world. Our content writers will create award willing content for you. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours.</p>
<Explore />

</div>
<div className={newThirdShow.img_3}>
</div>
</div>
</div>
);	

}
export default Services2

