import './styles/globals/App.css'
import UserPage from "./pages/UserPages"
import {HomeContainer, Heading} from "./styles/main"
import { TeamMemberProvider } from './providers/TeamMemberContext';
import Navbar from './components/organisms/Layout';


const App: React.FC = () => {
  return (
    <TeamMemberProvider>
            <Navbar />
    <HomeContainer>
      <Heading>Welcome to Member Management</Heading>
      <UserPage />
    </HomeContainer>
    </TeamMemberProvider>
  );
};

export default App;
