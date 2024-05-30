/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const menustyle = createUseStyles({
dropbtn:{
    backgroundColor: '#2c541d',
    color: 'white',
    padding: '16px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
	marginLeft:'70px',
	marginTop:'20px',
},
dropdown:{
    position: 'relative',
    display: 'inline-block',
	marginLeft:'450px',
},
dropdownContent:{
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
},
dropdownContentShow:{
display: 'block',
},
dropdownContentLink:{
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
},
dropdownContentLinkHover:{
	backgroundColor: '#f1f1f1',
},
});

function Selectbar(){
  const newmenustyle = menustyle();
  const [DropdownOpen, setDropdownOpen] = useState(false);

  const Dropdown = () => {
    setDropdownOpen(!DropdownOpen);
  }
console.log( Dropdown,'Dropdown')

  const items = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/About' },
    { name: 'SERVICES', path: '/Services' },
    { name: 'CONTACT', path: '/Contact' },
  ];
console.log(items,'item');

return(
<div>
	<div className={newmenustyle.dropdown}>
        <button className={newmenustyle.dropbtn} onClick={Dropdown}>Menu</button>
        <div className={`${newmenustyle.dropdownContent} ${DropdownOpen ? newmenustyle.dropdownContentShow : ''}`} >
          {items.map((item, index)=>(
            <Link key={index} to={item.path} className={newmenustyle.dropdownContentLink} >
              {item.name} ({item.path})
            </Link>
          ))}
        </div>
    </div>
</div>
);
}

export default Selectbar
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const menustyle = createUseStyles({
dropbtn:{
    backgroundColor: '#2c541d',
    color: 'white',
    padding: '16px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
	marginLeft:'70px',
	marginTop:'20px',
},
dropdown:{
    position: 'relative',
    display: 'inline-block',
	marginLeft:'450px',
},
dropdownContent:{
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
  },
dropdownContentShow:{
display: 'block',
},
dropdownContentLink:{
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
},

});

function Selectbar(){
  const newmenustyle = menustyle();
  const [DropdownOpen, setDropdownOpen] = useState(false);

  const Dropdown = () => {
    setDropdownOpen(!DropdownOpen);
  }
console.log( Dropdown,'Dropdown')

  const items = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/About' },
    { name: 'SERVICES', path: '/Services' },
    { name: 'CONTACT', path: '/Contact' },
  ];
console.log(items,'item');

return(
<div>
	<div className={newmenustyle.dropdown}>
        <button className={newmenustyle.dropbtn} onClick={Dropdown}>Menu</button>
        <div className={`${newmenustyle.dropdownContent} ${DropdownOpen ? newmenustyle.dropdownContentShow : ''}`} >
          {items.map((item, index)=>(
            <Link key={index} to={item.path} className={newmenustyle.dropdownContentLink} >
              {item.name} ({item.path})
            </Link>
          ))}
        </div>
    </div>
</div>
);
}

export default Selectbar