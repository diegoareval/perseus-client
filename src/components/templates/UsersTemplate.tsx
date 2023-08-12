import { useState } from 'react'
import { IMember } from '../../interfaces/member.interface'
import {MemberModal, UserTable} from '../organisms'
import { Center } from '../../styles/mixins'
import { Container, ToggleContainer, Subheading } from '../../styles/main'
import { useTeamMemberContext } from '../../hooks'

export const UsersTemplate = () => {
  const [showActive, setShowActive] = useState(true)
  const { users, loadData } = useTeamMemberContext()

  const handleToggle = () => {
    setShowActive(!showActive)
    loadData(null, !showActive)
  }

  const handleLoadData = (property?: keyof IMember | null) => {
    loadData(property, showActive)
  }

  return (
    <Container>
      <Subheading>User Table</Subheading>
      <ToggleContainer>
        <div>
          <label>
            Show Only Active Users:
            <input
              type="checkbox"
              checked={showActive}
              onChange={handleToggle}
            />
          </label>
        </div>
        <MemberModal />
      </ToggleContainer>

      <Center V H>
        <UserTable loadData={handleLoadData} users={users} />
      </Center>
    </Container>
  )
}
