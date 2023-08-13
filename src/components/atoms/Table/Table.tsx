import { StyledTable } from './Table.styles'

interface TableProps {
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children }: TableProps) => {
  return <StyledTable>{children}</StyledTable>;
};

