import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  width: 100%;
  background-color: #f8f8f8;
`;

export const ToggleContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;