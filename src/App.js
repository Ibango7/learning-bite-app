import React, { useState } from 'react';
import './App.css';
import SideBar from './components/siderBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from './components/mainComponent'; // home
import Entry from './components/entryComponent';
import Suggestions from './components/suggestions'; // recommendation page
import Badges from './components/badges'; // badges page
// import { useAuthState } from './providers/authProvider';

function App() {
  // const [logged, setLogged] = useState(false);
  const items = ["My reads", "Suggestions", "My Badges", "Settings"];
  // const {state} = useAuthState();
  // const isLoggedIn = state.isLoggedIn;


  // get user data from local storage
  const userData = JSON.parse(localStorage.getItem('user'));
  const exists =userData && userData.userId;
  // console.log("My All state", state );
  // console.log("User data from local storage", userData);
   
  return (

    <div className="App">
      {!exists?  <Entry/> :
      <BrowserRouter>
      <SideBar items ={items}/>
       <Routes>
           <Route path="/" element={<MainComponent />} />
           <Route path ="myreads" element={<MainComponent />} />
           <Route path="suggestions" element={<Suggestions />} />
           <Route path ="mybadges" element={<Badges />} />
       </Routes>
     </BrowserRouter> 
     
    }
      
    </div>
  );
}
export default App;
