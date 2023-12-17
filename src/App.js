import './App.css';
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [data,setData] = useState('')
  const [matchedEmail,setMatchedEmail] = useState('');
  const [passwordLength,setPasswordLength] = useState('');
  const [matchedPassword,setMatchedPassword] = useState('');
  const [errorEmail,setErrorEmail] = useState('');
  const [errorPassword,setErrorPassword] = useState('');
  const [errorConfirmPassword,setErrorConfirmPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      email: email,
      password: password,
      confirmPassword: confirmPassword
    });

    setEmail('');
    setPassword('');
    setConfirmPassword('');

    if(!data.email.includes('@') && !data.email.includes('.') ){
      setErrorEmail('Invalid Email Format');
      setMatchedEmail(false);
      return;
    }
    else{
      setMatchedEmail(true);
    }


    if(data.password.length<8){
      setErrorPassword("Password must be atlest 8 characters");
      setPasswordLength(false);
      return;
    }
    else{
      setPasswordLength(true);
    }


    if(data.password !== data.confirmPassword){
      setErrorConfirmPassword("Passwords do not match");
      setMatchedPassword(false);
      return;
    }
    else{
      setMatchedPassword(true);
    }
    

    

    alert('Login Successfull');

  };



  return (
    <div className="App">
      <form className='form' onSubmit={handleSubmit}>



        <div className='element'>
          <label htmlFor='email'>Email</label>
          <input 
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
            placeholder="example@domain.com"
            className='email'
            required/>
          <p>{errorEmail}</p>
        </div>



        <div className='element'> 
          <label htmlFor='password'>Password</label>
          <input 
          type='password' 
          name='password' 
          placeholder='Enter Password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className='password'
          required />
          <p>{errorPassword}</p>
        </div>



        <div className='element'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input 
          type='password' 
          name='confirmPassword' 
          placeholder='Confirm Password' 
          value={confirmPassword}  
          onChange={(e) => setConfirmPassword(e.target.value)}
          required/>
          <p>{errorConfirmPassword}</p>
        </div>
        <div>
          <button type='submit'>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default App;
