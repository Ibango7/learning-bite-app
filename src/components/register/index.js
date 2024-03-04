import React, {useState} from "react";
import style from './register-modal-style.module.css'
import { useAuthState } from '../../providers/authProvider';

const RegisterModal = ({isOpen, onClose}) =>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] =  useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const {registerUser} = useAuthState(); 
    const [error, setError] = useState('');

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }

    const handleUsernameChange = (event) => {
      setName(event.target.value);
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

      const handleSubmit = async (event) => {
        event.preventDefault();
        const User = {
          name,
          email,
          passwordHash: password,
          sex:gender ==="male"? 0:1,
        }

        // console.log("Registration object", User);
        try{
          await registerUser(User)
           // onClose();
          // registration was successful
        }catch(error) {
          setError('Coudn\'t registe. Try again later');
          console.log(error);
        }
      };

    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <div className={style.modal}>
                <div className={style.modalcontent}>
                <span className={style.close} onClick={onClose}>&times;</span>
                    <h2>Register account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                    <input type="text" id="uname" placeholder="Name" value={name} onChange={handleUsernameChange} required />
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
                    <button className={style.bt} type="submit">Register</button>
                    {error && <p style={{ color: 'green' }}>{error}</p>}
                    </div>
                </form>
                </div>
            </div>
        </div>
      );

 }

 export default RegisterModal;