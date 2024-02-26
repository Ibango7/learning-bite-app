import React, {useState} from "react";
import style from '../styles/login-modal-style.module.css'

const LoginModal = ({isOpen, onClose}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        // You can perform your login authentication here
        // For simplicity, I'm just logging the username and password to the console
        // You should replace this with your actual authentication logic
        // Once authenticated, you can close the modal
        onClose();
      };

    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <div className={style.modal}>
                <div className="modal-content">
                <span className={style.close} onClick={onClose}>&times;</span>
                    <h2>Login to learningBite</h2>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                    <input type="text" id="uname" placeholder="Username" value={username} onChange={handleUsernameChange} required />
                    <br></br>
                    <input type="password" id="psw" placeholder="Password" value={password} onChange={handlePasswordChange} required />

                    <button className={style.btn} type="submit">Login</button>
                    <p>Forgot password</p>
                    <p>Forgot password</p>
                    </div>
                </form>
                </div>
            </div>
        </div>
      );

 }

 export default LoginModal;