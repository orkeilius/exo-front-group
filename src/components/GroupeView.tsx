import Groupe from "../types/Groupe.ts";
import "../styles/GroupeView.scss"
import { motion,AnimatePresence } from "motion/react"
import {useContext, useState} from "react";
import {GroupContext} from "../context/GroupContext.tsx";
import { GoX } from "react-icons/go";

const GroupeView = ({groupe} :{groupe:Groupe}) => {
  const context = useContext(GroupContext);
  const [isHover, setIsHover] = useState(false);
  const handleDelete = () => {
    context?.removeGroup(groupe);
  }
  return (
    <motion.div className="groupe-view box"
      initial={{transform : 'translateX(-100%)',opacity:0,scale:0}}
                animate={{transform: 'translateX(0)',opacity:'100%',scale:"100%"}}
                layout="position"
                layoutId={"group-"+groupe.name}
                onHoverStart={() => setIsHover(true)}
                onHoverEnd={() => setIsHover(false)}

    >
      <h1>{groupe.name}</h1>
        <p>nombre : {groupe.person.length}</p>
        <ul>
            {groupe.person.map((person) => (
            <li key={person}>{person}</li>
            ))}
        </ul>
      <AnimatePresence>
        {isHover &&(
            <motion.button onClick={handleDelete}
              className="remove-button"
                initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1}}
                exit={{opacity:0,scale:0}}
            ><GoX/></motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GroupeView
