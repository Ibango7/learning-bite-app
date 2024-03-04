import React, {useEffect, useState} from "react";
import style from './login-modal-style.module.css'
import { useAuthState } from '../../providers/authProvider';

const LoginModal = ({isOpen, onClose}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loginUser} = useAuthState(); 
    const [error, setError] = useState('');


      /*useEffect(()=>{
        setError('');
          setEmail('');
        setPassword('');
      },[])*/

    const handleUsernameChange = (event) => {
      setEmail(event.target.value);
      };

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        const User = {
          email,
          password
      }

      try {
        await loginUser(User);

        // onClose();
        // if login is successful
      } catch (error){
        setError('Invalid email or password');
      }
       
    };

    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <div className={style.modal}>
                <div className={style.modalcontent}>
                <span className={style.close} onClick={onClose}>&times;</span>
                    <h2>Login to LearningBite</h2>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                    <input type="text" id="uname" placeholder="Email" value={email} onChange={handleUsernameChange} required />
                    <br></br>
                    <input type="password" id="psw" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                    <button className={style.bt}  type="submit">Login</button>
                    {error && <p style={{ color: 'green' }}>{error}</p>}
                    <p>Forgot password</p>
                    <p>Don't have an account?</p>
                    </div>
                </form>
                </div>
            </div>
        </div>
      );

 }

 export default LoginModal;