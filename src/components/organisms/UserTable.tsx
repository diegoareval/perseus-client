import styled from 'styled-components'
import SortableTable from '../molecules/SortableTable'
import Table from '../atoms/Table'
import { IMember } from '../../interfaces'
const UserTableContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

interface UserTableProps {
  users: IMember[]
  loadData: (property?: keyof IMember | null) => void
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  loadData,
}: UserTableProps) => {
  const headers: (keyof IMember)[] = Object.keys(users[0]) as (keyof IMember)[]

  const handleSort = (property: keyof IMember) => {
    loadData(property)
  }

  return (
    <UserTableContainer>
      <Table>
        <SortableTable headers={headers} data={users} onSort={handleSort} />
      </Table>
    </UserTableContainer>
  )
}

export default UserTable
