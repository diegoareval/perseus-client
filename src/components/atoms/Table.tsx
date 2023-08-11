import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }: TableProps) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;
