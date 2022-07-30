import Profile from './Component/Profile/Profile.js';
import Image from './Component/Profile/Image'
import imge from '../src/pic.jpg'
import aler from './Component/Profile/Profile'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Profile fullName="Nidhal Rebhi" bio="master degree in cyber security and I am a student in Gomycode" profession="I am junior as cyber security and a web developer"  />
      <Image imge={imge}/>

      <hundle />
    </div>
  );
}

export default App;
