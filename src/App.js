import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from './components/MainComponent'; // home
import Suggestions from './components/Suggestions'; // recommendation page
import Badges from './components/Badges'; // badges page


function App() {
  const items = ["My reads", "Suggestions", "My Badges", "Settings", "Logout"];
  return (


    <div className="App">
       <BrowserRouter>
       <SideBar items ={items}/>
        <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path ="myreads" element={<MainComponent />} />
            <Route path="suggestions" element={<Suggestions />} />
            <Route path ="mybadges" element={<Badges />} />
        </Routes>
      </BrowserRouter>  
      {/* <MainComponent/>   */}
    </div>
  );
}
export default App;
