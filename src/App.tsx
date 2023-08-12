import './styles/globals/App.css'
import UserPage from "./pages/UserPages"
import {HomeContainer, Heading} from "./styles/main"


const App = () => {
  return (
    <HomeContainer>
      <Heading>Welcome to User Management</Heading>
      <UserPage />
    </HomeContainer>
  );
};

export default App;
