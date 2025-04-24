import Groupe from "../types/Groupe.ts";
import "../styles/GroupeView.scss"
import {AnimatePresence, motion} from "motion/react"
import {useContext, useState} from "react";
import {GroupContext} from "../context/GroupContext.tsx";
import {GoX} from "react-icons/go";
import NameChip from "./NameChip.tsx";

const GroupeView = ({groupe}: { groupe: Groupe }) => {
    const context = useContext(GroupContext);
    const [isHover, setIsHover] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const handleDelete = () => {
        context?.dispatch({action: "remove", value: groupe})
    }
    return (
        <motion.div className="groupe-view box"
                    initial={{transform: 'translateX(-100%)', opacity: 0, scale: 0}}
                    animate={{transform: 'translateX(0)', opacity: '100%', scale: "100%", filter: "blur(0)"}}
                    exit={{opacity: 0, filter: "blur(100px)"}}
                    layout="position"
                    layoutId={"group-" + groupe.name}
                    onHoverStart={() => setIsHover(true)}
                    onHoverEnd={() => {
                        setIsHover(false)
                        setIsAdding(false)
                    }}

        >
            <AnimatePresence>
                <h1>{groupe.name}</h1>
                <p>nombre : {groupe.person.length}</p>
                <ul>
                    {groupe.person.map((person) => (

                            <NameChip key={person} name={person} groupe={groupe}/>
                    ))}
                    {isHover &&
                        <motion.div
                            className="li"
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0}}>
                            {!isAdding ? (
                                <motion.button
                                    className="input"

                                    onClick={() => setIsAdding(true)}>
                                    +
                                </motion.button>
                            ) : (
                                <motion.input type="text"
                                              className="input"
                                              initial={{opacity: 0, scale: 0}}
                                              animate={{opacity: 1, scale: 1}}
                                              exit={{opacity: 0, scale: 0}}
                                              onKeyDown={(e) => {
                                                  if (e.key === 'Enter') {
                                                      groupe.person.push(e.currentTarget.value);
                                                      context?.dispatch({action: "upsert", value: groupe})
                                                      setIsAdding(false);
                                                  }
                                              }}
                                />
                            )}
                        </motion.div>
                    }
                </ul>

                {isHover && (
                    <motion.button onClick={handleDelete}
                                   className="remove-button"
                                   initial={{opacity: 0, scale: 0}}
                                   animate={{opacity: 1, scale: 1}}
                                   exit={{opacity: 0, scale: 0}}
                    ><GoX/></motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default GroupeView
