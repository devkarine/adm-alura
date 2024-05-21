import { Rating, useMediaQuery } from '@mui/material';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
`;

const CardEstilizado = styled.div`
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

const ListaItem = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ImagemEstilizada = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: 2px solid #339cff;

  @media (max-width: 600px) {
    width: 46px;
    height: 46px;
  }
`;

interface Profissional {
  id: number;
  imagem: string;
  nome: string;
  especialidade: string;
  nota: number;
}

interface CardProps {
  profissionais: Profissional[];
}

export const Card: React.FC<CardProps> = ({ profissionais }) => {
  const isLargeScreen = useMediaQuery('(min-width:600px)');
  return (
    <Container>
      {profissionais.map(profissional => (
        <CardEstilizado>
          <ListaItem>
            <ImagemEstilizada
              src={profissional.imagem}
              alt={profissional.nome}
            />
            <div>
              <p>{profissional.nome}</p>
              <p>{profissional.especialidade}</p>
            </div>
          </ListaItem>

          <div>
            <Rating
              name="simple-controlled"
              value={profissional.nota}
              readOnly={true}
              size={isLargeScreen ? 'large' : 'medium'}
            />
          </div>
        </CardEstilizado>
      ))}
    </Container>
  );
};
