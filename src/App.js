
import './App.css';
import { Profile } from './component/profile/Profile';
const student={fullname:"Ninho",bio:"Ninho, de son vrai nom William Nzobazola, est né à Longjumeau dans l'Essonne et a grandi à Nemours en Seine-et-Marne. Les parents du garçon sont d'origine kino-congolaise (diaspora de la République démocratique du Congo) et il a deux grandes sœurs. Dès son enfance, Ninho est très attiré par l'univers du rap. Il commence à écrire ses propres chansons et à les rapper à l'âge de 12 ans. Je tentais de faire comme les grands de mon quartier qui rappaient eux aussi, explique-t-il au média Yard. Très vite, l'adolescent montre un certain talent dans l'art de déclamer des textes. ",profession:"Rappeur"}
const handleName=(name)=>{alert(`Hello every body, I am ${name}`)}
const studentName="Rabeb"
function App() {
  return (
    <div className="App">
      <Profile name={studentName} st={student} hello={handleName}>
      <img src="https://img.nrj.fr/sQtGCnIc4NoMKkv3x3qm29HwDS0=/996x374/smart/medias%2F2022%2F10%2F63401863de470_6340186f0fdbb.jpg" alt=""></img>
      </Profile>
    </div>
  );
}

export default App;
