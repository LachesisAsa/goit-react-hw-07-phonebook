import styled from '@emotion/styled';

export const FormContainer = styled.form`
  background-color: #8c8d7f57;
  width: 300px;
  padding: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #3e4d44;
  border-radius: 10px;
`;

export const Label = styled.label`
  color: #463636;
  font-weight: 700;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 250px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 15px;
  &:placeholder-shown {
    padding: 3px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  display: flex;
  gap: 10px;
  padding: 8px;
  border-radius: 5px;
  background-color: #e7dada;
  font-weight: 700;
  font-size: 14px;
  &:hover,
  &:focus {
    background-color: #a1a1a1;
  }
`;