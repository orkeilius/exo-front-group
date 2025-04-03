import Groupe from "../types/Groupe.ts";
import "../styles/GroupeView.scss"


const GroupeView = ({groupe} :{groupe:Groupe}) => {
  return (
    <div className="groupe-view">
      <h1>{groupe.name}</h1>
        <p>nombre : {groupe.person.length}</p>
        <ul>
            {groupe.person.map((person, index) => (
            <li key={person}>{person}</li>
            ))}
        </ul>
    </div>
  );
};

export default GroupeView