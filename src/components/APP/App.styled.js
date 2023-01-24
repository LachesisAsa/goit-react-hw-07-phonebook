import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: centre;
  justify-content: center;
  gap: 30px;
  padding: 30px;
`;

export const TitleForm = styled.h1`
  text-align: center;
  font-size: 34px;
  color: black;
  margin-bottom: 20px;
`;

export const TitleContacts = styled.h2`
  text-align: center;
  font-size: 34px;
  color: black;
  margin-bottom: 25px;
`;

export const ContentBlock = styled.div`
  width: 480px;
  height: 720px;
  background-color: aqua;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  border-radius: 5px;
  padding: 30px;
`;

export const ScrollBar = styled.div`
  height: 420px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;

export const Message = styled.p`
  margin-left: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.52;
`;