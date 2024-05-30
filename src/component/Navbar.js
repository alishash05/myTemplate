/*import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const menustyle = createUseStyles({
  box: {
    width: '80%',
    height: 40,
    padding: 5,
    margin: '5px 0px 5px 10px',
   // backgroundColor: 'green',
    //color: 'white',
	marginLeft:'10px',
  },
  tab: {
    display: 'inline-block',
    height: 40,
    width: 40,
    margin: '10px 0px 0px 80px',
   // backgroundColor: 'blue',
	marginBottom:'10px',
	color:'#2c541d',
	fontsize:'34px',
	
  },
});

function Navbar(){
  const newmenustyle = menustyle();
  const items = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/About' },
    { name: 'SERVICES', path: '/Services' },
    { name: 'CONTACT', path: '/Contact' },
  ];

  return (
    <div id='item' className={newmenustyle.box} >
      {items.map((item, index) => (
        <div key={index} className={newmenustyle.tab} >
          <Link to={item.path}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Navbar*/
import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const menustyle = createUseStyles({
box:{
    width: '80%',
    height: 40,
    padding: 5,
    margin: '5px 0px 5px 10px',
   // backgroundColor: 'green',
    //color: 'white',
	marginLeft:'10px',
},
tab:{
    display: 'inline-block',
    height: 40,
    width: 40,
    margin: '10px 0px 0px 80px',
   // backgroundColor: 'blue',
	marginBottom:'10px',
	color:'#2c541d',
	fontsize:'34px',
},
});

function Navbar(){
const newmenustyle = menustyle();
const items = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/About' },
    { name: 'SERVICES', path: '/Services' },
    { name: 'CONTACT', path: '/Contact' },
];

return(
<div id='item' className={newmenustyle.box} >
    {items.map((item, index) => (
        <div key={index} className={newmenustyle.tab} >
			<Link to={item.path}>
				{item.name}
			</Link>
        </div>
    ))}
</div>
);
}

export default Navbar