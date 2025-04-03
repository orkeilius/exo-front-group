import { useContext } from "react";
import { GroupContext } from "../context/GroupContext.tsx";
import GroupeView from "./GroupeView.tsx";
import '../styles/ListGroup.scss'
import {AnimatePresence, motion} from "motion/react";

const ListGroup = () => {
    const context = useContext(GroupContext);

    if (!context) {
        return null;
    }

    const { groups } = context;

    return (
        <AnimatePresence>
            {groups.map((item) => (
                <motion.div key={item.name} layout>
                    <GroupeView groupe={item} />
                </motion.div>
            ))}
        </AnimatePresence>
    )
}

export default ListGroup
