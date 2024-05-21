import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
`;

export const CardEstilizado = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  font-size: 16px;
  flex: 40%;
  width: 500px;
  height: 96px;
  background-color: #ffffff;
  padding: 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  color: #6b6e71;
  margin: 16px 0;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const ListaItem = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ImagemEstilizada = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: 2px solid #339cff;

  @media (max-width: 600px) {
    width: 46px;
    height: 46px;
  }
`;