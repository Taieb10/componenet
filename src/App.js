import logo from './logo.svg';
import './App.css';
import ProfileImage from './component/profile/ProfileImage';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';
function App() {
  return (
    <div className="App">
      <ProfileImage />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
