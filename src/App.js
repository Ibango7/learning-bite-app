import './App.css';
import SideBar from './components/SideBar';

function App() {
  const items = ["My reads", "Suggestions", " My Badges", "Settings", "Log out"];
  return (
    <div className="App">
        <p>
           Welcome to learning bite App
        </p>
        <SideBar items ={items}/>
        
    </div>
  );
}
export default App;
