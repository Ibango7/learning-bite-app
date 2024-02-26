import React, {useState} from "react";

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
            <div className="modal">
                <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" value={username} onChange={handleUsernameChange} required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} required />

                    <button type="submit">Login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
      );

 }

 export default LoginModal;