import React, {useState} from "react";
import style from '../styles/login-modal-style.module.css'

const RegisterModal = ({isOpen, onClose}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] =  useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handlePasswordConfChange = (event) => {
        setConfirmPassword(event.target.value);
      };

      const handleGenderChange = (event) =>{
        setGender(event.target.value);
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        console.log("Email", email);
        console.log("Gender: ", gender);
        console.log("Confirm pass word: ", confirmPassword);
        // You can perform your login authentication here
        // For simplicity, I'm just logging the username and password to the console
        // You should replace this with your actual authentication logic
        // Once authenticated, you can close the modal
        onClose();
      };

    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <div className={style.modal}>
                <div className={style.modalcontent}>
                <span className={style.close} onClick={onClose}>&times;</span>
                    <h2>Register account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                    <input type="text" id="uname" placeholder="Name" value={username} onChange={handleUsernameChange} required />
                    <br></br>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                    <br></br>
                    <label className={style.label} htmlFor="gender">Gender</label>
                    <select className={style.select} id="gender" value={gender} onChange={handleGenderChange} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input type="password" id="psw" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                    <input type="password" id="psw-conf" placeholder="Confirm password" value={confirmPassword} onChange={handlePasswordConfChange} required />
                    <br></br>
                    <button className={style.bt} style={{backgroundColor:"#616387", fontSize:"20px", }} type="submit">Register</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
      );

 }

 export default RegisterModal;