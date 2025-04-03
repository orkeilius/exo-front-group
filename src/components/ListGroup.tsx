import {useState} from "react";
import Groupe from "../types/Groupe.ts";
import GroupeView from "./GroupeView.tsx";
import '../styles/ListGroup.scss'

const ListGroup = () => {

    const [group, setGroup] = useState([
        new Groupe('Groupe 1', ['Person 1', 'Person 2']),
        new Groupe('Groupe 2', ['Person 3', 'Person 4']),
        new Groupe('Groupe 3', ['Person 5', 'Person 6']),
    ])

    return (
        group.map((item, index) => (
            <GroupeView groupe={item} key={item.name}/>
        ))
    )
}

export default ListGroup