import Groupe from "../types/Groupe.ts";
import {useContext, useState} from "react";
import {GroupContext} from "../context/GroupContext.tsx";
import {motion} from "motion/react";
import "../styles/GroupeView.scss"

interface GroupProps {
    groupe: Groupe;
    name: string;
}

export default function NameChip({groupe, name}: GroupProps) {
    const context = useContext(GroupContext);
    const [isHover, setIsHover] = useState(false);

    const handleDelete = () => {
        if (!context) {
            return;
        }
        const newGroup = groupe;
        newGroup.person = groupe.person.filter((person) => person !== name);
        context?.dispatch({action: "upsert", value: newGroup});
    }

    return (
        <motion.li
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => {
                setIsHover(false)
            }}
        >{name}
            {isHover && (
                <motion.button onClick={handleDelete}
                               className="remove-name-button"
                               initial={{opacity: 0, scale: 0}}
                               animate={{opacity: 1, scale: 1}}
                               exit={{opacity: 0, scale: 0}}
                ></motion.button>)}
        </motion.li>
    )
}