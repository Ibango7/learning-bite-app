import './App.css';
import SideBar from './components/SideBar';
import MainComponent from './components/MainComponent';

function App() {
  const items = ["My reads", "Suggestions", " My Badges", "Settings", "Log out"];
  return (
    <div className="App">
      <SideBar items ={items}/>
      <MainComponent/>
        
    </div>
  );
}
export default App;
