import { SortableTable } from '../../molecules'
import { Table } from '../../atoms'
import { IMember } from '../../../interfaces'
import { UserTableContainer } from './UserTable.style'


interface UserTableProps {
  users: IMember[]
  loadData: (property?: keyof IMember | null) => void
}

export const UserTable: React.FC<UserTableProps> = ({
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

