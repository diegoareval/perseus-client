import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;



export const HomeContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: auto;
`;

export const Heading = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subheading = styled.h2`
  font-size: 24px;
  color: #666;
  margin-bottom: 5px;
`;

interface ModalProps {
  isOpen: boolean;
}

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
`;

export const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding-left: 20px;
  padding-bottom:15px;
  margin: 25px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: ${props => (props.isOpen ? "block" : "none")};
  min-width: 300px;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px;
  }
  
  @media (max-width: 600px) {
    padding: 10px;
    margin: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;


export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 85%;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const StyledSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 93%;

  @media (max-width: 768px) {
    width: 93%;
  }
`;

