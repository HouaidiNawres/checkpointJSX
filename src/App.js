import logo from "./logo.svg";
import "./App.css";
import ProfilePhoto from "./Component/Profil/ProfilePhoto";
import FullName from "./Component/Profil/FullName";
import Adresse from "./Component/Profil/Address";

function App() {
  return (
    <div className="App">
      <h1>This is jsx ws</h1>
      <ProfilePhoto />
      <FullName />
      <Adresse />
    </div>
  );
}

export default App;
