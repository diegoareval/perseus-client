import './styles/globals/App.css'
import UserPage from "./pages/UserPages"
import {HomeContainer, Heading} from "./styles/main"
import { TeamMemberProvider } from './providers/TeamMemberContext';


const App: React.FC = () => {
  return (
    <TeamMemberProvider>
    <HomeContainer>
      <Heading>Welcome to Member Management</Heading>
      <UserPage />
    </HomeContainer>
    </TeamMemberProvider>
  );
};

export default App;
