import { useState } from 'react';
import { teamFacade } from '../../services/team-member.service';
import { IMember } from '../../interfaces/member.interface';
import UserTable from '../organisms/UserTable';
import { Center } from '../../styles/mixins';
import { Container, ToggleContainer, Subheading } from '../../styles/main';



export const UsersTemplate = () => {
  const [showActive, setShowActive] = useState(true);
  const [users, setUsers] = useState<IMember[]>(teamFacade.showActiveRecords());

  const loadData = (property?: keyof IMember | null, status = showActive) => {
    const userData: IMember[] = teamFacade.sortAndDisplayByProperty(property, status);
    setUsers(userData);
  };

  const handleToggle = () => {
    setShowActive(!showActive);
    loadData(null, !showActive)
  };

  return (
    <Container>
      <Subheading>User Table</Subheading>
      <ToggleContainer>
        <label>
          Show Only Active Users:
          <input type="checkbox" checked={showActive} onChange={handleToggle} />
        </label>
      </ToggleContainer>
      <Center V H>
        <UserTable loadData={loadData} users={users} />
      </Center>
    </Container>
  );
};
