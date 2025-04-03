import { useState, useContext } from "react";
import { GroupContext } from "../context/GroupContext.tsx";
import GroupeView from "./GroupeView.tsx";
import '../styles/CreateGroup.scss'
import Groupe from "../types/Groupe.ts";

const CreateGroupe = () => {
    const context = useContext(GroupContext);
    // @ts-ignore
    const {groups, addGroup } = context;

    const [newGroup, setNewGroup] = useState(new Groupe('nouveau groupe', []));
    const [textInput, setTextInput] = useState('');

    const handleAjouter = () => {
        if (textInput.trim() === '') {
            return;
        }
        const newNewGroupe = newGroup;
        newNewGroupe.person.push(textInput);
        setNewGroup(newNewGroupe);
        setTextInput('');
    }

    const handleRecommencer = () => {
        setNewGroup(new Groupe('nouveau groupe', []));
    }

    const handleAddGroup = () => {
        let newnewgroup = newGroup;
        newnewgroup.name = "Group " + (groups.length + 1);
        addGroup(newnewgroup);
        handleRecommencer();
    }

    return (
        <div className="create-group box">
            <input type='text' value={textInput} onChange={e => setTextInput(e.target.value)}/>
            <div className="controles">
                <button onClick={handleAjouter}>Ajouter</button>
                <button onClick={handleRecommencer}>Recommencer</button>
                <button onClick={handleAddGroup}>Ajouter Groupe</button>
            </div>
            <div className="name-list">
                {newGroup.person.map(person => (
                    <p key={person}>{person}</p>
                ))}
            </div>
        </div>
    )
}

export default CreateGroupe;
