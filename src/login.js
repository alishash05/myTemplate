/*import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Footer from './Footer.js';

const ThirdShow = createUseStyles({
picture:{
    // background: 'blue',
    height: '480px',
    width: '40%',
    marginTop: '10px',
    marginLeft: '10px',
},
picture_1:{
    // background: 'pink',
    height: '450px',
    width: '90%',
    marginTop: '10px',
    marginLeft: '50px',
},
input:{
    background: 'white',
    height: '55px',
    width: '300px',
    marginTop: '25px',
    marginLeft: '45px',
    border: '1px solid black',
  },
input_1:{
    background: 'white',
    height: '105px',
    border: '1px solid black',
    width: '300px',
    marginTop: '20px',
    marginLeft: '45px',
},
button1:{
    height: '40px',
    width: '150px',
    backgroundColor: '#74a84a',
    color: 'white',
    marginTop: '10px',
    marginLeft: '45px',
    fontSize: '18px',
},
});

function Login(){
  const newThirdShow = ThirdShow();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
});

const userValue=(e)=>{
	const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
}

useEffect(()=>{
				console.log('Form data changed:', formData);
			}, [formData]);

const valueSubmit=()=>{
	const { name, phone, email, message }=formData;
    alert(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`);
  }

return(
<div>
    <div className={newThirdShow.picture}>
        <div className={newThirdShow.picture_1}>
        <input className={newThirdShow.input} placeholder='Your Name' name='name' value={formData.name} onChange={userValue} />
        <input className={newThirdShow.input} placeholder='Phone No' name='phone'  value={formData.phone}  onChange={userValue}  />
          <input className={newThirdShow.input} placeholder='Email' name='email' value={formData.email}  onChange={userValue} />
          <textarea className={newThirdShow.input_1} placeholder='Message' name='message' value={formData.message} onChange={userValue} ></textarea>
          <button className={newThirdShow.button1} onClick={valueSubmit}>
            SEND NOW
          </button>
        </div>
    </div>
</div>
);
}

export default Login*/

import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Footer from './Footer.js';

const ThirdShow = createUseStyles({
picture:{
    // background: 'blue',
    height: '480px',
    width: '40%',
    marginTop: '10px',
    marginLeft: '10px',
},
picture_1:{
    // background: 'pink',
    height: '450px',
    width: '90%',
    marginTop: '10px',
    marginLeft: '50px',
},
input:{
    background: 'white',
    height: '55px',
    width: '300px',
    marginTop: '25px',
    marginLeft: '45px',
    border: '1px solid black',
  },
input_1:{
    background: 'white',
    height: '105px',
    border: '1px solid black',
    width: '300px',
    marginTop: '20px',
    marginLeft: '45px',
},
button1:{
    height: '40px',
    width: '150px',
    backgroundColor: '#74a84a',
    color: 'white',
    marginTop: '10px',
    marginLeft: '45px',
    fontSize: '18px',
},
});

function Login(){
  const newThirdShow = ThirdShow();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
});
console.log(formData,'formData');
console.log(setFormData,'setFormData');


const userValue=(e)=>{
	const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
}
console.log(userValue,'userValue');
console.log(setFormData,'setFormData');

useEffect(()=>{
				console.log('Form data changed:', formData);
			}, [formData]);
console.log(useEffect,'useEffect');


const valueSubmit=()=>{
	const { name, phone, email, message }=formData;
    alert(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`);
  }

return(
<div>
    <div className={newThirdShow.picture}>
        <div className={newThirdShow.picture_1}>
        <input className={newThirdShow.input} placeholder='Your Name' name='name' value={formData.name} onChange={userValue} />
        <input className={newThirdShow.input} placeholder='Phone No' name='phone'  value={formData.phone}  onChange={userValue}  />
          <input className={newThirdShow.input} placeholder='Email' name='email' value={formData.email}  onChange={userValue} />
          <textarea className={newThirdShow.input_1} placeholder='Message' name='message' value={formData.message} onChange={userValue} ></textarea>
          <button className={newThirdShow.button1} onClick={valueSubmit}>
            SEND NOW
          </button>
        </div>
    </div>
</div>
);
}

export default Login