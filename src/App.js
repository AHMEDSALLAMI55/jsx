
import './App.css';
import Address from './Component/profile/Adress';
import FullName from './Component/profile/FullName';
import ProfilePhoto from './Component/Profilephoto';

function App() {
  return (
    <div className="App">
   <h1>Welcome</h1>
   <ProfilePhoto/>
    <FullName/>
    <Address/>

    </div>
  );
}

export default App;
