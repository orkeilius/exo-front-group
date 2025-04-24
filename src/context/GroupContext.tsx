import {createContext, ReactNode, useReducer} from 'react';
import Groupe from '../types/Groupe';

interface GroupContextProps {
    groups:Groupe[],
    dispatch : React.Dispatch<{ action: "upsert" | "remove"; value: Groupe }>;
}

export const GroupContext = createContext<GroupContextProps | undefined>(undefined);

export const GroupProvider = ({children}: { children: ReactNode }) => {
    const groupsInit = [
        new Groupe('Groupe 3', ['Person 1', 'Person 2']),
        new Groupe('Groupe 2', ['Person 3', 'Person 4']),
        new Groupe('Groupe 1', ['Person 5', 'Person 6']),
    ];


    const groupReducer = (state: Groupe[], {action, value}
    : { action: "upsert" | "remove"; value: Groupe }): Groupe[] => {
        switch (action) {
            case "upsert":
                return state.map(g => g.name === value.name ? value : g);
            case "remove":
                return state.filter(g => g.name !== value.name)
            default:
                return state;
        }
    }

    const [groups, dispatch] = useReducer(groupReducer, groupsInit);

    return (
        <GroupContext.Provider value={{ groups, dispatch }}>
            {children}
        </GroupContext.Provider>
    );
};

