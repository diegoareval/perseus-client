import { IMember } from '../../../interfaces/member.interface';
import { StyledSortableTable } from './SortableTable.styles';

interface SortableTableProps {
  headers: (keyof IMember)[]
  data: IMember[]
  onSort: (property: keyof IMember) => void
}

export const SortableTable: React.FC<SortableTableProps> = ({
  headers,
  data,
  onSort,
}: SortableTableProps) => {
  if (!data.length) {
    return <div>No content</div>
  }
  return (
    <StyledSortableTable>
      <thead>
        <tr>
          {headers.map((header: keyof IMember, index) => (
            <th key={index} onClick={() => onSort(header)}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {headers.map((header, index) => (
              <td key={index}>{item[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledSortableTable>
  )
}

