import { useState } from 'react'
import '../../styles/globals/App.css'
import { teamFacade } from '../../services/team-member.service'
import { IMember } from '../../interfaces/member.interface'
import UserTable from '../organisms/UserTable'

export const UsersTemplate = () => {
  const [showActive, setShowActive] = useState(true); // State for toggle
  const [users, setUsers] = useState<IMember[]>(teamFacade.showActiveRecords());

  const loadData = (property?: keyof IMember | null) => {
    const userData: IMember[] = teamFacade.sortAndDisplayByProperty(property)
    setUsers(userData)
  }

  const handleToggle = () => {
    setShowActive(!showActive);
    if (!showActive) {
      setUsers(teamFacade.showActiveRecords());
    } else {
      loadData();
    }
  };

  return (
    <div>
      <h1>User Table</h1>
      <div>
        <label>
          Show Active Users:
          <input
            type="checkbox"
            checked={showActive}
            onChange={handleToggle}
          />
        </label>
      </div>
      <UserTable loadData={loadData} users={users} />
    </div>
  )
}
