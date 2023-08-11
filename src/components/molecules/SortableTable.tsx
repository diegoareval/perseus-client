import styled from 'styled-components'
import {IMember} from "../../interfaces/member.interface"

const StyledSortableTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
  border: 1px solid #ddd;
  margin-bottom: 16px;

  th {
    cursor: pointer;
    padding: 12px 16px;
    text-align: left;
    background-color: #f2f2f2;
    color: #333;
    font-weight: 600;
    border-right: 1px solid #ddd;
  }

  th:last-child {
    border-right: none;
  }

  td {
    padding: 12px 16px;
    border: 1px solid #ddd;
    color: #555;
    border-right: 1px solid #ddd;
    font-size: 14px;
  }

  td:last-child {
    border-right: none;
  }
  tr {
    color: white;
    background-color: #333;
  }
`

interface SortableTableProps {
  headers: (keyof IMember)[]
  data: IMember[]
  onSort: (property: keyof IMember) => void
}

const SortableTable: React.FC<SortableTableProps> = ({
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

export default SortableTable
