import styled from 'styled-components';

export const StyledSortableTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;
  td,
  th {
    border: none;
  }
  td {
    padding: 5px 10px;
  }
  
  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
      td {
        background-color: lightpink; 
      }
    }
  }
  thead > tr {
    background-color: #c2c2c2;
    cursor: pointer;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    font-size: 12px; /* Reduce font size in responsive mode */
  }
`;