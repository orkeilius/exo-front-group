import { useContext } from "react";
import { GroupContext } from "../context/GroupContext.tsx";
import GroupeView from "./GroupeView.tsx";
import '../styles/ListGroup.scss'

const ListGroup = () => {
    const context = useContext(GroupContext);

    if (!context) {
        return null;
    }

    const { groups } = context;

    return (
        <>
            {groups.map((item) => (
            <GroupeView groupe={item} key={item.name}/>
            ))}
        </>
    )
}

export default ListGroup
