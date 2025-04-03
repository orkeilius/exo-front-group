import ListGroup from "./components/ListGroup.tsx";
import './styles/App.scss'
import CreateGroup from "./components/CreateGroup.tsx";
import {GroupProvider} from "./context/GroupContext.tsx";
import { LayoutGroup } from "motion/react"


function App() {

    return (
        <GroupProvider>
            <LayoutGroup>


                <CreateGroup/>
                <ListGroup/>
            </LayoutGroup>
        </GroupProvider>
    )
}

export default App
