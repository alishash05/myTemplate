import react from 'react';
import { createUseStyles } from 'react-jss';
import Navbar from'../component/Navbar.js';

const Show=createUseStyles({

	img:{
	height:19,
	width:96,
	backgroundImage: `url("https://websitedemos.net/earth-02/wp-content/uploads/sites/1125/2022/08/Logo-96x19.png")`,
	
	},
});

function Logo(){
	const newShow=Show();
return(
<div className={newShow.img}>
</div>

);
}
export default Logo