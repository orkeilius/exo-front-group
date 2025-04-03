import ListGroup from "./components/ListGroup.tsx";
import './styles/App.scss'
import CreateGroup from "./components/CreateGroup.tsx";
import { GroupProvider } from "./context/GroupContext.tsx";

function App() {

  return (
    <GroupProvider>
        <CreateGroup/>
        <ListGroup/>
    </GroupProvider>
  )
}

export default App
