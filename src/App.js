import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from './components/MainComponent'; // home
import Entry from './components/EntryComponent';
import Suggestions from './components/Suggestions'; // recommendation page
import Badges from './components/Badges'; // badges page


function App() {
  const [logged, setLogged] = useState(false);

  const items = ["My reads", "Suggestions", "My Badges", "Settings", "Logout"];
  return (


    <div className="App">
      {!logged ?  <Entry/> :
      
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
